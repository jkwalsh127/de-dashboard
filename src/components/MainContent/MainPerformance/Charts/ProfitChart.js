import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
import { green } from "@mui/material/colors";

export default function ProfitChart({ btcTrades, weeklyProfitsArray }) {

    const dataSet = {
        labels: btcTrades.map((trade) => trade.entryDate),
        datasets: [{
            label: "Total Profit",
            data: weeklyProfitsArray.map((profit) => profit.profit),
            backgroundColor: ["blue"],
            type: 'line',
            yAxisID: 'totalProfit',
            order: 1,
        },{
            label: "Trade Profit",
            data: btcTrades.map((trade) => trade.profitValue),
            backgroundColor: ["green"],
            type: 'bar',
            yAxisID: 'tradeProfit',
            order: 2
        }],
        options: {
            scales: [{
                totalProfit: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    color: 'green',
                },
                tradeProfit: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                },
            }],
        }
    };

    return (
        <div style={{width: "100%", maxHeight: "100%"}}>
            <Line data={dataSet} />
        </div>
    )
}