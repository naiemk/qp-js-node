import dotenv from '@dotenvx/dotenvx';
import { CliConfig, Config } from './contracts';
import { ethers } from 'ethers';
import { mine } from './miner';
import { finalize } from './finalizer';
import fs from 'fs';
import { getTxLogs } from './tx-logs';
dotenv.config();

const chainIdArg = process.argv.find((arg) => arg.startsWith('--chainId='));
if (!chainIdArg) {
  throw new Error('CHAIN_ID is not set. Use --chainId=<chainId>');
}
const cliConfig: CliConfig = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
Config.chainId = Number(chainIdArg.split('=')[1]);
Config.role = cliConfig.role;
Config.ledgerMgr = cliConfig.ledgerMgr;
Config.explorerApi = cliConfig.explorerApi;
Config.walletSk = process.env.PRIVATE_KEY!;

if (!Config.role) {
  throw new Error('ROLE is not set. Set it in config.json');
}

if (!Config.ledgerMgr) {
  throw new Error('LEDGER_MGR is not set. Set it in config.json');
}

if (!Config.chainId) {
  throw new Error('CHAIN_ID is not set. Use --chainId=<chainId>');
}

const proviers = JSON.parse(fs.readFileSync('./providers.json', 'utf8'));
if (!proviers[Config.chainId]) {
  throw new Error(`Provider for chain ${Config.chainId} is not set`);
}

const provider = new ethers.JsonRpcProvider(proviers[Config.chainId]);
Config.provider = provider;

if (Config.walletSk) {
  Config.wallet = new ethers.Wallet(Config.walletSk, provider);
}

async function main() {
  console.log(`${new Date().toISOString()}: Processing chain ${Config.chainId}. Role: ${Config.role}`);
  const txArg = process.argv.find((arg) => arg.startsWith('--tx='));
  if (txArg) {
    const txHash = txArg.split('=')[1];
    return await getTxLogs(txHash);
  }

  if (Config.role === 'miner' || Config.role === 'finalizer') {
    console.log(`with wallet ${await Config.wallet?.getAddress?.()}.`);
    for (const [srcChainId, targetChainId] of cliConfig.pairs) {
      if (srcChainId === Config.chainId) {
        console.log(`${new Date().toISOString()}: Processing chain ${srcChainId} => ${targetChainId}`);
        const targetProvider = new ethers.JsonRpcProvider(proviers[targetChainId]);
        Config.targetWallet = new ethers.Wallet(Config.walletSk, targetProvider);
        if (Config.role === 'miner') {
          console.log('******* MINING *********')
          await mine(targetChainId);
        } else if (Config.role === 'finalizer') {
          console.log('******* FINALIZING *********')
          await finalize(targetChainId);
        }
      }
    }
  }
}

main().catch((e) => {
  console.error('Error', e);
});
