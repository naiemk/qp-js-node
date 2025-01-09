/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  PortalLedgerUpgradeable,
  PortalLedgerUpgradeableInterface,
} from "../../../../contracts/quantumPortal/poc/PortalLedgerUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
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
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "AdminSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sourceMsgSender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sourceBeneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "remoteChainId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "localContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "methodHash",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "gasProvided",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "gasUsed",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "revertReason",
        type: "bytes32",
      },
    ],
    name: "ExecutionReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
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
        indexed: false,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RemoteTransfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
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
    name: "clearContext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "context",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "index",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "chainId",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
              },
            ],
            internalType: "struct QuantumPortalLib.Block",
            name: "blockMetadata",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "timestamp",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "remoteContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "sourceMsgSender",
                type: "address",
              },
              {
                internalType: "address",
                name: "sourceBeneficiary",
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
              {
                internalType: "bytes[]",
                name: "methods",
                type: "bytes[]",
              },
              {
                internalType: "uint256",
                name: "gas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fixedFee",
                type: "uint256",
              },
            ],
            internalType: "struct QuantumPortalLib.RemoteTransaction",
            name: "transaction",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "uncommitedBalance",
            type: "uint256",
          },
        ],
        internalType: "struct QuantumPortalLib.Context",
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
        internalType: "uint256",
        name: "remoteChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sourceMsgSender",
        type: "address",
      },
      {
        internalType: "address",
        name: "remoteContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "method",
        type: "bytes",
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
    name: "estimateGasForRemoteTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockIndex",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "chainId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
        ],
        internalType: "struct QuantumPortalLib.Block",
        name: "b",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "remoteContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "sourceMsgSender",
            type: "address",
          },
          {
            internalType: "address",
            name: "sourceBeneficiary",
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
          {
            internalType: "bytes[]",
            name: "methods",
            type: "bytes[]",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedFee",
            type: "uint256",
          },
        ],
        internalType: "struct QuantumPortalLib.RemoteTransaction",
        name: "t",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "executeRemoteTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "remoteContract",
        type: "address",
      },
    ],
    name: "getRemoteBalances",
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
    name: "mgr",
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
    inputs: [
      {
        internalType: "uint256",
        name: "sourceChainId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "remoteContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "sourceMsgSender",
            type: "address",
          },
          {
            internalType: "address",
            name: "sourceBeneficiary",
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
          {
            internalType: "bytes[]",
            name: "methods",
            type: "bytes[]",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fixedFee",
            type: "uint256",
          },
        ],
        internalType: "struct QuantumPortalLib.RemoteTransaction",
        name: "t",
        type: "tuple",
      },
    ],
    name: "rejectRemoteTransaction",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "remoteBalanceOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mgr",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
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

export class PortalLedgerUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): PortalLedgerUpgradeableInterface {
    return new Interface(_abi) as PortalLedgerUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PortalLedgerUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as PortalLedgerUpgradeable;
  }
}
