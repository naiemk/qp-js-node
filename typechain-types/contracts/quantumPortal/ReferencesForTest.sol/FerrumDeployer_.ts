/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
} from "../../../common";

export interface FerrumDeployer_Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "VERSION"
      | "computeAddress"
      | "computeAddressOwnable"
      | "deploy"
      | "deployOwnable"
      | "initData"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Deployed" | "DeployedWithData"
  ): EventFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "computeAddress",
    values: [BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAddressOwnable",
    values: [BytesLike, AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deployOwnable",
    values: [BytesLike, AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initData", values?: undefined): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAddressOwnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployOwnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initData", data: BytesLike): Result;
}

export namespace DeployedEvent {
  export type InputTuple = [arg0: AddressLike];
  export type OutputTuple = [arg0: string];
  export interface OutputObject {
    arg0: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DeployedWithDataEvent {
  export type InputTuple = [conAddr: AddressLike, owner: AddressLike];
  export type OutputTuple = [conAddr: string, owner: string];
  export interface OutputObject {
    conAddr: string;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FerrumDeployer_ extends BaseContract {
  connect(runner?: ContractRunner | null): FerrumDeployer_;
  waitForDeployment(): Promise<this>;

  interface: FerrumDeployer_Interface;

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

  computeAddress: TypedContractMethod<
    [salt: BytesLike, bytecodeHash: BytesLike, deployer: AddressLike],
    [string],
    "view"
  >;

  computeAddressOwnable: TypedContractMethod<
    [
      salt: BytesLike,
      owner: AddressLike,
      data: BytesLike,
      bytecodeHash: BytesLike
    ],
    [string],
    "view"
  >;

  deploy: TypedContractMethod<
    [salt: BytesLike, bytecode: BytesLike],
    [string],
    "nonpayable"
  >;

  deployOwnable: TypedContractMethod<
    [salt: BytesLike, owner: AddressLike, data: BytesLike, bytecode: BytesLike],
    [string],
    "nonpayable"
  >;

  initData: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "computeAddress"
  ): TypedContractMethod<
    [salt: BytesLike, bytecodeHash: BytesLike, deployer: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeAddressOwnable"
  ): TypedContractMethod<
    [
      salt: BytesLike,
      owner: AddressLike,
      data: BytesLike,
      bytecodeHash: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "deploy"
  ): TypedContractMethod<
    [salt: BytesLike, bytecode: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deployOwnable"
  ): TypedContractMethod<
    [salt: BytesLike, owner: AddressLike, data: BytesLike, bytecode: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initData"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Deployed"
  ): TypedContractEvent<
    DeployedEvent.InputTuple,
    DeployedEvent.OutputTuple,
    DeployedEvent.OutputObject
  >;
  getEvent(
    key: "DeployedWithData"
  ): TypedContractEvent<
    DeployedWithDataEvent.InputTuple,
    DeployedWithDataEvent.OutputTuple,
    DeployedWithDataEvent.OutputObject
  >;

  filters: {
    "Deployed(address)": TypedContractEvent<
      DeployedEvent.InputTuple,
      DeployedEvent.OutputTuple,
      DeployedEvent.OutputObject
    >;
    Deployed: TypedContractEvent<
      DeployedEvent.InputTuple,
      DeployedEvent.OutputTuple,
      DeployedEvent.OutputObject
    >;

    "DeployedWithData(address,address)": TypedContractEvent<
      DeployedWithDataEvent.InputTuple,
      DeployedWithDataEvent.OutputTuple,
      DeployedWithDataEvent.OutputObject
    >;
    DeployedWithData: TypedContractEvent<
      DeployedWithDataEvent.InputTuple,
      DeployedWithDataEvent.OutputTuple,
      DeployedWithDataEvent.OutputObject
    >;
  };
}
