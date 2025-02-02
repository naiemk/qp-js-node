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

export interface ITokenFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "btc"
      | "feeConvertor"
      | "feeStore"
      | "feeStoreCollectFee"
      | "feeStoreSweepToken"
      | "portal"
      | "qpRuneWallet"
      | "qpWallet"
      | "registration"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "btc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeConvertor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeStoreCollectFee",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "feeStoreSweepToken",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "portal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "qpRuneWallet",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "qpWallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registration",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "btc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeConvertor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeStoreCollectFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeStoreSweepToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "portal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "qpRuneWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "qpWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registration",
    data: BytesLike
  ): Result;
}

export interface ITokenFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ITokenFactory;
  waitForDeployment(): Promise<this>;

  interface: ITokenFactoryInterface;

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

  btc: TypedContractMethod<[], [string], "view">;

  feeConvertor: TypedContractMethod<[], [string], "view">;

  feeStore: TypedContractMethod<[], [string], "view">;

  feeStoreCollectFee: TypedContractMethod<
    [txId: BytesLike],
    [bigint],
    "nonpayable"
  >;

  feeStoreSweepToken: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  portal: TypedContractMethod<[], [string], "view">;

  qpRuneWallet: TypedContractMethod<[], [string], "view">;

  qpWallet: TypedContractMethod<[], [string], "view">;

  registration: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "btc"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeConvertor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeStoreCollectFee"
  ): TypedContractMethod<[txId: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "feeStoreSweepToken"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "portal"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "qpRuneWallet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "qpWallet"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registration"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
