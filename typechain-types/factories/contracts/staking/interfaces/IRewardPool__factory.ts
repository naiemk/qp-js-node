/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRewardPool,
  IRewardPoolInterface,
} from "../../../../contracts/staking/interfaces/IRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
    ],
    name: "addMarginalReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolId",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
    ],
    name: "addMarginalRewardToPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRewardPool__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardPoolInterface {
    return new Interface(_abi) as IRewardPoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IRewardPool {
    return new Contract(address, _abi, runner) as unknown as IRewardPool;
  }
}
