/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface IQuantumPortalLedgerMgrDependenciesInterface
  extends Interface {
  getFunction(nameOrSignature: "authorityMgr" | "minerMgr"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorityMgr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minerMgr", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "authorityMgr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minerMgr", data: BytesLike): Result;
}

export interface IQuantumPortalLedgerMgrDependencies extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalLedgerMgrDependencies;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalLedgerMgrDependenciesInterface;

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

  authorityMgr: TypedContractMethod<[], [string], "view">;

  minerMgr: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "authorityMgr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minerMgr"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}