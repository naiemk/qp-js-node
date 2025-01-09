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

export declare namespace IDelegator {
  export type ReverseDelegationStruct = {
    delegatee: AddressLike;
    deleted: BigNumberish;
  };

  export type ReverseDelegationStructOutput = [
    delegatee: string,
    deleted: bigint
  ] & { delegatee: string; deleted: bigint };
}

export interface IDelegatorInterface extends Interface {
  getFunction(nameOrSignature: "getReverseDelegation"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getReverseDelegation",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReverseDelegation",
    data: BytesLike
  ): Result;
}

export interface IDelegator extends BaseContract {
  connect(runner?: ContractRunner | null): IDelegator;
  waitForDeployment(): Promise<this>;

  interface: IDelegatorInterface;

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

  getReverseDelegation: TypedContractMethod<
    [key: AddressLike],
    [IDelegator.ReverseDelegationStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getReverseDelegation"
  ): TypedContractMethod<
    [key: AddressLike],
    [IDelegator.ReverseDelegationStructOutput],
    "view"
  >;

  filters: {};
}