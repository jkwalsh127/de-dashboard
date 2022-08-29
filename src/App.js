import React, { useEffect, useState } from 'react';
import MainContent from "./components/MainContent/MainContent";
import SupportingContent from "./components/SupportingConent/SupportingContent";
import Header from "./components/Header/Header";
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
// import { DataStore } from '@aws-amplify/datastore';
// import { Users } from './models';


export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    // const userModels = await DataStore.query(Users);
    // console.log(userModels);
    // setUser(userModels);
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
            <SupportingContent supporting={supporting} user={user} />
            <MainContent main={main} />
        </div>
      )}
    </Authenticator>
  );
}