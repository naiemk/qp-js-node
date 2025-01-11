import { Config, Contracts, expiryInFuture, randomSalt } from "./contracts";
import { eip712MethodCall } from "./eip712utils";

async function generateSignatureForMining(
    targetChainId: number,
    nonce: string,
    txs: any,
) {
  const mgr = await Contracts.ledgerMgr(Config.targetWallet!);
  const minerMgr = await Contracts.minerMgr(Config.targetWallet!);
  const msgHash = await mgr.calculateBlockHash(
      Config.chainId,
      nonce,
      txs);
  console.log('Msg Hash for :', {
      chainId:Config.chainId,
      nonce,
      txs
  }, 'is: ', msgHash);
  const expiry = expiryInFuture().toString();
  const salt = randomSalt();
  // Verify with a miner that has no stakes
  const multiSig = await eip712MethodCall(
      await minerMgr.NAME(),
      await minerMgr.VERSION(),
      targetChainId,
      minerMgr.target.toString(),
      'MinerSignature',
      [
          { type: 'bytes32', name: 'msgHash', value: msgHash},
          { type: 'uint64', name: 'expiry', value: expiry},
          { type: 'bytes32', name: 'salt', value: salt},
      ],
      [Config.walletSk]
  );
  return [salt, expiry, multiSig.signature!];
}


export async function mine(targetChainId: number) {
  const mgr = await Contracts.ledgerMgr();
  const targetMgr = await Contracts.ledgerMgr(Config.targetWallet!);
  const lastMinedBlock = await targetMgr.getLastMinedBlock(Config.chainId);
  console.log('Last mined block: ', lastMinedBlock.nonce, `(@${lastMinedBlock.length}). Getting next block on source`);
  const nonce = lastMinedBlock.nonce + 1n;

  const res = await mgr.localBlockByNonce(targetChainId, nonce);
  if (!res) {
    console.log('Errro calling: mgr.localBlockByNonce');
    return;
  }

  const [nextLocalBlock, localTxs] = res;
  if (nextLocalBlock[0].chainId === 0n) {
    console.log('Local block with nonce', nonce, 'is not ready');
    return;
  }
  // let key = (await mgr.getBlockIdx(targetChainId, nonce)).toString();
  // const txLen = await mgr.getLocalBlockTransactionLength(key);
  if (localTxs.length === 0) {
    console.log('No transactions found for block', nonce);
    return;
  }
  // console.log('Tx len for block', key, 'is', txLen.toString());
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

  const [salt, expiry, signature] = await generateSignatureForMining(
    targetChainId,
    nonce.toString(),
    txs,
  );

  const tx = await targetMgr.mineRemoteBlock(
      Config.chainId,
      nonce.toString(),
      txs,
      salt,
      expiry,
      signature,
      targetChainId == 26100 ? { gasLimit: 12000000 } : {}
  );
  console.log(`>>>> ${new Date().toISOString()} - ${targetChainId} - MINE:`, tx?.hash);
}
