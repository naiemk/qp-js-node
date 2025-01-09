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

export interface IStakeTransferrerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "allowance"
      | "approveOnlyPool"
      | "transferFromOnlyPool"
      | "transferOnlyPool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFromOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveOnlyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFromOnlyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOnlyPool",
    data: BytesLike
  ): Result;
}

export interface IStakeTransferrer extends BaseContract {
  connect(runner?: ContractRunner | null): IStakeTransferrer;
  waitForDeployment(): Promise<this>;

  interface: IStakeTransferrerInterface;

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

  allowance: TypedContractMethod<
    [id: AddressLike, owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approveOnlyPool: TypedContractMethod<
    [
      id: AddressLike,
      sender: AddressLike,
      spender: AddressLike,
      value: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  transferFromOnlyPool: TypedContractMethod<
    [
      stakingPoolId: AddressLike,
      sender: AddressLike,
      from: AddressLike,
      to: AddressLike,
      value: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  transferOnlyPool: TypedContractMethod<
    [id: AddressLike, from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [id: AddressLike, owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approveOnlyPool"
  ): TypedContractMethod<
    [
      id: AddressLike,
      sender: AddressLike,
      spender: AddressLike,
      value: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFromOnlyPool"
  ): TypedContractMethod<
    [
      stakingPoolId: AddressLike,
      sender: AddressLike,
      from: AddressLike,
      to: AddressLike,
      value: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOnlyPool"
  ): TypedContractMethod<
    [id: AddressLike, from: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
