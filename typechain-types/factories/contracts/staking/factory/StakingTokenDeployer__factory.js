"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingTokenDeployer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "parameters",
        outputs: [
            {
                internalType: "address",
                name: "factory",
                type: "address",
            },
            {
                internalType: "address",
                name: "stakingPoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "stakingPoolId",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class StakingTokenDeployer__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.StakingTokenDeployer__factory = StakingTokenDeployer__factory;
StakingTokenDeployer__factory.abi = _abi;
