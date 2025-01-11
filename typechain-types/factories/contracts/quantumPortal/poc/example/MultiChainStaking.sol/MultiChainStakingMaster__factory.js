"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiChainStakingMaster__factory = void 0;
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "addRewards",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "baseTokens",
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
                internalType: "uint256",
                name: "fee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "closePosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "closeStakePeriod",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "distributeRewards",
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
        inputs: [],
        name: "enableRewardDistribution",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "remoteChainIds",
                type: "uint256[]",
            },
            {
                internalType: "address[]",
                name: "stakingContracts",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "_baseTokens",
                type: "address[]",
            },
        ],
        name: "init",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
            {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "remoteAddress",
        outputs: [
            {
                internalType: "address",
                name: "rv",
                type: "address",
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
        name: "remotes",
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
                internalType: "uint256",
                name: "remoteChainId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "setRemote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_rewardToken",
                type: "address",
            },
        ],
        name: "setRewardToken",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "stakeClosed",
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
        inputs: [],
        name: "stakeRemote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "stakes",
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
        name: "totalRewards",
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
        name: "totalStakes",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5033806200003957604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000448162000059565b506001805562000053620000a9565b62000289565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080336001600160a01b0316638eb36e3d6040518163ffffffff1660e01b81526004016000604051808303816000875af1158015620000ed573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000117919081019062000178565b8060200190518101906200012c91906200024d565b600380546001600160a01b0319166001600160a01b0384161790559250905081156200015957816200015b565b465b6002555050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200018c57600080fd5b82516001600160401b0380821115620001a457600080fd5b818501915085601f830112620001b957600080fd5b815181811115620001ce57620001ce62000162565b604051601f8201601f19908116603f01168101908382118183101715620001f957620001f962000162565b8160405282815288868487010111156200021257600080fd5b600093505b8284101562000236578484018601518185018701529285019262000217565b600086848301015280965050505050505092915050565b600080604083850312156200026157600080fd5b82516001600160a01b03811681146200027957600080fd5b6020939093015192949293505050565b6117bb80620002996000396000f3fe608060405234801561001057600080fd5b50600436106101225760003560e01c806377f1be60116100a857806377f1be601461022f57806385e1f4d0146102375780638aee8127146102405780638da5cb5b14610253578063a694fc3a14610264578063a9a3bba414610277578063b14c13fb146102a2578063beceed39146102b5578063bf9befb1146102c8578063cb3eb01c146102d1578063f2fde38b146102d957600080fd5b80630e15561a1461012757806311043795146101435780632d6ce61d146101585780633183e7301461016b578063328123a21461017357806343fe56ff146101a95780634ff83493146101c657806353e417d0146101d95780636425666b146102025780636f4a2cd014610215578063715018a614610227575b600080fd5b61013060085481565b6040519081526020015b60405180910390f35b610156610151366004611194565b6102ec565b005b61015661016636600461122d565b6103fa565b610156610475565b61019c61018136600461124f565b6006602052600090815260409020546001600160a01b031681565b60405161013a9190611268565b600a546101b69060ff1681565b604051901515815260200161013a565b6101566101d4366004611291565b610640565b61019c6101e736600461124f565b6004602052600090815260409020546001600160a01b031681565b60035461019c906001600160a01b031681565b600a546101b690610100900460ff1681565b610156610676565b61015661068a565b61013060025481565b61015661024e3660046112c1565b6106a3565b6000546001600160a01b031661019c565b61015661027236600461124f565b6106cd565b610130610285366004611291565b600760209081526000928352604080842090915290825290205481565b61019c6102b036600461124f565b610752565b6101566102c336600461124f565b61077e565b61013060095481565b61015661085d565b6101566102e73660046112c1565b610874565b6102f46108af565b60005b858110156103f157848482818110610311576103116112de565b905060200201602081019061032691906112c1565b6004600089898581811061033c5761033c6112de565b90506020020135815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550828282818110610387576103876112de565b905060200201602081019061039c91906112c1565b600660008989858181106103b2576103b26112de565b6020908102929092013583525081019190915260400160002080546001600160a01b0319166001600160a01b03929092169190911790556001016102f7565b50505050505050565b600a54610100900460ff166104565760405162461bcd60e51b815260206004820152601f60248201527f4e6f7420726561647920746f206469737472696275746520726577617264730060448201526064015b60405180910390fd5b600254810361046b576104676108dc565b5050565b6104678282610a1e565b6000806000600360009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa1580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190611304565b60008381526004602052604090205492955090935091506001600160a01b038084169116146105505760405162461bcd60e51b815260206004820152600b60248201526a139bdd08185b1b1bddd95960aa1b604482015260640161044d565b60035460408051633ecb494b60e21b815290516000926001600160a01b03169163fb2d252c91600480830192869291908290030181865afa158015610599573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105c191908101906115e4565b60409081015160008681526006602052919091205460808201519192506001600160a01b0391821691161461062b5760405162461bcd60e51b815260206004820152601060248201526f2ab732bc3832b1ba32b2103a37b5b2b760811b604482015260640161044d565b61063a84838360a00151610b66565b50505050565b6106486108af565b60009182526004602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b61067e6108af565b6106886000610c11565b565b6106926108af565b600a805461ff001916610100179055565b6106ab6108af565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6106d5610c61565b6002546000908152600660205260409020546106fc906001600160a01b0316333084610c8b565b9050806000036107395760405162461bcd60e51b81526020600482015260086024820152674e6f207374616b6560c01b604482015260640161044d565b6107466002543383610b66565b61074f60018055565b50565b6000818152600460205260409020546001600160a01b031680156107765780610778565b305b92915050565b610786610c61565b600a54610100900460ff16156107e85760405162461bcd60e51b815260206004820152602160248201527f416c72656164792064697374726962757465642f28696e6729207265776172646044820152607360f81b606482015260840161044d565b600554610800906001600160a01b0316333084610c8b565b90508060000361083f5760405162461bcd60e51b815260206004820152600a6024820152694e6f207265776172647360b01b604482015260640161044d565b806008600082825461085191906116d8565b90915550506001805550565b6108656108af565b600a805460ff19166001179055565b61087c6108af565b6001600160a01b0381166108a6576000604051631e4fbdf760e01b815260040161044d9190611268565b61074f81610c11565b6000546001600160a01b03163314610688573360405163118cdaa760e01b815260040161044d9190611268565b60025460009081526007602090815260408083203384529091528120549061090382610e00565b600280546000908152600760209081526040808320338085529083528184208490559354835260069091529081902054905163a9059cbb60e01b81529293506001600160a01b03169163a9059cbb916109609186906004016116eb565b6020604051808303816000875af115801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a39190611704565b5060055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906109d690339085906004016116eb565b6020604051808303816000875af11580156109f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a199190611704565b505050565b600081815260076020908152604080832033845290915281205490610a4282610e00565b600084815260076020908152604080832033808552925280832092909255600554915163a9059cbb60e01b81529293506001600160a01b039091169163a9059cbb91610a929185906004016116eb565b6020604051808303816000875af1158015610ab1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad59190611704565b50600354600084815260066020526040908190205490516340646f1160e11b81526001600160401b03861660048201523360248201526001600160a01b039182166044820152606481018590529116906380c8de2290608401600060405180830381600087803b158015610b4857600080fd5b505af1158015610b5c573d6000803e3d6000fd5b5050505050505050565b600a5460ff16158015610b815750600a54610100900460ff16155b610bbc5760405162461bcd60e51b815260206004820152600c60248201526b14dd185ad94818db1bdcd95960a21b604482015260640161044d565b60008381526007602090815260408083206001600160a01b038616845290915281208054839290610bee9084906116d8565b925050819055508060096000828254610c0791906116d8565b9091555050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600260015403610c8457604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b600080856001600160a01b03166370a08231856040518263ffffffff1660e01b8152600401610cba9190611268565b602060405180830381865afa158015610cd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfb9190611726565b9050610d126001600160a01b038716868686610e11565b6040516370a0823160e01b81526000906001600160a01b038816906370a0823190610d41908890600401611268565b602060405180830381865afa158015610d5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d829190611726565b9050610d8e828261173f565b925083831115610df65760405162461bcd60e51b815260206004820152602d60248201527f53413a2061637475616c20616d6f756e74206c6172676572207468616e20747260448201526c185b9cd9995c88185b5bdd5b9d609a1b606482015260840161044d565b5050949350505050565b600061077882600854600954610e6b565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261063a908590610ff1565b6000808060001985870985870292508281108382030391505080600003610ea45760008411610e9957600080fd5b508290049050610fea565b808411610eb057600080fd5b600084868809808403938111909203919050600085610ed18160001961173f565b610edc9060016116d8565b16958690049593849004936000819003046001019050610efc8184611752565b909317926000610f0d876003611752565b6002189050610f1c8188611752565b610f2790600261173f565b610f319082611752565b9050610f3d8188611752565b610f4890600261173f565b610f529082611752565b9050610f5e8188611752565b610f6990600261173f565b610f739082611752565b9050610f7f8188611752565b610f8a90600261173f565b610f949082611752565b9050610fa08188611752565b610fab90600261173f565b610fb59082611752565b9050610fc18188611752565b610fcc90600261173f565b610fd69082611752565b9050610fe28186611752565b955050505050505b9392505050565b60006110066001600160a01b0384168361104b565b9050805160001415801561102b5750808060200190518101906110299190611704565b155b15610a195782604051635274afe760e01b815260040161044d9190611268565b6060610fea8383600084600080856001600160a01b031684866040516110719190611769565b60006040518083038185875af1925050503d80600081146110ae576040519150601f19603f3d011682016040523d82523d6000602084013e6110b3565b606091505b50915091506110c38683836110cd565b9695505050505050565b6060826110e2576110dd82611120565b610fea565b81511580156110f957506001600160a01b0384163b155b156111195783604051639996b31560e01b815260040161044d9190611268565b5080610fea565b8051156111305780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60008083601f84011261115b57600080fd5b5081356001600160401b0381111561117257600080fd5b6020830191508360208260051b850101111561118d57600080fd5b9250929050565b600080600080600080606087890312156111ad57600080fd5b86356001600160401b03808211156111c457600080fd5b6111d08a838b01611149565b909850965060208901359150808211156111e957600080fd5b6111f58a838b01611149565b9096509450604089013591508082111561120e57600080fd5b5061121b89828a01611149565b979a9699509497509295939492505050565b6000806040838503121561124057600080fd5b50508035926020909101359150565b60006020828403121561126157600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461074f57600080fd5b600080604083850312156112a457600080fd5b8235915060208301356112b68161127c565b809150509250929050565b6000602082840312156112d357600080fd5b8135610fea8161127c565b634e487b7160e01b600052603260045260246000fd5b80516112ff8161127c565b919050565b60008060006060848603121561131957600080fd5b83519250602084015161132b8161127c565b604085015190925061133c8161127c565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b038111828210171561138057611380611347565b60405290565b604051608081016001600160401b038111828210171561138057611380611347565b604051606081016001600160401b038111828210171561138057611380611347565b604051601f8201601f191681016001600160401b03811182821017156113f2576113f2611347565b604052919050565b80516001600160401b03811681146112ff57600080fd5b60005b8381101561142c578181015183820152602001611414565b50506000910152565b6000601f83601f84011261144857600080fd5b825160206001600160401b038083111561146457611464611347565b8260051b6114738382016113ca565b938452868101830193838101908986111561148d57600080fd5b84890192505b8583101561151a578251848111156114ab5760008081fd5b8901603f81018b136114bd5760008081fd5b858101516040868211156114d3576114d3611347565b6114e4828b01601f191689016113ca565b8281528d828486010111156114f95760008081fd5b611508838a8301848701611411565b85525050509184019190840190611493565b9998505050505050505050565b6000610120828403121561153a57600080fd5b61154261135d565b905061154d826113fa565b815261155b602083016112f4565b602082015261156c604083016112f4565b604082015261157d606083016112f4565b606082015261158e608083016112f4565b608082015260a082015160a082015260c08201516001600160401b038111156115b657600080fd5b6115c284828501611435565b60c08301525060e082015160e082015261010080830151818301525092915050565b6000602082840312156115f657600080fd5b81516001600160401b038082111561160d57600080fd5b9083019081850360c081121561162257600080fd5b61162a611386565b611633846113fa565b81526060601f198301121561164757600080fd5b61164f6113a8565b915061165d602085016113fa565b825261166b604085016113fa565b602083015261167c606085016113fa565b6040830152816020820152608084015191508282111561169b57600080fd5b6116a787838601611527565b604082015260a0939093015160608401525090949350505050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610778576107786116c2565b6001600160a01b03929092168252602082015260400190565b60006020828403121561171657600080fd5b81518015158114610fea57600080fd5b60006020828403121561173857600080fd5b5051919050565b81810381811115610778576107786116c2565b8082028115828204841417610778576107786116c2565b6000825161177b818460208701611411565b919091019291505056fea2646970667358221220e86b49c674bff0535def2f975d7295e3e3b28b939c5ea54b687d27850c2b08af64736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class MultiChainStakingMaster__factory extends ethers_1.ContractFactory {
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
exports.MultiChainStakingMaster__factory = MultiChainStakingMaster__factory;
MultiChainStakingMaster__factory.bytecode = _bytecode;
MultiChainStakingMaster__factory.abi = _abi;
