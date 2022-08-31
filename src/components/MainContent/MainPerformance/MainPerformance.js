import React from "react";
import TradeTable from "./TradeTable";

export default function MainPerformance({ btcTrades, mainContent }) {

    return (
        <>
            {
                mainContent === "trades" ?
                    <TradeTable btcTrades={btcTrades} />
                :
                    <div></div>
            }
        </>
    )
}