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

export interface QuantumPortalPocImplInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "VERSION"
      | "admin"
      | "clearContext"
      | "context"
      | "estimateGasForRemoteTransaction"
      | "executeRemoteTransaction"
      | "feeTarget"
      | "feeToken"
      | "inventory"
      | "localTransfer"
      | "mgr"
      | "msgSender"
      | "nativeFeeRepo"
      | "owner"
      | "rejectRemoteTransaction"
      | "remoteBalanceOf"
      | "remoteTransfer"
      | "renounceOwnership"
      | "run"
      | "runFromToken"
      | "runFromTokenNativeFee"
      | "runNativeFee"
      | "runWithValue"
      | "runWithValueNativeFee"
      | "runWithdraw"
      | "setAdmin"
      | "setFeeToken"
      | "setManager"
      | "setNativeFeeRepo"
      | "state"
      | "transferOwnership"
      | "txContext"
      | "updateFeeTarget"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminSet"
      | "ExecutionReverted"
      | "LocalTransfer"
      | "OwnershipTransferred"
      | "RemoteTransfer"
  ): EventFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
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
  encodeFunctionData(functionFragment: "feeTarget", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "localTransfer",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "mgr", values?: undefined): string;
  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nativeFeeRepo",
    values?: undefined
  ): string;
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
    functionFragment: "remoteTransfer",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "run",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runFromToken",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runFromTokenNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithValue",
    values: [BigNumberish, AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithValueNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithdraw",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setNativeFeeRepo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "txContext", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateFeeTarget",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "feeTarget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mgr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeFeeRepo",
    data: BytesLike
  ): Result;
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
    functionFragment: "remoteTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "runFromToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runFromTokenNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithValueNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNativeFeeRepo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txContext", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
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

export namespace LocalTransferEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, amount: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    amount: bigint;
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

export interface QuantumPortalPocImpl extends BaseContract {
  connect(runner?: ContractRunner | null): QuantumPortalPocImpl;
  waitForDeployment(): Promise<this>;

  interface: QuantumPortalPocImplInterface;

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

  VERSION: TypedContractMethod<[], [string], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  clearContext: TypedContractMethod<[], [void], "nonpayable">;

  context: TypedContractMethod<
    [],
    [
      [
        bigint,
        QuantumPortalLib.BlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput,
        bigint
      ] & {
        index: bigint;
        blockMetadata: QuantumPortalLib.BlockStructOutput;
        transaction: QuantumPortalLib.RemoteTransactionStructOutput;
        uncommitedBalance: bigint;
      }
    ],
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

  feeTarget: TypedContractMethod<[], [string], "view">;

  feeToken: TypedContractMethod<[], [string], "view">;

  inventory: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  localTransfer: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  mgr: TypedContractMethod<[], [string], "view">;

  msgSender: TypedContractMethod<
    [],
    [
      [bigint, string, string] & {
        sourceNetwork: bigint;
        sourceMsgSender: string;
        sourceBeneficiary: string;
      }
    ],
    "view"
  >;

  nativeFeeRepo: TypedContractMethod<[], [string], "view">;

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

  remoteTransfer: TypedContractMethod<
    [
      chainId: BigNumberish,
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  run: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  runFromToken: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  runFromTokenNativeFee: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  runNativeFee: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "payable"
  >;

  runWithValue: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  runWithValueNativeFee: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "payable"
  >;

  runWithdraw: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteAddress: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setFeeToken: TypedContractMethod<
    [_feeToken: AddressLike],
    [void],
    "nonpayable"
  >;

  setManager: TypedContractMethod<
    [_mgr: AddressLike, _state: AddressLike],
    [void],
    "nonpayable"
  >;

  setNativeFeeRepo: TypedContractMethod<
    [_nativeFeeRepo: AddressLike],
    [void],
    "nonpayable"
  >;

  state: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  txContext: TypedContractMethod<
    [],
    [QuantumPortalLib.ContextStructOutput],
    "view"
  >;

  updateFeeTarget: TypedContractMethod<[], [void], "nonpayable">;

  withdraw: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "clearContext"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "context"
  ): TypedContractMethod<
    [],
    [
      [
        bigint,
        QuantumPortalLib.BlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput,
        bigint
      ] & {
        index: bigint;
        blockMetadata: QuantumPortalLib.BlockStructOutput;
        transaction: QuantumPortalLib.RemoteTransactionStructOutput;
        uncommitedBalance: bigint;
      }
    ],
    "view"
  >;
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
    nameOrSignature: "feeTarget"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "inventory"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "localTransfer"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "msgSender"
  ): TypedContractMethod<
    [],
    [
      [bigint, string, string] & {
        sourceNetwork: bigint;
        sourceMsgSender: string;
        sourceBeneficiary: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "nativeFeeRepo"
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
    nameOrSignature: "remoteTransfer"
  ): TypedContractMethod<
    [
      chainId: BigNumberish,
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "run"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runFromToken"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runFromTokenNativeFee"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runNativeFee"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runWithValue"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runWithValueNativeFee"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runWithdraw"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteAddress: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeToken"
  ): TypedContractMethod<[_feeToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setManager"
  ): TypedContractMethod<
    [_mgr: AddressLike, _state: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setNativeFeeRepo"
  ): TypedContractMethod<[_nativeFeeRepo: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "txContext"
  ): TypedContractMethod<[], [QuantumPortalLib.ContextStructOutput], "view">;
  getFunction(
    nameOrSignature: "updateFeeTarget"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

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
    key: "LocalTransfer"
  ): TypedContractEvent<
    LocalTransferEvent.InputTuple,
    LocalTransferEvent.OutputTuple,
    LocalTransferEvent.OutputObject
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

    "LocalTransfer(address,address,uint256)": TypedContractEvent<
      LocalTransferEvent.InputTuple,
      LocalTransferEvent.OutputTuple,
      LocalTransferEvent.OutputObject
    >;
    LocalTransfer: TypedContractEvent<
      LocalTransferEvent.InputTuple,
      LocalTransferEvent.OutputTuple,
      LocalTransferEvent.OutputObject
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