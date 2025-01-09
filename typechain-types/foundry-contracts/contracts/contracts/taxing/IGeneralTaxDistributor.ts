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
} from "../../../../common";

export interface IGeneralTaxDistributorInterface extends Interface {
  getFunction(
    nameOrSignature: "distributeTax" | "distributeTaxAvoidOrigin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "distributeTax",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeTaxAvoidOrigin",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "distributeTax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeTaxAvoidOrigin",
    data: BytesLike
  ): Result;
}

export interface IGeneralTaxDistributor extends BaseContract {
  connect(runner?: ContractRunner | null): IGeneralTaxDistributor;
  waitForDeployment(): Promise<this>;

  interface: IGeneralTaxDistributorInterface;

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

  distributeTax: TypedContractMethod<
    [token: AddressLike],
    [bigint],
    "nonpayable"
  >;

  distributeTaxAvoidOrigin: TypedContractMethod<
    [token: AddressLike, origin: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "distributeTax"
  ): TypedContractMethod<[token: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "distributeTaxAvoidOrigin"
  ): TypedContractMethod<
    [token: AddressLike, origin: AddressLike],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}
