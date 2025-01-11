"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQuantumPortalPoc__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "feeTarget",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "feeToken",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "localTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "msgSender",
        outputs: [
            {
                internalType: "uint256",
                name: "sourceNetwork",
                type: "uint256",
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
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "remoteTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "remoteMethodCall",
                type: "bytes",
            },
        ],
        name: "run",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "method",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "runFromToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "method",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "runFromTokenNativeFee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "remoteMethodCall",
                type: "bytes",
            },
        ],
        name: "runNativeFee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
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
                internalType: "bytes",
                name: "method",
                type: "bytes",
            },
        ],
        name: "runWithValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChain",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteContract",
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
                internalType: "bytes",
                name: "method",
                type: "bytes",
            },
        ],
        name: "runWithValueNativeFee",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "remoteChainId",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "remoteAddress",
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
        ],
        name: "runWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "txContext",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint64",
                        name: "index",
                        type: "uint64",
                    },
                    {
                        components: [
                            {
                                internalType: "uint64",
                                name: "chainId",
                                type: "uint64",
                            },
                            {
                                internalType: "uint64",
                                name: "nonce",
                                type: "uint64",
                            },
                            {
                                internalType: "uint64",
                                name: "timestamp",
                                type: "uint64",
                            },
                        ],
                        internalType: "struct QuantumPortalLib.Block",
                        name: "blockMetadata",
                        type: "tuple",
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
                        internalType: "struct QuantumPortalLib.RemoteTransaction",
                        name: "transaction",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "uncommitedBalance",
                        type: "uint256",
                    },
                ],
                internalType: "struct QuantumPortalLib.Context",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IQuantumPortalPoc__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IQuantumPortalPoc__factory = IQuantumPortalPoc__factory;
IQuantumPortalPoc__factory.abi = _abi;