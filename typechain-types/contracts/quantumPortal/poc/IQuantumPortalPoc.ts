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
} from "../../../common";

export declare namespace QuantumPortalLib {
  export type BlockStruct = {
    chainId: BigNumberish;
    nonce: BigNumberish;
    timestamp: BigNumberish;
  };

  export type BlockStructOutput = [
    chainId: bigint,
    nonce: bigint,
    timestamp: bigint
  ] & { chainId: bigint; nonce: bigint; timestamp: bigint };

  export type RemoteTransactionStruct = {
    timestamp: BigNumberish;
    remoteContract: AddressLike;
    sourceMsgSender: AddressLike;
    sourceBeneficiary: AddressLike;
    token: AddressLike;
    amount: BigNumberish;
    methods: BytesLike[];
    gas: BigNumberish;
    fixedFee: BigNumberish;
  };

  export type RemoteTransactionStructOutput = [
    timestamp: bigint,
    remoteContract: string,
    sourceMsgSender: string,
    sourceBeneficiary: string,
    token: string,
    amount: bigint,
    methods: string[],
    gas: bigint,
    fixedFee: bigint
  ] & {
    timestamp: bigint;
    remoteContract: string;
    sourceMsgSender: string;
    sourceBeneficiary: string;
    token: string;
    amount: bigint;
    methods: string[];
    gas: bigint;
    fixedFee: bigint;
  };

  export type ContextStruct = {
    index: BigNumberish;
    blockMetadata: QuantumPortalLib.BlockStruct;
    transaction: QuantumPortalLib.RemoteTransactionStruct;
    uncommitedBalance: BigNumberish;
  };

  export type ContextStructOutput = [
    index: bigint,
    blockMetadata: QuantumPortalLib.BlockStructOutput,
    transaction: QuantumPortalLib.RemoteTransactionStructOutput,
    uncommitedBalance: bigint
  ] & {
    index: bigint;
    blockMetadata: QuantumPortalLib.BlockStructOutput;
    transaction: QuantumPortalLib.RemoteTransactionStructOutput;
    uncommitedBalance: bigint;
  };
}

export interface IQuantumPortalPocInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "feeTarget"
      | "feeToken"
      | "localTransfer"
      | "msgSender"
      | "remoteTransfer"
      | "run"
      | "runFromToken"
      | "runFromTokenNativeFee"
      | "runNativeFee"
      | "runWithValue"
      | "runWithValueNativeFee"
      | "runWithdraw"
      | "txContext"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "feeTarget", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "localTransfer",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remoteTransfer",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "run",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runFromToken",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runFromTokenNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "runNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithValue",
    values: [BigNumberish, AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithValueNativeFee",
    values: [BigNumberish, AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "runWithdraw",
    values: [BigNumberish, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "txContext", values?: undefined): string;

  decodeFunctionResult(functionFragment: "feeTarget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remoteTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "runFromToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runFromTokenNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithValueNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txContext", data: BytesLike): Result;
}

export interface IQuantumPortalPoc extends BaseContract {
  connect(runner?: ContractRunner | null): IQuantumPortalPoc;
  waitForDeployment(): Promise<this>;

  interface: IQuantumPortalPocInterface;

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

  feeTarget: TypedContractMethod<[], [string], "view">;

  feeToken: TypedContractMethod<[], [string], "view">;

  localTransfer: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  msgSender: TypedContractMethod<
    [],
    [
      [bigint, string, string] & {
        sourceNetwork: bigint;
        sourceMsgSender: string;
        sourceBeneficiary: string;
      }
    ],
    "view"
  >;

  remoteTransfer: TypedContractMethod<
    [
      chainId: BigNumberish,
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  run: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  runFromToken: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  runFromTokenNativeFee: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  runNativeFee: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "payable"
  >;

  runWithValue: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  runWithValueNativeFee: TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "payable"
  >;

  runWithdraw: TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteAddress: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  txContext: TypedContractMethod<
    [],
    [QuantumPortalLib.ContextStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "feeTarget"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "localTransfer"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "msgSender"
  ): TypedContractMethod<
    [],
    [
      [bigint, string, string] & {
        sourceNetwork: bigint;
        sourceMsgSender: string;
        sourceBeneficiary: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "remoteTransfer"
  ): TypedContractMethod<
    [
      chainId: BigNumberish,
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "run"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runFromToken"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runFromTokenNativeFee"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      method: BytesLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runNativeFee"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      remoteMethodCall: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runWithValue"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "runWithValueNativeFee"
  ): TypedContractMethod<
    [
      remoteChain: BigNumberish,
      remoteContract: AddressLike,
      beneficiary: AddressLike,
      token: AddressLike,
      method: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "runWithdraw"
  ): TypedContractMethod<
    [
      remoteChainId: BigNumberish,
      remoteAddress: AddressLike,
      token: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "txContext"
  ): TypedContractMethod<[], [QuantumPortalLib.ContextStructOutput], "view">;

  filters: {};
}
