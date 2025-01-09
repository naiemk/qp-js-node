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
} from "../../../../../common";

export interface QuantumPortalMinerMembershipUpgradeableInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "findMiner"
      | "findMinerAtTime"
      | "minerIdxsPlusOne"
      | "miners"
      | "registerMiner"
      | "selectMiner"
      | "timeBlockSize"
      | "unregister"
      | "unregisterMiner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "findMiner",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "findMinerAtTime",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minerIdxsPlusOne",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "miners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerMiner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "selectMiner",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timeBlockSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unregister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterMiner",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "findMiner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "findMinerAtTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minerIdxsPlusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "miners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerMiner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectMiner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeBlockSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unregister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unregisterMiner",
    data: BytesLike
  ): Result;
}

export interface QuantumPortalMinerMembershipUpgradeable extends BaseContract {
  connect(
    runner?: ContractRunner | null
  ): QuantumPortalMinerMembershipUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: QuantumPortalMinerMembershipUpgradeableInterface;

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

  findMiner: TypedContractMethod<
    [blockHash: BytesLike, blockTimestamp: BigNumberish],
    [string],
    "view"
  >;

  findMinerAtTime: TypedContractMethod<
    [
      blockHash: BytesLike,
      blockTimestamp: BigNumberish,
      chainTimestamp: BigNumberish
    ],
    [string],
    "view"
  >;

  minerIdxsPlusOne: TypedContractMethod<[miner: AddressLike], [bigint], "view">;

  miners: TypedContractMethod<[], [string[]], "view">;

  registerMiner: TypedContractMethod<
    [miner: AddressLike],
    [void],
    "nonpayable"
  >;

  selectMiner: TypedContractMethod<
    [
      requestedMiner: AddressLike,
      blockHash: BytesLike,
      blockTimestamp: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  timeBlockSize: TypedContractMethod<[], [bigint], "view">;

  unregister: TypedContractMethod<[], [void], "nonpayable">;

  unregisterMiner: TypedContractMethod<
    [miner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "findMiner"
  ): TypedContractMethod<
    [blockHash: BytesLike, blockTimestamp: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "findMinerAtTime"
  ): TypedContractMethod<
    [
      blockHash: BytesLike,
      blockTimestamp: BigNumberish,
      chainTimestamp: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "minerIdxsPlusOne"
  ): TypedContractMethod<[miner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "miners"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "registerMiner"
  ): TypedContractMethod<[miner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "selectMiner"
  ): TypedContractMethod<
    [
      requestedMiner: AddressLike,
      blockHash: BytesLike,
      blockTimestamp: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "timeBlockSize"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "unregister"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unregisterMiner"
  ): TypedContractMethod<[miner: AddressLike], [void], "nonpayable">;

  filters: {};
}
