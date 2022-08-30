import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BalancePeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import ProfitPeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import WithdrawalPeriodsRadioList from "../RadioLists/WithdrawalPeriodsRadioList";
import RadioLabels from "../RadioLabels/RadioLabels";

export default function SupportingOverview({ users, withdrawals, weeklyWithdrawals, totalProfit, weeklyProfits }) {

    const [withdrawalPeriod, setWithdrawalPeriod] = useState(false);
    const [profitPeriod, setProfitPeriod] = useState(false);

    const [withdrawalTotal, setWithdrawalTotal] = useState();
    const [profitTotal, setProfitTotal] = useState();
  
    function sumWithdrawals(period) {
        let totalWithdrawals = 0;
        if (period > withdrawals.length || period == 0) {
            for (let i = 0; i < withdrawals.length; i++) {
                totalWithdrawals += (withdrawals[i].amount)
            }
        } else {
            if (period !== 0 ) {
                for (let i = 0; i < period; i++) {
                    totalWithdrawals += (withdrawals[i].amount)
                }
            }
        }
        setWithdrawalTotal(totalWithdrawals);
        setWithdrawalPeriod(true);
        console.log(weeklyProfits);
        console.log(withdrawals);
    }
    function sumProfits(period) {
        let totalProfits = 0;
        if (period > weeklyProfits.length || period == 0) {
            for (let i = 0; i < weeklyProfits.length; i++) {
                totalProfits += (weeklyProfits[i].profit)
            }
        } else {
            if (period !== 0 ) {
                for (let i = 0; i < period; i++) {
                    totalProfits += (weeklyProfits[i].profit)
                }
            }
        }
        setProfitTotal(totalProfits);
        setProfitPeriod(true);
    }

    const [selectedBalancePeriod, setSelectedBalancePeriod] = useState("1wk");
    const handleBalancePeriodChange = (selection) => setSelectedBalancePeriod(selection);

    const [selectedProfitPeriod, setSelectedProfitPeriod] = useState(1);
    const handleProfitPeriodChange = (period) => sumProfits(period);

    const handleWithdrawalPeriodChange = (period) => sumWithdrawals(period);

    return (
        <>
            {
                users.map(user => (
                    <>
                        <div className="details">
                            <Typography className="detail-head">
                                Your Portfolio Details
                            </Typography>
                            <div className="detail-info" id="radio-labels-container">
                                <Typography sx={{ fontSize: 10 }}>
                                    1 wk
                                </Typography>
                                <Typography sx={{ fontSize: 10 }}>
                                    1 mo
                                </Typography>
                                <Typography sx={{ fontSize: 10 }}>
                                    3 mos
                                </Typography>
                                <Typography sx={{ fontSize: 10 }}>
                                    6 mos
                                </Typography>
                                <Typography sx={{ fontSize: 10 }}>
                                    1 yr
                                </Typography>
                                <Typography sx={{ fontSize: 10 }}>
                                    All
                                </Typography>
                            </div>
                        </div>
                        <div className="details detail-1">
                            <Typography>
                                Your Investment
                            </Typography>
                            <Typography className="detail-info">
                                ${user.investment}
                            </Typography>
                        </div>
                        {/* <div className="detail-2">
                            <Typography>
                                Your Balance
                            </Typography>
                            <BalancePeriodsRadioList user={user} handleBalancePeriodChange={handleBalancePeriodChange} />
                            {
                                selectedBalancePeriod === "1wk" ?
                                    user.weeklyBalances[0]
                                : selectedBalancePeriod === "1mo" ?
                                    user.weeklyBalances[3]
                                : selectedBalancePeriod === "3mos" ?
                                    user.weeklyBalances[7]
                                : selectedBalancePeriod === "6mos" ?
                                    user.weeklyBalances[11]
                                : selectedBalancePeriod === "1yr" ?
                                    user.weeklyBalances[15]
                                : 
                                    user.weeklyBalances[19]
                            }
                        </div> */}
                        <div className="detail-with-toggle detail-3">
                            <Typography className="detail-head">Profits</Typography>
                            <Typography className="detail-info">  
                            {
                            profitPeriod === false ?
                                weeklyProfits[0].profit
                            :                          
                                profitTotal
                            }
                            </Typography>
                            <RadioLabels />
                            <ProfitPeriodsRadioList handleProfitPeriodChange={handleProfitPeriodChange} />
                        </div>
                        <div className="detail-with-toggle detail-4">
                            <Typography className="detail-head">Withdrawls</Typography>
                            <Typography className="detail-info">  
                            {
                            withdrawalPeriod === false ?
                                withdrawals[0].amount
                            :                          
                                withdrawalTotal
                            }
                            </Typography>
                            <RadioLabels />
                            <WithdrawalPeriodsRadioList handleWithdrawalPeriodChange={handleWithdrawalPeriodChange} />
                        </div>
                    </>
                ))
            }
        </>
    )
}
