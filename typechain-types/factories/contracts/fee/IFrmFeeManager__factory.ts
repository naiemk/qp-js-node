/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFrmFeeManager,
  IFrmFeeManagerInterface,
} from "../../../contracts/fee/IFrmFeeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payFee",
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
] as const;

export class IFrmFeeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IFrmFeeManagerInterface {
    return new Interface(_abi) as IFrmFeeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFrmFeeManager {
    return new Contract(address, _abi, runner) as unknown as IFrmFeeManager;
  }
}
