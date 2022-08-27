import React, { useState } from 'react';
import MainContent from "./components/MainContent/MainContent";
import SupportingContent from "./components/SupportingConent/SupportingContent";
import Header from "./components/Header/Header";


export default function App() {

  const [supporting, setSupporting] = useState("Overview");
  const handleSupportingChange = (selection) => setSupporting(selection);

  const [main, setMain] = useState("Overview");
  const handleMainChange = (selection) => setMain(selection);

  return (
    <div className="app">
        <Header  handleSupportingChange={handleSupportingChange} handleMainChange={handleMainChange} />
        <SupportingContent supporting={supporting} />
        <MainContent main={main} />
    </div>
  );
}