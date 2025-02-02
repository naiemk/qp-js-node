"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IQuantumPortalWorkPoolServer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "targetChainId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "localEpoch",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "fixedFee",
                type: "uint256",
            },
        ],
        name: "collectFee",
        outputs: [
            {
                internalType: "uint256",
                name: "varFee",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "workRatioX128",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "epoch",
                type: "uint256",
            },
        ],
        name: "withdrawFixedRemote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "workRatioX128",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "epoch",
                type: "uint256",
            },
        ],
        name: "withdrawVariableRemote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IQuantumPortalWorkPoolServer__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IQuantumPortalWorkPoolServer__factory = IQuantumPortalWorkPoolServer__factory;
IQuantumPortalWorkPoolServer__factory.abi = _abi;
