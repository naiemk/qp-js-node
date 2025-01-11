"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapOracle__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "emaTimes",
        outputs: [
            {
                internalType: "uint32",
                name: "lastNoPriceFetchTime",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "lastCumuPriceFetch",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_1Min",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_1Hour",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_1Day",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_25Day",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_50Day",
                type: "uint32",
            },
            {
                internalType: "uint32",
                name: "_100Day",
                type: "uint32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
            {
                internalType: "enum IPriceOracle.EmaType",
                name: "emaType",
                type: "uint8",
            },
        ],
        name: "emaX128",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "emas",
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
                name: "path0",
                type: "address",
            },
            {
                internalType: "address",
                name: "path1",
                type: "address",
            },
        ],
        name: "getEmaKey",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "rawCumulativePrices",
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
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "recentPriceX128",
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
        name: "uniV2Factory",
        outputs: [
            {
                internalType: "contract IUniswapV2Factory",
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
                internalType: "address[]",
                name: "path",
                type: "address[]",
            },
        ],
        name: "updatePrice",
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
const _bytecode = "0x608060405234801561001057600080fd5b50604051611efe380380611efe83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611e6b806100936000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c806318943b141461007d5780632e8b4f09146100a55780633da04b87146100c6578063a5337abf146100f1578063a8aa0b59146101ad578063ab5a6030146101c0578063f3077c04146101d3578063f7c8c488146101e6575b600080fd5b61009061008b366004611a62565b610206565b60405190151581526020015b60405180910390f35b6100b86100b3366004611ab9565b610383565b60405190815260200161009c565b6000546100d9906001600160a01b031681565b6040516001600160a01b03909116815260200161009c565b61015e6100ff366004611af2565b60036020526000908152604090205463ffffffff80821691600160201b8104821691600160401b8204811691600160601b8104821691600160801b8204811691600160a01b8104821691600160c01b8204811691600160e01b90041688565b6040805163ffffffff998a16815297891660208901529588169587019590955292861660608601529085166080850152841660a0840152831660c083015290911660e08201526101000161009c565b6100b86101bb366004611b0b565b610396565b6100b86101ce366004611b2d565b6103c7565b6100b86101e1366004611a62565b610611565b6100b86101f4366004611af2565b60016020526000908152604090205481565b600060028210156102325760405162461bcd60e51b815260040161022990611b88565b60405180910390fd5b6102616040518060400160405280600e81526020016d5550444154494e4720505249434560901b81525061061e565b60005b61026f600184611bca565b81101561037757610301604051806040016040528060128152602001712aa82220aa24a72390282924a1a2902327a960711b8152508585848181106102b6576102b6611bdd565b90506020020160208101906102cb9190611bf3565b86866102d8866001611c10565b8181106102e7576102e7611bdd565b90506020020160208101906102fc9190611bf3565b610664565b61036184848381811061031657610316611bdd565b905060200201602081019061032b9190611bf3565b8585610338856001611c10565b81811061034757610347611bdd565b905060200201602081019061035c9190611bf3565b6106b0565b61036f57600091505061037d565b600101610264565b50600190505b92915050565b600061038f83836110f2565b9392505050565b600260205281600052604060002081815481106103b257600080fd5b90600052602060002001600091509150505481565b6000600183116103e95760405162461bcd60e51b815260040161022990611b88565b60008260058111156103fd576103fd611c23565b9050600160801b60005b610412600187611bca565b81101561060757600061047b88888481811061043057610430611bdd565b90506020020160208101906104459190611bf3565b8989610452866001611c10565b81811061046157610461611bdd565b90506020020160208101906104769190611bf3565b6110f2565b90506104e060405180604001604052806013815260200172028bab2b93cb4b73390383934b1b2903337b91606d1b8152508989858181106104be576104be611bdd565b90506020020160208101906104d39190611bf3565b8a8a6102d8876001611c10565b6104e981611137565b60008181526002602052604081208054829061050757610507611bdd565b90600052602060002001549050600060026000848152602001908152602001600020868154811061053a5761053a611bdd565b906000526020600020015490506105756040518060400160405280600c81526020016b454d4120505249434520495360a01b8152508261117c565b85156105b9576105868682846111c5565b91506105b96040518060400160405280600f81526020016e526563656e7420707269636520697360881b8152508361117c565b6105c88583600160801b611220565b94506105fc6040518060400160405280601081526020016f6c61737465737420707269636520697360801b8152508661117c565b505050600101610407565b5095945050505050565b600061038f8383836103c7565b610661816040516024016106329190611c7f565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b1790526113a4565b50565b6106ab83838360405160240161067c93929190611c92565b60408051601f198184030181529190526020810180516001600160e01b03166307e763af60e51b1790526113a4565b505050565b6000806106bd84846110f2565b600081815260036020908152604091829020825161010081018452905463ffffffff808216808452600160201b8304821694840194909452600160401b8204811694830194909452600160601b810484166060830152600160801b810484166080830152600160a01b8104841660a0830152600160c01b8104841660c0830152600160e01b900490921660e08301529192509042901580159061077357508151610e10906107719063ffffffff1683611bca565b105b15610784576000935050505061037d565b6107be604051806040016040528060178152602001762aa82220aa24a72390282924a1a2902327a9102820a4a960491b8152508787610664565b6107c783611137565b60006040518060c00160405280603c8152602001603c806107e89190611cc5565b81526020016107f8603c80611cc5565b610803906018611cc5565b8152602001610813603c80611cc5565b61081e906018611cc5565b610829906019611cc5565b8152602001610839603c80611cc5565b610844906018611cc5565b61084f906019611cc5565b61085a906002611cc5565b815260200161086a603c80611cc5565b610875906018611cc5565b610880906019611cc5565b61088b906002611cc5565b610896906002611cc5565b905260408051600680825260e08201909252919250600091906020820160c08036833701905050905060006040518060c00160405280866040015163ffffffff168152602001866060015163ffffffff168152602001866080015163ffffffff1681526020018660a0015163ffffffff1681526020018660c0015163ffffffff1681526020018660e0015163ffffffff16815250905060005b6005811015610a2957600061097183836006811061094f5761094f611bdd565b60200201518787856006811061096757610967611bdd565b60200201516113ad565b90506109ce6040518060400160405280600b81526020016a4e455720504552494f443f60a81b8152508484600681106109ac576109ac611bdd565b6020020151888886600681106109c4576109c4611bdd565b60200201516113d7565b6109f4604051806040016040528060048152602001632224a32360e11b8152508261117c565b80600003610a025750610a29565b80848381518110610a1557610a15611bdd565b60209081029190910101525060010161092f565b5081600081518110610a3d57610a3d611bdd565b6020026020010151600003610a5b576000965050505050505061037d565b600080610a688b8b611426565b91509150610a9f6040518060400160405280601081526020016f43757272656e7420707269636520697360801b8152508383611710565b81600003610bad5750505063ffffffff9283168452505060009283526003602090815260408085208451815493860151928601516060870151608088015160a089015160c08a015160e0909a01518916600160e01b026001600160e01b039a8a16600160c01b029a909a166001600160c01b03918a16600160a01b0263ffffffff60a01b19938b16600160801b029390931667ffffffffffffffff60801b19948b16600160601b0263ffffffff60601b19968c16600160401b029690961667ffffffffffffffff60401b19998c16600160201b0267ffffffffffffffff19909b1697909b1696909617989098179690961697909717919091171617939093171617919091179055905061037d565b6000808852602088015163ffffffff169003610d8557610c016040518060400160405280601d81526020017f46697273742074696d65207570646174696e672074686520707269636500000081525061061e565b81600160008a81526020019081526020016000208190555080876020019063ffffffff16908163ffffffff168152505086600360008a815260200190815260200160002060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548163ffffffff021916908363ffffffff16021790555060408201518160000160086101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600c6101000a81548163ffffffff021916908363ffffffff16021790555060808201518160000160106101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160000160146101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160000160186101000a81548163ffffffff021916908363ffffffff16021790555060e082015181600001601c6101000a81548163ffffffff021916908363ffffffff1602179055509050506110e1565b610dcb6040518060400160405280601081526020016f02ab83230ba34b73390383934b1b29d160851b815250600160008b81526020019081526020016000205484611710565b610e116040518060400160405280600681526020016502234b3331d160d51b815250600160008b81526020019081526020016000205484610e0c9190611bca565b61117c565b610e456040518060400160405280600781526020016602a34b6b2b99d160cd1b815250886020015163ffffffff1683611710565b600088815260016020526040902054828103610e9d57610e8b6040518060400160405280600f81526020016e4e6f2070726963652075706461746560881b81525061061e565b6000995050505050505050505061037d565b6000610eb5896020015163ffffffff16838587611757565b9050610ee46040518060400160405280600b81526020016a02732bb90383934b1b29d160ad1b8152508261117c565b63ffffffff83166020808b019190915260008b8152600190915260409020849055610f118a828888611780565b846000602002015163ffffffff1660408a0152846001602002015163ffffffff1660608a0152846002602002015163ffffffff1660808a0152846003602002015163ffffffff1660a08a0152846004602002015163ffffffff1660c08a015284600560200201518960e0019063ffffffff16908163ffffffff168152505088600360008c815260200190815260200160002060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a81548163ffffffff021916908363ffffffff16021790555060408201518160000160086101000a81548163ffffffff021916908363ffffffff160217905550606082015181600001600c6101000a81548163ffffffff021916908363ffffffff16021790555060808201518160000160106101000a81548163ffffffff021916908363ffffffff16021790555060a08201518160000160146101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160000160186101000a81548163ffffffff021916908363ffffffff16021790555060e082015181600001601c6101000a81548163ffffffff021916908363ffffffff16021790555090505050505b5060019a9950505050505050505050565b6040516001600160601b0319606084811b8216602084015283901b16603482015260009060480160405160208183030381529060405280519060200120905092915050565b6106618160405160240161114d91815260200190565b60408051601f198184030181529190526020810180516001600160e01b03166327b7cf8560e01b1790526113a4565b6111c18282604051602401611192929190611cdc565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b1790526113a4565b5050565b600081831115611200576111ef6111db856118ef565b6111e58486611bca565b600160801b611220565b6111f99084611bca565b905061038f565b61121661120c856118ef565b6111e58585611bca565b6111f99084611c10565b6000808060001985870985870292508281108382030391505080600003611259576000841161124e57600080fd5b50829004905061038f565b80841161126557600080fd5b60008486880980840393811190920391905060008561128681600019611bca565b611291906001611c10565b169586900495938490049360008190030460010190506112b18184611cc5565b9093179260006112c2876003611cc5565b60021890506112d18188611cc5565b6112dc906002611bca565b6112e69082611cc5565b90506112f28188611cc5565b6112fd906002611bca565b6113079082611cc5565b90506113138188611cc5565b61131e906002611bca565b6113289082611cc5565b90506113348188611cc5565b61133f906002611bca565b6113499082611cc5565b90506113558188611cc5565b611360906002611bca565b61136a9082611cc5565b90506113768188611cc5565b611381906002611bca565b61138b9082611cc5565b90506113978186611cc5565b9998505050505050505050565b610661816119b7565b600081806113bb8686611bca565b6113c59190611cfe565b6113cf9190611cc5565b949350505050565b611420848484846040516024016113f19493929190611d20565b60408051601f198184030181529190526020810180516001600160e01b031663a7a8785360e01b1790526113a4565b50505050565b6000805460405163e6a4390560e01b81526001600160a01b03858116600483015284811660248301528392839291169063e6a4390590604401602060405180830381865afa15801561147c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a09190611d4f565b90506114cf6040518060400160405280600b81526020016a02ab9b4b733902820a4a9160ad1b815250826119d8565b6000856001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015611519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153d9190611d4f565b6001600160a01b03161490506000816115b757826001600160a01b0316635909c0d56040518163ffffffff1660e01b8152600401602060405180830381865afa15801561158e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b29190611d6c565b611619565b826001600160a01b0316635a3d54936040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116199190611d6c565b90506000836001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561165b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167f9190611da1565b63ffffffff16925050506116c06040518060400160405280601581526020017410d553554814149250d148155b9a48199bdc9b585d605a1b8152508361117c565b6116d382600160801b600160701b611220565b91506117016040518060400160405280600a81526020016943554d5520505249434560b01b8152508361117c565b909450925050505b9250929050565b6106ab83838360405160240161172893929190611de6565b60408051601f198184030181529190526020810180516001600160e01b031663ca47c4eb60e01b1790526113a4565b60006117638584611bca565b61176d8584611bca565b6117779190611cfe565b95945050505050565b6000848152600260205260408120541515905b60058110156118e7578381815181106117ae576117ae611bdd565b60200260200101516000146118b8576000826117cb5760006117f7565b60008781526002602052604090208054839081106117eb576117eb611bdd565b90600052602060002001545b9050600081156118115761180c8383896111c5565b611813565b865b905085838151811061182757611827611bdd565b602002602001015185846006811061184157611841611bdd565b602002018181516118529190611c10565b905250831561188f57600088815260026020526040902080548291908590811061187e5761187e611bdd565b6000918252602090912001556118b1565b6000888152600260209081526040822080546001810182559083529120018190555b50506118df565b816118df576000868152600260209081526040822080546001810182559083529120018590555b600101611793565b505050505050565b60008115806118fe5750816001145b806119095750816002145b1561192857600261191e600160801b82611cc5565b61037d9190611cfe565b8160030361194157601a61191e600160801b6002611cc5565b8160040361195a57603361191e600160801b6002611cc5565b8160050361197357606561191e600160801b6002611cc5565b60405162461bcd60e51b81526020600482015260196024820152782aa79d1032b6b0a5bc18991c16a1b0b713ba103430b83832b760391b6044820152606401610229565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6111c182826040516024016119ee929190611e0b565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790526113a4565b60008083601f840112611a2f57600080fd5b50813567ffffffffffffffff811115611a4757600080fd5b6020830191508360208260051b850101111561170957600080fd5b60008060208385031215611a7557600080fd5b823567ffffffffffffffff811115611a8c57600080fd5b611a9885828601611a1d565b90969095509350505050565b6001600160a01b038116811461066157600080fd5b60008060408385031215611acc57600080fd5b8235611ad781611aa4565b91506020830135611ae781611aa4565b809150509250929050565b600060208284031215611b0457600080fd5b5035919050565b60008060408385031215611b1e57600080fd5b50508035926020909101359150565b600080600060408486031215611b4257600080fd5b833567ffffffffffffffff811115611b5957600080fd5b611b6586828701611a1d565b909450925050602084013560068110611b7d57600080fd5b809150509250925092565b6020808252601290820152711553ce881c185d1a081d1bdbc81cda1bdc9d60721b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561037d5761037d611bb4565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611c0557600080fd5b813561038f81611aa4565b8082018082111561037d5761037d611bb4565b634e487b7160e01b600052602160045260246000fd5b6000815180845260005b81811015611c5f57602081850181015186830182015201611c43565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061038f6020830184611c39565b606081526000611ca56060830186611c39565b6001600160a01b0394851660208401529290931660409091015292915050565b808202811582820484141761037d5761037d611bb4565b604081526000611cef6040830185611c39565b90508260208301529392505050565b600082611d1b57634e487b7160e01b600052601260045260246000fd5b500490565b608081526000611d336080830187611c39565b6020830195909552506040810192909252606090910152919050565b600060208284031215611d6157600080fd5b815161038f81611aa4565b600060208284031215611d7e57600080fd5b5051919050565b80516001600160701b0381168114611d9c57600080fd5b919050565b600080600060608486031215611db657600080fd5b611dbf84611d85565b9250611dcd60208501611d85565b9150604084015163ffffffff81168114611b7d57600080fd5b606081526000611df96060830186611c39565b60208301949094525060400152919050565b604081526000611e1e6040830185611c39565b905060018060a01b0383166020830152939250505056fea264697066735822122003c6a08984541a70806f961cda535c5a23944b97b34e6093d34c12ac68f2863264736f6c63430008180033";
const isSuperArgs = (xs) => xs.length > 1;
class UniswapOracle__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_factory, overrides) {
        return super.getDeployTransaction(_factory, overrides || {});
    }
    deploy(_factory, overrides) {
        return super.deploy(_factory, overrides || {});
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
exports.UniswapOracle__factory = UniswapOracle__factory;
UniswapOracle__factory.bytecode = _bytecode;
UniswapOracle__factory.abi = _abi;