// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TotalWithdrawal, TotalProfit, WeeklyWithdrawal, WeeklyProfit, WeeklyBalance, Withdrawal, User } = initSchema(schema);

export {
  TotalWithdrawal,
  TotalProfit,
  WeeklyWithdrawal,
  WeeklyProfit,
  WeeklyBalance,
  Withdrawal,
  User
};