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

export interface IQuantumPortalWorkPoolClientInterface extends Interface {
  getFunction(nameOrSignature: "registerWork"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "registerWork",
    values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerWork",
    data: BytesLike
  ): Result;
}

export interface IQuantumPortalWorkPoolClient extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalWorkPoolClient;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalWorkPoolClientInterface;

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

  registerWork: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      worker: AddressLike,
      work: BigNumberish,
      _remoteEpoch: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "registerWork"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      worker: AddressLike,
      work: BigNumberish,
      _remoteEpoch: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}