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
} from "../../../common";

export interface TokenizableStakingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admins"
      | "allowance"
      | "allowedRewardTokenList"
      | "allowedRewardTokens"
      | "approveOnlyPool"
      | "baseToken"
      | "creationSigner"
      | "eip712Domain"
      | "factory"
      | "fakeRewardOf"
      | "fakeRewardsTotal"
      | "inventory"
      | "isTokenizable"
      | "lockSeconds"
      | "name"
      | "owner"
      | "renounceOwnership"
      | "rewardsTotal"
      | "setAdmin"
      | "setCreationSigner"
      | "setLockSeconds"
      | "stake"
      | "stakeOf"
      | "stakeWithAllocation"
      | "stakedBalance"
      | "stakings"
      | "sweepBase"
      | "sweepRewards"
      | "transferFromOnlyPool"
      | "transferOnlyPool"
      | "transferOwnership"
      | "usedHashes"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BasePaid"
      | "EIP712DomainChanged"
      | "OwnershipTransferred"
      | "RewardAdded"
      | "RewardPaid"
      | "Staked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "admins",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedRewardTokenList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedRewardTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approveOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "baseToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "creationSigner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fakeRewardOf",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fakeRewardsTotal",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTokenizable",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lockSeconds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsTotal",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreationSigner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockSeconds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeOf",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeWithAllocation",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepBase",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sweepRewards",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFromOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOnlyPool",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usedHashes",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "admins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedRewardTokenList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveOnlyPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creationSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fakeRewardOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fakeRewardsTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTokenizable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCreationSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockSeconds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeWithAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sweepBase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sweepRewards",
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
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usedHashes", data: BytesLike): Result;
}

export namespace BasePaidEvent {
  export type InputTuple = [
    id: AddressLike,
    staker: AddressLike,
    to: AddressLike,
    token: AddressLike,
    amountPaid: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    staker: string,
    to: string,
    token: string,
    amountPaid: bigint
  ];
  export interface OutputObject {
    id: string;
    staker: string;
    to: string;
    token: string;
    amountPaid: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
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

export namespace RewardAddedEvent {
  export type InputTuple = [
    id: AddressLike,
    rewardToken: AddressLike,
    rewardAmount: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    rewardToken: string,
    rewardAmount: bigint
  ];
  export interface OutputObject {
    id: string;
    rewardToken: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPaidEvent {
  export type InputTuple = [
    id: AddressLike,
    staker: AddressLike,
    to: AddressLike,
    rewardTokens: AddressLike[],
    rewards: BigNumberish[]
  ];
  export type OutputTuple = [
    id: string,
    staker: string,
    to: string,
    rewardTokens: string[],
    rewards: bigint[]
  ];
  export interface OutputObject {
    id: string;
    staker: string;
    to: string;
    rewardTokens: string[];
    rewards: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakedEvent {
  export type InputTuple = [
    id: AddressLike,
    tokenAddress: AddressLike,
    staker: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    tokenAddress: string,
    staker: string,
    amount: bigint
  ];
  export interface OutputObject {
    id: string;
    tokenAddress: string;
    staker: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TokenizableStaking extends BaseContract {
  connect(runner?: ContractRunner | null): TokenizableStaking;
  waitForDeployment(): Promise<this>;

  interface: TokenizableStakingInterface;

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

  admins: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  allowance: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [bigint],
    "view"
  >;

  allowedRewardTokenList: TypedContractMethod<
    [id: AddressLike],
    [string[]],
    "view"
  >;

  allowedRewardTokens: TypedContractMethod<
    [id: AddressLike, rewardToken: AddressLike],
    [boolean],
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

  baseToken: TypedContractMethod<[id: AddressLike], [string], "view">;

  creationSigner: TypedContractMethod<[], [string], "view">;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  fakeRewardOf: TypedContractMethod<
    [id: AddressLike, staker: AddressLike, rewardToken: AddressLike],
    [bigint],
    "view"
  >;

  fakeRewardsTotal: TypedContractMethod<
    [id: AddressLike, rewardToken: AddressLike],
    [bigint],
    "view"
  >;

  inventory: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  isTokenizable: TypedContractMethod<[id: AddressLike], [boolean], "view">;

  lockSeconds: TypedContractMethod<[id: AddressLike], [bigint], "view">;

  name: TypedContractMethod<[id: AddressLike], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardsTotal: TypedContractMethod<
    [id: AddressLike, rewardAddress: AddressLike],
    [bigint],
    "view"
  >;

  setAdmin: TypedContractMethod<
    [id: AddressLike, admin: AddressLike, role: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCreationSigner: TypedContractMethod<
    [_signer: AddressLike],
    [void],
    "nonpayable"
  >;

  setLockSeconds: TypedContractMethod<
    [id: AddressLike, _lockSeconds: BigNumberish],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<
    [to: AddressLike, id: AddressLike],
    [bigint],
    "nonpayable"
  >;

  stakeOf: TypedContractMethod<
    [id: AddressLike, staker: AddressLike],
    [bigint],
    "view"
  >;

  stakeWithAllocation: TypedContractMethod<
    [
      to: AddressLike,
      id: AddressLike,
      allocation: BigNumberish,
      salt: BytesLike,
      allocatorSignature: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  stakedBalance: TypedContractMethod<[id: AddressLike], [bigint], "view">;

  stakings: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, boolean, bigint, bigint, bigint, bigint, bigint] & {
        stakeType: bigint;
        restrictedRewards: boolean;
        contribStart: bigint;
        contribEnd: bigint;
        endOfLife: bigint;
        configHardCutOff: bigint;
        flags: bigint;
      }
    ],
    "view"
  >;

  sweepBase: TypedContractMethod<[id: AddressLike], [void], "nonpayable">;

  sweepRewards: TypedContractMethod<
    [id: AddressLike, rewardTokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  transferFromOnlyPool: TypedContractMethod<
    [
      id: AddressLike,
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

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  usedHashes: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admins"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "allowedRewardTokenList"
  ): TypedContractMethod<[id: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "allowedRewardTokens"
  ): TypedContractMethod<
    [id: AddressLike, rewardToken: AddressLike],
    [boolean],
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
    nameOrSignature: "baseToken"
  ): TypedContractMethod<[id: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "creationSigner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fakeRewardOf"
  ): TypedContractMethod<
    [id: AddressLike, staker: AddressLike, rewardToken: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "fakeRewardsTotal"
  ): TypedContractMethod<
    [id: AddressLike, rewardToken: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "inventory"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isTokenizable"
  ): TypedContractMethod<[id: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lockSeconds"
  ): TypedContractMethod<[id: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[id: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardsTotal"
  ): TypedContractMethod<
    [id: AddressLike, rewardAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<
    [id: AddressLike, admin: AddressLike, role: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCreationSigner"
  ): TypedContractMethod<[_signer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setLockSeconds"
  ): TypedContractMethod<
    [id: AddressLike, _lockSeconds: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [to: AddressLike, id: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakeOf"
  ): TypedContractMethod<
    [id: AddressLike, staker: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakeWithAllocation"
  ): TypedContractMethod<
    [
      to: AddressLike,
      id: AddressLike,
      allocation: BigNumberish,
      salt: BytesLike,
      allocatorSignature: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stakedBalance"
  ): TypedContractMethod<[id: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "stakings"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, boolean, bigint, bigint, bigint, bigint, bigint] & {
        stakeType: bigint;
        restrictedRewards: boolean;
        contribStart: bigint;
        contribEnd: bigint;
        endOfLife: bigint;
        configHardCutOff: bigint;
        flags: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "sweepBase"
  ): TypedContractMethod<[id: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sweepRewards"
  ): TypedContractMethod<
    [id: AddressLike, rewardTokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFromOnlyPool"
  ): TypedContractMethod<
    [
      id: AddressLike,
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
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "usedHashes"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  getEvent(
    key: "BasePaid"
  ): TypedContractEvent<
    BasePaidEvent.InputTuple,
    BasePaidEvent.OutputTuple,
    BasePaidEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPaid"
  ): TypedContractEvent<
    RewardPaidEvent.InputTuple,
    RewardPaidEvent.OutputTuple,
    RewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "Staked"
  ): TypedContractEvent<
    StakedEvent.InputTuple,
    StakedEvent.OutputTuple,
    StakedEvent.OutputObject
  >;

  filters: {
    "BasePaid(address,address,address,address,uint256)": TypedContractEvent<
      BasePaidEvent.InputTuple,
      BasePaidEvent.OutputTuple,
      BasePaidEvent.OutputObject
    >;
    BasePaid: TypedContractEvent<
      BasePaidEvent.InputTuple,
      BasePaidEvent.OutputTuple,
      BasePaidEvent.OutputObject
    >;

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
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

    "RewardAdded(address,address,uint256)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "RewardPaid(address,address,address,address[],uint256[])": TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;
    RewardPaid: TypedContractEvent<
      RewardPaidEvent.InputTuple,
      RewardPaidEvent.OutputTuple,
      RewardPaidEvent.OutputObject
    >;

    "Staked(address,address,address,uint256)": TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
    Staked: TypedContractEvent<
      StakedEvent.InputTuple,
      StakedEvent.OutputTuple,
      StakedEvent.OutputObject
    >;
  };
}
