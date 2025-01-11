"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrmFeeManager__factory = void 0;
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
        inputs: [
            {
                internalType: "address",
                name: "caller",
                type: "address",
            },
        ],
        name: "allowTrustedCaller",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "univ2Oracle",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isDefault",
                type: "bool",
            },
        ],
        name: "allowUniV2Oracle",
        outputs: [],
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
        name: "balances",
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
        ],
        name: "deposit",
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
                name: "",
                type: "address",
            },
        ],
        name: "inventory",
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
        inputs: [
            {
                internalType: "address",
                name: "user",
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
        name: "payFee",
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
        name: "priceOracles",
        outputs: [
            {
                internalType: "address",
                name: "univ2Oracle",
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
                name: "univ2Oracle",
                type: "address",
            },
            {
                internalType: "address[]",
                name: "pricePath",
                type: "address[]",
            },
        ],
        name: "registerPriceOracle",
        outputs: [],
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
        name: "registeredOracles",
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
                name: "caller",
                type: "address",
            },
        ],
        name: "removeTrusterCaller",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "univ2Oracle",
                type: "address",
            },
        ],
        name: "removeUniV2Oracle",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "sweep",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "trustedCallers",
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
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506001600055338061003c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100458161004b565b5061009d565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6117d2806100ac6000396000f3fe608060405234801561001057600080fd5b50600436106101015760003560e01c80638da5cb5b1161009d5780638da5cb5b146101ff578063a9c85bab14610207578063ae3d22ff1461021a578063b5fd282a1461023d578063e4362b231461025d578063f2fde38b14610280578063f340fa0114610293578063f54b7469146102a6578063f851a440146102b9578063fc8aae0d146102cc57600080fd5b8063013745181461010657806301681a62146101455780630adfcd811461015a57806322c7f2021461017d57806327e235e3146101905780632e1a7d4d146101be57806348c6157b146101d1578063704b6c02146101e4578063715018a6146101f7575b600080fd5b61012f6101143660046114de565b6004602052600090815260409020546001600160a01b031681565b60405161013c91906114f9565b60405180910390f35b6101586101533660046114de565b6102df565b005b61016d61016836600461150d565b610380565b604051901515815260200161013c565b61015861018b3660046114de565b6106e1565b6101b061019e3660046114de565b60056020526000908152604090205481565b60405190815260200161013c565b6101586101cc366004611549565b61070d565b6101586101df366004611562565b61079d565b6101586101f23660046114de565b6109e7565b610158610a45565b61012f610a59565b6101586102153660046114de565b610a68565b61016d6102283660046114de565b60076020526000908152604090205460ff1681565b6101b061024b3660046114de565b60016020526000908152604090205481565b61016d61026b3660046114de565b60066020526000908152604090205460ff1681565b61015861028e3660046114de565b610ad6565b6101b06102a13660046114de565b610b14565b6101586102b43660046115f6565b610b67565b60035461012f906001600160a01b031681565b6101586102da3660046114de565b610bfe565b6003546001600160a01b031633148061031057506102fb610a59565b6001600160a01b0316336001600160a01b0316145b6103355760405162461bcd60e51b815260040161032c9061162d565b60405180910390fd5b600080805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc805491905560085461037c906001600160a01b03168383610c6c565b5050565b60006001600160a01b0384166103cd5760405162461bcd60e51b81526020600482015260126024820152711191934e881d5cd95c881c995c5d5c9a595960721b604482015260640161032c565b6001600160a01b0383166104195760405162461bcd60e51b81526020600482015260136024820152721191934e881d1bdad95b881c995c5d5c9a5959606a1b604482015260640161032c565b3360009081526007602052604090205460ff166104725760405162461bcd60e51b81526020600482015260176024820152761191934e8818d85b1b195c881b9bdd08185b1b1bddd959604a1b604482015260640161032c565b81600003610482575060016106da565b6001600160a01b0380841660009081526004602052604090205416806104ac5760009150506106da565b6001600160a01b03841660009081526004602090815260408083206001018054825181850281018501909352808352919290919083018282801561051957602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104fb575b50505050509050846001600160a01b03168160008151811061053d5761053d611654565b60200260200101516001600160a01b0316146105955760405162461bcd60e51b81526020600482015260176024820152761191934e88125b9d985b1a59081c185d1a081cdd185c9d604a1b604482015260640161032c565b60095481516001600160a01b039091169082906105b490600190611680565b815181106105c4576105c4611654565b60200260200101516001600160a01b03161461061a5760405162461bcd60e51b81526020600482015260156024820152741191934e88125b9d985b1a59081c185d1a08195b99605a1b604482015260640161032c565b6000806106278787610cce565b915091508061063d5760009450505050506106da565b6001600160a01b0388166000908152600560205260409020548281101561066c576000955050505050506106da565b600080805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc80548592906106a7908490611693565b909155506106b790508382611680565b6001600160a01b038a166000908152600560205260409020555060019450505050505b9392505050565b6106e9610d56565b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b33600090815260056020526040902054808210156107675760405162461bcd60e51b815260206004820152601760248201527646464d3a206e6f7420656e6f7567682062616c616e636560481b604482015260640161032c565b6107718282611680565b3360008181526005602052604090209190915560085461037c916001600160a01b039091169084610c6c565b6003546001600160a01b03163314806107ce57506107b9610a59565b6001600160a01b0316336001600160a01b0316145b6107ea5760405162461bcd60e51b815260040161032c9061162d565b6009546001600160a01b03168282610803600182611680565b81811061081257610812611654565b905060200201602081019061082791906114de565b6001600160a01b0316146108905760405162461bcd60e51b815260206004820152602a60248201527f46464d3a207072696365506174682073686f756c6420656e6420696e206c70206044820152693130b9b2903a37b5b2b760b11b606482015260840161032c565b6001600160a01b03831660009081526006602052604090205460ff166108f25760405162461bcd60e51b81526020600482015260176024820152761191934e881bdc9858db19481b9bdd08185b1b1bddd959604a1b604482015260640161032c565b60008282600081811061090757610907611654565b905060200201602081019061091c91906114de565b6001600160a01b0381166000908152600460205260408120600101549192505b818110156109a2576001600160a01b038316600090815260046020526040902060010180548061096e5761096e6116a6565b600082815260209020810160001990810180546001600160a01b03191690550190558061099a816116bc565b91505061093c565b506001600160a01b03828116600090815260046020526040902080546001600160a01b0319169187169190911781556109df90600101858561144a565b505050505050565b6109ef610d56565b600380546001600160a01b0319166001600160a01b0383161790556040517f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c90610a3a9083906114f9565b60405180910390a150565b610a4d610d56565b610a576000610d88565b565b6002546001600160a01b031690565b6003546001600160a01b0316331480610a995750610a84610a59565b6001600160a01b0316336001600160a01b0316145b610ab55760405162461bcd60e51b815260040161032c9061162d565b6001600160a01b03166000908152600660205260409020805460ff19169055565b610ade610d56565b6001600160a01b038116610b08576000604051631e4fbdf760e01b815260040161032c91906114f9565b610b1181610d88565b50565b6008546000908190610b2e906001600160a01b0316610dda565b6001600160a01b038416600090815260056020526040812080549293508392909190610b5b908490611693565b90915550909392505050565b6003546001600160a01b0316331480610b985750610b83610a59565b6001600160a01b0316336001600160a01b0316145b610bb45760405162461bcd60e51b815260040161032c9061162d565b6001600160a01b0382166000908152600660205260409020805460ff19166001179055801561037c57600a80546001600160a01b0384166001600160a01b03199091161790555050565b6003546001600160a01b0316331480610c2f5750610c1a610a59565b6001600160a01b0316336001600160a01b0316145b610c4b5760405162461bcd60e51b815260040161032c9061162d565b6001600160a01b03166000908152600760205260409020805460ff19169055565b610c74610e89565b6001600160a01b038316600090815260016020526040902054610c98908290611680565b6001600160a01b038416600081815260016020526040902091909155610cbf908383610eb3565b610cc96001600055565b505050565b6000806000610cdc85610f05565b905080600003610cf3576000809250925050610d4f565b600854600090610d0b906001600160a01b0316610f05565b905080600003610d2357600080935093505050610d4f565b6000610d3482600160801b8561113c565b9050610d458187600160801b61113c565b6001945094505050505b9250929050565b33610d5f610a59565b6001600160a01b031614610a57573360405163118cdaa760e01b815260040161032c91906114f9565b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381166000818152600160205260408082205490516370a0823160e01b8152919290918391906370a0823190610e1b9030906004016114f9565b602060405180830381865afa158015610e38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5c91906116d3565b9050610e688282611680565b6001600160a01b039094166000908152600160205260409020555090919050565b600260005403610eac57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610cc99084906112c0565b6001600160a01b038082166000908152600460209081526040808320815180830183528154909516855260018101805483518186028101860190945280845294958695909492938584019390929190830182828015610f8d57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f6f575b505050919092525050815160208301519293509190506001600160a01b03821661104757600a546040805160028082526060820183526001600160a01b03909316945091906020830190803683370190505090508481600081518110610ff557610ff5611654565b6001600160a01b03928316602091820292909201015260095482519116908290600190811061102657611026611654565b60200260200101906001600160a01b031690816001600160a01b0316815250505b6040516306250ec560e21b81526001600160a01b038316906318943b14906110739084906004016116ec565b6020604051808303816000875af1158015611092573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b69190611739565b1561113157604051633cc1df0160e21b81526001600160a01b0383169063f3077c04906110e79084906004016116ec565b602060405180830381865afa158015611104573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112891906116d3565b95945050505050565b506000949350505050565b6000808060001985870985870292508281108382030391505080600003611175576000841161116a57600080fd5b5082900490506106da565b80841161118157600080fd5b6000848688098084039381119092039190506000856111a281600019611680565b6111ad906001611693565b169586900495938490049360008190030460010190506111cd8184611756565b9093179260006111de876003611756565b60021890506111ed8188611756565b6111f8906002611680565b6112029082611756565b905061120e8188611756565b611219906002611680565b6112239082611756565b905061122f8188611756565b61123a906002611680565b6112449082611756565b90506112508188611756565b61125b906002611680565b6112659082611756565b90506112718188611756565b61127c906002611680565b6112869082611756565b90506112928188611756565b61129d906002611680565b6112a79082611756565b90506112b38186611756565b9998505050505050505050565b60006112d56001600160a01b0384168361131a565b905080516000141580156112fa5750808060200190518101906112f89190611739565b155b15610cc95782604051635274afe760e01b815260040161032c91906114f9565b606061132883836000611331565b90505b92915050565b606081471015611356573060405163cd78605960e01b815260040161032c91906114f9565b600080856001600160a01b03168486604051611372919061176d565b60006040518083038185875af1925050503d80600081146113af576040519150601f19603f3d011682016040523d82523d6000602084013e6113b4565b606091505b50915091506113c48683836113ce565b9695505050505050565b6060826113e3576113de82611421565b6106da565b81511580156113fa57506001600160a01b0384163b155b1561141a5783604051639996b31560e01b815260040161032c91906114f9565b50806106da565b8051156114315780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b82805482825590600052602060002090810192821561149d579160200282015b8281111561149d5781546001600160a01b0319166001600160a01b0384351617825560209092019160019091019061146a565b506114a99291506114ad565b5090565b5b808211156114a957600081556001016114ae565b80356001600160a01b03811681146114d957600080fd5b919050565b6000602082840312156114f057600080fd5b611328826114c2565b6001600160a01b0391909116815260200190565b60008060006060848603121561152257600080fd5b61152b846114c2565b9250611539602085016114c2565b9150604084013590509250925092565b60006020828403121561155b57600080fd5b5035919050565b60008060006040848603121561157757600080fd5b611580846114c2565b9250602084013567ffffffffffffffff8082111561159d57600080fd5b818601915086601f8301126115b157600080fd5b8135818111156115c057600080fd5b8760208260051b85010111156115d557600080fd5b6020830194508093505050509250925092565b8015158114610b1157600080fd5b6000806040838503121561160957600080fd5b611612836114c2565b91506020830135611622816115e8565b809150509250929050565b6020808252600d908201526c2ba09d103737ba1030b236b4b760991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561132b5761132b61166a565b8082018082111561132b5761132b61166a565b634e487b7160e01b600052603160045260246000fd5b6000816116cb576116cb61166a565b506000190190565b6000602082840312156116e557600080fd5b5051919050565b6020808252825182820181905260009190848201906040850190845b8181101561172d5783516001600160a01b031683529284019291840191600101611708565b50909695505050505050565b60006020828403121561174b57600080fd5b81516106da816115e8565b808202811582820484141761132b5761132b61166a565b6000825160005b8181101561178e5760208186018101518583015201611774565b50600092019182525091905056fea26469706673582212206ca3f09d6c332cc5df82b2e954efe65b37f315ab0ad1b08d68e67ecf6715675a64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class FrmFeeManager__factory extends ethers_1.ContractFactory {
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
exports.FrmFeeManager__factory = FrmFeeManager__factory;
FrmFeeManager__factory.bytecode = _bytecode;
FrmFeeManager__factory.abi = _abi;
