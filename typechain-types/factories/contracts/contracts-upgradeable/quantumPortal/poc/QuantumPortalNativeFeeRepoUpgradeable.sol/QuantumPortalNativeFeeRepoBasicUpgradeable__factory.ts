/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  QuantumPortalNativeFeeRepoBasicUpgradeable,
  QuantumPortalNativeFeeRepoBasicUpgradeableInterface,
} from "../../../../../../contracts/contracts-upgradeable/quantumPortal/poc/QuantumPortalNativeFeeRepoUpgradeable.sol/QuantumPortalNativeFeeRepoBasicUpgradeable";

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
    name: "feeConvertor",
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
        name: "_portal",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeConvertor",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialAdmin",
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
    inputs: [],
    name: "swapFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sweepTarget",
        type: "address",
      },
    ],
    name: "sweepFrm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sweepTarget",
        type: "address",
      },
    ],
    name: "sweepGas",
    outputs: [],
    stateMutability: "payable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506110de806100206000396000f3fe60806040526004361061009c5760003560e01c80639c6844f7116100645780639c6844f714610125578063b8863a1814610145578063f2fde38b14610182578063f851a440146101a2578063f8c8765e146101b7578063ffa1ad74146101d757600080fd5b806312bca514146100a157806354cf2aeb146100b6578063704b6c02146100be578063715018a6146100de5780638da5cb5b146100f3575b600080fd5b6100b46100af366004610f11565b610217565b005b6100b46102a4565b3480156100ca57600080fd5b506100b46100d9366004610f11565b6104c0565b3480156100ea57600080fd5b506100b461053b565b3480156100ff57600080fd5b5061010861054f565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561013157600080fd5b506100b4610140366004610f11565b610584565b34801561015157600080fd5b507fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b01546001600160a01b0316610108565b34801561018e57600080fd5b506100b461019d366004610f11565b610738565b3480156101ae57600080fd5b50610108610773565b3480156101c357600080fd5b506100b46101d2366004610f2e565b61079c565b3480156101e357600080fd5b5061020a604051806040016040528060078152602001663030302e30303160c81b81525081565b60405161011c9190610fae565b61021f610773565b6001600160a01b0316336001600160a01b03161480610256575061024161054f565b6001600160a01b0316336001600160a01b0316145b6102975760405162461bcd60e51b815260206004820152600d60248201526c2ba09d103737ba1030b236b4b760991b60448201526064015b60405180910390fd5b6102a181476108b2565b50565b7fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b02547fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b00906001600160a01b031633146103345760405162461bcd60e51b815260206004820152601260248201527114541391948e881b9bdd08185b1b1bddd95960721b604482015260640161028e565b60018101546040805163aa6fff7360e01b8152905134926000926001600160a01b039091169163aa6fff7391600480820192602092909190829003018187875af1158015610386573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103aa9190610fe1565b905060006103bd8284600160801b61098c565b90506104ba8460020160009054906101000a90046001600160a01b03166001600160a01b031663cd3c695a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610417573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043b9190610ffa565b60028601546040805163647846a560e01b8152905185926001600160a01b03169163647846a59160048083019260209291908290030181865afa158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa9190610ffa565b6001600160a01b03169190610b12565b50505050565b6104c8610b64565b7f9cc69353251ee3fe681ee5e74b127d3c581100030841b8c40ca6499da8df4f0080546001600160a01b0383166001600160a01b03199091168117825560408051918252517f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c9181900360200190a15050565b610543610b64565b61054d6000610b96565b565b6000807f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005b546001600160a01b031692915050565b61058c610773565b6001600160a01b0316336001600160a01b031614806105c357506105ae61054f565b6001600160a01b0316336001600160a01b0316145b6105ff5760405162461bcd60e51b815260206004820152600d60248201526c2ba09d103737ba1030b236b4b760991b604482015260640161028e565b7fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b02546040805163647846a560e01b815290517fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b00926000926001600160a01b039091169163647846a5916004808201926020929091908290030181865afa15801561068d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b19190610ffa565b6040516370a0823160e01b81523060048201529091506107339084906001600160a01b038416906370a0823190602401602060405180830381865afa1580156106fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190610fe1565b6001600160a01b0384169190610b12565b505050565b610740610b64565b6001600160a01b03811661076a57604051631e4fbdf760e01b81526000600482015260240161028e565b6102a181610b96565b6000807f9cc69353251ee3fe681ee5e74b127d3c581100030841b8c40ca6499da8df4f00610574565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156107e25750825b905060008267ffffffffffffffff1660011480156107ff5750303b155b90508115801561080d575080155b1561082b5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561085557845460ff60401b1916600160401b1785555b61086189898989610c07565b83156108a757845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b604080516000808252602082019092526001600160a01b0384169083906040516108dc9190611017565b60006040518083038185875af1925050503d8060008114610919576040519150601f19603f3d011682016040523d82523d6000602084013e61091e565b606091505b50509050806107335760405162461bcd60e51b815260206004820152603460248201527f5472616e7366657248656c7065723a3a736166655472616e736665724554483a60448201527308115512081d1c985b9cd9995c8819985a5b195960621b606482015260840161028e565b60008080600019858709858702925082811083820303915050806000036109c557600084116109ba57600080fd5b508290049050610b0b565b8084116109d157600080fd5b6000848688098084039381119092039190506000856109f281600019611049565b6109fd90600161105c565b16958690049593849004936000819003046001019050610a1d818461106f565b909317926000610a2e87600361106f565b6002189050610a3d818861106f565b610a48906002611049565b610a52908261106f565b9050610a5e818861106f565b610a69906002611049565b610a73908261106f565b9050610a7f818861106f565b610a8a906002611049565b610a94908261106f565b9050610aa0818861106f565b610aab906002611049565b610ab5908261106f565b9050610ac1818861106f565b610acc906002611049565b610ad6908261106f565b9050610ae2818861106f565b610aed906002611049565b610af7908261106f565b9050610b03818661106f565b955050505050505b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610733908490610c23565b33610b6d61054f565b6001600160a01b03161461054d5760405163118cdaa760e01b815233600482015260240161028e565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b610c0f610c86565b610c198282610ccf565b6104ba8484610ced565b6000610c386001600160a01b03841683610d61565b90508051600014158015610c5d575080806020019051810190610c5b9190611086565b155b1561073357604051635274afe760e01b81526001600160a01b038416600482015260240161028e565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff1661054d57604051631afcd79f60e31b815260040160405180910390fd5b610cd7610c86565b610ce082610d78565b610ce981610d89565b5050565b610cf5610c86565b7fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b0280546001600160a01b039384166001600160a01b0319918216179091557fae7fdbb2d201f5b87e85ad14aa609294a809885fb99c06bf8a86920d30693b018054929093169116179055565b6060610d6f83836000610dd2565b90505b92915050565b610d80610c86565b6102a181610e6f565b610d91610c86565b7f9cc69353251ee3fe681ee5e74b127d3c581100030841b8c40ca6499da8df4f0080546001600160a01b0319166001600160a01b0392909216919091179055565b606081471015610df75760405163cd78605960e01b815230600482015260240161028e565b600080856001600160a01b03168486604051610e139190611017565b60006040518083038185875af1925050503d8060008114610e50576040519150601f19603f3d011682016040523d82523d6000602084013e610e55565b606091505b5091509150610e65868383610e77565b9695505050505050565b610740610c86565b606082610e8c57610e8782610ed3565b610b0b565b8151158015610ea357506001600160a01b0384163b155b15610ecc57604051639996b31560e01b81526001600160a01b038516600482015260240161028e565b5080610b0b565b805115610ee35780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6001600160a01b03811681146102a157600080fd5b600060208284031215610f2357600080fd5b8135610b0b81610efc565b60008060008060808587031215610f4457600080fd5b8435610f4f81610efc565b93506020850135610f5f81610efc565b92506040850135610f6f81610efc565b91506060850135610f7f81610efc565b939692955090935050565b60005b83811015610fa5578181015183820152602001610f8d565b50506000910152565b6020815260008251806020840152610fcd816040850160208701610f8a565b601f01601f19169190910160400192915050565b600060208284031215610ff357600080fd5b5051919050565b60006020828403121561100c57600080fd5b8151610b0b81610efc565b60008251611029818460208701610f8a565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610d7257610d72611033565b80820180821115610d7257610d72611033565b8082028115828204841417610d7257610d72611033565b60006020828403121561109857600080fd5b81518015158114610b0b57600080fdfea26469706673582212206969bffb98e4e1ffc5e9da93e3d2895ef8bdfb035192827898a3f8491cd9d5e064736f6c63430008180033";

type QuantumPortalNativeFeeRepoBasicUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuantumPortalNativeFeeRepoBasicUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuantumPortalNativeFeeRepoBasicUpgradeable__factory extends ContractFactory {
  constructor(
    ...args: QuantumPortalNativeFeeRepoBasicUpgradeableConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      QuantumPortalNativeFeeRepoBasicUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): QuantumPortalNativeFeeRepoBasicUpgradeable__factory {
    return super.connect(
      runner
    ) as QuantumPortalNativeFeeRepoBasicUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuantumPortalNativeFeeRepoBasicUpgradeableInterface {
    return new Interface(
      _abi
    ) as QuantumPortalNativeFeeRepoBasicUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): QuantumPortalNativeFeeRepoBasicUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as QuantumPortalNativeFeeRepoBasicUpgradeable;
  }
}