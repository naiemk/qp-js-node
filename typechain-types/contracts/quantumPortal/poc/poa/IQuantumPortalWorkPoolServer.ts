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
} from "../../../../common";

export interface IQuantumPortalWorkPoolServerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "collectFee"
      | "withdrawFixedRemote"
      | "withdrawVariableRemote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collectFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFixedRemote",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawVariableRemote",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "collectFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFixedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawVariableRemote",
    data: BytesLike
  ): Result;
}

export interface IQuantumPortalWorkPoolServer extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalWorkPoolServer;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalWorkPoolServerInterface;

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

  collectFee: TypedContractMethod<
    [
      targetChainId: BigNumberish,
      localEpoch: BigNumberish,
      fixedFee: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  withdrawFixedRemote: TypedContractMethod<
    [to: AddressLike, workRatioX128: BigNumberish, epoch: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawVariableRemote: TypedContractMethod<
    [to: AddressLike, workRatioX128: BigNumberish, epoch: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "collectFee"
  ): TypedContractMethod<
    [
      targetChainId: BigNumberish,
      localEpoch: BigNumberish,
      fixedFee: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFixedRemote"
  ): TypedContractMethod<
    [to: AddressLike, workRatioX128: BigNumberish, epoch: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawVariableRemote"
  ): TypedContractMethod<
    [to: AddressLike, workRatioX128: BigNumberish, epoch: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
