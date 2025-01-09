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
  const isBlRead = await mgr.isLocalBlockReady(Config.chainId);
  console.log('Local block is ready? ', isBlRead);

  const lastLocalBlock = await mgr.getLastLocalBlock(targetChainId);
  const nonce = !lastLocalBlock.nonce ? 0 : lastLocalBlock.nonce;
  let key = (await mgr.getBlockIdx(targetChainId, nonce)).toString();
  const txLen = await mgr.getLocalBlockTransactionLength(key);
  if (txLen === 0n) {
    console.log('No transactions found for block', key);
    return;
  }
  console.log('Tx len for block', key, 'is', txLen.toString());
  let localTxs = await mgr.getLocalBlockTransactions(key);
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

  const tx = await (await Contracts.ledgerMgr(Config.targetWallet!)).mineRemoteBlock(
      Config.chainId,
      nonce.toString(),
      txs,
      salt,
      expiry,
      signature,
      { gasLimit: 12000000 }
  );
  console.log(`>>>> ${new Date().toISOString()} - ${targetChainId} - MINE:`, tx?.hash);
}
