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
} from "../../common";

export interface ClientPingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admin"
      | "feeAmount"
      | "initializeWithQp"
      | "numbPingsSent"
      | "numbPongsReceived"
      | "owner"
      | "ping"
      | "portal"
      | "receivePongResponse"
      | "remotePeers"
      | "removeRemotePeers"
      | "renounceOwnership"
      | "serverAddress"
      | "setAdmin"
      | "transferOwnership"
      | "updateFeeAmount"
      | "updatePortal"
      | "updateRemotePeers"
      | "updateServerAddress"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AdminSet" | "OwnershipTransferred" | "PingPong"
  ): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeAmount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initializeWithQp",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "numbPingsSent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numbPongsReceived",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ping", values?: undefined): string;
  encodeFunctionData(functionFragment: "portal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receivePongResponse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "remotePeers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRemotePeers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "serverAddress",
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
    functionFragment: "updateFeeAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePortal",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRemotePeers",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateServerAddress",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeWithQp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numbPingsSent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numbPongsReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ping", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "portal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receivePongResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRemotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "serverAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePortal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRemotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateServerAddress",
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

export namespace PingPongEvent {
  export type InputTuple = [
    numbPingsSent: BigNumberish,
    numbPongsReceived: BigNumberish
  ];
  export type OutputTuple = [numbPingsSent: bigint, numbPongsReceived: bigint];
  export interface OutputObject {
    numbPingsSent: bigint;
    numbPongsReceived: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ClientPing extends BaseContract {
  connect(runner?: ContractRunner | null): ClientPing;
  waitForDeployment(): Promise<this>;

  interface: ClientPingInterface;

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

  feeAmount: TypedContractMethod<[], [bigint], "view">;

  initializeWithQp: TypedContractMethod<
    [_portal: AddressLike],
    [void],
    "nonpayable"
  >;

  numbPingsSent: TypedContractMethod<[], [bigint], "view">;

  numbPongsReceived: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  ping: TypedContractMethod<[], [void], "nonpayable">;

  portal: TypedContractMethod<[], [string], "view">;

  receivePongResponse: TypedContractMethod<[], [void], "nonpayable">;

  remotePeers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  removeRemotePeers: TypedContractMethod<
    [chainIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  serverAddress: TypedContractMethod<[], [string], "view">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updateFeeAmount: TypedContractMethod<
    [_feeAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePortal: TypedContractMethod<
    [_portal: AddressLike],
    [void],
    "nonpayable"
  >;

  updateRemotePeers: TypedContractMethod<
    [chainIds: BigNumberish[], remotes: AddressLike[]],
    [void],
    "nonpayable"
  >;

  updateServerAddress: TypedContractMethod<
    [_serverAddress: AddressLike],
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
    nameOrSignature: "feeAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initializeWithQp"
  ): TypedContractMethod<[_portal: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "numbPingsSent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "numbPongsReceived"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ping"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "portal"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receivePongResponse"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "remotePeers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "removeRemotePeers"
  ): TypedContractMethod<[chainIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "serverAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateFeeAmount"
  ): TypedContractMethod<[_feeAmount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePortal"
  ): TypedContractMethod<[_portal: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateRemotePeers"
  ): TypedContractMethod<
    [chainIds: BigNumberish[], remotes: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateServerAddress"
  ): TypedContractMethod<[_serverAddress: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PingPong"
  ): TypedContractEvent<
    PingPongEvent.InputTuple,
    PingPongEvent.OutputTuple,
    PingPongEvent.OutputObject
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

    "PingPong(uint256,uint256)": TypedContractEvent<
      PingPongEvent.InputTuple,
      PingPongEvent.OutputTuple,
      PingPongEvent.OutputObject
    >;
    PingPong: TypedContractEvent<
      PingPongEvent.InputTuple,
      PingPongEvent.OutputTuple,
      PingPongEvent.OutputObject
    >;
  };
}
