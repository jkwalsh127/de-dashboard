import React from "react";
import PerformanceChart from "./PerformanceChart";
import TradeTable from "./TradeTable";

export default function MainPerformance({ btcTrades, mainContent, weeklyProfits }) {

    return (
        <>
            {
                mainContent === "trades" ?
                    <TradeTable btcTrades={btcTrades} />
                :
                    <PerformanceChart btcTrades={btcTrades} weeklyProfits={weeklyProfits} />
            }
        </>
    )
}