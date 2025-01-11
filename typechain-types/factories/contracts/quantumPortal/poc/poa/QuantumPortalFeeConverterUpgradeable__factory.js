"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantumPortalFeeConverterUpgradeable__factory = void 0;
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
                internalType: "address",
                name: "_networkFeeWrappedToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_qpFeeToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_oracle",
                type: "address",
            },
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
                name: "targetChainId",
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
const _bytecode = "0x60a06040523060805234801561001457600080fd5b5060805161132f61003e600039600081816108cc015281816108f50152610a80015261132f6000f3fe6080604052600436106100f45760003560e01c806394e2ddd01161009057806394e2ddd0146101fb5780639919d39914610210578063aa6fff7314610230578063ad3cb1cc14610245578063c25cddbe14610283578063f2fde38b146102a3578063f60bbe2a146102c3578063f851a440146102d8578063f8c8765e146102ed578063ffa1ad741461030d57600080fd5b80632ee43e62146100f95780634f1ef2861461012457806352d1902d146101395780635e6c8c6c1461015c578063673a7e281461017c578063704b6c0214610191578063715018a6146101b15780637d136ca0146101c65780638da5cb5b146101e6575b600080fd5b34801561010557600080fd5b5061010e610340565b60405161011b9190610fca565b60405180910390f35b610137610132366004611010565b61035b565b005b34801561014557600080fd5b5061014e61037a565b60405190815260200161011b565b34801561016857600080fd5b506101376101773660046110d2565b610397565b34801561018857600080fd5b5061013761040f565b34801561019d57600080fd5b506101376101ac3660046110eb565b610517565b3480156101bd57600080fd5b50610137610581565b3480156101d257600080fd5b5061010e6101e13660046110d2565b610595565b3480156101f257600080fd5b5061010e6105be565b34801561020757600080fd5b5061010e6105c9565b34801561021c57600080fd5b5061014e61022b3660046110d2565b6105e7565b34801561023c57600080fd5b5061014e61061a565b34801561025157600080fd5b50610276604051806040016040528060058152602001640352e302e360dc1b81525081565b60405161011b919061112a565b34801561028f57600080fd5b5061014e61029e3660046110d2565b610723565b3480156102af57600080fd5b506101376102be3660046110eb565b610734565b3480156102cf57600080fd5b5061014e610772565b3480156102e457600080fd5b5061010e610787565b3480156102f957600080fd5b5061013761030836600461115d565b610792565b34801561031957600080fd5b50610276604051806040016040528060078152602001663030302e30303160c81b81525081565b60008061034b61089d565b546001600160a01b031692915050565b6103636108c1565b61036c82610966565b61037682826109c1565b5050565b6000610384610a75565b506000805160206112da83398151915290565b61039f610787565b6001600160a01b0316336001600160a01b031614806103d657506103c16105be565b6001600160a01b0316336001600160a01b0316145b6103fb5760405162461bcd60e51b81526004016103f2906111b1565b60405180910390fd5b600061040561089d565b6002019190915550565b600061041961089d565b6040805160028082526060820183529293506000929091602083019080368337505050600183015481519192506001600160a01b0316908290600090610461576104616111d8565b6001600160a01b0392831660209182029290920101528254825191169082906001908110610491576104916111d8565b6001600160a01b0392831660209182029290920101526004808401546040516306250ec560e21b81529216916318943b14916104cf918591016111ee565b6020604051808303816000875af11580156104ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610512919061123b565b505050565b61051f610abe565b6000610529610af0565b80546001600160a01b0319166001600160a01b0384161781556040519091507f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c90610575908490610fca565b60405180910390a15050565b610589610abe565b6105936000610b14565b565b6000806105a061089d565b6000938452600301602052505060409020546001600160a01b031690565b60008061034b610b70565b6000806105d461089d565b600101546001600160a01b031692915050565b6000806105f261089d565b9050600160801b816002015484610609919061125d565b6106139190611282565b9392505050565b60008061062561089d565b6040805160028082526060820183529293506000929091602083019080368337505050600183015481519192506001600160a01b031690829060009061066d5761066d6111d8565b6001600160a01b039283166020918202929092010152825482519116908290600190811061069d5761069d6111d8565b6001600160a01b039283166020918202929092010152600480840154604051633cc1df0160e21b815292169163f3077c04916106db918591016111ee565b602060405180830381865afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c91906112a4565b9250505090565b600061072e82610b94565b92915050565b61073c610abe565b6001600160a01b038116610766576000604051631e4fbdf760e01b81526004016103f29190610fca565b61076f81610b14565b50565b60008061077d61089d565b6002015492915050565b60008061034b610af0565b600061079c610cf4565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156107c45750825b905060008267ffffffffffffffff1660011480156107e15750303b155b9050811580156107ef575080155b1561080d5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561083757845460ff60401b1916600160401b1785555b6108418687610d18565b61084c898989610d32565b831561089257845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b7faba0b53a9265323e2d929e5915afa443008841d14c0632881afa3ef9dbea6d0090565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061094857507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661093c6000805160206112da833981519152546001600160a01b031690565b6001600160a01b031614155b156105935760405163703e46dd60e11b815260040160405180910390fd5b61096e610787565b6001600160a01b0316336001600160a01b031614806109a557506109906105be565b6001600160a01b0316336001600160a01b0316145b61076f5760405162461bcd60e51b81526004016103f2906111b1565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610a1b575060408051601f3d908101601f19168201909252610a18918101906112a4565b60015b610a3a5781604051634c9c8ce360e01b81526004016103f29190610fca565b6000805160206112da8339815191528114610a6b57604051632a87526960e21b8152600481018290526024016103f2565b6105128383610d84565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105935760405163703e46dd60e11b815260040160405180910390fd5b33610ac76105be565b6001600160a01b031614610593573360405163118cdaa760e01b81526004016103f29190610fca565b7f9cc69353251ee3fe681ee5e74b127d3c581100030841b8c40ca6499da8df4f0090565b6000610b1e610b70565b80546001600160a01b038481166001600160a01b031983168117845560405193945091169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930090565b600080610b9f61089d565b60008481526003820160205260409020549091506001600160a01b031680610c075760405162461bcd60e51b815260206004820152601b60248201527a28a823219d102737903a30b933b2ba1031b430b4b7103a37b5b2b760291b60448201526064016103f2565b6040805160028082526060820183526000926020830190803683370190505090508181600081518110610c3c57610c3c6111d8565b6001600160a01b0392831660209182029290920101528354825191169082906001908110610c6c57610c6c6111d8565b6001600160a01b039283166020918202929092010152600480850154604051633cc1df0160e21b815292169163f3077c0491610caa918591016111ee565b602060405180830381865afa158015610cc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ceb91906112a4565b95945050505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0090565b610d20610dda565b610d2982610dff565b61037681610e10565b610d3a610dda565b6000610d4461089d565b6001810180546001600160a01b03199081166001600160a01b03978816179091558154811694861694909417815560040180549093169190931617905550565b610d8d82610e44565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a2805115610dd2576105128282610ea0565b610376610f0d565b610de2610f2c565b61059357604051631afcd79f60e31b815260040160405180910390fd5b610e07610dda565b61076f81610f46565b610e18610dda565b6000610e22610af0565b80546001600160a01b0319166001600160a01b03939093169290921790915550565b806001600160a01b03163b600003610e715780604051634c9c8ce360e01b81526004016103f29190610fca565b6000805160206112da83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b031684604051610ebd91906112bd565b600060405180830381855af49150503d8060008114610ef8576040519150601f19603f3d011682016040523d82523d6000602084013e610efd565b606091505b5091509150610ceb858383610f4e565b34156105935760405163b398979f60e01b815260040160405180910390fd5b6000610f36610cf4565b54600160401b900460ff16919050565b61073c610dda565b606082610f6357610f5e82610fa1565b610613565b8151158015610f7a57506001600160a01b0384163b155b15610f9a5783604051639996b31560e01b81526004016103f29190610fca565b5092915050565b805115610fb15780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6001600160a01b0391909116815260200190565b80356001600160a01b0381168114610ff557600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561102357600080fd5b61102c83610fde565b9150602083013567ffffffffffffffff8082111561104957600080fd5b818501915085601f83011261105d57600080fd5b81358181111561106f5761106f610ffa565b604051601f8201601f19908116603f0116810190838211818310171561109757611097610ffa565b816040528281528860208487010111156110b057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000602082840312156110e457600080fd5b5035919050565b6000602082840312156110fd57600080fd5b61061382610fde565b60005b83811015611121578181015183820152602001611109565b50506000910152565b6020815260008251806020840152611149816040850160208701611106565b601f01601f19169190910160400192915050565b6000806000806080858703121561117357600080fd5b61117c85610fde565b935061118a60208601610fde565b925061119860408601610fde565b91506111a660608601610fde565b905092959194509250565b6020808252600d908201526c2ba09d103737ba1030b236b4b760991b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b8181101561122f5783516001600160a01b03168352928401929184019160010161120a565b50909695505050505050565b60006020828403121561124d57600080fd5b8151801515811461061357600080fd5b808202811582820484141761072e57634e487b7160e01b600052601160045260246000fd5b60008261129f57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156112b657600080fd5b5051919050565b600082516112cf818460208701611106565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220bb3f190fd67a4742181c78d6455f1aa4043df20ac5b44b01e87d5cf0b30e6d9464736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class QuantumPortalFeeConverterUpgradeable__factory extends ethers_1.ContractFactory {
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
exports.QuantumPortalFeeConverterUpgradeable__factory = QuantumPortalFeeConverterUpgradeable__factory;
QuantumPortalFeeConverterUpgradeable__factory.bytecode = _bytecode;
QuantumPortalFeeConverterUpgradeable__factory.abi = _abi;