/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IStakeInfo,
  IStakeInfoInterface,
} from "../../../../../contracts/staking/interfaces/IStakeInfo.sol/IStakeInfo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address",
      },
    ],
    name: "isTokenizable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "id",
        type: "address",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "stakeOf",
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
        name: "id",
        type: "address",
      },
    ],
    name: "stakedBalance",
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
] as const;

export class IStakeInfo__factory {
  static readonly abi = _abi;
  static createInterface(): IStakeInfoInterface {
    return new Interface(_abi) as IStakeInfoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IStakeInfo {
    return new Contract(address, _abi, runner) as unknown as IStakeInfo;
  }
}
