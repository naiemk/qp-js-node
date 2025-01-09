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
} from "../../../common";

export interface QuantumPortalFeeManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "chargeFee" | "depositFee" | "inventory" | "withdrawFees"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "chargeFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFee",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "chargeFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;
}

export interface QuantumPortalFeeManager extends BaseContract {
  connect(runner?: ContractRunner | null): QuantumPortalFeeManager;
  waitForDeployment(): Promise<this>;

  interface: QuantumPortalFeeManagerInterface;

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

  chargeFee: TypedContractMethod<
    [caller: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  depositFee: TypedContractMethod<[caller: AddressLike], [void], "nonpayable">;

  inventory: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  withdrawFees: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "chargeFee"
  ): TypedContractMethod<
    [caller: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositFee"
  ): TypedContractMethod<[caller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "inventory"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawFees"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}