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
} from "../../common";

export interface IPriceOracleInterface extends Interface {
  getFunction(
    nameOrSignature: "emaX128" | "recentPriceX128" | "updatePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "emaX128",
    values: [AddressLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recentPriceX128",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [AddressLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "emaX128", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recentPriceX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
}

export interface IPriceOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IPriceOracle;
  waitForDeployment(): Promise<this>;

  interface: IPriceOracleInterface;

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

  emaX128: TypedContractMethod<
    [path: AddressLike[], emaType: BigNumberish],
    [bigint],
    "view"
  >;

  recentPriceX128: TypedContractMethod<[path: AddressLike[]], [bigint], "view">;

  updatePrice: TypedContractMethod<
    [path: AddressLike[]],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "emaX128"
  ): TypedContractMethod<
    [path: AddressLike[], emaType: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "recentPriceX128"
  ): TypedContractMethod<[path: AddressLike[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "updatePrice"
  ): TypedContractMethod<[path: AddressLike[]], [boolean], "nonpayable">;

  filters: {};
}