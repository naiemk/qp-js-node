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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  MultiChainToken,
  MultiChainTokenInterface,
} from "../../../../../contracts/quantumPortal/poc/example/MultiChainToken";

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
    name: "TOTAL_SUPPLY",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
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
    inputs: [
      {
        internalType: "uint256",
        name: "masterChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "quantumPortal",
        type: "address",
      },
      {
        internalType: "address",
        name: "mintTo",
        type: "address",
      },
    ],
    name: "init",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "mintChain",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "burnChain",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "burnFee",
        type: "uint256",
      },
    ],
    name: "mintAndBurn",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60a06040526002805460ff19166012179055610a2860075569152d02c7e14af68000006008553480156200003257600080fd5b5033806200005a57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000065816200012b565b506000336001600160a01b0316638eb36e3d6040518163ffffffff1660e01b81526004016000604051808303816000875af1158015620000a9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000d391908101906200022d565b806020019051810190620000e89190620002ac565b9250826000806001620000fc8582620003b0565b506200010b90508482620003b0565b50505050806000146200011f578062000121565b465b608052506200047c565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b0380841115620001b057620001b06200017d565b604051601f8501601f19908116603f01168101908282118183101715620001db57620001db6200017d565b81604052809350858152868686011115620001f557600080fd5b600092505b858310156200021a578285015160208483010152602083019250620001fa565b6000602087830101525050509392505050565b6000602082840312156200024057600080fd5b81516001600160401b038111156200025757600080fd5b8201601f810184136200026957600080fd5b6200027a8482516020840162000193565b949350505050565b600082601f8301126200029457600080fd5b620002a58383516020850162000193565b9392505050565b600080600060608486031215620002c257600080fd5b83516001600160401b0380821115620002da57600080fd5b620002e88783880162000282565b94506020860151915080821115620002ff57600080fd5b506200030e8682870162000282565b925050604084015190509250925092565b600181811c908216806200033457607f821691505b6020821081036200035557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003ab576000816000526020600020601f850160051c81016020861015620003865750805b601f850160051c820191505b81811015620003a75782815560010162000392565b5050505b505050565b81516001600160401b03811115620003cc57620003cc6200017d565b620003e481620003dd84546200031f565b846200035b565b602080601f8311600181146200041c5760008415620004035750858301515b600019600386901b1c1916600185901b178555620003a7565b600085815260208120601f198616915b828110156200044d578886015182559484019460019091019084016200042c565b50858210156200046c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610ff5620004ad60003960008181610289015281816104800152818161059101526107f50152610ff56000f3fe608060405234801561001057600080fd5b506004361061012d5760003560e01c806364494fdf116100b357806364494fdf1461025357806370a082311461025c578063715018a61461027c57806385e1f4d0146102845780638da5cb5b146102ab578063902d55a5146102bc57806395d89b41146102c55780639dc29fac146102cd578063a9059cbb146102e0578063b14c13fb146102f3578063dd62ed3e14610306578063f2fde38b1461033157600080fd5b806306fdde0314610132578063095ea7b31461015057806318160ddd1461017357806323b872dd1461018a5780632ed0dfb31461019d578063313ce567146101b257806340c10f19146101d15780634557b4bb146101e45780634ff83493146101f757806353e417d01461020a5780636425666b14610240575b600080fd5b61013a610344565b6040516101479190610c7f565b60405180910390f35b61016361015e366004610cae565b6103d2565b6040519015158152602001610147565b61017c60035481565b604051908152602001610147565b610163610198366004610cda565b6103e9565b6101b06101ab366004610d37565b61047e565b005b6002546101bf9060ff1681565b60405160ff9091168152602001610147565b6101b06101df366004610cae565b6106a7565b6101b06101f2366004610d84565b610785565b6101b0610205366004610dc6565b61082c565b610233610218366004610df6565b6009602052600090815260409020546001600160a01b031681565b6040516101479190610e0f565b600a54610233906001600160a01b031681565b61017c60075481565b61017c61026a366004610e23565b60046020526000908152604090205481565b6101b0610862565b61017c7f000000000000000000000000000000000000000000000000000000000000000081565b6006546001600160a01b0316610233565b61017c60085481565b61013a610876565b6101b06102db366004610cae565b610883565b6101636102ee366004610cae565b610952565b610233610301366004610df6565b61095f565b61017c610314366004610e40565b600560209081526000928352604080842090915290825290205481565b6101b061033f366004610e23565b61098a565b6000805461035190610e6e565b80601f016020809104026020016040519081016040528092919081815260200182805461037d90610e6e565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b505050505081565b60006103df3384846109c8565b5060015b92915050565b6001600160a01b038316600090815260056020908152604080832033845290915281205460001914610469576001600160a01b0384166000908152600560209081526040808320338452909152902054610444908390610ebe565b6001600160a01b03851660009081526005602090815260408083203384529091529020555b610474848484610a2a565b5060019392505050565b7f0000000000000000000000000000000000000000000000000000000000000000856001600160401b0316036104bd576104b83384610ac0565b61058f565b60006104d1866001600160401b031661095f565b905060006340c10f1960e01b33866040516024016104f0929190610ed1565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252600a54915163167fd47360e21b81529092506001600160a01b03909116906359ff51cc9061055a908a90869033908790600401610eea565b600060405180830381600087803b15801561057457600080fd5b505af1158015610588573d6000803e3d6000fd5b5050505050505b7f0000000000000000000000000000000000000000000000000000000000000000846001600160401b0316036105ce576105c93384610b40565b6106a0565b60006105e2856001600160401b031661095f565b90506000639dc29fac60e01b3386604051602401610601929190610ed1565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252600a54915163167fd47360e21b81529092506001600160a01b03909116906359ff51cc9061066b908990869033908790600401610eea565b600060405180830381600087803b15801561068557600080fd5b505af1158015610699573d6000803e3d6000fd5b5050505050505b5050505050565b600080600a60009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa1580156106fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107219190610f2f565b509150915060075482148015610750575061073b8261095f565b6001600160a01b0316816001600160a01b0316145b6107755760405162461bcd60e51b815260040161076c90610f67565b60405180910390fd5b61077f8484610ac0565b50505050565b61078d610bba565b600354156107d35760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b604482015260640161076c565b6007839055600a80546001600160a01b0319166001600160a01b0384161790557f00000000000000000000000000000000000000000000000000000000000000008390036108275761082781600854610ac0565b505050565b610834610bba565b60009182526009602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b61086a610bba565b6108746000610be7565b565b6001805461035190610e6e565b600080600a60009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa1580156108d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fd9190610f2f565b50915091506007548214801561092c57506109178261095f565b6001600160a01b0316816001600160a01b0316145b6109485760405162461bcd60e51b815260040161076c90610f67565b61077f8484610b40565b60006103df338484610a2a565b6000818152600960205260409020546001600160a01b0316801561098357806103e3565b3092915050565b610992610bba565b6001600160a01b0381166109bc576000604051631e4fbdf760e01b815260040161076c9190610e0f565b6109c581610be7565b50565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316600090815260046020526040902054610a4e908290610ebe565b6001600160a01b038085166000908152600460205260408082209390935590841681522054610a7e908290610f8c565b6001600160a01b038084166000818152600460205260409081902093909355915190851690600080516020610fa083398151915290610a1d9085815260200190565b80600354610ace9190610f8c565b6003556001600160a01b038216600090815260046020526040902054610af5908290610f8c565b6001600160a01b038316600081815260046020526040808220939093559151909190600080516020610fa083398151915290610b349085815260200190565b60405180910390a35050565b6001600160a01b038216600090815260046020526040902054610b64908290610ebe565b6001600160a01b038316600090815260046020526040902055600354610b8b908290610ebe565b6003556040518181526000906001600160a01b03841690600080516020610fa083398151915290602001610b34565b6006546001600160a01b03163314610874573360405163118cdaa760e01b815260040161076c9190610e0f565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000815180845260005b81811015610c5f57602081850181015186830182015201610c43565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610c926020830184610c39565b9392505050565b6001600160a01b03811681146109c557600080fd5b60008060408385031215610cc157600080fd5b8235610ccc81610c99565b946020939093013593505050565b600080600060608486031215610cef57600080fd5b8335610cfa81610c99565b92506020840135610d0a81610c99565b929592945050506040919091013590565b80356001600160401b0381168114610d3257600080fd5b919050565b600080600080600060a08688031215610d4f57600080fd5b610d5886610d1b565b9450610d6660208701610d1b565b94979496505050506040830135926060810135926080909101359150565b600080600060608486031215610d9957600080fd5b833592506020840135610dab81610c99565b91506040840135610dbb81610c99565b809150509250925092565b60008060408385031215610dd957600080fd5b823591506020830135610deb81610c99565b809150509250929050565b600060208284031215610e0857600080fd5b5035919050565b6001600160a01b0391909116815260200190565b600060208284031215610e3557600080fd5b8135610c9281610c99565b60008060408385031215610e5357600080fd5b8235610e5e81610c99565b91506020830135610deb81610c99565b600181811c90821680610e8257607f821691505b602082108103610ea257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156103e3576103e3610ea8565b6001600160a01b03929092168252602082015260400190565b6001600160401b03851681526001600160a01b03848116602083015283166040820152608060608201819052600090610f2590830184610c39565b9695505050505050565b600080600060608486031215610f4457600080fd5b835192506020840151610f5681610c99565b6040850151909250610dbb81610c99565b6020808252600b908201526a139bdd08185b1b1bddd95960aa1b604082015260600190565b808201808211156103e3576103e3610ea856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220585b0e31c9d48d7bfc1f4cb7d66f2b608c3ffd4cdaaabacb58f44917713377a064736f6c63430008180033";

type MultiChainTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiChainTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiChainToken__factory extends ContractFactory {
  constructor(...args: MultiChainTokenConstructorParams) {
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
      MultiChainToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MultiChainToken__factory {
    return super.connect(runner) as MultiChainToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiChainTokenInterface {
    return new Interface(_abi) as MultiChainTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MultiChainToken {
    return new Contract(address, _abi, runner) as unknown as MultiChainToken;
  }
}
