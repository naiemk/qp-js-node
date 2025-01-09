/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IWalletRegistration,
  IWalletRegistrationInterface,
} from "../../../contracts/btfd/IWalletRegistration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "proxy",
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

export class IWalletRegistration__factory {
  static readonly abi = _abi;
  static createInterface(): IWalletRegistrationInterface {
    return new Interface(_abi) as IWalletRegistrationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IWalletRegistration {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IWalletRegistration;
  }
}
