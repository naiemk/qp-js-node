/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace QuantumPortalLib {
  export type BlockStruct = {
    chainId: BigNumberish;
    nonce: BigNumberish;
    timestamp: BigNumberish;
  };

  export type BlockStructOutput = [
    chainId: bigint,
    nonce: bigint,
    timestamp: bigint
  ] & { chainId: bigint; nonce: bigint; timestamp: bigint };

  export type RemoteTransactionStruct = {
    timestamp: BigNumberish;
    remoteContract: AddressLike;
    sourceMsgSender: AddressLike;
    sourceBeneficiary: AddressLike;
    token: AddressLike;
    amount: BigNumberish;
    methods: BytesLike[];
    gas: BigNumberish;
    fixedFee: BigNumberish;
  };

  export type RemoteTransactionStructOutput = [
    timestamp: bigint,
    remoteContract: string,
    sourceMsgSender: string,
    sourceBeneficiary: string,
    token: string,
    amount: bigint,
    methods: string[],
    gas: bigint,
    fixedFee: bigint
  ] & {
    timestamp: bigint;
    remoteContract: string;
    sourceMsgSender: string;
    sourceBeneficiary: string;
    token: string;
    amount: bigint;
    methods: string[];
    gas: bigint;
    fixedFee: bigint;
  };

  export type ContextStruct = {
    index: BigNumberish;
    blockMetadata: QuantumPortalLib.BlockStruct;
    transaction: QuantumPortalLib.RemoteTransactionStruct;
    uncommitedBalance: BigNumberish;
  };

  export type ContextStructOutput = [
    index: bigint,
    blockMetadata: QuantumPortalLib.BlockStructOutput,
    transaction: QuantumPortalLib.RemoteTransactionStructOutput,
    uncommitedBalance: bigint
  ] & {
    index: bigint;
    blockMetadata: QuantumPortalLib.BlockStructOutput;
    transaction: QuantumPortalLib.RemoteTransactionStructOutput;
    uncommitedBalance: bigint;
  };
}

export interface PortalLedgerUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admin"
      | "clearContext"
      | "context"
      | "estimateGasForRemoteTransaction"
      | "executeRemoteTransaction"
      | "getRemoteBalances"
      | "mgr"
      | "owner"
      | "rejectRemoteTransaction"
      | "remoteBalanceOf"
      | "renounceOwnership"
      | "setAdmin"
      | "setManager"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminSet"
      | "ExecutionReverted"
      | "Initialized"
      | "OwnershipTransferred"
      | "RemoteTransfer"
  ): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "clearContext",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "context", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "estimateGasForRemoteTransaction",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      BytesLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRemoteTransaction",
    values: [
      BigNumberish,
      QuantumPortalLib.BlockStruct,
      QuantumPortalLib.RemoteTransactionStruct,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoteBalances",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "mgr", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rejectRemoteTransaction",
    values: [BigNumberish, QuantumPortalLib.RemoteTransactionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteBalanceOf",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearContext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "context", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateGasForRemoteTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRemoteTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoteBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mgr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rejectRemoteTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remoteBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AdminSetEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutionRevertedEvent {
  export type InputTuple = [
    remoteChainId: BigNumberish,
    localContract: AddressLike,
    methodHash: BytesLike,
    gasProvided: BigNumberish,
    gasUsed: BigNumberish,
    revertReason: BytesLike
  ];
  export type OutputTuple = [
    remoteChainId: bigint,
    localContract: string,
    methodHash: string,
    gasProvided: bigint,
    gasUsed: bigint,
    revertReason: string
  ];
  export interface OutputObject {
    remoteChainId: bigint;
    localContract: string;
    methodHash: string;
    gasProvided: bigint;
    gasUsed: bigint;
    revertReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoteTransferEvent {
  export type InputTuple = [
    chainId: BigNumberish,
    token: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    chainId: bigint,
    token: string,
    from: string,
    to: string,
    amount: bigint
  ];
  export interface OutputObject {
    chainId: bigint;
    token: string;
    from: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PortalLedgerUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): PortalLedgerUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: PortalLedgerUpgradeableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  admin: TypedContractMethod<[], [string], "view">;

  clearContext: TypedContractMethod<[], [void], "nonpayable">;

  context: TypedContractMethod<
    [],
    [QuantumPortalLib.ContextStructOutput],
    "view"
  >;

  estimateGasForRemoteTransaction: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      sourceMsgSender: AddressLike,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  executeRemoteTransaction: TypedContractMethod<
    [
      blockIndex: BigNumberish,
      b: QuantumPortalLib.BlockStruct,
      t: QuantumPortalLib.RemoteTransactionStruct,
      gas: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  getRemoteBalances: TypedContractMethod<
    [chainId: BigNumberish, token: AddressLike, remoteContract: AddressLike],
    [bigint],
    "view"
  >;

  mgr: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  rejectRemoteTransaction: TypedContractMethod<
    [sourceChainId: BigNumberish, t: QuantumPortalLib.RemoteTransactionStruct],
    [bigint],
    "nonpayable"
  >;

  remoteBalanceOf: TypedContractMethod<
    [chainId: BigNumberish, token: AddressLike, addr: AddressLike],
    [bigint],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setManager: TypedContractMethod<[_mgr: AddressLike], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "clearContext"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "context"
  ): TypedContractMethod<[], [QuantumPortalLib.ContextStructOutput], "view">;
  getFunction(
    nameOrSignature: "estimateGasForRemoteTransaction"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      sourceMsgSender: AddressLike,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeRemoteTransaction"
  ): TypedContractMethod<
    [
      blockIndex: BigNumberish,
      b: QuantumPortalLib.BlockStruct,
      t: QuantumPortalLib.RemoteTransactionStruct,
      gas: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRemoteBalances"
  ): TypedContractMethod<
    [chainId: BigNumberish, token: AddressLike, remoteContract: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rejectRemoteTransaction"
  ): TypedContractMethod<
    [sourceChainId: BigNumberish, t: QuantumPortalLib.RemoteTransactionStruct],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "remoteBalanceOf"
  ): TypedContractMethod<
    [chainId: BigNumberish, token: AddressLike, addr: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setManager"
  ): TypedContractMethod<[_mgr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "ExecutionReverted"
  ): TypedContractEvent<
    ExecutionRevertedEvent.InputTuple,
    ExecutionRevertedEvent.OutputTuple,
    ExecutionRevertedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RemoteTransfer"
  ): TypedContractEvent<
    RemoteTransferEvent.InputTuple,
    RemoteTransferEvent.OutputTuple,
    RemoteTransferEvent.OutputObject
  >;

  filters: {
    "AdminSet(address)": TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;
    AdminSet: TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;

    "ExecutionReverted(uint64,address,bytes4,uint128,uint128,bytes32)": TypedContractEvent<
      ExecutionRevertedEvent.InputTuple,
      ExecutionRevertedEvent.OutputTuple,
      ExecutionRevertedEvent.OutputObject
    >;
    ExecutionReverted: TypedContractEvent<
      ExecutionRevertedEvent.InputTuple,
      ExecutionRevertedEvent.OutputTuple,
      ExecutionRevertedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RemoteTransfer(uint256,address,address,address,uint256)": TypedContractEvent<
      RemoteTransferEvent.InputTuple,
      RemoteTransferEvent.OutputTuple,
      RemoteTransferEvent.OutputObject
    >;
    RemoteTransfer: TypedContractEvent<
      RemoteTransferEvent.InputTuple,
      RemoteTransferEvent.OutputTuple,
      RemoteTransferEvent.OutputObject
    >;
  };
}