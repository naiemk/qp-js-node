import { keccak256, AbiCoder } from "ethers";
import { Config, Contracts, expiryInFuture, randomSalt } from "./contracts";
import { eip712MethodCall } from "./eip712utils";

const abi = new AbiCoder();

export async function finalize(targetChainId: number) {
  const mgr = await Contracts.ledgerMgr(Config.targetWallet!);
  const block = await mgr.lastRemoteMinedBlock(Config.chainId);
  const lastFin = await mgr.getLastFinalizedBlock(Config.chainId);
  console.log('Last mined block is', block);
  console.log('Last finalized block is', lastFin);
  const blockNonce = Number(block.nonce);
  const fin = Number(lastFin.nonce);
  if (blockNonce > fin) {
      console.log(`Calling mgr.finalize(${Config.chainId}, ${blockNonce.toString()})`);
      const expiry = expiryInFuture().toString();
      const salt = randomSalt();
      const FINALIZE_METHOD = 
          keccak256(
              Buffer.from("Finalize(uint256 remoteChainId,uint256 blockNonce,uint256[] invalidBlockNonces,bytes32 salt,uint64 expiry)", 'utf-8')
          );
      const msgHash = keccak256(abi.encode(['bytes32', 'uint256', 'uint256', 'uint256[]', 'bytes32', 'uint64'],
          [FINALIZE_METHOD, Config.chainId, blockNonce, [], salt, expiry]));
      console.log('Fin method msgHash', msgHash);
      
      const authority = await Contracts.authorityMgr();
      const name = await authority.NAME();
      const version = await authority.VERSION();
      // Create the signature for the authority mgr contract
      let multiSig = await eip712MethodCall(
          name, version, targetChainId,
          authority.target.toString(),
          'ValidateAuthoritySignature',
          [
              { type: 'uint256', name: 'action', value: '1' },
              { type: 'bytes32', name: 'msgHash', value: msgHash },
              { type: 'bytes32', name:'salt', value: salt},
              { type: 'uint64', name: 'expiry', value: expiry },
          ]
          , [Config.walletSk]);
      console.log("Returned from eip712MethodCall", multiSig.hash, name, version);
      // TODO: Validate blocks
      const gas = await mgr.finalize.estimateGas(Config.chainId,
          blockNonce,
          [] as any, // invalidBlocks,
          salt,
          expiry,
          multiSig.signature!,
          );
      console.log("Gas required to finalize is:", gas.toString());
      const tx = await mgr.finalize(Config.chainId,
          blockNonce,
          [] as any, // invalidBlocks,
          salt,
          expiry,
          multiSig.signature!,
          { gasLimit: 12000000 }
          );
        console.log(`>>>> ${new Date().toISOString()} - ${targetChainId} - FINALIZE:`, tx?.hash);
  } else {
      console.log('Nothing to finalize...')
  }
}