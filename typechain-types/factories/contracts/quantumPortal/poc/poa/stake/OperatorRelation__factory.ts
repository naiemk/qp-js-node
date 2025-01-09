/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OperatorRelation,
  OperatorRelationInterface,
} from "../../../../../../contracts/quantumPortal/poc/poa/stake/OperatorRelation";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nodeOperator",
        type: "address",
      },
    ],
    name: "NodeOperatorAssigned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "toOp",
        type: "address",
      },
    ],
    name: "assignOperator",
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
    name: "delegateLookup",
    outputs: [
      {
        internalType: "address",
        name: "delegate",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "getDelegateForOperator",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "deleted",
            type: "uint8",
          },
        ],
        internalType: "struct IOperatorRelation.Relationship",
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
    name: "nodeOperator",
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

export class OperatorRelation__factory {
  static readonly abi = _abi;
  static createInterface(): OperatorRelationInterface {
    return new Interface(_abi) as OperatorRelationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OperatorRelation {
    return new Contract(address, _abi, runner) as unknown as OperatorRelation;
  }
}
