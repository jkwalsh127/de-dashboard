import React, { useState, useEffect } from "react";
import TradeTable from "./TradeTable";
import { DataStore } from "aws-amplify";
import { BtcTrade } from "../../../models";

export default function MainPerformance() {
    const [btcTrades, setBtcTrades] = useState([]);

    useEffect(() => {
        fetchBtcTrades();
    }, []);

    async function fetchBtcTrades() {
        const btcTradeModels = await DataStore.query(BtcTrade);
        console.log(btcTradeModels);
        setBtcTrades(btcTradeModels);
    }

    return (
        <>
            <TradeTable btcTrades={btcTrades}/>
        </>
    )
}