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
}

export declare namespace IQuantumPortalLedgerMgr {
  export type LocalBlockStruct = { metadata: QuantumPortalLib.BlockStruct };

  export type LocalBlockStructOutput = [
    metadata: QuantumPortalLib.BlockStructOutput
  ] & { metadata: QuantumPortalLib.BlockStructOutput };

  export type MinedBlockStruct = {
    blockHash: BytesLike;
    miner: AddressLike;
    invalidBlock: BigNumberish;
    stake: BigNumberish;
    totalValue: BigNumberish;
    blockMetadata: QuantumPortalLib.BlockStruct;
  };

  export type MinedBlockStructOutput = [
    blockHash: string,
    miner: string,
    invalidBlock: bigint,
    stake: bigint,
    totalValue: bigint,
    blockMetadata: QuantumPortalLib.BlockStructOutput
  ] & {
    blockHash: string;
    miner: string;
    invalidBlock: bigint;
    stake: bigint;
    totalValue: bigint;
    blockMetadata: QuantumPortalLib.BlockStructOutput;
  };
}

export interface QuantumPortalLedgerMgrInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "VERSION"
      | "admin"
      | "authorityMgr"
      | "calculateBlockHash"
      | "calculateFixedFee"
      | "feeConvertor"
      | "finalize"
      | "fixedFeeTarget"
      | "getBlockIdx"
      | "isLocalBlockReady"
      | "lastRemoteMinedBlock"
      | "ledger"
      | "localBlockByNonce"
      | "mineRemoteBlock"
      | "minedBlockByNonce"
      | "minerMgr"
      | "minerMinimumStake"
      | "owner"
      | "registerMiner"
      | "registerTransaction"
      | "renounceOwnership"
      | "setAdmin"
      | "stakes"
      | "state"
      | "submitFraudProof"
      | "transferOwnership"
      | "updateAuthorityMgr"
      | "updateFeeConvertor"
      | "updateFeeTargets"
      | "updateLedger"
      | "updateMinerMgr"
      | "updateMinerMinimumStake"
      | "updateState"
      | "varFeeTarget"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminSet"
      | "FinalizedBlock"
      | "FinalizedInvalidBlock"
      | "FinalizedSnapshot"
      | "LocalBlockCreated"
      | "MinedBlockCreated"
      | "OwnershipTransferred"
      | "RemoteTransactionRegistered"
  ): EventFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "authorityMgr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateBlockHash",
    values: [
      BigNumberish,
      BigNumberish,
      QuantumPortalLib.RemoteTransactionStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateFixedFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeConvertor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalize",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish[],
      BytesLike,
      AddressLike[],
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedFeeTarget",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockIdx",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isLocalBlockReady",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRemoteMinedBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ledger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "localBlockByNonce",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mineRemoteBlock",
    values: [
      BigNumberish,
      BigNumberish,
      QuantumPortalLib.RemoteTransactionStruct[],
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "minedBlockByNonce",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minerMgr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minerMinimumStake",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerMiner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerTransaction",
    values: [
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "stakes", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "submitFraudProof",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      QuantumPortalLib.RemoteTransactionStruct[],
      BytesLike,
      BigNumberish,
      BytesLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAuthorityMgr",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeConvertor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeTargets",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLedger",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinerMgr",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinerMinimumStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateState",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "varFeeTarget",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorityMgr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateFixedFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeConvertor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedFeeTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockIdx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLocalBlockReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRemoteMinedBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ledger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localBlockByNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mineRemoteBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minedBlockByNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minerMgr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minerMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerMiner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitFraudProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAuthorityMgr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeConvertor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLedger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinerMgr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinerMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "varFeeTarget",
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

export namespace FinalizedBlockEvent {
  export type InputTuple = [
    remoteChainId: BigNumberish,
    blockNonce: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    remoteChainId: bigint,
    blockNonce: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    remoteChainId: bigint;
    blockNonce: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizedInvalidBlockEvent {
  export type InputTuple = [
    remoteChainId: BigNumberish,
    blockNonce: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    remoteChainId: bigint,
    blockNonce: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    remoteChainId: bigint;
    blockNonce: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FinalizedSnapshotEvent {
  export type InputTuple = [
    remoteChainId: BigNumberish,
    startBlockNonce: BigNumberish,
    endBlockNonce: BigNumberish,
    finalizers: AddressLike[]
  ];
  export type OutputTuple = [
    remoteChainId: bigint,
    startBlockNonce: bigint,
    endBlockNonce: bigint,
    finalizers: string[]
  ];
  export interface OutputObject {
    remoteChainId: bigint;
    startBlockNonce: bigint;
    endBlockNonce: bigint;
    finalizers: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LocalBlockCreatedEvent {
  export type InputTuple = [
    remoteChainId: BigNumberish,
    nonce: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    remoteChainId: bigint,
    nonce: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    remoteChainId: bigint;
    nonce: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinedBlockCreatedEvent {
  export type InputTuple = [
    blockHash: BytesLike,
    miner: AddressLike,
    stake: BigNumberish,
    totalValue: BigNumberish,
    blockMetadata: QuantumPortalLib.BlockStruct
  ];
  export type OutputTuple = [
    blockHash: string,
    miner: string,
    stake: bigint,
    totalValue: bigint,
    blockMetadata: QuantumPortalLib.BlockStructOutput
  ];
  export interface OutputObject {
    blockHash: string;
    miner: string;
    stake: bigint;
    totalValue: bigint;
    blockMetadata: QuantumPortalLib.BlockStructOutput;
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

export namespace RemoteTransactionRegisteredEvent {
  export type InputTuple = [
    timestamp: BigNumberish,
    remoteContract: AddressLike,
    sourceMsgSender: AddressLike,
    sourceBeneficiary: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    method: BytesLike,
    gas: BigNumberish,
    fixedFee: BigNumberish
  ];
  export type OutputTuple = [
    timestamp: bigint,
    remoteContract: string,
    sourceMsgSender: string,
    sourceBeneficiary: string,
    token: string,
    amount: bigint,
    method: string,
    gas: bigint,
    fixedFee: bigint
  ];
  export interface OutputObject {
    timestamp: bigint;
    remoteContract: string;
    sourceMsgSender: string;
    sourceBeneficiary: string;
    token: string;
    amount: bigint;
    method: string;
    gas: bigint;
    fixedFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface QuantumPortalLedgerMgr extends BaseContract {
  connect(runner?: ContractRunner | null): QuantumPortalLedgerMgr;
  waitForDeployment(): Promise<this>;

  interface: QuantumPortalLedgerMgrInterface;

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

  authorityMgr: TypedContractMethod<[], [string], "view">;

  calculateBlockHash: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[]
    ],
    [string],
    "view"
  >;

  calculateFixedFee: TypedContractMethod<
    [targetChainId: BigNumberish, varSize: BigNumberish],
    [bigint],
    "view"
  >;

  feeConvertor: TypedContractMethod<[], [string], "view">;

  finalize: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      invalidBlockNonces: BigNumberish[],
      finalizersHash: BytesLike,
      finalizers: AddressLike[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  fixedFeeTarget: TypedContractMethod<[], [string], "view">;

  getBlockIdx: TypedContractMethod<
    [chainId: BigNumberish, nonce: BigNumberish],
    [bigint],
    "view"
  >;

  isLocalBlockReady: TypedContractMethod<
    [chainId: BigNumberish],
    [boolean],
    "view"
  >;

  lastRemoteMinedBlock: TypedContractMethod<
    [chainId: BigNumberish],
    [QuantumPortalLib.BlockStructOutput],
    "view"
  >;

  ledger: TypedContractMethod<[], [string], "view">;

  localBlockByNonce: TypedContractMethod<
    [chainId: BigNumberish, blockNonce: BigNumberish],
    [
      [
        IQuantumPortalLedgerMgr.LocalBlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput[]
      ]
    ],
    "view"
  >;

  mineRemoteBlock: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  minedBlockByNonce: TypedContractMethod<
    [chainId: BigNumberish, blockNonce: BigNumberish],
    [
      [
        IQuantumPortalLedgerMgr.MinedBlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput[]
      ] & {
        b: IQuantumPortalLedgerMgr.MinedBlockStructOutput;
        txs: QuantumPortalLib.RemoteTransactionStructOutput[];
      }
    ],
    "view"
  >;

  minerMgr: TypedContractMethod<[], [string], "view">;

  minerMinimumStake: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  registerMiner: TypedContractMethod<[], [void], "nonpayable">;

  registerTransaction: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      msgSender: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  stakes: TypedContractMethod<[], [string], "view">;

  state: TypedContractMethod<[], [string], "view">;

  submitFraudProof: TypedContractMethod<
    [
      minedOnChainId: BigNumberish,
      localBlockNonce: BigNumberish,
      localBlockTimestamp: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike,
      rewardReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateAuthorityMgr: TypedContractMethod<
    [_authorityMgr: AddressLike],
    [void],
    "nonpayable"
  >;

  updateFeeConvertor: TypedContractMethod<
    [_feeConvertor: AddressLike],
    [void],
    "nonpayable"
  >;

  updateFeeTargets: TypedContractMethod<
    [_varFeeTarget: AddressLike, _fixedFeeTarget: AddressLike],
    [void],
    "nonpayable"
  >;

  updateLedger: TypedContractMethod<
    [_ledger: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMinerMgr: TypedContractMethod<
    [_minerMgr: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMinerMinimumStake: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateState: TypedContractMethod<[_state: AddressLike], [void], "nonpayable">;

  varFeeTarget: TypedContractMethod<[], [string], "view">;

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
    nameOrSignature: "authorityMgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "calculateBlockHash"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[]
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateFixedFee"
  ): TypedContractMethod<
    [targetChainId: BigNumberish, varSize: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "feeConvertor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "finalize"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      invalidBlockNonces: BigNumberish[],
      finalizersHash: BytesLike,
      finalizers: AddressLike[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fixedFeeTarget"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getBlockIdx"
  ): TypedContractMethod<
    [chainId: BigNumberish, nonce: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "isLocalBlockReady"
  ): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastRemoteMinedBlock"
  ): TypedContractMethod<
    [chainId: BigNumberish],
    [QuantumPortalLib.BlockStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "ledger"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "localBlockByNonce"
  ): TypedContractMethod<
    [chainId: BigNumberish, blockNonce: BigNumberish],
    [
      [
        IQuantumPortalLedgerMgr.LocalBlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput[]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "mineRemoteBlock"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      blockNonce: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "minedBlockByNonce"
  ): TypedContractMethod<
    [chainId: BigNumberish, blockNonce: BigNumberish],
    [
      [
        IQuantumPortalLedgerMgr.MinedBlockStructOutput,
        QuantumPortalLib.RemoteTransactionStructOutput[]
      ] & {
        b: IQuantumPortalLedgerMgr.MinedBlockStructOutput;
        txs: QuantumPortalLib.RemoteTransactionStructOutput[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "minerMgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minerMinimumStake"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registerMiner"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "registerTransaction"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      msgSender: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakes"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "state"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "submitFraudProof"
  ): TypedContractMethod<
    [
      minedOnChainId: BigNumberish,
      localBlockNonce: BigNumberish,
      localBlockTimestamp: BigNumberish,
      transactions: QuantumPortalLib.RemoteTransactionStruct[],
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike,
      rewardReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateAuthorityMgr"
  ): TypedContractMethod<[_authorityMgr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateFeeConvertor"
  ): TypedContractMethod<[_feeConvertor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateFeeTargets"
  ): TypedContractMethod<
    [_varFeeTarget: AddressLike, _fixedFeeTarget: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateLedger"
  ): TypedContractMethod<[_ledger: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMinerMgr"
  ): TypedContractMethod<[_minerMgr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMinerMinimumStake"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateState"
  ): TypedContractMethod<[_state: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "varFeeTarget"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "FinalizedBlock"
  ): TypedContractEvent<
    FinalizedBlockEvent.InputTuple,
    FinalizedBlockEvent.OutputTuple,
    FinalizedBlockEvent.OutputObject
  >;
  getEvent(
    key: "FinalizedInvalidBlock"
  ): TypedContractEvent<
    FinalizedInvalidBlockEvent.InputTuple,
    FinalizedInvalidBlockEvent.OutputTuple,
    FinalizedInvalidBlockEvent.OutputObject
  >;
  getEvent(
    key: "FinalizedSnapshot"
  ): TypedContractEvent<
    FinalizedSnapshotEvent.InputTuple,
    FinalizedSnapshotEvent.OutputTuple,
    FinalizedSnapshotEvent.OutputObject
  >;
  getEvent(
    key: "LocalBlockCreated"
  ): TypedContractEvent<
    LocalBlockCreatedEvent.InputTuple,
    LocalBlockCreatedEvent.OutputTuple,
    LocalBlockCreatedEvent.OutputObject
  >;
  getEvent(
    key: "MinedBlockCreated"
  ): TypedContractEvent<
    MinedBlockCreatedEvent.InputTuple,
    MinedBlockCreatedEvent.OutputTuple,
    MinedBlockCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RemoteTransactionRegistered"
  ): TypedContractEvent<
    RemoteTransactionRegisteredEvent.InputTuple,
    RemoteTransactionRegisteredEvent.OutputTuple,
    RemoteTransactionRegisteredEvent.OutputObject
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

    "FinalizedBlock(uint256,uint256,uint256)": TypedContractEvent<
      FinalizedBlockEvent.InputTuple,
      FinalizedBlockEvent.OutputTuple,
      FinalizedBlockEvent.OutputObject
    >;
    FinalizedBlock: TypedContractEvent<
      FinalizedBlockEvent.InputTuple,
      FinalizedBlockEvent.OutputTuple,
      FinalizedBlockEvent.OutputObject
    >;

    "FinalizedInvalidBlock(uint256,uint256,uint256)": TypedContractEvent<
      FinalizedInvalidBlockEvent.InputTuple,
      FinalizedInvalidBlockEvent.OutputTuple,
      FinalizedInvalidBlockEvent.OutputObject
    >;
    FinalizedInvalidBlock: TypedContractEvent<
      FinalizedInvalidBlockEvent.InputTuple,
      FinalizedInvalidBlockEvent.OutputTuple,
      FinalizedInvalidBlockEvent.OutputObject
    >;

    "FinalizedSnapshot(uint256,uint256,uint256,address[])": TypedContractEvent<
      FinalizedSnapshotEvent.InputTuple,
      FinalizedSnapshotEvent.OutputTuple,
      FinalizedSnapshotEvent.OutputObject
    >;
    FinalizedSnapshot: TypedContractEvent<
      FinalizedSnapshotEvent.InputTuple,
      FinalizedSnapshotEvent.OutputTuple,
      FinalizedSnapshotEvent.OutputObject
    >;

    "LocalBlockCreated(uint64,uint64,uint64)": TypedContractEvent<
      LocalBlockCreatedEvent.InputTuple,
      LocalBlockCreatedEvent.OutputTuple,
      LocalBlockCreatedEvent.OutputObject
    >;
    LocalBlockCreated: TypedContractEvent<
      LocalBlockCreatedEvent.InputTuple,
      LocalBlockCreatedEvent.OutputTuple,
      LocalBlockCreatedEvent.OutputObject
    >;

    "MinedBlockCreated(bytes32,address,uint256,uint256,tuple)": TypedContractEvent<
      MinedBlockCreatedEvent.InputTuple,
      MinedBlockCreatedEvent.OutputTuple,
      MinedBlockCreatedEvent.OutputObject
    >;
    MinedBlockCreated: TypedContractEvent<
      MinedBlockCreatedEvent.InputTuple,
      MinedBlockCreatedEvent.OutputTuple,
      MinedBlockCreatedEvent.OutputObject
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

    "RemoteTransactionRegistered(uint64,address,address,address,address,uint256,bytes,uint256,uint256)": TypedContractEvent<
      RemoteTransactionRegisteredEvent.InputTuple,
      RemoteTransactionRegisteredEvent.OutputTuple,
      RemoteTransactionRegisteredEvent.OutputObject
    >;
    RemoteTransactionRegistered: TypedContractEvent<
      RemoteTransactionRegisteredEvent.InputTuple,
      RemoteTransactionRegisteredEvent.OutputTuple,
      RemoteTransactionRegisteredEvent.OutputObject
    >;
  };
}
