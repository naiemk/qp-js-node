"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFeeStore__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "txId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "btcAmount",
                type: "uint256",
            },
        ],
        name: "swapBtcWithFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IFeeStore__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.IFeeStore__factory = IFeeStore__factory;
IFeeStore__factory.abi = _abi;
