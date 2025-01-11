"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenvx_1 = __importDefault(require("@dotenvx/dotenvx"));
const contracts_1 = require("./contracts");
const ethers_1 = require("ethers");
const miner_1 = require("./miner");
const finalizer_1 = require("./finalizer");
const fs_1 = __importDefault(require("fs"));
const tx_logs_1 = require("./tx-logs");
dotenvx_1.default.config();
const contracts_2 = require("./contracts");
const system_lock_1 = __importDefault(require("./system-lock"));
const helpArg = process.argv.find((arg) => arg.startsWith('--help'));
if (helpArg) {
    console.log(`Usage: node index.js [--chainId=<chainId>] [--t=<txhash>] [--loop=true]`);
    process.exit(0);
}
const loopForeverArg = process.argv.find((arg) => arg.startsWith('--loop='));
const loopForever = loopForeverArg ? loopForeverArg.split('=')[1] : undefined;
const chainIdArg = process.argv.find((arg) => arg.startsWith('--chainId='));
const chainId = chainIdArg ? Number(chainIdArg.split('=')[1]) : undefined;
const cliConfig = JSON.parse(fs_1.default.readFileSync('./config.json', 'utf8'));
contracts_1.Config.role = cliConfig.role;
contracts_1.Config.ledgerMgr = cliConfig.ledgerMgr;
contracts_1.Config.explorerApi = cliConfig.explorerApi;
contracts_1.Config.walletSk = process.env.PRIVATE_KEY;
if (!contracts_1.Config.role) {
    throw new Error('ROLE is not set. Set it in config.json');
}
if (!contracts_1.Config.ledgerMgr) {
    throw new Error('LEDGER_MGR is not set. Set it in config.json');
}
const proviers = JSON.parse(fs_1.default.readFileSync('./providers.json', 'utf8'));
function setProvider(chainId) {
    if (!proviers[chainId]) {
        throw new Error(`Provider for chain ${chainId} is not set`);
    }
    const provider = new ethers_1.ethers.JsonRpcProvider(proviers[chainId]);
    contracts_1.Config.provider = provider;
    if (contracts_1.Config.walletSk) {
        contracts_1.Config.wallet = new ethers_1.ethers.Wallet(contracts_1.Config.walletSk, provider);
    }
}
async function main() {
    contracts_2.log.info(`${new Date().toISOString()}: Processing chain ${contracts_1.Config.chainId}. Role: ${contracts_1.Config.role}`);
    const txArg = process.argv.find((arg) => arg.startsWith('--tx='));
    if (txArg) {
        if (!chainId) {
            console.error('CHAIN_ID is not set. Use --chainId=<chainId>');
            process.exit(1);
        }
        contracts_1.Config.chainId = chainId;
        const txHash = txArg.split('=')[1];
        return await (0, tx_logs_1.getTxLogs)(txHash);
    }
    if (contracts_1.Config.role === 'miner' || contracts_1.Config.role === 'finalizer') {
        contracts_2.log.info(`with wallet ${await contracts_1.Config.wallet?.getAddress?.()}.`);
        do {
            for (const [srcChainId, targetChainId] of cliConfig.pairs) {
                if (chainId && srcChainId !== chainId) {
                    continue;
                }
                contracts_1.Config.chainId = srcChainId;
                setProvider(srcChainId);
                contracts_2.log.info(`${new Date().toISOString()}: Processing chain ${srcChainId} => ${targetChainId}`);
                const targetProvider = new ethers_1.ethers.JsonRpcProvider(proviers[targetChainId]);
                contracts_1.Config.targetWallet = new ethers_1.ethers.Wallet(contracts_1.Config.walletSk, targetProvider);
                if (contracts_1.Config.role === 'miner') {
                    contracts_2.log.info('******* MINING *********');
                    try {
                        system_lock_1.default.waitForLock();
                        await (0, miner_1.mine)(targetChainId);
                        if (loopForever === 'true') {
                            await (0, contracts_1.sleep)(15000);
                        }
                    }
                    catch (e) {
                        contracts_2.log.error('Error mining', e);
                    }
                    finally {
                        system_lock_1.default.releaseLock();
                    }
                }
                else if (contracts_1.Config.role === 'finalizer') {
                    contracts_2.log.info('******* FINALIZING *********');
                    try {
                        system_lock_1.default.waitForLock();
                        await (0, finalizer_1.finalize)(targetChainId);
                        if (loopForever === 'true') {
                            await (0, contracts_1.sleep)(30000);
                        }
                    }
                    catch (e) {
                        contracts_2.log.error('Error finalizing', e);
                    }
                    finally {
                        system_lock_1.default.releaseLock();
                    }
                }
            }
        } while (loopForever === 'true');
    }
}
main().catch((e) => {
    console.error('Error', e);
});
