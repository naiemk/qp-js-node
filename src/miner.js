"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mine = mine;
const contracts_1 = require("./contracts");
const eip712utils_1 = require("./eip712utils");
async function generateSignatureForMining(targetChainId, nonce, txs) {
    const mgr = await contracts_1.Contracts.ledgerMgr(contracts_1.Config.targetWallet);
    const minerMgr = await contracts_1.Contracts.minerMgr(contracts_1.Config.targetWallet);
    const msgHash = await mgr.calculateBlockHash(contracts_1.Config.chainId, nonce, txs);
    contracts_1.log.info('Msg Hash for :', {
        chainId: contracts_1.Config.chainId,
        nonce,
        txs
    }, 'is: ', msgHash);
    const expiry = (0, contracts_1.expiryInFuture)().toString();
    const salt = (0, contracts_1.randomSalt)();
    // Verify with a miner that has no stakes
    const multiSig = await (0, eip712utils_1.eip712MethodCall)(await minerMgr.NAME(), await minerMgr.VERSION(), targetChainId, minerMgr.target.toString(), 'MinerSignature', [
        { type: 'bytes32', name: 'msgHash', value: msgHash },
        { type: 'uint64', name: 'expiry', value: expiry },
        { type: 'bytes32', name: 'salt', value: salt },
    ], [contracts_1.Config.walletSk]);
    return [salt, expiry, multiSig.signature];
}
async function mine(targetChainId) {
    const mgr = await contracts_1.Contracts.ledgerMgr();
    const targetMgr = await contracts_1.Contracts.ledgerMgr(contracts_1.Config.targetWallet);
    const lastMinedBlock = await targetMgr.getLastMinedBlock(contracts_1.Config.chainId);
    contracts_1.log.info('Last mined block: ', lastMinedBlock.nonce, `(@${lastMinedBlock.length}). Getting next block on source`);
    const nonce = lastMinedBlock.nonce + 1n;
    const res = await mgr.localBlockByNonce(targetChainId, nonce);
    if (!res) {
        contracts_1.log.error('Error calling: mgr.localBlockByNonce');
        return;
    }
    const [nextLocalBlock, localTxs] = res;
    if (nextLocalBlock[0].chainId === 0n) {
        contracts_1.log.warn('Local block with nonce', nonce, 'is not ready');
        return;
    }
    // let key = (await mgr.getBlockIdx(targetChainId, nonce)).toString();
    // const txLen = await mgr.getLocalBlockTransactionLength(key);
    if (localTxs.length === 0) {
        contracts_1.log.warn('No transactions found for block', nonce);
        return;
    }
    // log.debug('Tx len for block', key, 'is', txLen.toString());
    // let localTxs = await mgr.getLocalBlockTransactions(key);
    const txs = localTxs.map((tx) => ({
        token: tx.token.toString(),
        amount: tx.amount.toString(),
        gas: tx.gas.toString(),
        fixedFee: tx.fixedFee.toString(),
        methods: tx.methods.length ? [tx.methods[0].toString()] : [],
        remoteContract: tx.remoteContract.toString(),
        sourceBeneficiary: tx.sourceBeneficiary.toString(),
        sourceMsgSender: tx.sourceMsgSender.toString(),
        timestamp: tx.timestamp.toString(),
    }));
    const [salt, expiry, signature] = await generateSignatureForMining(targetChainId, nonce.toString(), txs);
    const tx = await targetMgr.mineRemoteBlock(contracts_1.Config.chainId, nonce.toString(), txs, salt, expiry, signature, targetChainId == 26100 ? { gasLimit: 12000000 } : {});
    contracts_1.log.info(`>>>> ${new Date().toISOString()} - ${targetChainId} - MINE:`, tx?.hash);
    await tx.wait();
}
