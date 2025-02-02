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
} from "../../common";

export interface FrmFeeManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admin"
      | "allowTrustedCaller"
      | "allowUniV2Oracle"
      | "balances"
      | "deposit"
      | "inventory"
      | "owner"
      | "payFee"
      | "priceOracles"
      | "registerPriceOracle"
      | "registeredOracles"
      | "removeTrusterCaller"
      | "removeUniV2Oracle"
      | "renounceOwnership"
      | "setAdmin"
      | "sweep"
      | "transferOwnership"
      | "trustedCallers"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AdminSet" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowTrustedCaller",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowUniV2Oracle",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payFee",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracles",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPriceOracle",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredOracles",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeTrusterCaller",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUniV2Oracle",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "sweep", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedCallers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowTrustedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowUniV2Oracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredOracles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeTrusterCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUniV2Oracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedCallers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace AdminSetEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FrmFeeManager extends BaseContract {
  connect(runner?: ContractRunner | null): FrmFeeManager;
  waitForDeployment(): Promise<this>;

  interface: FrmFeeManagerInterface;

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

  admin: TypedContractMethod<[], [string], "view">;

  allowTrustedCaller: TypedContractMethod<
    [caller: AddressLike],
    [void],
    "nonpayable"
  >;

  allowUniV2Oracle: TypedContractMethod<
    [univ2Oracle: AddressLike, isDefault: boolean],
    [void],
    "nonpayable"
  >;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  deposit: TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;

  inventory: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  payFee: TypedContractMethod<
    [user: AddressLike, token: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  priceOracles: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  registerPriceOracle: TypedContractMethod<
    [univ2Oracle: AddressLike, pricePath: AddressLike[]],
    [void],
    "nonpayable"
  >;

  registeredOracles: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  removeTrusterCaller: TypedContractMethod<
    [caller: AddressLike],
    [void],
    "nonpayable"
  >;

  removeUniV2Oracle: TypedContractMethod<
    [univ2Oracle: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  sweep: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  trustedCallers: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowTrustedCaller"
  ): TypedContractMethod<[caller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowUniV2Oracle"
  ): TypedContractMethod<
    [univ2Oracle: AddressLike, isDefault: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[to: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "inventory"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payFee"
  ): TypedContractMethod<
    [user: AddressLike, token: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "priceOracles"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "registerPriceOracle"
  ): TypedContractMethod<
    [univ2Oracle: AddressLike, pricePath: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registeredOracles"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeTrusterCaller"
  ): TypedContractMethod<[caller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeUniV2Oracle"
  ): TypedContractMethod<[univ2Oracle: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sweep"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "trustedCallers"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "AdminSet(address)": TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;
    AdminSet: TypedContractEvent<
      AdminSetEvent.InputTuple,
      AdminSetEvent.OutputTuple,
      AdminSetEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
