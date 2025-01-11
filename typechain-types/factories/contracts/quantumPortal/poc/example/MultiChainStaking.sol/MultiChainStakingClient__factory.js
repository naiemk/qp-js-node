"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiChainStakingClient__factory = void 0;
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
        inputs: [
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
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
        ],
        name: "stake",
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
const _bytecode = "0x6080604052610a2860055534801561001657600080fd5b50338061003d57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61004681610058565b50600180556100536100a8565b610273565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080336001600160a01b0316638eb36e3d6040518163ffffffff1660e01b81526004016000604051808303816000875af11580156100eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101139190810190610170565b8060200190518101906101269190610239565b600380546001600160a01b0319166001600160a01b0384161790559250905081156101515781610153565b465b6002555050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561018357600080fd5b82516001600160401b038082111561019a57600080fd5b818501915085601f8301126101ae57600080fd5b8151818111156101c0576101c061015a565b604051601f8201601f19908116603f011681019083821181831017156101e8576101e861015a565b81604052828152888684870101111561020057600080fd5b600093505b828410156102225784840186015181850187015292850192610205565b600086848301015280965050505050505092915050565b6000806040838503121561024c57600080fd5b82516001600160a01b038116811461026357600080fd5b6020939093015192949293505050565b610894806102826000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c80630c51b88f146100935780632a3a236f146100a85780634ae3a5d6146100bb5780636425666b146100ce57806364494fdf146100f7578063715018a61461010e57806385e1f4d0146101165780638da5cb5b1461011f578063cd446e2214610130578063f2fde38b14610143575b600080fd5b6100a66100a13660046106e0565b610156565b005b6100a66100b6366004610713565b610258565b6100a66100c936600461072e565b610282565b6003546100e1906001600160a01b031681565b6040516100ee9190610747565b60405180910390f35b61010060055481565b6040519081526020016100ee565b6100a661028f565b61010060025481565b6000546001600160a01b03166100e1565b6004546100e1906001600160a01b031681565b6100a6610151366004610713565b6102a3565b60035461017090849033906001600160a01b0316856102e1565b6000036101ba5760405162461bcd60e51b8152602060048201526013602482015272139bdd1a1a5b99c81d1c985b9cd9995c9c9959606a1b60448201526064015b60405180910390fd5b6040805160048082526024820183526020820180516001600160e01b03166303183e7360e41b1790526003546005548254945163801c6d1560e01b815293946001600160a01b039283169463801c6d159461022094929092169133918b9189910161077f565b600060405180830381600087803b15801561023a57600080fd5b505af115801561024e573d6000803e3d6000fd5b5050505050505050565b610260610456565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b61028a610456565b600555565b610297610456565b6102a16000610483565b565b6102ab610456565b6001600160a01b0381166102d5576000604051631e4fbdf760e01b81526004016101b19190610747565b6102de81610483565b50565b600080856001600160a01b03166370a08231856040518263ffffffff1660e01b81526004016103109190610747565b602060405180830381865afa15801561032d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035191906107e6565b90506103686001600160a01b0387168686866104d3565b6040516370a0823160e01b81526000906001600160a01b038816906370a0823190610397908890600401610747565b602060405180830381865afa1580156103b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d891906107e6565b90506103e482826107ff565b92508383111561044c5760405162461bcd60e51b815260206004820152602d60248201527f53413a2061637475616c20616d6f756e74206c6172676572207468616e20747260448201526c185b9cd9995c88185b5bdd5b9d609a1b60648201526084016101b1565b5050949350505050565b6000546001600160a01b031633146102a1573360405163118cdaa760e01b81526004016101b19190610747565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261052d908590610533565b50505050565b60006105486001600160a01b03841683610592565b9050805160001415801561056d57508080602001905181019061056b9190610820565b155b1561058d5782604051635274afe760e01b81526004016101b19190610747565b505050565b60606105a0838360006105a9565b90505b92915050565b6060814710156105ce573060405163cd78605960e01b81526004016101b19190610747565b600080856001600160a01b031684866040516105ea9190610842565b60006040518083038185875af1925050503d8060008114610627576040519150601f19603f3d011682016040523d82523d6000602084013e61062c565b606091505b509150915061063c868383610648565b925050505b9392505050565b60608261065d576106588261069b565b610641565b815115801561067457506001600160a01b0384163b155b156106945783604051639996b31560e01b81526004016101b19190610747565b5080610641565b8051156106ab5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80356001600160a01b03811681146106db57600080fd5b919050565b6000806000606084860312156106f557600080fd5b6106fe846106c4565b95602085013595506040909401359392505050565b60006020828403121561072557600080fd5b6105a0826106c4565b60006020828403121561074057600080fd5b5035919050565b6001600160a01b0391909116815260200190565b60005b8381101561077657818101518382015260200161075e565b50506000910152565b67ffffffffffffffff86168152600060018060a01b038087166020840152808616604084015280851660608401525060a0608083015282518060a08401526107ce8160c085016020870161075b565b601f01601f19169190910160c0019695505050505050565b6000602082840312156107f857600080fd5b5051919050565b818103818111156105a357634e487b7160e01b600052601160045260246000fd5b60006020828403121561083257600080fd5b8151801515811461064157600080fd5b6000825161085481846020870161075b565b919091019291505056fea26469706673582212204595b61a2f667ab42b89faf6078d8312d7fd6b5cee8add5a0619e8d89f53b87c64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class MultiChainStakingClient__factory extends ethers_1.ContractFactory {
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
exports.MultiChainStakingClient__factory = MultiChainStakingClient__factory;
MultiChainStakingClient__factory.bytecode = _bytecode;
MultiChainStakingClient__factory.abi = _abi;
