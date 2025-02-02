/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ClientPing,
  ClientPingInterface,
} from "../../../contracts/pingPong/ClientPing";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_portal",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_serverChainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_serverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotServer",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "numbPingsSent",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numbPongsReceived",
        type: "uint256",
      },
    ],
    name: "PingPong",
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
    inputs: [],
    name: "feeAmount",
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
        name: "_portal",
        type: "address",
      },
    ],
    name: "initializeWithQp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numbPingsSent",
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
    name: "numbPongsReceived",
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
    name: "ping",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "receivePongResponse",
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
    name: "remotePeers",
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
        internalType: "uint256[]",
        name: "chainIds",
        type: "uint256[]",
      },
    ],
    name: "removeRemotePeers",
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
    inputs: [],
    name: "serverAddress",
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
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    name: "updateFeeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_portal",
        type: "address",
      },
    ],
    name: "updatePortal",
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
        internalType: "address[]",
        name: "remotes",
        type: "address[]",
      },
    ],
    name: "updateRemotePeers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_serverAddress",
        type: "address",
      },
    ],
    name: "updateServerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610e39380380610e3983398101604081905261002f9161013a565b328061005557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005e816100ce565b50600280546001600160a01b0319166001600160a01b0386161790556001600160401b039092166080819052600480546001600160a01b039093166001600160a01b0319938416811790915560079390935560009081526003602052604090208054909116909117905550610194565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b038116811461013557600080fd5b919050565b6000806000806080858703121561015057600080fd5b6101598561011e565b60208601519094506001600160401b038116811461017657600080fd5b92506101846040860161011e565b6060959095015193969295505050565b608051610c836101b66000396000818161028f01526108840152610c836000f3fe608060405234801561001057600080fd5b50600436106101015760003560e01c806371f4ba341161009d57806371f4ba34146101a95780638da5cb5b146101bc5780639ea55bb0146101c4578063aab4ac14146101d7578063b58e3c2e146101ea578063d22f33ca14610213578063db420fe31461021b578063edb88e6b1461022e578063f2fde38b14610237578063f851a4401461024a57600080fd5b806303dd0410146101065780630de010131461011b57806339d4ce0d146101375780635c36b1861461014a5780636425666b1461015257806369e15404146101725780636c6bde881461017b578063704b6c021461018e578063715018a6146101a1575b600080fd5b6101196101143660046109cc565b61025d565b005b61012460065481565b6040519081526020015b60405180910390f35b610119610145366004610a3b565b6102c7565b610119610324565b600254610165906001600160a01b031681565b60405161012e9190610a7c565b61012460075481565b610119610189366004610a90565b61032e565b61011961019c3660046109cc565b61048d565b6101196104eb565b6101196101b73660046109cc565b6104fd565b610165610527565b6101196101d2366004610afb565b610536565b6101196101e53660046109cc565b610543565b6101656101f8366004610afb565b6003602052600090815260409020546001600160a01b031681565b610119610557565b600454610165906001600160a01b031681565b61012460055481565b6101196102453660046109cc565b610670565b600154610165906001600160a01b031681565b6102656106ab565b600480546001600160a01b039092166001600160a01b031992831681179091556001600160401b037f00000000000000000000000000000000000000000000000000000000000000001660009081526003602052604090208054909216179055565b6102cf6106ab565b60005b8181101561031f57600360008484848181106102f0576102f0610b14565b6020908102929092013583525081019190915260400160002080546001600160a01b03191690556001016102d2565b505050565b61032c6106dd565b565b6103366106ab565b8281146103865760405162461bcd60e51b81526020600482015260196024820152785752503a2077726f6e67206e6f2e206f662072656d6f74657360381b60448201526064015b60405180910390fd5b60005b838110156104865760008383838181106103a5576103a5610b14565b90506020020160208101906103ba91906109cc565b6001600160a01b03160361040a5760405162461bcd60e51b815260206004820152601760248201527615d4940e881c995b5bdd19481a5cc81c995c5d5a5c9959604a1b604482015260640161037d565b82828281811061041c5761041c610b14565b905060200201602081019061043191906109cc565b6003600087878581811061044757610447610b14565b6020908102929092013583525081019190915260400160002080546001600160a01b0319166001600160a01b0392909216919091179055600101610389565b5050505050565b6104956106ab565b600180546001600160a01b0319166001600160a01b0383161790556040517f8fe72c3e0020beb3234e76ae6676fa576fbfcae600af1c4fea44784cf0db329c906104e0908390610a7c565b60405180910390a150565b6104f36106ab565b61032c6000610967565b6105056106ab565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b61053e6106ab565b600755565b61054b6106ab565b61055481610505565b50565b600080600260009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa1580156105ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d19190610b2a565b5060008281526003602052604090205491935091506001600160a01b038083169116146106115760405163136e14d160e31b815260040160405180910390fd5b6006805490600061062183610b6d565b91905055507fbd4825697fb22d7bc979ef28a78e3e0c06143de37eb2f60929b30c95adc11b71600554600654604051610664929190918252602082015260400190565b60405180910390a15050565b6106786106ab565b6001600160a01b0381166106a2576000604051631e4fbdf760e01b815260040161037d9190610a7c565b61055481610967565b336106b4610527565b6001600160a01b03161461032c573360405163118cdaa760e01b815260040161037d9190610a7c565b6007541561085557600260009054906101000a90046001600160a01b03166001600160a01b031663647846a56040518163ffffffff1660e01b8152600401602060405180830381865afa158015610738573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075c9190610b94565b6001600160a01b031663a9059cbb600260009054906101000a90046001600160a01b03166001600160a01b031663cd3c695a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e19190610b94565b6007546040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561082f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108539190610bb1565b505b6005805490600061086583610b6d565b90915550506002546004546001600160a01b03918216916359ff51cc917f000000000000000000000000000000000000000000000000000000000000000091166108ad610527565b60405163bc9748a160e01b60208201526024016040516020818303038152906040526040518563ffffffff1660e01b81526004016108ee9493929190610bd3565b600060405180830381600087803b15801561090857600080fd5b505af115801561091c573d6000803e3d6000fd5b50506005546006546040517fbd4825697fb22d7bc979ef28a78e3e0c06143de37eb2f60929b30c95adc11b71945061095d9350918252602082015260400190565b60405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461055457600080fd5b6000602082840312156109de57600080fd5b81356109e9816109b7565b9392505050565b60008083601f840112610a0257600080fd5b5081356001600160401b03811115610a1957600080fd5b6020830191508360208260051b8501011115610a3457600080fd5b9250929050565b60008060208385031215610a4e57600080fd5b82356001600160401b03811115610a6457600080fd5b610a70858286016109f0565b90969095509350505050565b6001600160a01b0391909116815260200190565b60008060008060408587031215610aa657600080fd5b84356001600160401b0380821115610abd57600080fd5b610ac9888389016109f0565b90965094506020870135915080821115610ae257600080fd5b50610aef878288016109f0565b95989497509550505050565b600060208284031215610b0d57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b600080600060608486031215610b3f57600080fd5b835192506020840151610b51816109b7565b6040850151909250610b62816109b7565b809150509250925092565b600060018201610b8d57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610ba657600080fd5b81516109e9816109b7565b600060208284031215610bc357600080fd5b815180151581146109e957600080fd5b6001600160401b03851681526000602060018060a01b03808716602085015280861660408501525060806060840152835180608085015260005b81811015610c295785810183015185820160a001528201610c0d565b50600060a0828601015260a0601f19601f830116850101925050509594505050505056fea26469706673582212204859e79226a845a3271f74341402bca5fea4cffb5d77a0f9032f67a1a1a4fb9b64736f6c63430008180033";

type ClientPingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClientPingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClientPing__factory extends ContractFactory {
  constructor(...args: ClientPingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _portal: AddressLike,
    _serverChainId: BigNumberish,
    _serverAddress: AddressLike,
    _feeAmount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _portal,
      _serverChainId,
      _serverAddress,
      _feeAmount,
      overrides || {}
    );
  }
  override deploy(
    _portal: AddressLike,
    _serverChainId: BigNumberish,
    _serverAddress: AddressLike,
    _feeAmount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _portal,
      _serverChainId,
      _serverAddress,
      _feeAmount,
      overrides || {}
    ) as Promise<
      ClientPing & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ClientPing__factory {
    return super.connect(runner) as ClientPing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClientPingInterface {
    return new Interface(_abi) as ClientPingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ClientPing {
    return new Contract(address, _abi, runner) as unknown as ClientPing;
  }
}
