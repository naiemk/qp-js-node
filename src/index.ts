import dotenv from '@dotenvx/dotenvx';
import { CliConfig, Config, sleep } from './contracts';
import { ethers } from 'ethers';
import { mine } from './miner';
import { finalize } from './finalizer';
import fs from 'fs';
import { getTxLogs } from './tx-logs';
dotenv.config();

import { log } from './contracts';
import SystemLock from './system-lock';

const helpArg = process.argv.find((arg) => arg.startsWith('--help'));
if (helpArg) {
  console.log(`Usage: node index.js [--chainId=<chainId>] [--t=<txhash>] [--loop=true]`);
  process.exit(0);
}

const loopForeverArg = process.argv.find((arg) => arg.startsWith('--loop='));
const loopForever = loopForeverArg ? loopForeverArg.split('=')[1] : undefined;
const chainIdArg = process.argv.find((arg) => arg.startsWith('--chainId='));
const chainId = chainIdArg ? Number(chainIdArg.split('=')[1]) : undefined;
const cliConfig: CliConfig = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
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
  log.info(`${new Date().toISOString()}: Processing chain ${Config.chainId}. Role: ${Config.role}`);
  const txArg = process.argv.find((arg) => arg.startsWith('--tx='));
  if (txArg) {
    if (!chainId) {
      console.error('CHAIN_ID is not set. Use --chainId=<chainId>');
      process.exit(1);
    }
    Config.chainId = chainId;
    const txHash = txArg.split('=')[1];
    return await getTxLogs(txHash);
  }

  if (Config.role === 'miner' || Config.role === 'finalizer') {
    log.info(`with wallet ${await Config.wallet?.getAddress?.()}.`);
    do {
      for (const [srcChainId, targetChainId] of cliConfig.pairs) {
        if (chainId && srcChainId !== chainId) {
          continue;
        }
        Config.chainId = srcChainId;
        log.info(`${new Date().toISOString()}: Processing chain ${srcChainId} => ${targetChainId}`);
        const targetProvider = new ethers.JsonRpcProvider(proviers[targetChainId]);
        Config.targetWallet = new ethers.Wallet(Config.walletSk, targetProvider);
        if (Config.role === 'miner') {
          log.info('******* MINING *********')
          try {
            SystemLock.waitForLock();
            await mine(targetChainId);
            if (loopForever === 'true') { await sleep(15000); }
          } catch (e) {
            log.error('Error mining', e);
          } finally {
            SystemLock.releaseLock();
          }
        } else if (Config.role === 'finalizer') {
          log.info('******* FINALIZING *********')
          try {
            SystemLock.waitForLock();
            await finalize(targetChainId);
            if (loopForever === 'true') { await sleep(30000); }
          } catch (e) {
            log.error('Error finalizing', e);
          } finally {
            SystemLock.releaseLock();
          }
        }
      }
    } while (loopForever === 'true');
  }
}

main().catch((e) => {
  console.error('Error', e);
});
