import React, { useState } from "react";
import { Typography } from "@mui/material";
import BalancePeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import ProfitPeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import WithdrawalPeriodsRadioList from "../RadioLists/WithdrawalPeriodsRadioList";
import RadioLabels from "../RadioLabels/RadioLabels";

export default function SupportingOverview({ users, withdrawals, weeklyWithdrawals }) {

    const [withdrawalTotal, setWithdrawalTotal] = useState();
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
    }

    const [selectedBalancePeriod, setSelectedBalancePeriod] = useState("1wk");
    const handleBalancePeriodChange = (selection) => setSelectedBalancePeriod(selection);

    const [selectedProfitPeriod, setSelectedProfitPeriod] = useState("1wk");
    const handleProfitPeriodChange = (selection) => setSelectedProfitPeriod(selection);

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
                        {/* <div className="detail-3">
                            <Typography>Profit</Typography>
                            <ProfitPeriodsRadioList user={user} handleProfitPeriodChange={handleProfitPeriodChange} />
                            {
                                selectedProfitPeriod === "1wk" ?
                                    user.weeklyProfits[0]
                                : selectedProfitPeriod === "1mo" ?
                                    user.weeklyProfits[3]
                                : selectedProfitPeriod === "3mos" ?
                                    user.weeklyProfits[7]
                                : selectedProfitPeriod === "6mos" ?
                                    user.weeklyProfits[11]
                                : selectedProfitPeriod === "1yr" ?
                                    user.weeklyProfits[15]
                                : 
                                    user.weeklyProfits[19]
                            }
                        </div> */}
                        <div className="detail-with-toggle detail-4">
                            <Typography className="detail-head">Withdrawls</Typography>
                            <Typography className="detail-info">                                
                                {withdrawalTotal}
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
