"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQuantumPortalLedgerMgr__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "msgSender",
                type: "address",
            },
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "method",
                type: "bytes",
            },
        ],
        name: "registerTransaction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "minedOnChainId",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "localBlockNonce",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "localBlockTimestamp",
                type: "uint64",
            },
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "timestamp",
                        type: "uint64",
                    },
                    {
                        internalType: "address",
                        name: "remoteContract",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sourceMsgSender",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "sourceBeneficiary",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes[]",
                        name: "methods",
                        type: "bytes[]",
                    },
                    {
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "fixedFee",
                        type: "uint256",
                    },
                ],
                internalType: "struct QuantumPortalLib.RemoteTransaction[]",
                name: "transactions",
                type: "tuple[]",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "bytes",
                name: "multiSignature",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "rewardReceiver",
                type: "address",
            },
        ],
        name: "submitFraudProof",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IQuantumPortalLedgerMgr__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IQuantumPortalLedgerMgr__factory = IQuantumPortalLedgerMgr__factory;
IQuantumPortalLedgerMgr__factory.abi = _abi;
