import React, { useState } from "react";
import OneWK from "../../../images/btc-bot-1wk.png";
import OneMO from "../../../images/btc-bot-1mo.png";
import ThreeMOS from "../../../images/btc-bot-3mos.png";
import SixMOS from "../../../images/btc-bot-6mos.png";
import OneYR from "../../../images/btc-bot-1yr.png";
import TwoYRS from "../../../images/btc-bot-2yrs.png";
import ThreeYRS from "../../../images/btc-bot-3yrs.png";
import FiveYRS from "../../../images/btc-bot-5yrs.png";
import ChartPeriodsRadioList from "../ChartPeriodRadioList";

export default function MainOverview() {
    const [selectedChartPeriod, setSelectedChartPeriod] = useState("1wk");
    const handleChartPeriodChange = (selection) => setSelectedChartPeriod(selection);

    return (
        <div className="chart-container">
            <div className="chart-wrapper">
                {
                    selectedChartPeriod === "1wk" ?
                        <img className="chart-image" src={OneWK} alt="chart" />
                    : selectedChartPeriod === "1mo" ?
                        <img className="chart-image" src={OneMO} alt="chart" />
                    : selectedChartPeriod === "3mos" ?
                        <img className="chart-image" src={ThreeMOS} alt="chart" />
                    : selectedChartPeriod === "6mos" ?
                        <img className="chart-image" src={SixMOS} alt="chart" />
                    : selectedChartPeriod === "1yr" ?
                        <img className="chart-image" src={OneYR} alt="chart" />
                    : selectedChartPeriod === "2yrs" ?
                        <img className="chart-image" src={TwoYRS} alt="chart" />
                    : selectedChartPeriod === "3yrs" ?
                        <img className="chart-image" src={ThreeYRS} alt="chart" />
                    :
                        <img className="chart-image" src={FiveYRS} alt="chart" />
                }
                <div className="chart-radio-wrapper">
                    <ChartPeriodsRadioList handleChartPeriodChange={handleChartPeriodChange}/>
                </div>
            </div>
        </div>
    )
}