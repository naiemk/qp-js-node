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
import type { NonPayableOverrides } from "../../../../common";
import type {
  DirectMinimalErc20_,
  DirectMinimalErc20_Interface,
} from "../../../../contracts/quantumPortal/ReferencesForTest.sol/DirectMinimalErc20_";

const _abi = [
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
    name: "_name",
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
    name: "_symbol",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    name: "init",
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
    name: "renounceOwnership",
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
  "0x60806040523480156200001157600080fd5b50604080516020808201835260008083528351918201909352918252339160036200003d838262000189565b5060046200004c828262000189565b5050506001600160a01b0381166200007e57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000898162000090565b5062000255565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200010d57607f821691505b6020821081036200012e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000184576000816000526020600020601f850160051c810160208610156200015f5750805b601f850160051c820191505b8181101562000180578281556001016200016b565b5050505b505050565b81516001600160401b03811115620001a557620001a5620000e2565b620001bd81620001b68454620000f8565b8462000134565b602080601f831160018114620001f55760008415620001dc5750858301515b600019600386901b1c1916600185901b17855562000180565b600085815260208120601f198616915b82811015620002265788860151825594840194600190910190840162000205565b5085821015620002455787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610cd980620002656000396000f3fe608060405234801561001057600080fd5b50600436106100eb5760003560e01c806379cc67901161009257806379cc6790146101ab5780638da5cb5b146101be57806395d89b41146101d7578063a9059cbb146101df578063b09f1266146101f2578063d2209ad9146101fa578063d28d88521461020d578063dd62ed3e14610215578063f2fde38b1461022857600080fd5b806306fdde03146100f0578063095ea7b31461010e57806318160ddd1461013157806323b872dd14610143578063313ce5671461015657806342966c681461016557806370a082311461017a578063715018a6146101a3575b600080fd5b6100f861023b565b60405161010591906108a5565b60405180910390f35b61012161011c366004610910565b6102cd565b6040519015158152602001610105565b6002545b604051908152602001610105565b61012161015136600461093a565b6102e7565b60405160128152602001610105565b610178610173366004610976565b61030b565b005b61013561018836600461098f565b6001600160a01b031660009081526020819052604090205490565b610178610318565b6101786101b9366004610910565b61032c565b6005546001600160a01b031660405161010591906109b1565b6100f8610345565b6101216101ed366004610910565b610354565b6100f8610362565b610178610208366004610a68565b6103f0565b6100f861049d565b610135610223366004610ae4565b6104aa565b61017861023636600461098f565b6104d5565b60606006805461024a90610b17565b80601f016020809104026020016040519081016040528092919081815260200182805461027690610b17565b80156102c35780601f10610298576101008083540402835291602001916102c3565b820191906000526020600020905b8154815290600101906020018083116102a657829003601f168201915b5050505050905090565b6000336102db818585610510565b60019150505b92915050565b6000336102f5858285610522565b61030085858561056f565b506001949350505050565b61031533826105ce565b50565b610320610604565b61032a6000610631565b565b610337823383610522565b61034182826105ce565b5050565b60606007805461024a90610b17565b6000336102db81858561056f565b6007805461036f90610b17565b80601f016020809104026020016040519081016040528092919081815260200182805461039b90610b17565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b505050505081565b6103f8610604565b6006805461040590610b17565b159050801561042057506007805461041c90610b17565b1590505b801561042c5750600254155b6104735760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064015b60405180910390fd5b600661047f8482610ba1565b50600761048c8382610ba1565b506104978482610683565b50505050565b6006805461036f90610b17565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6104dd610604565b6001600160a01b038116610507576000604051631e4fbdf760e01b815260040161046a91906109b1565b61031581610631565b61051d83838360016106b9565b505050565b600061052e84846104aa565b90506000198114610497578181101561056057828183604051637dc7a0d960e11b815260040161046a93929190610c61565b610497848484840360006106b9565b6001600160a01b038316610599576000604051634b637e8f60e11b815260040161046a91906109b1565b6001600160a01b0382166105c357600060405163ec442f0560e01b815260040161046a91906109b1565b61051d83838361078e565b6001600160a01b0382166105f8576000604051634b637e8f60e11b815260040161046a91906109b1565b6103418260008361078e565b6005546001600160a01b0316331461032a573360405163118cdaa760e01b815260040161046a91906109b1565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166106ad57600060405163ec442f0560e01b815260040161046a91906109b1565b6103416000838361078e565b6001600160a01b0384166106e357600060405163e602df0560e01b815260040161046a91906109b1565b6001600160a01b03831661070d576000604051634a1406b160e11b815260040161046a91906109b1565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561049757826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161078091815260200190565b60405180910390a350505050565b6001600160a01b0383166107b95780600260008282546107ae9190610c82565b909155506108189050565b6001600160a01b038316600090815260208190526040902054818110156107f95783818360405163391434e360e21b815260040161046a93929190610c61565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661083457600280548290039055610853565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161089891815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156108d3578581018301518582016040015282016108b7565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461090b57600080fd5b919050565b6000806040838503121561092357600080fd5b61092c836108f4565b946020939093013593505050565b60008060006060848603121561094f57600080fd5b610958846108f4565b9250610966602085016108f4565b9150604084013590509250925092565b60006020828403121561098857600080fd5b5035919050565b6000602082840312156109a157600080fd5b6109aa826108f4565b9392505050565b6001600160a01b0391909116815260200190565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126109ec57600080fd5b813567ffffffffffffffff80821115610a0757610a076109c5565b604051601f8301601f19908116603f01168101908282118183101715610a2f57610a2f6109c5565b81604052838152866020858801011115610a4857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610a7e57600080fd5b610a87856108f4565b9350602085013567ffffffffffffffff80821115610aa457600080fd5b610ab0888389016109db565b94506040870135915080821115610ac657600080fd5b50610ad3878288016109db565b949793965093946060013593505050565b60008060408385031215610af757600080fd5b610b00836108f4565b9150610b0e602084016108f4565b90509250929050565b600181811c90821680610b2b57607f821691505b602082108103610b4b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561051d576000816000526020600020601f850160051c81016020861015610b7a5750805b601f850160051c820191505b81811015610b9957828155600101610b86565b505050505050565b815167ffffffffffffffff811115610bbb57610bbb6109c5565b610bcf81610bc98454610b17565b84610b51565b602080601f831160018114610c045760008415610bec5750858301515b600019600386901b1c1916600185901b178555610b99565b600085815260208120601f198616915b82811015610c3357888601518255948401946001909101908401610c14565b5085821015610c515787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b039390931683526020830191909152604082015260600190565b808201808211156102e157634e487b7160e01b600052601160045260246000fdfea2646970667358221220e2a28dd60c038c50bd89e5fffb05799ef94faa71780fd9fb479bcdcac26c96b264736f6c63430008180033";

type DirectMinimalErc20_ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DirectMinimalErc20_ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DirectMinimalErc20___factory extends ContractFactory {
  constructor(...args: DirectMinimalErc20_ConstructorParams) {
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
      DirectMinimalErc20_ & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DirectMinimalErc20___factory {
    return super.connect(runner) as DirectMinimalErc20___factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DirectMinimalErc20_Interface {
    return new Interface(_abi) as DirectMinimalErc20_Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DirectMinimalErc20_ {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DirectMinimalErc20_;
  }
}
