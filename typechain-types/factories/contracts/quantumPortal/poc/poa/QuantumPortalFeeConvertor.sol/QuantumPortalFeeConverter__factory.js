"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantumPortalFeeConverter__factory = void 0;
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "AdminSet",
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
        inputs: [],
        name: "VERSION",
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
        name: "admin",
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
        name: "feePerByte",
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
        name: "localChainGasTokenPriceX128",
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
        name: "networkFeeWrappedToken",
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
        name: "qpFeeToken",
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
                name: "_admin",
                type: "address",
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
                internalType: "uint256",
                name: "targetChainId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "targetChainFixedFee",
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
                internalType: "uint256",
                name: "targetChainId",
                type: "uint256",
            },
        ],
        name: "targetChainGasTokenPriceX128",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "targetNetworkFeeTokens",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fpb",
                type: "uint256",
            },
        ],
        name: "updateFeePerByte",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "updatePrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5033806200003957604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000448162000111565b506000806000336001600160a01b0316638eb36e3d6040518163ffffffff1660e01b81526004016000604051808303816000875af11580156200008b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b5919081019062000177565b806020019051810190620000ca919062000269565b600380546001600160a01b039485166001600160a01b03199182161790915560028054938516938216939093179092556004805491909316911617905550620002b3915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200018b57600080fd5b82516001600160401b0380821115620001a357600080fd5b818501915085601f830112620001b857600080fd5b815181811115620001cd57620001cd62000161565b604051601f8201601f19908116603f01168101908382118183101715620001f857620001f862000161565b8160405282815288868487010111156200021157600080fd5b600093505b8284101562000235578484018601518185018701529285019262000216565b600086848301015280965050505050505092915050565b80516001600160a01b03811681146200026457600080fd5b919050565b6000806000606084860312156200027f57600080fd5b6200028a846200024c565b92506200029a602085016200024c565b9150620002aa604085016200024c565b90509250925092565b610a9f80620002c36000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063f2fde38b11610066578063f2fde38b146101eb578063f60bbe2a146101fe578063f851a44014610207578063ffa1ad741461021a57600080fd5b80638da5cb5b146101ac57806394e2ddd0146101bd578063aa6fff73146101d0578063c25cddbe146101d857600080fd5b8063673a7e28116100d3578063673a7e2814610160578063704b6c0214610168578063715018a61461017b5780637d136ca01461018357600080fd5b80632ee43e62146100fa5780635e6c8c6c1461012a57806361f456c41461013f575b600080fd5b60025461010d906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61013d61013836600461088d565b61024b565b005b61015261014d3660046108a6565b6102b4565b604051908152602001610121565b61013d6102f4565b61013d6101763660046108c8565b6103e9565b61013d610445565b61010d61019136600461088d565b6005602052600090815260409020546001600160a01b031681565b6000546001600160a01b031661010d565b60035461010d906001600160a01b031681565b610152610459565b6101526101e636600461088d565b6105c0565b61013d6101f93660046108c8565b6105cb565b61015260065481565b60015461010d906001600160a01b031681565b61023e60405180604001604052806005815260200164302e302e3160d81b81525081565b604051610121919061093e565b6001546001600160a01b031633148061026e57506000546001600160a01b031633145b6102af5760405162461bcd60e51b815260206004820152600d60248201526c2ba09d103737ba1030b236b4b760991b60448201526064015b60405180910390fd5b600655565b6000806102c084610609565b9050600160801b60065484836102d69190610951565b6102e09190610951565b6102ea9190610976565b9150505b92915050565b604080516002808252606082018352600092602083019080368337505060035482519293506001600160a01b03169183915060009061033557610335610998565b6001600160a01b03928316602091820292909201015260025482519116908290600190811061036657610366610998565b6001600160a01b039283166020918202929092010152600480546040516306250ec560e21b81529216916318943b14916103a2918591016109ae565b6020604051808303816000875af11580156103c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e591906109fb565b5050565b6103f161079f565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c9060200160405180910390a150565b61044d61079f565b61045760006107cc565b565b60408051600280825260608201835260009283929190602083019080368337505060035482519293506001600160a01b03169183915060009061049e5761049e610998565b6001600160a01b0392831660209182029290920101526002548251911690829060019081106104cf576104cf610998565b60200260200101906001600160a01b031690816001600160a01b03168152505061054a604051806040016040528060048152602001632820a4a960e11b8152508260008151811061052257610522610998565b60200260200101518360018151811061053d5761053d610998565b602002602001015161081c565b60048054604051633cc1df0160e21b81526001600160a01b039091169163f3077c0491610579918591016109ae565b602060405180830381865afa158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba9190610a1d565b91505090565b60006102ee82610609565b6105d361079f565b6001600160a01b0381166105fd57604051631e4fbdf760e01b8152600060048201526024016102a6565b610606816107cc565b50565b6000818152600560205260408120546001600160a01b03168061066e5760405162461bcd60e51b815260206004820152601b60248201527f515046433a204e6f2074617267657420636861696e20746f6b656e000000000060448201526064016102a6565b60408051600280825260608201835260009260208301908036833701905050905081816000815181106106a3576106a3610998565b6001600160a01b0392831660209182029290920101526002548251911690829060019081106106d4576106d4610998565b60200260200101906001600160a01b031690816001600160a01b031681525050610727604051806040016040528060048152602001632820a4a960e11b8152508260008151811061052257610522610998565b60048054604051633cc1df0160e21b81526001600160a01b039091169163f3077c0491610756918591016109ae565b602060405180830381865afa158015610773573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107979190610a1d565b949350505050565b6000546001600160a01b031633146104575760405163118cdaa760e01b81523360048201526024016102a6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61086383838360405160240161083493929190610a36565b60408051601f198184030181529190526020810180516001600160e01b03166307e763af60e51b179052610868565b505050565b6106068160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b60006020828403121561089f57600080fd5b5035919050565b600080604083850312156108b957600080fd5b50508035926020909101359150565b6000602082840312156108da57600080fd5b81356001600160a01b03811681146108f157600080fd5b9392505050565b6000815180845260005b8181101561091e57602081850181015186830182015201610902565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006108f160208301846108f8565b80820281158282048414176102ee57634e487b7160e01b600052601160045260246000fd5b60008261099357634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156109ef5783516001600160a01b0316835292840192918401916001016109ca565b50909695505050505050565b600060208284031215610a0d57600080fd5b815180151581146108f157600080fd5b600060208284031215610a2f57600080fd5b5051919050565b606081526000610a4960608301866108f8565b6001600160a01b039485166020840152929093166040909101529291505056fea2646970667358221220e67e61f410e0889e1dea292ea545636c75025233c33f602887229d7482e8977b64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class QuantumPortalFeeConverter__factory extends ethers_1.ContractFactory {
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
exports.QuantumPortalFeeConverter__factory = QuantumPortalFeeConverter__factory;
QuantumPortalFeeConverter__factory.bytecode = _bytecode;
QuantumPortalFeeConverter__factory.abi = _abi;
