import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TotalWithdrawalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TotalProfitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WeeklyWithdrawalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WeeklyProfitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WeeklyBalanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WithdrawalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TotalWithdrawal {
  readonly id: string;
  readonly date?: string | null;
  readonly amount?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TotalWithdrawal, TotalWithdrawalMetaData>);
  static copyOf(source: TotalWithdrawal, mutator: (draft: MutableModel<TotalWithdrawal, TotalWithdrawalMetaData>) => MutableModel<TotalWithdrawal, TotalWithdrawalMetaData> | void): TotalWithdrawal;
}

export declare class TotalProfit {
  readonly id: string;
  readonly date?: string | null;
  readonly profit?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TotalProfit, TotalProfitMetaData>);
  static copyOf(source: TotalProfit, mutator: (draft: MutableModel<TotalProfit, TotalProfitMetaData>) => MutableModel<TotalProfit, TotalProfitMetaData> | void): TotalProfit;
}

export declare class WeeklyWithdrawal {
  readonly id: string;
  readonly date?: string | null;
  readonly amount?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WeeklyWithdrawal, WeeklyWithdrawalMetaData>);
  static copyOf(source: WeeklyWithdrawal, mutator: (draft: MutableModel<WeeklyWithdrawal, WeeklyWithdrawalMetaData>) => MutableModel<WeeklyWithdrawal, WeeklyWithdrawalMetaData> | void): WeeklyWithdrawal;
}

export declare class WeeklyProfit {
  readonly id: string;
  readonly date?: string | null;
  readonly profit?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WeeklyProfit, WeeklyProfitMetaData>);
  static copyOf(source: WeeklyProfit, mutator: (draft: MutableModel<WeeklyProfit, WeeklyProfitMetaData>) => MutableModel<WeeklyProfit, WeeklyProfitMetaData> | void): WeeklyProfit;
}

export declare class WeeklyBalance {
  readonly id: string;
  readonly date?: string | null;
  readonly balance?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WeeklyBalance, WeeklyBalanceMetaData>);
  static copyOf(source: WeeklyBalance, mutator: (draft: MutableModel<WeeklyBalance, WeeklyBalanceMetaData>) => MutableModel<WeeklyBalance, WeeklyBalanceMetaData> | void): WeeklyBalance;
}

export declare class Withdrawal {
  readonly id: string;
  readonly date?: string | null;
  readonly amount?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Withdrawal, WithdrawalMetaData>);
  static copyOf(source: Withdrawal, mutator: (draft: MutableModel<Withdrawal, WithdrawalMetaData>) => MutableModel<Withdrawal, WithdrawalMetaData> | void): Withdrawal;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly investment?: number | null;
  readonly balance?: number | null;
  readonly Withdrawals?: (Withdrawal | null)[] | null;
  readonly profit?: number | null;
  readonly WeeklyBalances?: (WeeklyBalance | null)[] | null;
  readonly WeeklyProfits?: (WeeklyProfit | null)[] | null;
  readonly WeeklyWithdrawals?: (WeeklyWithdrawal | null)[] | null;
  readonly TotalProfits?: (TotalProfit | null)[] | null;
  readonly TotalWithdrawals?: (TotalWithdrawal | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}