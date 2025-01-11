"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalize = finalize;
const ethers_1 = require("ethers");
const contracts_1 = require("./contracts");
const eip712utils_1 = require("./eip712utils");
const abi = new ethers_1.AbiCoder();
async function finalize(targetChainId) {
    const mgr = await contracts_1.Contracts.ledgerMgr(contracts_1.Config.targetWallet);
    const block = await mgr.lastRemoteMinedBlock(contracts_1.Config.chainId);
    const lastFin = await mgr.getLastFinalizedBlock(contracts_1.Config.chainId);
    contracts_1.log.info('Last mined block is', block);
    contracts_1.log.info('Last finalized block is', lastFin);
    const blockNonce = Number(block.nonce);
    const fin = Number(lastFin.nonce);
    if (blockNonce > fin) {
        contracts_1.log.info(`Calling mgr.finalize(${contracts_1.Config.chainId}, ${blockNonce.toString()})`);
        const expiry = (0, contracts_1.expiryInFuture)().toString();
        const salt = (0, contracts_1.randomSalt)();
        const FINALIZE_METHOD = (0, ethers_1.keccak256)(Buffer.from("Finalize(uint256 remoteChainId,uint256 blockNonce,uint256[] invalidBlockNonces,bytes32 salt,uint64 expiry)", 'utf-8'));
        const msgHash = (0, ethers_1.keccak256)(abi.encode(['bytes32', 'uint256', 'uint256', 'uint256[]', 'bytes32', 'uint64'], [FINALIZE_METHOD, contracts_1.Config.chainId, blockNonce, [], salt, expiry]));
        contracts_1.log.info('Fin method msgHash', msgHash);
        const authority = await contracts_1.Contracts.authorityMgr();
        const name = await authority.NAME();
        const version = await authority.VERSION();
        // Create the signature for the authority mgr contract
        let multiSig = await (0, eip712utils_1.eip712MethodCall)(name, version, targetChainId, authority.target.toString(), 'ValidateAuthoritySignature', [
            { type: 'uint256', name: 'action', value: '1' },
            { type: 'bytes32', name: 'msgHash', value: msgHash },
            { type: 'bytes32', name: 'salt', value: salt },
            { type: 'uint64', name: 'expiry', value: expiry },
        ], [contracts_1.Config.walletSk]);
        contracts_1.log.info("Returned from eip712MethodCall", multiSig.hash, name, version);
        // TODO: Validate blocks
        const gas = await mgr.finalize.estimateGas(contracts_1.Config.chainId, blockNonce, [], // invalidBlocks,
        salt, expiry, multiSig.signature);
        contracts_1.log.info("Gas required to finalize is:", gas.toString());
        const tx = await mgr.finalize(contracts_1.Config.chainId, blockNonce, [], // invalidBlocks,
        salt, expiry, multiSig.signature, targetChainId == 26100 ? { gasLimit: 12000000 } : {});
        contracts_1.log.info(`>>>> ${new Date().toISOString()} - ${targetChainId} - FINALIZE:`, tx?.hash);
        await tx.wait();
    }
    else {
        contracts_1.log.info('Nothing to finalize...');
    }
}
