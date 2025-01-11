"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStakingV2Upgradeable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "AddressEmptyCode",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "AddressInsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "FailedInnerCall",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidInitialization",
        type: "error",
    },
    {
        inputs: [],
        name: "NotInitializing",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "OwnableInvalidOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyGuardReentrantCall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "SafeERC20FailedOperation",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountPaid",
                type: "uint256",
            },
        ],
        name: "BasePaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "version",
                type: "uint64",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "rewardToken",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "rewardAmount",
                type: "uint256",
            },
        ],
        name: "RewardAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "rewardTokens",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "rewards",
                type: "uint256[]",
            },
        ],
        name: "RewardPaid",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "tokenAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "Staked",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "admins",
        outputs: [
            {
                internalType: "enum StakingBasics.AdminRole",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "allowedRewardTokenList",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "rewardToken",
                type: "address",
            },
        ],
        name: "allowedRewardTokens",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "baseToken",
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
        name: "creationSigner",
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
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "staker",
                type: "address",
            },
            {
                internalType: "address",
                name: "rewardToken",
                type: "address",
            },
        ],
        name: "fakeRewardOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "rewardToken",
                type: "address",
            },
        ],
        name: "fakeRewardsTotal",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "isTokenizable",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "lockSeconds",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "rewardAddress",
                type: "address",
            },
        ],
        name: "rewardsTotal",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "admin",
                type: "address",
            },
            {
                internalType: "enum StakingBasics.AdminRole",
                name: "role",
                type: "uint8",
            },
        ],
        name: "setAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_signer",
                type: "address",
            },
        ],
        name: "setCreationSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_lockSeconds",
                type: "uint256",
            },
        ],
        name: "setLockSeconds",
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
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "stake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
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
                name: "id",
                type: "address",
            },
            {
                internalType: "address",
                name: "staker",
                type: "address",
            },
        ],
        name: "stakeOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
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
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "allocation",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "allocatorSignature",
                type: "bytes",
            },
        ],
        name: "stakeWithAllocation",
        outputs: [
            {
                internalType: "uint256",
                name: "",
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
                name: "id",
                type: "address",
            },
        ],
        name: "stakedBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "stakings",
        outputs: [
            {
                components: [
                    {
                        internalType: "enum Staking.StakeType",
                        name: "stakeType",
                        type: "uint8",
                    },
                    {
                        internalType: "bool",
                        name: "restrictedRewards",
                        type: "bool",
                    },
                    {
                        internalType: "uint32",
                        name: "contribStart",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "contribEnd",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "endOfLife",
                        type: "uint32",
                    },
                    {
                        internalType: "uint32",
                        name: "configHardCutOff",
                        type: "uint32",
                    },
                    {
                        internalType: "uint16",
                        name: "flags",
                        type: "uint16",
                    },
                ],
                internalType: "struct StakingBasics.StakeInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
        ],
        name: "sweepBase",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "id",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "rewardTokens",
                type: "address[]",
            },
        ],
        name: "sweepRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class BaseStakingV2Upgradeable__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.BaseStakingV2Upgradeable__factory = BaseStakingV2Upgradeable__factory;
BaseStakingV2Upgradeable__factory.abi = _abi;
