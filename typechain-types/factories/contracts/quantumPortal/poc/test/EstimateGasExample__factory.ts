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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  EstimateGasExample,
  EstimateGasExampleInterface,
} from "../../../../../contracts/quantumPortal/poc/test/EstimateGasExample";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_portal",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "len",
        type: "uint256",
      },
    ],
    name: "expensiveContextCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContextLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContextOpen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "noPoc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060035534801561001557600080fd5b5060405161076038038061076083398101604081905261003491610059565b600080546001600160a01b0319166001600160a01b0392909216919091179055610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b6106c8806100986000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c806327dd7e1f146100725780633fb5c1cb1461008757806352f78b591461009a5780636425666b146100a25780638381f58a146100d2578063981d5aaf146100e9578063b60306fe146100f1575b600080fd5b610085610080366004610557565b6100f9565b005b610085610095366004610557565b600355565b610085610205565b6000546100b5906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100db60035481565b6040519081526020016100c9565b61008561022e565b61008561033b565b60008060008060009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa158015610150573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610174919061058c565b9250925092506101a86040518060400160405280600b81526020016a43414c4c4544204259203160a81b8152508484610495565b6101d56040518060400160405280600b81526020016a21a0a62622a210212c901960a91b815250826104e1565b60005b848110156101f95760008181526002602052604090208190556001016101d8565b50506014600355505050565b30600090815260016020819052604082208054919290916102279084906105c8565b9091555050565b60008060008060009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa158015610285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a9919061058c565b9250925092506102dd6040518060400160405280600b81526020016a43414c4c4544204259203160a81b8152508484610495565b61030a6040518060400160405280600b81526020016a21a0a62622a210212c901960a91b815250826104e1565b306000908152600160208190526040822080549192909161032c9084906105c8565b90915550506012600355505050565b60008060008060009054906101000a90046001600160a01b03166001600160a01b031663d737d0c76040518163ffffffff1660e01b8152600401606060405180830381865afa158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b6919061058c565b9250925092506103ea6040518060400160405280600b81526020016a43414c4c4544204259203160a81b8152508484610495565b6104176040518060400160405280600b81526020016a21a0a62622a210212c901960a91b815250826104e1565b6001600160a01b0382166104645760405162461bcd60e51b815260206004820152601060248201526f139bc81a5b9d195c9b985b0818d85b1b60821b604482015260640160405180910390fd5b30600090815260016020819052604082208054919290916104869084906105c8565b90915550506013600355505050565b6104dc8383836040516024016104ad93929190610635565b60408051601f198184030181529190526020810180516001600160e01b031663038fd88960e31b17905261052a565b505050565b61052682826040516024016104f7929190610668565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905261052a565b5050565b61053381610536565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b60006020828403121561056957600080fd5b5035919050565b80516001600160a01b038116811461058757600080fd5b919050565b6000806000606084860312156105a157600080fd5b835192506105b160208501610570565b91506105bf60408501610570565b90509250925092565b808201808211156105e957634e487b7160e01b600052601160045260246000fd5b92915050565b6000815180845260005b81811015610615576020818501810151868301820152016105f9565b506000602082860101526020601f19601f83011685010191505092915050565b60608152600061064860608301866105ef565b6020830194909452506001600160a01b0391909116604090910152919050565b60408152600061067b60408301856105ef565b905060018060a01b0383166020830152939250505056fea2646970667358221220a26e417f977bf43a4578a6fc4b4c6812cd773c0eff9803f4485774b5612bffa064736f6c63430008180033";

type EstimateGasExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EstimateGasExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EstimateGasExample__factory extends ContractFactory {
  constructor(...args: EstimateGasExampleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _portal: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_portal, overrides || {});
  }
  override deploy(
    _portal: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_portal, overrides || {}) as Promise<
      EstimateGasExample & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EstimateGasExample__factory {
    return super.connect(runner) as EstimateGasExample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EstimateGasExampleInterface {
    return new Interface(_abi) as EstimateGasExampleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EstimateGasExample {
    return new Contract(address, _abi, runner) as unknown as EstimateGasExample;
  }
}