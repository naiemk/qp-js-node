"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MitlChainToken2Client__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
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
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "CHAIN_ID",
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
        inputs: [],
        name: "MASTER_CHAIN_ID",
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
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "balanceOf",
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
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterContract",
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
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
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
        name: "portal",
        outputs: [
            {
                internalType: "contract IQuantumPortalPoc",
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
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "setMasterChainId",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_masterContract",
                type: "address",
            },
        ],
        name: "setMasterContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
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
const _bytecode = "0x60806040526002805460ff19166012179055610a28600b553480156200002457600080fd5b5033806200004c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000057816200006d565b50600160075562000067620000bf565b6200029f565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080336001600160a01b0316638eb36e3d6040518163ffffffff1660e01b81526004016000604051808303816000875af115801562000103573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012d91908101906200018e565b80602001905181019062000142919062000263565b600980546001600160a01b0319166001600160a01b0384161790559250905081156200016f578162000171565b465b6008555050565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a257600080fd5b82516001600160401b0380821115620001ba57600080fd5b818501915085601f830112620001cf57600080fd5b815181811115620001e457620001e462000178565b604051601f8201601f19908116603f011681019083821181831017156200020f576200020f62000178565b8160405282815288868487010111156200022857600080fd5b600093505b828410156200024c57848401860151818501870152928501926200022d565b600086848301015280965050505050505092915050565b600080604083850312156200027757600080fd5b82516001600160a01b03811681146200028f57600080fd5b6020939093015192949293505050565b610b3280620002af6000396000f3fe608060405234801561001057600080fd5b506004361061010c5760003560e01c806370a082311161009d57806370a08231146101ff578063715018a61461021f57806385e1f4d0146102275780638da5cb5b1461023057806395d89b41146102415780639dc29fac14610249578063a9059cbb1461025c578063cd446e221461026f578063dd62ed3e14610282578063f2fde38b146102ad57600080fd5b806306fdde0314610111578063095ea7b31461012f57806318160ddd1461015257806323b872dd146101695780632a3a236f1461017c578063313ce5671461019157806340c10f19146101b05780634ae3a5d6146101c35780636425666b146101d657806364494fdf146101f6575b600080fd5b6101196102c0565b60405161012691906108a3565b60405180910390f35b61014261013d366004610907565b61034e565b6040519015158152602001610126565b61015b60035481565b604051908152602001610126565b610142610177366004610933565b610365565b61018f61018a366004610974565b6103fa565b005b60025461019e9060ff1681565b60405160ff9091168152602001610126565b61018f6101be366004610907565b610424565b61018f6101d1366004610998565b6104f6565b6009546101e9906001600160a01b031681565b60405161012691906109b1565b61015b600b5481565b61015b61020d366004610974565b60046020526000908152604090205481565b61018f610503565b61015b60085481565b6006546001600160a01b03166101e9565b610119610517565b61018f610257366004610907565b610524565b61014261026a366004610907565b6105e7565b600a546101e9906001600160a01b031681565b61015b6102903660046109c5565b600560209081526000928352604080842090915290825290205481565b61018f6102bb366004610974565b6105f4565b600080546102cd906109fe565b80601f01602080910402602001604051908101604052809291908181526020018280546102f9906109fe565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b505050505081565b600061035b338484610632565b5060015b92915050565b6001600160a01b0383166000908152600560209081526040808320338452909152812054600019146103e5576001600160a01b03841660009081526005602090815260408083203384529091529020546103c0908390610a4e565b6001600160a01b03851660009081526005602090815260408083203384529091529020555b6103f0848484610694565b5060019392505050565b61040261072a565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600080600960009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa15801561047a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049e9190610a61565b5091509150600b54821480156104c15750600a546001600160a01b038281169116145b6104e65760405162461bcd60e51b81526004016104dd90610aa4565b60405180910390fd5b6104f08484610757565b50505050565b6104fe61072a565b600b55565b61050b61072a565b61051560006107d7565b565b600180546102cd906109fe565b600080600960009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa15801561057a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e9190610a61565b5091509150600b54821480156105c15750600a546001600160a01b038281169116145b6105dd5760405162461bcd60e51b81526004016104dd90610aa4565b6104f08484610829565b600061035b338484610694565b6105fc61072a565b6001600160a01b038116610626576000604051631e4fbdf760e01b81526004016104dd91906109b1565b61062f816107d7565b50565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166000908152600460205260409020546106b8908290610a4e565b6001600160a01b0380851660009081526004602052604080822093909355908416815220546106e8908290610ac9565b6001600160a01b038084166000818152600460205260409081902093909355915190851690600080516020610add833981519152906106879085815260200190565b6006546001600160a01b03163314610515573360405163118cdaa760e01b81526004016104dd91906109b1565b806003546107659190610ac9565b6003556001600160a01b03821660009081526004602052604090205461078c908290610ac9565b6001600160a01b038316600081815260046020526040808220939093559151909190600080516020610add833981519152906107cb9085815260200190565b60405180910390a35050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03821660009081526004602052604090205461084d908290610a4e565b6001600160a01b038316600090815260046020526040902055600354610874908290610a4e565b6003556040518181526000906001600160a01b03841690600080516020610add833981519152906020016107cb565b60006020808352835180602085015260005b818110156108d1578581018301518582016040015282016108b5565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461062f57600080fd5b6000806040838503121561091a57600080fd5b8235610925816108f2565b946020939093013593505050565b60008060006060848603121561094857600080fd5b8335610953816108f2565b92506020840135610963816108f2565b929592945050506040919091013590565b60006020828403121561098657600080fd5b8135610991816108f2565b9392505050565b6000602082840312156109aa57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b600080604083850312156109d857600080fd5b82356109e3816108f2565b915060208301356109f3816108f2565b809150509250929050565b600181811c90821680610a1257607f821691505b602082108103610a3257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561035f5761035f610a38565b600080600060608486031215610a7657600080fd5b835192506020840151610a88816108f2565b6040850151909250610a99816108f2565b809150509250925092565b6020808252600b908201526a139bdd08185b1b1bddd95960aa1b604082015260600190565b8082018082111561035f5761035f610a3856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212200da665833541ab23599682345e8a3a6d354d6e2c0491db2c3392af7d4dd2cdda64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class MitlChainToken2Client__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.MitlChainToken2Client__factory = MitlChainToken2Client__factory;
MitlChainToken2Client__factory.bytecode = _bytecode;
MitlChainToken2Client__factory.abi = _abi;
