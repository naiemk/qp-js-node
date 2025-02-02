/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface WalletRegistrationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "registerProxyFromBtcTx"
      | "unregisterProxy"
      | "walletForProxy"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "registerProxyFromBtcTx",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "walletForProxy",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerProxyFromBtcTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletForProxy",
    data: BytesLike
  ): Result;
}

export interface WalletRegistration extends BaseContract {
  connect(runner?: ContractRunner | null): WalletRegistration;
  waitForDeployment(): Promise<this>;

  interface: WalletRegistrationInterface;

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

  registerProxyFromBtcTx: TypedContractMethod<
    [txid: BytesLike],
    [void],
    "nonpayable"
  >;

  unregisterProxy: TypedContractMethod<[], [void], "nonpayable">;

  walletForProxy: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "registerProxyFromBtcTx"
  ): TypedContractMethod<[txid: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unregisterProxy"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "walletForProxy"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;

  filters: {};
}
