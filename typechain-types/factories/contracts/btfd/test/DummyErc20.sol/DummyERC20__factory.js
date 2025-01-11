"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyERC20__factory = void 0;
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "allowance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "needed",
                type: "uint256",
            },
        ],
        name: "ERC20InsufficientAllowance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "balance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "needed",
                type: "uint256",
            },
        ],
        name: "ERC20InsufficientBalance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "approver",
                type: "address",
            },
        ],
        name: "ERC20InvalidApprover",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "ERC20InvalidReceiver",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "ERC20InvalidSender",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "ERC20InvalidSpender",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
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
                name: "account",
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "burnFrom",
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020016444756d6d7960d81b8152506040518060400160405280600381526020016211135560ea1b81525081600390816200005d9190620002ad565b5060046200006c8282620002ad565b5050506200008b3369d3c21bcecceda10000006200009160201b60201c565b620003a1565b6001600160a01b038216620000c15760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000cf60008383620000d3565b5050565b6001600160a01b03831662000102578060026000828254620000f6919062000379565b90915550620001769050565b6001600160a01b03831660009081526020819052604090205481811015620001575760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000b8565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200019457600280548290039055620001b3565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001f991815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200023157607f821691505b6020821081036200025257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a8576000816000526020600020601f850160051c81016020861015620002835750805b601f850160051c820191505b81811015620002a4578281556001016200028f565b5050505b505050565b81516001600160401b03811115620002c957620002c962000206565b620002e181620002da84546200021c565b8462000258565b602080601f831160018114620003195760008415620003005750858301515b600019600386901b1c1916600185901b178555620002a4565b600085815260208120601f198616915b828110156200034a5788860151825594840194600190910190840162000329565b5085821015620003695787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200039b57634e487b7160e01b600052601160045260246000fd5b92915050565b6107c480620003b16000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100df57806323b872dd146100f1578063313ce5671461010457806342966c681461011357806370a082311461012857806379cc67901461015157806395d89b4114610164578063a9059cbb1461016c578063dd62ed3e1461017f575b600080fd5b6100a6610192565b6040516100b391906105bf565b60405180910390f35b6100cf6100ca36600461062a565b610224565b60405190151581526020016100b3565b6002545b6040519081526020016100b3565b6100cf6100ff366004610654565b61023e565b604051601281526020016100b3565b610126610121366004610690565b610262565b005b6100e36101363660046106a9565b6001600160a01b031660009081526020819052604090205490565b61012661015f36600461062a565b61026f565b6100a6610288565b6100cf61017a36600461062a565b610297565b6100e361018d3660046106cb565b6102a5565b6060600380546101a1906106fe565b80601f01602080910402602001604051908101604052809291908181526020018280546101cd906106fe565b801561021a5780601f106101ef5761010080835404028352916020019161021a565b820191906000526020600020905b8154815290600101906020018083116101fd57829003601f168201915b5050505050905090565b6000336102328185856102d0565b60019150505b92915050565b60003361024c8582856102e2565b61025785858561033e565b506001949350505050565b61026c338261039d565b50565b61027a8233836102e2565b610284828261039d565b5050565b6060600480546101a1906106fe565b60003361023281858561033e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102dd83838360016103d3565b505050565b60006102ee84846102a5565b90506000198114610338578181101561032957828183604051637dc7a0d960e11b815260040161032093929190610738565b60405180910390fd5b610338848484840360006103d3565b50505050565b6001600160a01b038316610368576000604051634b637e8f60e11b81526004016103209190610759565b6001600160a01b03821661039257600060405163ec442f0560e01b81526004016103209190610759565b6102dd8383836104a8565b6001600160a01b0382166103c7576000604051634b637e8f60e11b81526004016103209190610759565b610284826000836104a8565b6001600160a01b0384166103fd57600060405163e602df0560e01b81526004016103209190610759565b6001600160a01b038316610427576000604051634a1406b160e11b81526004016103209190610759565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561033857826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049a91815260200190565b60405180910390a350505050565b6001600160a01b0383166104d35780600260008282546104c8919061076d565b909155506105329050565b6001600160a01b038316600090815260208190526040902054818110156105135783818360405163391434e360e21b815260040161032093929190610738565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661054e5760028054829003905561056d565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105b291815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156105ed578581018301518582016040015282016105d1565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461062557600080fd5b919050565b6000806040838503121561063d57600080fd5b6106468361060e565b946020939093013593505050565b60008060006060848603121561066957600080fd5b6106728461060e565b92506106806020850161060e565b9150604084013590509250925092565b6000602082840312156106a257600080fd5b5035919050565b6000602082840312156106bb57600080fd5b6106c48261060e565b9392505050565b600080604083850312156106de57600080fd5b6106e78361060e565b91506106f56020840161060e565b90509250929050565b600181811c9082168061071257607f821691505b60208210810361073257634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b039390931683526020830191909152604082015260600190565b6001600160a01b0391909116815260200190565b8082018082111561023857634e487b7160e01b600052601160045260246000fdfea2646970667358221220e6e778f0daf2fbf8e0196f647ccf779991fe71a8131afe41599e904963e11dd664736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class DummyERC20__factory extends ethers_1.ContractFactory {
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
exports.DummyERC20__factory = DummyERC20__factory;
DummyERC20__factory.bytecode = _bytecode;
DummyERC20__factory.abi = _abi;
