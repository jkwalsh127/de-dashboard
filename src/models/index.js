// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BtcTrade, TotalWithdrawal, TotalProfit, WeeklyWithdrawal, WeeklyProfit, WeeklyBalance, Withdrawal, User } = initSchema(schema);

export {
  BtcTrade,
  TotalWithdrawal,
  TotalProfit,
  WeeklyWithdrawal,
  WeeklyProfit,
  WeeklyBalance,
  Withdrawal,
  User
};