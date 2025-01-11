import {ecsign, toRpcSig, fromRpcSig, ecrecover, pubToAddress} from 'ethereumjs-util';
import { ethers } from 'ethers';

type HexString  = string;

export interface Eip712Params {
    contractName: string;
    contractVersion: string;
    method: string;
    args: { type: string, name: string, value: string }[],
    hash?: HexString;
    signature?: HexString;
}

export function domainSeparator(
	contractName: string,
	contractVersion: string,
	netId: number,
	contractAddress: HexString
) {
    const hashedName = ethers.keccak256(ethers.toUtf8Bytes(contractName));
    const hashedVersion = ethers.keccak256(ethers.toUtf8Bytes(contractVersion));
    const typeHash = ethers.keccak256(
        ethers.toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"));
	  const abiCoder = new ethers.AbiCoder();
    return ethers.keccak256(
        abiCoder.encode(
            ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
            [typeHash, hashedName, hashedVersion, netId, contractAddress]
        )
    );
}

export function fixSig(sig: HexString) {
    const rs = sig.substring(0, sig.length - 2);
    let v = sig.substring(sig.length - 2);
    if (v === '00' || v ==='37' || v === '25') {
        v = '1b'
        } else if (v === '01' || v === '38' || v === '26') {
        v = '1c'
    }
    return rs+v;
}

export function produceSignature(
        netId: number,
        contractAddress: HexString,
        eipParams: Eip712Params): Eip712Params {
    const methodSig = `${eipParams.method}(${eipParams.args.map(p => `${p.type} ${p.name}`).join(',')})`
    const methodHash = ethers.keccak256(ethers.toUtf8Bytes(methodSig));

    const params = ['bytes32'].concat(eipParams.args.map(p => p.type));
	  // console.log('methodSig: ', methodSig, params, methodHash);
	  const abiCoder = new ethers.AbiCoder();
    // console.log('abi', [methodHash, ...eipParams.args.map(p => p.value)]);
    const structure = abiCoder.encode(params, [methodHash, ...eipParams.args.map(p => p.value)]);
    const structureHash = ethers.keccak256(Buffer.from(structure.replace('0x', ''), 'hex'));
    const ds = domainSeparator(eipParams.contractName, eipParams.contractVersion, netId, contractAddress);
	// console.log('Method hash is ', methodHash, methodSig);
	// console.log('Structure hash is ', structureHash, {params});
    // console.log('values area', [methodHash, ...eipParams.args.map(p => p.value)]);
	// console.log('Domain separator is ', ds);
    // console.log('Chain ID is', netId);
    const hash = ethers.solidityPackedKeccak256(["string", "bytes32", "bytes32"], ["\x19\x01", ds, structureHash]) as HexString;
    const hash2 = ethers.keccak256(
      ethers.concat([ethers.toUtf8Bytes("\x19\x01"), Buffer.from(ds.replace('0x', ''), 'hex'), Buffer.from(structureHash.replace('0x', ''), 'hex')])
    ) as HexString;
		// console.log('***hash', hash, hash2);
    return {...eipParams, hash, signature: ''};
}

export async function signWithPrivateKey(
	privateKey: HexString,
	hash: HexString,
) {
	const hashBuf = Buffer.from(hash!.replace('0x',''), 'hex');
	const sigP2 = ecsign(
		hashBuf,
		Buffer.from(privateKey.replace('0x',''), 'hex'),);
	const sig = fixSig(toRpcSig(sigP2.v, sigP2.r, sigP2.s));
	const recovered = ecrecover(hashBuf, sigP2.v, sigP2.r, sigP2.s);
	const addr = pubToAddress(recovered).toString('hex');
	// console.log('     Signed with address', addr)
	return {sig, addr};
}

export function multiSigToBytes(sigs: string[]): string {
	let sig: string = '';
	let vs: string = '';
	for (let i = 0; i<sigs.length; i++) {
		const rsv = fromRpcSig(sigs[i]);
		sig = sig + `${rsv.r.toString('hex')}${rsv.s.toString('hex')}`;
		vs = vs + rsv.v.toString(16);
	}
	const padding = (vs.length % 64) === 0 ? 0 : 64 - (vs.length % 64);
	vs = vs + '0'.repeat(padding);
	sig = sig + vs;
	return '0x' + sig;
}

interface Signature {
    sig: string;
    addr: string;
}

export async function eip712MethodCall(
		contractName: string,
		contractVersion: string,
		chainId: number,
		contract: string,
		methodName: string,
		args: {type: string, name: string, value: string}[], sks: string[]) {
	// console.log('We are going to bridge method call it ', contractName, contractVersion, methodName, chainId, args)
	const msg = produceSignature(
		chainId, contract, {
			contractName: contractName,
			contractVersion: contractVersion,
			method: methodName,
			args,
		} as Eip712Params,
	);
	// console.log('About to producing msg ', msg)
	const sigs: Signature[] = [];
	for (const sk of sks) {
		// console.log(`    About to sign with private key ${sk}`);
		const {sig, addr} = await signWithPrivateKey(sk, msg.hash!);
		sigs.push({sig, addr});
	}
    // Make sure that signatures are in the order of the signer address
  sigs.sort((s1, s2) => Buffer.from(s2.addr.replace('0x', ''), 'hex') < Buffer.from(s1.addr.replace('0x', ''), 'hex') ? 1 : -1);
	const fullSig = multiSigToBytes(sigs.map(s => s.sig));
	// console.log('    Full signature is hash: ', msg.hash, 'sig:', fullSig);
	msg.signature = fullSig;
	return msg;
}