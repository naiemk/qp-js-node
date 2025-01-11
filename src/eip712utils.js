"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainSeparator = domainSeparator;
exports.fixSig = fixSig;
exports.produceSignature = produceSignature;
exports.signWithPrivateKey = signWithPrivateKey;
exports.multiSigToBytes = multiSigToBytes;
exports.eip712MethodCall = eip712MethodCall;
const ethereumjs_util_1 = require("ethereumjs-util");
const ethers_1 = require("ethers");
function domainSeparator(contractName, contractVersion, netId, contractAddress) {
    const hashedName = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(contractName));
    const hashedVersion = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(contractVersion));
    const typeHash = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"));
    const abiCoder = new ethers_1.ethers.AbiCoder();
    return ethers_1.ethers.keccak256(abiCoder.encode(['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'], [typeHash, hashedName, hashedVersion, netId, contractAddress]));
}
function fixSig(sig) {
    const rs = sig.substring(0, sig.length - 2);
    let v = sig.substring(sig.length - 2);
    if (v === '00' || v === '37' || v === '25') {
        v = '1b';
    }
    else if (v === '01' || v === '38' || v === '26') {
        v = '1c';
    }
    return rs + v;
}
function produceSignature(netId, contractAddress, eipParams) {
    const methodSig = `${eipParams.method}(${eipParams.args.map(p => `${p.type} ${p.name}`).join(',')})`;
    const methodHash = ethers_1.ethers.keccak256(ethers_1.ethers.toUtf8Bytes(methodSig));
    const params = ['bytes32'].concat(eipParams.args.map(p => p.type));
    // console.log('methodSig: ', methodSig, params, methodHash);
    const abiCoder = new ethers_1.ethers.AbiCoder();
    // console.log('abi', [methodHash, ...eipParams.args.map(p => p.value)]);
    const structure = abiCoder.encode(params, [methodHash, ...eipParams.args.map(p => p.value)]);
    const structureHash = ethers_1.ethers.keccak256(Buffer.from(structure.replace('0x', ''), 'hex'));
    const ds = domainSeparator(eipParams.contractName, eipParams.contractVersion, netId, contractAddress);
    // console.log('Method hash is ', methodHash, methodSig);
    // console.log('Structure hash is ', structureHash, {params});
    // console.log('values area', [methodHash, ...eipParams.args.map(p => p.value)]);
    // console.log('Domain separator is ', ds);
    // console.log('Chain ID is', netId);
    const hash = ethers_1.ethers.solidityPackedKeccak256(["string", "bytes32", "bytes32"], ["\x19\x01", ds, structureHash]);
    // console.log('***hash', hash, hash2);
    return { ...eipParams, hash, signature: '' };
}
async function signWithPrivateKey(privateKey, hash) {
    const hashBuf = Buffer.from(hash.replace('0x', ''), 'hex');
    const sigP2 = (0, ethereumjs_util_1.ecsign)(hashBuf, Buffer.from(privateKey.replace('0x', ''), 'hex'));
    const sig = fixSig((0, ethereumjs_util_1.toRpcSig)(sigP2.v, sigP2.r, sigP2.s));
    const recovered = (0, ethereumjs_util_1.ecrecover)(hashBuf, sigP2.v, sigP2.r, sigP2.s);
    const addr = (0, ethereumjs_util_1.pubToAddress)(recovered).toString('hex');
    // console.log('     Signed with address', addr)
    return { sig, addr };
}
function multiSigToBytes(sigs) {
    let sig = '';
    let vs = '';
    for (let i = 0; i < sigs.length; i++) {
        const rsv = (0, ethereumjs_util_1.fromRpcSig)(sigs[i]);
        sig = sig + `${rsv.r.toString('hex')}${rsv.s.toString('hex')}`;
        vs = vs + rsv.v.toString(16);
    }
    const padding = (vs.length % 64) === 0 ? 0 : 64 - (vs.length % 64);
    vs = vs + '0'.repeat(padding);
    sig = sig + vs;
    return '0x' + sig;
}
async function eip712MethodCall(contractName, contractVersion, chainId, contract, methodName, args, sks) {
    // console.log('We are going to bridge method call it ', contractName, contractVersion, methodName, chainId, args)
    const msg = produceSignature(chainId, contract, {
        contractName: contractName,
        contractVersion: contractVersion,
        method: methodName,
        args,
    });
    // console.log('About to producing msg ', msg)
    const sigs = [];
    for (const sk of sks) {
        // console.log(`    About to sign with private key ${sk}`);
        const { sig, addr } = await signWithPrivateKey(sk, msg.hash);
        sigs.push({ sig, addr });
    }
    // Make sure that signatures are in the order of the signer address
    sigs.sort((s1, s2) => Buffer.from(s2.addr.replace('0x', ''), 'hex') < Buffer.from(s1.addr.replace('0x', ''), 'hex') ? 1 : -1);
    const fullSig = multiSigToBytes(sigs.map(s => s.sig));
    // console.log('    Full signature is hash: ', msg.hash, 'sig:', fullSig);
    msg.signature = fullSig;
    return msg;
}
