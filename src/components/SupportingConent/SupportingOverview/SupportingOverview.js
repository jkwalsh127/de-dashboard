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
                        <div className="details detail-head">
                            <Typography sx={{}}>
                                Welcome {user.name}
                            </Typography>
                            <Typography sx={{}}>
                                Member since {user.joinDate}
                            </Typography>
                        </div>
                        {/* <div className="details">
                            <Typography className="detail-head">
                                Your Portfolio Details
                            </Typography>
                        </div> */}
                        <div className="details detail-1">
                            <Typography>
                                Your Investment
                            </Typography>
                            <Typography className="detail-info">
                                ${user.investment}
                            </Typography>
                        </div>
                        <div className="detail-with-toggle detail-2">
                            <Typography className="detail-head">
                                Your Balance
                            </Typography>
                            <Typography className="detail-info">  
                                ${user.balance}
                            </Typography>
                        </div>
                        <div className="detail-with-toggle detail-3">
                            <Typography className="detail-head">
                                Profits
                            </Typography>
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
                            <Typography className="detail-head">
                                Withdrawls
                            </Typography>
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
