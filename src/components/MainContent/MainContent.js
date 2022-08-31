import React from 'react';
import MainOverview from "./MainOverview/MainOverview";
import MainPerformance from "./MainPerformance/MainPerformance";

export default function MainContent({ main, btcTrades, mainContent }) {


    return (
        <div className="maincontent-container">

            {
                main === "Overview" ? <MainOverview /> : <MainPerformance btcTrades={btcTrades} mainContent={mainContent} />
            }

        </div>
    )
}