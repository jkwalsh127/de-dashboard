import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";

export default function ProfitChart({ btcTrades, weeklyProfitsArray }) {

    const chartData = {
        labels: btcTrades.map((trade) => trade.entryDate),
        datasets: [{
          label: "Trade Profit",
          data: btcTrades.map((trade) => trade.profitValue),
          backgroundColor: ["red"],
        },{
          label: "Total Profit",
          data: weeklyProfitsArray.map((profit) => profit.profit),
          backgroundColor: ["blue"],
        }]
      };

    return (
        <div style={{width: "100%", maxHeight: "100%"}}>
            <Line data={chartData} />
        </div>
    )
}