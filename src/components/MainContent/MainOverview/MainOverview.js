import React, { useState } from "react";
import photo from "../../../images/btc-bot.png";
import ChartPeriodsRadioList from "../ChartPeriodRadioList";

export default function MainOverview() {
    const [selectedChartPeriod, setSelectedChartPeriod] = useState("1wk");
    const handleChartPeriodChange = (selection) => setSelectedChartPeriod(selection);

    return (
        <div className="chart-container">
            <div className="chart-wrapper">
                {
                    selectedChartPeriod === "1wk" ?
                        <img className="chart-image" src={photo} alt="chart" />
                    :
                        <img className="chart-image" src={photo} alt="chart" />
                }
                <div className="chart-radio-wrapper">
                    <ChartPeriodsRadioList handleChartPeriodChange={handleChartPeriodChange}/>
                </div>
            </div>
        </div>
    )
}