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
import type { NonPayableOverrides } from "../../../common";
import type {
  WalletRegistration,
  WalletRegistrationInterface,
} from "../../../contracts/btfd/WalletRegistration";

const _abi = [
  {
    inputs: [],
    name: "NotValidTx",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
    ],
    name: "registerProxyFromBtcTx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unregisterProxy",
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
    name: "walletForProxy",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061015d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630e8ec56014610046578063a6ca7f511461005b578063fdea2194146100a0575b600080fd5b6100596100543660046100de565b6100c2565b005b6100846100693660046100f7565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61005933600090815260208190526040902080546001600160a01b0319169055565b60008060405163316e496f60e01b815260040160405180910390fd5b6000602082840312156100f057600080fd5b5035919050565b60006020828403121561010957600080fd5b81356001600160a01b038116811461012057600080fd5b939250505056fea2646970667358221220f0ffa836b615da042511f5d78964955b57e5891d63b4a517e699f28fdccd4b5f64736f6c63430008180033";

type WalletRegistrationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletRegistrationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletRegistration__factory extends ContractFactory {
  constructor(...args: WalletRegistrationConstructorParams) {
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
      WalletRegistration & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WalletRegistration__factory {
    return super.connect(runner) as WalletRegistration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletRegistrationInterface {
    return new Interface(_abi) as WalletRegistrationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WalletRegistration {
    return new Contract(address, _abi, runner) as unknown as WalletRegistration;
  }
}