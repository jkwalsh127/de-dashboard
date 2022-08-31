import React from "react";
import TradeTable from "./TradeTable";

export default function MainPerformance({ btcTrades }) {

    return (
        <>
            <TradeTable btcTrades={btcTrades} />
        </>
    )
}