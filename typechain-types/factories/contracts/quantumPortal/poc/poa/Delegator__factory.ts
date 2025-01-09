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
  Delegator,
  DelegatorInterface,
} from "../../../../../contracts/quantumPortal/poc/poa/Delegator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "delator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "Delegated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
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
    name: "delegation",
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
        name: "key",
        type: "address",
      },
    ],
    name: "getReverseDelegation",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "deleted",
            type: "uint8",
          },
        ],
        internalType: "struct IDelegator.ReverseDelegation",
        name: "",
        type: "tuple",
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
    ],
    name: "reverseDelegation",
    outputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "deleted",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104a1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635c19a95c14610051578063af38806514610066578063eed50a32146100ed578063f5daabad1461012e575b600080fd5b61006461005f36600461043b565b610184565b005b6100c161007436600461043b565b604080518082018252600080825260209182018190526001600160a01b039384168152600182528290208251808401909352549283168252600160a01b90920460ff169181019190915290565b6040805182516001600160a01b0316815260209283015160ff1692810192909252015b60405180910390f35b6101166100fb36600461043b565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100e4565b61016361013c36600461043b565b6001602052600090815260409020546001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b03909316835260ff9091166020830152016100e4565b336000908152602081905260409020546001600160a01b03908116908216610276576001600160a01b0381166101f85760405162461bcd60e51b8152602060048201526014602482015273443a206e6f7468696e6720746f2064656c65746560601b60448201526064015b60405180910390fd5b3360008181526020818152604080832080546001600160a01b03191690556001600160a01b038516835260018252808320805460ff60a01b1916600160a01b1790558051938452908301919091527f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea291015b60405180910390a15050565b6001600160a01b0382811660009081526001602052604090205416156102ea5760405162461bcd60e51b815260206004820152602360248201527f443a20746f20697320616c72656164792064656c65676174656420746f206f746044820152623432b960e91b60648201526084016101ef565b6001600160a01b0382811660009081526020819052604090205416156103525760405162461bcd60e51b815260206004820152601e60248201527f443a20746f2068617320612064656c65676174696f6e20616c7265616479000060448201526064016101ef565b816001600160a01b0316816001600160a01b0316036103ac5760405162461bcd60e51b81526020600482015260166024820152754d3a206e6f7468696e672077696c6c206368616e676560501b60448201526064016101ef565b3360008181526020818152604080832080546001600160a01b038881166001600160a01b031992831681179093558716855260018452828520805460ff60a01b1916600160a01b17905581855293829020805490941685179093558051938452908301919091527f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea2910161026a565b60006020828403121561044d57600080fd5b81356001600160a01b038116811461046457600080fd5b939250505056fea264697066735822122049e2baf4d3798edd6a13a309a91fd2ec802610097bdb7d18102f83f12d2e3e0f64736f6c63430008180033";

type DelegatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Delegator__factory extends ContractFactory {
  constructor(...args: DelegatorConstructorParams) {
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
      Delegator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Delegator__factory {
    return super.connect(runner) as Delegator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegatorInterface {
    return new Interface(_abi) as DelegatorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Delegator {
    return new Contract(address, _abi, runner) as unknown as Delegator;
  }
}
