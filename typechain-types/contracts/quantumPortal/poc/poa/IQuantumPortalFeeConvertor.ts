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

export interface IQuantumPortalFeeConvertorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "fixedFee"
      | "localChainGasTokenPrice"
      | "qpFeeToken"
      | "targetChainGasTokenPrice"
      | "updatePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fixedFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "localChainGasTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "qpFeeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "targetChainGasTokenPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "fixedFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localChainGasTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "qpFeeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetChainGasTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
}

export interface IQuantumPortalFeeConvertor extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalFeeConvertor;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalFeeConvertorInterface;

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

  fixedFee: TypedContractMethod<[size: BigNumberish], [bigint], "view">;

  localChainGasTokenPrice: TypedContractMethod<[], [bigint], "nonpayable">;

  qpFeeToken: TypedContractMethod<[], [string], "nonpayable">;

  targetChainGasTokenPrice: TypedContractMethod<
    [targetChainId: BigNumberish],
    [bigint],
    "view"
  >;

  updatePrice: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fixedFee"
  ): TypedContractMethod<[size: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "localChainGasTokenPrice"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "qpFeeToken"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "targetChainGasTokenPrice"
  ): TypedContractMethod<[targetChainId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "updatePrice"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
