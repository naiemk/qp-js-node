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

export interface IBridgePoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "liquidity"
      | "removeLiquidity"
      | "removeLiquidityIfPossible"
      | "swap"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityIfPossible",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityIfPossible",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface IBridgePool extends BaseContract {
  connect(runner?: ContractRunner | null): IBridgePool;
  waitForDeployment(): Promise<this>;

  interface: IBridgePoolInterface;

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

  addLiquidity: TypedContractMethod<
    [to: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;

  liquidity: TypedContractMethod<
    [token: AddressLike, liquidityAdder: AddressLike],
    [bigint],
    "view"
  >;

  removeLiquidity: TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      targetNetwork: BigNumberish,
      targetToken: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  removeLiquidityIfPossible: TypedContractMethod<
    [to: AddressLike, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      targetNetwork: BigNumberish,
      targetToken: AddressLike,
      targetAddress: AddressLike,
      originToken: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[payee: AddressLike], [bigint], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [to: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidity"
  ): TypedContractMethod<
    [token: AddressLike, liquidityAdder: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      targetNetwork: BigNumberish,
      targetToken: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityIfPossible"
  ): TypedContractMethod<
    [to: AddressLike, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      targetNetwork: BigNumberish,
      targetToken: AddressLike,
      targetAddress: AddressLike,
      originToken: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[payee: AddressLike], [bigint], "nonpayable">;

  filters: {};
}
