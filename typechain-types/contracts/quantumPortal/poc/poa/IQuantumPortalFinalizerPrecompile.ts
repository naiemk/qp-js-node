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

export interface IQuantumPortalFinalizerPrecompileInterface extends Interface {
  getFunction(
    nameOrSignature: "registerFinalizer" | "removeFinalizer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "registerFinalizer",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFinalizer",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerFinalizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFinalizer",
    data: BytesLike
  ): Result;
}

export interface IQuantumPortalFinalizerPrecompile extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalFinalizerPrecompile;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalFinalizerPrecompileInterface;

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

  registerFinalizer: TypedContractMethod<
    [chainId: BigNumberish, finalizer: AddressLike],
    [void],
    "nonpayable"
  >;

  removeFinalizer: TypedContractMethod<
    [chainId: BigNumberish, finalizer: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "registerFinalizer"
  ): TypedContractMethod<
    [chainId: BigNumberish, finalizer: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeFinalizer"
  ): TypedContractMethod<
    [chainId: BigNumberish, finalizer: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}