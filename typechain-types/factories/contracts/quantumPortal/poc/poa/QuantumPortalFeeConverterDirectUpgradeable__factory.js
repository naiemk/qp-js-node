"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantumPortalFeeConverterDirectUpgradeable__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
                name: "implementation",
                type: "address",
            },
        ],
        name: "ERC1967InvalidImplementation",
        type: "error",
    },
    {
        inputs: [],
        name: "ERC1967NonPayable",
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
        name: "UUPSUnauthorizedCallContext",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "slot",
                type: "bytes32",
            },
        ],
        name: "UUPSUnsupportedProxiableUUID",
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
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "UPGRADE_INTERFACE_VERSION",
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
        name: "feePerBytes",
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
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "feeTokenPrice",
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
                name: "size",
                type: "uint256",
            },
        ],
        name: "fixedFee",
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
                name: "size",
                type: "uint256",
            },
        ],
        name: "fixedFeeNative",
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
                name: "initialOwnerAdmin",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "localChainGasTokenPrice",
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
        inputs: [],
        name: "proxiableUUID",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                internalType: "uint256[]",
                name: "chainIds",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "feeTokenPrices",
                type: "uint256[]",
            },
            {
                internalType: "uint128[]",
                name: "gasPrices",
                type: "uint128[]",
            },
            {
                internalType: "bool[]",
                name: "isL2",
                type: "bool[]",
            },
        ],
        name: "setChainGasPrices",
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
                name: "gasLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "targetChainFee",
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
            {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "targetChainFeeNative",
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
            {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "targetChainGasFee",
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
            {
                internalType: "uint256",
                name: "gasLimit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        name: "targetChainGasFeeNative",
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
                name: "chainId",
                type: "uint256",
            },
        ],
        name: "targetChainGasPrice",
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
        name: "targetChainGasTokenPrice",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "upgradeToAndCall",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60a06040523060805234801561001457600080fd5b5060805161173561003e60003960008181610b4201528181610b6b0152610cfb01526117356000f3fe6080604052600436106101365760003560e01c806371e4a11c116100b157806371e4a11c1461029b5780638da5cb5b146102b05780639919d399146102c5578063a9bb53f7146102e5578063ad3cb1cc146102fa578063ad51018414610338578063c4d66de814610358578063cae3422c14610378578063cc4f24ca14610398578063d3ea1a25146103b8578063f2fde38b146103d8578063f851a440146103f8578063ffa1ad741461040d57600080fd5b8063063d65681461013b5780630ab43f7b1461016e5780631030e5f21461018e57806318154463146101ae5780632ee43e62146101ce5780634f1ef286146101f057806352d1902d146102055780635e6c8c6c1461021a578063670ce8e51461023a578063673a7e281461025a578063704b6c0214610266578063715018a614610286575b600080fd5b34801561014757600080fd5b5061015b6101563660046111f7565b610440565b6040519081526020015b60405180910390f35b34801561017a57600080fd5b5061015b610189366004611210565b61045e565b34801561019a57600080fd5b5061015b6101a93660046111f7565b610475565b3480156101ba57600080fd5b5061015b6101c93660046111f7565b61049f565b3480156101da57600080fd5b506101e36104b0565b604051610165919061123c565b6102036101fe3660046112b2565b6104cb565b005b34801561021157600080fd5b5061015b6104ea565b34801561022657600080fd5b506102036102353660046111f7565b610507565b34801561024657600080fd5b5061015b6102553660046111f7565b61057b565b34801561020357600080fd5b34801561027257600080fd5b50610203610281366004611357565b610588565b34801561029257600080fd5b506102036105f2565b3480156102a757600080fd5b5061015b610604565b3480156102bc57600080fd5b506101e3610634565b3480156102d157600080fd5b5061015b6102e03660046111f7565b61063f565b3480156102f157600080fd5b5061015b61064a565b34801561030657600080fd5b5061032b604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516101659190611396565b34801561034457600080fd5b5061015b610353366004611210565b61065d565b34801561036457600080fd5b50610203610373366004611357565b61067d565b34801561038457600080fd5b5061015b610393366004611210565b610780565b3480156103a457600080fd5b506102036103b33660046114c9565b61078d565b3480156103c457600080fd5b5061015b6103d3366004611210565b610a43565b3480156103e457600080fd5b506102036103f3366004611357565b610a59565b34801561040457600080fd5b506101e3610a97565b34801561041957600080fd5b5061032b604051806040016040528060078152602001663030302e30303160c81b81525081565b600061044a610aa2565b600092835260020160205250604090205490565b600061046b848484610ac6565b90505b9392505050565b600061047f610aa2565b60009283526002016020525060409020600101546001600160801b031690565b60006104aa82610b04565b92915050565b6000806104bb610aa2565b546001600160a01b031692915050565b6104d3610b37565b6104dc82610bdc565b6104e68282610c37565b5050565b60006104f4610cf0565b506000805160206116e083398151915290565b61050f610a97565b6001600160a01b0316336001600160a01b031614806105465750610531610634565b6001600160a01b0316336001600160a01b0316145b61056b5760405162461bcd60e51b8152600401610562906115de565b60405180910390fd5b80610574610aa2565b6001015550565b60006104aa82610d39565b565b610590610d59565b600061059a610d8b565b80546001600160a01b0319166001600160a01b0384161781556040519091507f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c906105e690849061123c565b60405180910390a15050565b6105fa610d59565b6105866000610daf565b60008061060f610aa2565b4660009081526002820160205260408120549192508190036104aa5760019250505090565b6000806104bb610e0b565b60006104aa82610e2f565b6000610654610aa2565b60010154905090565b600061066a848484610e4c565b61067383610e2f565b61046b919061161b565b6000610687610f6b565b805490915060ff600160401b82041615906001600160401b03166000811580156106ae5750825b90506000826001600160401b031660011480156106ca5750303b155b9050811580156106d8575080155b156106f65760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561072057845460ff60401b1916600160401b1785555b61072a8687610f8f565b610732610fa9565b831561077857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b600061046b848484610e4c565b610795610a97565b6001600160a01b0316336001600160a01b031614806107cc57506107b7610634565b6001600160a01b0316336001600160a01b0316145b6107e85760405162461bcd60e51b8152600401610562906115de565b60006107f2610aa2565b905083518551146108155760405162461bcd60e51b81526004016105629061162e565b82518551146108365760405162461bcd60e51b81526004016105629061162e565b60005b8551811015610778578481815181106108545761085461165b565b60200260200101516000036108a95760405162461bcd60e51b815260206004820152601b60248201527a51504643443a206e6174697665207072696365206973207a65726f60281b6044820152606401610562565b8381815181106108bb576108bb61165b565b60200260200101516001600160801b03166000036109165760405162461bcd60e51b815260206004820152601860248201527751504643443a20666565207072696365206973207a65726f60401b6044820152606401610562565b8481815181106109285761092861165b565b60200260200101518260020160008884815181106109485761094861165b565b60200260200101518152602001908152602001600020600001819055508381815181106109775761097761165b565b60200260200101518260020160008884815181106109975761099761165b565b6020026020010151815260200190815260200160002060010160006101000a8154816001600160801b0302191690836001600160801b031602179055508281815181106109e6576109e661165b565b6020026020010151826002016000888481518110610a0657610a0661165b565b6020026020010151815260200190815260200160002060010160106101000a81548160ff0219169083151502179055508080600101915050610839565b6000610a50848484610ac6565b61067383610b04565b610a61610d59565b6001600160a01b038116610a8b576000604051631e4fbdf760e01b8152600401610562919061123c565b610a9481610daf565b50565b6000806104bb610d8b565b7f1bb5efccb3fe848156cfca94d479e33ae6d3f05bb5c87d9f9eee341398fc750090565b600080610ad1610aa2565b466000908152600282016020526040902054909150610af1868686610e4c565b610afb9190611671565b95945050505050565b600080610b0f610aa2565b466000908152600282016020526040902054909150610b2d84610e2f565b61046e9190611671565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610bbe57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610bb26000805160206116e0833981519152546001600160a01b031690565b6001600160a01b031614155b156105865760405163703e46dd60e11b815260040160405180910390fd5b610be4610a97565b6001600160a01b0316336001600160a01b03161480610c1b5750610c06610634565b6001600160a01b0316336001600160a01b0316145b610a945760405162461bcd60e51b8152600401610562906115de565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610c91575060408051601f3d908101601f19168201909252610c8e91810190611693565b60015b610cb05781604051634c9c8ce360e01b8152600401610562919061123c565b6000805160206116e08339815191528114610ce157604051632a87526960e21b815260048101829052602401610562565b610ceb8383610fb1565b505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105865760405163703e46dd60e11b815260040160405180910390fd5b600080610d44610aa2565b60009384526002016020525050604090205490565b33610d62610634565b6001600160a01b031614610586573360405163118cdaa760e01b8152600401610562919061123c565b7f9cc69353251ee3fe681ee5e74b127d3c581100030841b8c40ca6499da8df4f0090565b6000610db9610e0b565b80546001600160a01b038481166001600160a01b031983168117845560405193945091169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930090565b600080610e3a610aa2565b905080600101548361046e91906116ac565b600080610e57610aa2565b90506000610e6486610d39565b6000878152600284016020526040902060010154610e8b906001600160801b0316876116ac565b610e9591906116ac565b6000878152600284016020526040902060010154909150600160801b900460ff16610ec357915061046e9050565b600160008181526002840160205260408120909101546001600160801b031690819003610f305760405162461bcd60e51b815260206004820152601b60248201527a14541190d10e88130c4819d85cc81c1c9a58d9481b9bdd081cd95d602a1b6044820152606401610562565b600081610f3f8761010061161b565b610f4a9060106116ac565b610f5491906116ac565b9050610f60818461161b565b94505050505061046e565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0090565b610f97611007565b610fa08261102c565b6104e68161103d565b610586611007565b610fba82611071565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610fff57610ceb82826110cd565b6104e661113a565b61100f611159565b61058657604051631afcd79f60e31b815260040160405180910390fd5b611034611007565b610a9481611173565b611045611007565b600061104f610d8b565b80546001600160a01b0319166001600160a01b03939093169290921790915550565b806001600160a01b03163b60000361109e5780604051634c9c8ce360e01b8152600401610562919061123c565b6000805160206116e083398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516110ea91906116c3565b600060405180830381855af49150503d8060008114611125576040519150601f19603f3d011682016040523d82523d6000602084013e61112a565b606091505b5091509150610afb85838361117b565b34156105865760405163b398979f60e01b815260040160405180910390fd5b6000611163610f6b565b54600160401b900460ff16919050565b610a61611007565b6060826111905761118b826111ce565b61046e565b81511580156111a757506001600160a01b0384163b155b156111c75783604051639996b31560e01b8152600401610562919061123c565b508061046e565b8051156111de5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60006020828403121561120957600080fd5b5035919050565b60008060006060848603121561122557600080fd5b505081359360208301359350604090920135919050565b6001600160a01b0391909116815260200190565b80356001600160a01b038116811461126757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156112aa576112aa61126c565b604052919050565b600080604083850312156112c557600080fd5b6112ce83611250565b91506020808401356001600160401b03808211156112eb57600080fd5b818601915086601f8301126112ff57600080fd5b8135818111156113115761131161126c565b611323601f8201601f19168501611282565b9150808252878482850101111561133957600080fd5b80848401858401376000848284010152508093505050509250929050565b60006020828403121561136957600080fd5b61046e82611250565b60005b8381101561138d578181015183820152602001611375565b50506000910152565b60208152600082518060208401526113b5816040850160208701611372565b601f01601f19169190910160400192915050565b60006001600160401b038211156113e2576113e261126c565b5060051b60200190565b600082601f8301126113fd57600080fd5b8135602061141261140d836113c9565b611282565b8083825260208201915060208460051b87010193508684111561143457600080fd5b602086015b848110156114505780358352918301918301611439565b509695505050505050565b600082601f83011261146c57600080fd5b8135602061147c61140d836113c9565b8083825260208201915060208460051b87010193508684111561149e57600080fd5b602086015b8481101561145057803580151581146114bc5760008081fd5b83529183019183016114a3565b600080600080608085870312156114df57600080fd5b84356001600160401b03808211156114f657600080fd5b611502888389016113ec565b955060209150818701358181111561151957600080fd5b61152589828a016113ec565b95505060408701358181111561153a57600080fd5b8701601f8101891361154b57600080fd5b803561155961140d826113c9565b81815260059190911b8201840190848101908b83111561157857600080fd5b928501925b828410156115ac5783356001600160801b038116811461159d5760008081fd5b8252928501929085019061157d565b965050505060608701359150808211156115c557600080fd5b506115d28782880161145b565b91505092959194509250565b6020808252600d908201526c2ba09d103737ba1030b236b4b760991b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808201808211156104aa576104aa611605565b60208082526013908201527251504643443a20496e76616c6964206172677360681b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b60008261168e57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156116a557600080fd5b5051919050565b80820281158282048414176104aa576104aa611605565b600082516116d5818460208701611372565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220b4d2c110ec4ffaca65c8a7cc7c93f573e951fcbae40501910b65508108bd95d364736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class QuantumPortalFeeConverterDirectUpgradeable__factory extends ethers_1.ContractFactory {
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
exports.QuantumPortalFeeConverterDirectUpgradeable__factory = QuantumPortalFeeConverterDirectUpgradeable__factory;
QuantumPortalFeeConverterDirectUpgradeable__factory.bytecode = _bytecode;
QuantumPortalFeeConverterDirectUpgradeable__factory.abi = _abi;
