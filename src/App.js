import React, { useEffect, useState } from 'react';
import MainContent from "./components/MainContent/MainContent";
import SupportingContent from "./components/SupportingConent/SupportingContent";
import Header from "./components/Header/Header";
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { DataStore } from '@aws-amplify/datastore';
import { User, Withdrawal, WeeklyWithdrawal } from './models';


export default function App() {
  const [users, setUser] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [weeklyWithdrawals, setWeeklyWithdrawals] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchWithdrawals();
    fetchWeeklyWithdrawals();
  }, []);

  async function fetchUser() {
    const userModels = await DataStore.query(User);
    console.log(userModels);
    setUser(userModels);
  }

  async function fetchWithdrawals() {
    const withdrawalModels = await DataStore.query(Withdrawal);
    console.log(withdrawalModels);
    setWithdrawals(withdrawalModels);
  }

  async function fetchWeeklyWithdrawals() {
    const weeklyWithdrawalModels = await DataStore.query(WeeklyWithdrawal);
    console.log(weeklyWithdrawalModels);
    setWeeklyWithdrawals(weeklyWithdrawalModels);
  }

  const [supporting, setSupporting] = useState("Overview");
  const handleSupportingChange = (selection) => setSupporting(selection);

  const [main, setMain] = useState("Overview");
  const handleMainChange = (selection) => setMain(selection);

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="app-container">
            <Header  signOut={signOut} handleSupportingChange={handleSupportingChange} handleMainChange={handleMainChange} />
            <SupportingContent supporting={supporting} users={users} withdrawals={withdrawals} weeklyWithdrawals={weeklyWithdrawals} />
            <MainContent main={main} />
        </div>
      )}
    </Authenticator>
  );
}