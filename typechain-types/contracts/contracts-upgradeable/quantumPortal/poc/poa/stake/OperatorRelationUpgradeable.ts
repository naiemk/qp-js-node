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
} from "../../../../../../common";

export declare namespace IOperatorRelation {
  export type RelationshipStruct = {
    delegate: AddressLike;
    deleted: BigNumberish;
  };

  export type RelationshipStructOutput = [delegate: string, deleted: bigint] & {
    delegate: string;
    deleted: bigint;
  };
}

export interface OperatorRelationUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assignOperator"
      | "delegateLookup"
      | "getDelegateForOperator"
      | "nodeOperator"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "NodeOperatorAssigned"): EventFragment;

  encodeFunctionData(
    functionFragment: "assignOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateLookup",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDelegateForOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nodeOperator",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDelegateForOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nodeOperator",
    data: BytesLike
  ): Result;
}

export namespace NodeOperatorAssignedEvent {
  export type InputTuple = [delegate: AddressLike, nodeOperator: AddressLike];
  export type OutputTuple = [delegate: string, nodeOperator: string];
  export interface OutputObject {
    delegate: string;
    nodeOperator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OperatorRelationUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): OperatorRelationUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: OperatorRelationUpgradeableInterface;

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

  assignOperator: TypedContractMethod<
    [toOp: AddressLike],
    [void],
    "nonpayable"
  >;

  delegateLookup: TypedContractMethod<
    [operator: AddressLike],
    [IOperatorRelation.RelationshipStructOutput],
    "view"
  >;

  getDelegateForOperator: TypedContractMethod<
    [operator: AddressLike],
    [IOperatorRelation.RelationshipStructOutput],
    "view"
  >;

  nodeOperator: TypedContractMethod<[delegate: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assignOperator"
  ): TypedContractMethod<[toOp: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "delegateLookup"
  ): TypedContractMethod<
    [operator: AddressLike],
    [IOperatorRelation.RelationshipStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getDelegateForOperator"
  ): TypedContractMethod<
    [operator: AddressLike],
    [IOperatorRelation.RelationshipStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "nodeOperator"
  ): TypedContractMethod<[delegate: AddressLike], [string], "view">;

  getEvent(
    key: "NodeOperatorAssigned"
  ): TypedContractEvent<
    NodeOperatorAssignedEvent.InputTuple,
    NodeOperatorAssignedEvent.OutputTuple,
    NodeOperatorAssignedEvent.OutputObject
  >;

  filters: {
    "NodeOperatorAssigned(address,address)": TypedContractEvent<
      NodeOperatorAssignedEvent.InputTuple,
      NodeOperatorAssignedEvent.OutputTuple,
      NodeOperatorAssignedEvent.OutputObject
    >;
    NodeOperatorAssigned: TypedContractEvent<
      NodeOperatorAssignedEvent.InputTuple,
      NodeOperatorAssignedEvent.OutputTuple,
      NodeOperatorAssignedEvent.OutputObject
    >;
  };
}
