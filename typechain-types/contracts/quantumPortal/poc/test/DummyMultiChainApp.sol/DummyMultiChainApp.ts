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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface DummyMultiChainAppInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "callOnRemote"
      | "feeToken"
      | "mgr"
      | "portal"
      | "receiveCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callOnRemote",
    values: [BigNumberish, AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "mgr", values?: undefined): string;
  encodeFunctionData(functionFragment: "portal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveCall",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "callOnRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mgr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "portal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveCall",
    data: BytesLike
  ): Result;
}

export interface DummyMultiChainApp extends BaseContract {
  connect(runner?: ContractRunner | null): DummyMultiChainApp;
  waitForDeployment(): Promise<this>;

  interface: DummyMultiChainAppInterface;

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

  callOnRemote: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  feeToken: TypedContractMethod<[], [string], "view">;

  mgr: TypedContractMethod<[], [string], "view">;

  portal: TypedContractMethod<[], [string], "view">;

  receiveCall: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "callOnRemote"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "feeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "portal"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiveCall"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}