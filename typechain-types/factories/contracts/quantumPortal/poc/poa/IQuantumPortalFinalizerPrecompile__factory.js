"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQuantumPortalFinalizerPrecompile__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "finalizer",
                type: "address",
            },
        ],
        name: "registerFinalizer",
        outputs: [],
        stateMutability: "nonpayable",
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
                name: "finalizer",
                type: "address",
            },
        ],
        name: "removeFinalizer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IQuantumPortalFinalizerPrecompile__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IQuantumPortalFinalizerPrecompile__factory = IQuantumPortalFinalizerPrecompile__factory;
IQuantumPortalFinalizerPrecompile__factory.abi = _abi;