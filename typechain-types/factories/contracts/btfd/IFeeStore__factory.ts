/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFeeStore,
  IFeeStoreInterface,
} from "../../../contracts/btfd/IFeeStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "btcAmount",
        type: "uint256",
      },
    ],
    name: "swapBtcWithFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFeeStore__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeStoreInterface {
    return new Interface(_abi) as IFeeStoreInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IFeeStore {
    return new Contract(address, _abi, runner) as unknown as IFeeStore;
  }
}
