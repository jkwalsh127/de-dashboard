import React, { useEffect, useState } from "react";
import ProfitChart from "./Charts/ProfitChart";

export default function PerformanceChart({ btcTrades, weeklyProfits }) {

    const [weeklyProfitsArray, setWeeklyProfitsArray] = useState([]);

    function sumWeeklyProfits() {
        let totalWeeklyProfitsValue = 0;
        let totalWeeklyProfitsArray = [];
        let newTotal = {};
        console.log(weeklyProfits);
        for (let i = 0; i < weeklyProfits.length; i++) {
            newTotal = {profit: totalWeeklyProfitsValue += (weeklyProfits[i].profit)};
            totalWeeklyProfitsArray.push(newTotal);
        };
        console.log(totalWeeklyProfitsArray);
        setWeeklyProfitsArray(totalWeeklyProfitsArray);
      }


    useEffect(() => {
        sumWeeklyProfits();
      }, []);

    return (
        <>
            <ProfitChart btcTrades={btcTrades} weeklyProfitsArray={weeklyProfitsArray} />
        </>
    )
}