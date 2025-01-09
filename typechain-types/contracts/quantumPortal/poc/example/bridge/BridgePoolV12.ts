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
} from "../../../../../common";

export interface BridgePoolV12Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "DATA_CHAIN"
      | "DEFAULT_FEE_X10000"
      | "addLiquidity"
      | "admin"
      | "feeDistributor"
      | "initializeWithQp"
      | "inventory"
      | "liquidities"
      | "liquidity"
      | "owner"
      | "portal"
      | "remotePeers"
      | "remoteSwap"
      | "removeLiquidity"
      | "removeLiquidityIfPossible"
      | "removeRemotePeers"
      | "renounceOwnership"
      | "router"
      | "routingTable"
      | "setAdmin"
      | "setFeeDistributor"
      | "setRouter"
      | "setRoutingTable"
      | "swap"
      | "transferOwnership"
      | "updatePortal"
      | "updateRemotePeers"
      | "withdraw"
      | "withdrawItems"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminSet"
      | "BridgeLiquidityAdded"
      | "BridgeLiquidityRemoved"
      | "BridgeSwap"
      | "OwnershipTransferred"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DATA_CHAIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_FEE_X10000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeWithQp",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidities",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "portal", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remotePeers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remoteSwap",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityIfPossible",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRemotePeers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "routingTable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeDistributor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoutingTable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePortal",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRemotePeers",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawItems",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "DATA_CHAIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_FEE_X10000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeWithQp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "portal", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remoteSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityIfPossible",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRemotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routingTable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRoutingTable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePortal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRemotePeers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawItems",
    data: BytesLike
  ): Result;
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

export namespace BridgeLiquidityAddedEvent {
  export type InputTuple = [
    actor: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [actor: string, token: string, amount: bigint];
  export interface OutputObject {
    actor: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BridgeLiquidityRemovedEvent {
  export type InputTuple = [
    actor: AddressLike,
    token: AddressLike,
    amountRemoved: BigNumberish,
    owedNetwork: BigNumberish,
    owedToken: AddressLike,
    owedLiquidity: BigNumberish
  ];
  export type OutputTuple = [
    actor: string,
    token: string,
    amountRemoved: bigint,
    owedNetwork: bigint,
    owedToken: string,
    owedLiquidity: bigint
  ];
  export interface OutputObject {
    actor: string;
    token: string;
    amountRemoved: bigint;
    owedNetwork: bigint;
    owedToken: string;
    owedLiquidity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BridgeSwapEvent {
  export type InputTuple = [
    from: AddressLike,
    originToken: AddressLike,
    token: AddressLike,
    targetNetwork: BigNumberish,
    targetToken: AddressLike,
    targetAddress: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    originToken: string,
    token: string,
    targetNetwork: bigint,
    targetToken: string,
    targetAddress: string,
    amount: bigint
  ];
  export interface OutputObject {
    from: string;
    originToken: string;
    token: string;
    targetNetwork: bigint;
    targetToken: string;
    targetAddress: string;
    amount: bigint;
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

export namespace WithdrawEvent {
  export type InputTuple = [
    receiver: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    receiver: string,
    token: string,
    amount: bigint,
    fee: bigint
  ];
  export interface OutputObject {
    receiver: string;
    token: string;
    amount: bigint;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BridgePoolV12 extends BaseContract {
  connect(runner?: ContractRunner | null): BridgePoolV12;
  waitForDeployment(): Promise<this>;

  interface: BridgePoolV12Interface;

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

  DATA_CHAIN: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_FEE_X10000: TypedContractMethod<[], [bigint], "view">;

  addLiquidity: TypedContractMethod<
    [to: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  feeDistributor: TypedContractMethod<[], [string], "view">;

  initializeWithQp: TypedContractMethod<
    [_portal: AddressLike],
    [void],
    "nonpayable"
  >;

  inventory: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  liquidities: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  liquidity: TypedContractMethod<
    [token: AddressLike, liquidityAdder: AddressLike],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  portal: TypedContractMethod<[], [string], "view">;

  remotePeers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  remoteSwap: TypedContractMethod<
    [
      token: AddressLike,
      payee: AddressLike,
      amount: BigNumberish,
      sourceChainId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  removeLiquidity: TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      targetNetwork: BigNumberish,
      targetToken: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  removeLiquidityIfPossible: TypedContractMethod<
    [to: AddressLike, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  removeRemotePeers: TypedContractMethod<
    [chainIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  router: TypedContractMethod<[], [string], "view">;

  routingTable: TypedContractMethod<[], [string], "view">;

  setAdmin: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  setFeeDistributor: TypedContractMethod<
    [_feeDistributor: AddressLike],
    [void],
    "nonpayable"
  >;

  setRouter: TypedContractMethod<[_router: AddressLike], [void], "nonpayable">;

  setRoutingTable: TypedContractMethod<
    [_routingTable: AddressLike],
    [void],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      targetNetwork: BigNumberish,
      targetToken: AddressLike,
      targetAddress: AddressLike,
      originToken: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePortal: TypedContractMethod<
    [_portal: AddressLike],
    [void],
    "nonpayable"
  >;

  updateRemotePeers: TypedContractMethod<
    [chainIds: BigNumberish[], remotes: AddressLike[]],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[payee: AddressLike], [bigint], "nonpayable">;

  withdrawItems: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, string, bigint] & {
        token: string;
        payee: string;
        amount: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DATA_CHAIN"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_FEE_X10000"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [to: AddressLike, token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeDistributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initializeWithQp"
  ): TypedContractMethod<[_portal: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "inventory"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "liquidities"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidity"
  ): TypedContractMethod<
    [token: AddressLike, liquidityAdder: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "portal"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "remotePeers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "remoteSwap"
  ): TypedContractMethod<
    [
      token: AddressLike,
      payee: AddressLike,
      amount: BigNumberish,
      sourceChainId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      targetNetwork: BigNumberish,
      targetToken: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityIfPossible"
  ): TypedContractMethod<
    [to: AddressLike, token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeRemotePeers"
  ): TypedContractMethod<[chainIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "routingTable"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFeeDistributor"
  ): TypedContractMethod<[_feeDistributor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRouter"
  ): TypedContractMethod<[_router: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRoutingTable"
  ): TypedContractMethod<[_routingTable: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      to: AddressLike,
      token: AddressLike,
      targetNetwork: BigNumberish,
      targetToken: AddressLike,
      targetAddress: AddressLike,
      originToken: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePortal"
  ): TypedContractMethod<[_portal: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateRemotePeers"
  ): TypedContractMethod<
    [chainIds: BigNumberish[], remotes: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[payee: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawItems"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, string, bigint] & {
        token: string;
        payee: string;
        amount: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "AdminSet"
  ): TypedContractEvent<
    AdminSetEvent.InputTuple,
    AdminSetEvent.OutputTuple,
    AdminSetEvent.OutputObject
  >;
  getEvent(
    key: "BridgeLiquidityAdded"
  ): TypedContractEvent<
    BridgeLiquidityAddedEvent.InputTuple,
    BridgeLiquidityAddedEvent.OutputTuple,
    BridgeLiquidityAddedEvent.OutputObject
  >;
  getEvent(
    key: "BridgeLiquidityRemoved"
  ): TypedContractEvent<
    BridgeLiquidityRemovedEvent.InputTuple,
    BridgeLiquidityRemovedEvent.OutputTuple,
    BridgeLiquidityRemovedEvent.OutputObject
  >;
  getEvent(
    key: "BridgeSwap"
  ): TypedContractEvent<
    BridgeSwapEvent.InputTuple,
    BridgeSwapEvent.OutputTuple,
    BridgeSwapEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
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

    "BridgeLiquidityAdded(address,address,uint256)": TypedContractEvent<
      BridgeLiquidityAddedEvent.InputTuple,
      BridgeLiquidityAddedEvent.OutputTuple,
      BridgeLiquidityAddedEvent.OutputObject
    >;
    BridgeLiquidityAdded: TypedContractEvent<
      BridgeLiquidityAddedEvent.InputTuple,
      BridgeLiquidityAddedEvent.OutputTuple,
      BridgeLiquidityAddedEvent.OutputObject
    >;

    "BridgeLiquidityRemoved(address,address,uint256,uint256,address,uint256)": TypedContractEvent<
      BridgeLiquidityRemovedEvent.InputTuple,
      BridgeLiquidityRemovedEvent.OutputTuple,
      BridgeLiquidityRemovedEvent.OutputObject
    >;
    BridgeLiquidityRemoved: TypedContractEvent<
      BridgeLiquidityRemovedEvent.InputTuple,
      BridgeLiquidityRemovedEvent.OutputTuple,
      BridgeLiquidityRemovedEvent.OutputObject
    >;

    "BridgeSwap(address,address,address,uint256,address,address,uint256)": TypedContractEvent<
      BridgeSwapEvent.InputTuple,
      BridgeSwapEvent.OutputTuple,
      BridgeSwapEvent.OutputObject
    >;
    BridgeSwap: TypedContractEvent<
      BridgeSwapEvent.InputTuple,
      BridgeSwapEvent.OutputTuple,
      BridgeSwapEvent.OutputObject
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

    "Withdraw(address,address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}
