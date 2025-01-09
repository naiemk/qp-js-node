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

export declare namespace MultiSigCheckableUpgradeable {
  export type QuorumStruct = {
    id: AddressLike;
    groupId: BigNumberish;
    minSignatures: BigNumberish;
    ownerGroupId: BigNumberish;
  };

  export type QuorumStructOutput = [
    id: string,
    groupId: bigint,
    minSignatures: bigint,
    ownerGroupId: bigint
  ] & {
    id: string;
    groupId: bigint;
    minSignatures: bigint;
    ownerGroupId: bigint;
  };
}

export interface MultiSigCheckableUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "GOVERNANCE_GROUP_ID_MAX"
      | "addToQuorum"
      | "admin"
      | "cancelSaltedSignature"
      | "eip712Domain"
      | "forceRemoveFromQuorum"
      | "initializeQuorum"
      | "owner"
      | "quorumList"
      | "quorumSubscriptions"
      | "quorums"
      | "quorumsSubscribers"
      | "removeFromQuorum"
      | "renounceOwnership"
      | "setAdmin"
      | "transferOwnership"
      | "updateMinSignature"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedToQuorum"
      | "AdminSet"
      | "EIP712DomainChanged"
      | "Initialized"
      | "OwnershipTransferred"
      | "QuorumCreated"
      | "QuorumUpdated"
      | "RemovedFromQuorum"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "GOVERNANCE_GROUP_ID_MAX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToQuorum",
    values: [AddressLike, AddressLike, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelSaltedSignature",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forceRemoveFromQuorum",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeQuorum",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quorumList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quorumSubscriptions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quorums",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quorumsSubscribers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromQuorum",
    values: [AddressLike, BytesLike, BigNumberish, BytesLike]
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
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinSignature",
    values: [AddressLike, BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "GOVERNANCE_GROUP_ID_MAX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelSaltedSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceRemoveFromQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quorumList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumSubscriptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quorums", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumsSubscribers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinSignature",
    data: BytesLike
  ): Result;
}

export namespace AddedToQuorumEvent {
  export type InputTuple = [quorumId: AddressLike, subscriber: AddressLike];
  export type OutputTuple = [quorumId: string, subscriber: string];
  export interface OutputObject {
    quorumId: string;
    subscriber: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
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

export namespace QuorumCreatedEvent {
  export type InputTuple = [quorum: MultiSigCheckableUpgradeable.QuorumStruct];
  export type OutputTuple = [
    quorum: MultiSigCheckableUpgradeable.QuorumStructOutput
  ];
  export interface OutputObject {
    quorum: MultiSigCheckableUpgradeable.QuorumStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuorumUpdatedEvent {
  export type InputTuple = [quorum: MultiSigCheckableUpgradeable.QuorumStruct];
  export type OutputTuple = [
    quorum: MultiSigCheckableUpgradeable.QuorumStructOutput
  ];
  export interface OutputObject {
    quorum: MultiSigCheckableUpgradeable.QuorumStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedFromQuorumEvent {
  export type InputTuple = [quorumId: AddressLike, subscriber: AddressLike];
  export type OutputTuple = [quorumId: string, subscriber: string];
  export interface OutputObject {
    quorumId: string;
    subscriber: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MultiSigCheckableUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): MultiSigCheckableUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: MultiSigCheckableUpgradeableInterface;

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

  GOVERNANCE_GROUP_ID_MAX: TypedContractMethod<[], [bigint], "view">;

  addToQuorum: TypedContractMethod<
    [
      _address: AddressLike,
      quorumId: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  cancelSaltedSignature: TypedContractMethod<
    [salt: BytesLike, expectedGroupId: BigNumberish, multiSignature: BytesLike],
    [void],
    "nonpayable"
  >;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  forceRemoveFromQuorum: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  initializeQuorum: TypedContractMethod<
    [
      quorumId: AddressLike,
      groupId: BigNumberish,
      minSignatures: BigNumberish,
      ownerGroupId: BigNumberish,
      addresses: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  quorumList: TypedContractMethod<[index: BigNumberish], [string], "view">;

  quorumSubscriptions: TypedContractMethod<
    [_address: AddressLike],
    [MultiSigCheckableUpgradeable.QuorumStructOutput],
    "view"
  >;

  quorums: TypedContractMethod<
    [quorumId: AddressLike],
    [MultiSigCheckableUpgradeable.QuorumStructOutput],
    "view"
  >;

  quorumsSubscribers: TypedContractMethod<
    [quorumId: AddressLike],
    [bigint],
    "view"
  >;

  removeFromQuorum: TypedContractMethod<
    [
      _address: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateMinSignature: TypedContractMethod<
    [
      quorumId: AddressLike,
      minSignature: BigNumberish,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "GOVERNANCE_GROUP_ID_MAX"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addToQuorum"
  ): TypedContractMethod<
    [
      _address: AddressLike,
      quorumId: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancelSaltedSignature"
  ): TypedContractMethod<
    [salt: BytesLike, expectedGroupId: BigNumberish, multiSignature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "forceRemoveFromQuorum"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initializeQuorum"
  ): TypedContractMethod<
    [
      quorumId: AddressLike,
      groupId: BigNumberish,
      minSignatures: BigNumberish,
      ownerGroupId: BigNumberish,
      addresses: AddressLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "quorumList"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "quorumSubscriptions"
  ): TypedContractMethod<
    [_address: AddressLike],
    [MultiSigCheckableUpgradeable.QuorumStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "quorums"
  ): TypedContractMethod<
    [quorumId: AddressLike],
    [MultiSigCheckableUpgradeable.QuorumStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "quorumsSubscribers"
  ): TypedContractMethod<[quorumId: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeFromQuorum"
  ): TypedContractMethod<
    [
      _address: AddressLike,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
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
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMinSignature"
  ): TypedContractMethod<
    [
      quorumId: AddressLike,
      minSignature: BigNumberish,
      salt: BytesLike,
      expiry: BigNumberish,
      multiSignature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AddedToQuorum"
  ): TypedContractEvent<
    AddedToQuorumEvent.InputTuple,
    AddedToQuorumEvent.OutputTuple,
    AddedToQuorumEvent.OutputObject
  >;
  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
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
    key: "QuorumCreated"
  ): TypedContractEvent<
    QuorumCreatedEvent.InputTuple,
    QuorumCreatedEvent.OutputTuple,
    QuorumCreatedEvent.OutputObject
  >;
  getEvent(
    key: "QuorumUpdated"
  ): TypedContractEvent<
    QuorumUpdatedEvent.InputTuple,
    QuorumUpdatedEvent.OutputTuple,
    QuorumUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RemovedFromQuorum"
  ): TypedContractEvent<
    RemovedFromQuorumEvent.InputTuple,
    RemovedFromQuorumEvent.OutputTuple,
    RemovedFromQuorumEvent.OutputObject
  >;

  filters: {
    "AddedToQuorum(address,address)": TypedContractEvent<
      AddedToQuorumEvent.InputTuple,
      AddedToQuorumEvent.OutputTuple,
      AddedToQuorumEvent.OutputObject
    >;
    AddedToQuorum: TypedContractEvent<
      AddedToQuorumEvent.InputTuple,
      AddedToQuorumEvent.OutputTuple,
      AddedToQuorumEvent.OutputObject
    >;

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

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
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

    "QuorumCreated(tuple)": TypedContractEvent<
      QuorumCreatedEvent.InputTuple,
      QuorumCreatedEvent.OutputTuple,
      QuorumCreatedEvent.OutputObject
    >;
    QuorumCreated: TypedContractEvent<
      QuorumCreatedEvent.InputTuple,
      QuorumCreatedEvent.OutputTuple,
      QuorumCreatedEvent.OutputObject
    >;

    "QuorumUpdated(tuple)": TypedContractEvent<
      QuorumUpdatedEvent.InputTuple,
      QuorumUpdatedEvent.OutputTuple,
      QuorumUpdatedEvent.OutputObject
    >;
    QuorumUpdated: TypedContractEvent<
      QuorumUpdatedEvent.InputTuple,
      QuorumUpdatedEvent.OutputTuple,
      QuorumUpdatedEvent.OutputObject
    >;

    "RemovedFromQuorum(address,address)": TypedContractEvent<
      RemovedFromQuorumEvent.InputTuple,
      RemovedFromQuorumEvent.OutputTuple,
      RemovedFromQuorumEvent.OutputObject
    >;
    RemovedFromQuorum: TypedContractEvent<
      RemovedFromQuorumEvent.InputTuple,
      RemovedFromQuorumEvent.OutputTuple,
      RemovedFromQuorumEvent.OutputObject
    >;
  };
}
