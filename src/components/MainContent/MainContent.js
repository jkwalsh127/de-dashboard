import React from 'react';
import MainOverview from "./MainOverview/MainOverview";
import MainPerformance from "./MainPerformance/MainPerformance";

export default function MainContent({ main, btcTrades, weeklyProfits, mainContent }) {


    return (
        <div className="maincontent-container">

            {
                main === "Overview" ? <MainOverview /> : <MainPerformance btcTrades={btcTrades} weeklyProfits={weeklyProfits} mainContent={mainContent} />
            }

        </div>
    )
}