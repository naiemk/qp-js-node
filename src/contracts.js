"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contracts = exports.Config = exports.sleep = exports.CONSOLE_LOGGER = exports.log = void 0;
exports.expiryInFuture = expiryInFuture;
exports.randomSalt = randomSalt;
const ethers_1 = require("ethers");
const typechain_types_1 = require("../typechain-types");
const winston_1 = __importDefault(require("winston"));
exports.log = winston_1.default.createLogger({
    format: winston_1.default.format.simple(),
    transports: [
        new winston_1.default.transports.File({ filename: process.env.LOG_FILE || './logs/ops.log' }),
    ]
});
exports.CONSOLE_LOGGER = winston_1.default.createLogger({
    format: winston_1.default.format.simple(),
    transports: [
        new winston_1.default.transports.Console()
    ]
});
const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));
exports.sleep = sleep;
exports.Config = {
    role: null,
    ledgerMgr: '',
    wallet: null,
    provider: null,
    targetWallet: null,
    walletSk: '',
    chainId: 0,
    explorerApi: {},
    globalLockFilePath: ''
};
function expiryInFuture() {
    return Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1; // 1 day
}
function randomSalt() {
    return '0x' + Buffer.from(ethers_1.ethers.randomBytes(32)).toString('hex');
}
class Contracts {
    static async ledgerMgr(wallet = exports.Config.wallet) {
        // console.log('ledgerMgr', (await wallet.provider!.getNetwork()).chainId);
        return typechain_types_1.QuantumPortalLedgerMgrImplUpgradeable__factory.connect(exports.Config.ledgerMgr, wallet);
    }
    static async minerMgr(wallet = exports.Config.wallet) {
        const mgr = await Contracts.ledgerMgr(wallet);
        const mineAddress = await mgr.minerMgr();
        return typechain_types_1.QuantumPortalMinerMgrUpgradeable__factory.connect(mineAddress, wallet);
    }
    static async authorityMgr(wallet = exports.Config.wallet) {
        const mgr = await Contracts.ledgerMgr(wallet);
        const authorityAddress = await mgr.authorityMgr();
        return typechain_types_1.QuantumPortalAuthorityMgrUpgradeable__factory.connect(authorityAddress, wallet);
    }
}
exports.Contracts = Contracts;
;
