import React, { useState } from "react";
import { Typography } from "@mui/material";
import BalancePeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import ProfitPeriodsRadioList from "../RadioLists/ProfitPeriodsRadioList";
import WithdrawalPeriodsRadioList from "../RadioLists/WithdrawalPeriodsRadioList";

export default function SupportingOverview({ userArray }) {
    const [selectedBalancePeriod, setSelectedBalancePeriod] = useState("1wk");
    const handleBalancePeriodChange = (selection) => setSelectedBalancePeriod(selection);

    const [selectedProfitPeriod, setSelectedProfitPeriod] = useState("1wk");
    const handleProfitPeriodChange = (selection) => setSelectedProfitPeriod(selection);

    const [selectedWithdrawalPeriod, setSelectedWithdrawalPeriod] = useState("1wk");
    const handleWithdrawalPeriodChange = (selection) => setSelectedWithdrawalPeriod(selection);

    return (
        <>
            {
                userArray.map(user => (
                    <>
                        <div className="details-header">
                            <Typography>
                                Your Portfolio Details
                            </Typography>
                            <Typography>
                                1 wk
                            </Typography>
                            <Typography>
                                1 mo
                            </Typography>
                            <Typography>
                                3 mos
                            </Typography>
                            <Typography>
                                6 mos
                            </Typography>
                            <Typography>
                                1 yr
                            </Typography>
                            <Typography>
                                All
                            </Typography>
                        </div>
                        <div className="detail-1">
                            <Typography>
                                Your Investment
                            </Typography>
                            <Typography>
                                {/* {user.investment} */}
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
                        {/* <div className="detail-4">
                            <Typography>Withdrawls</Typography>
                            <WithdrawalPeriodsRadioList user={user} handleWithdrawalPeriodChange={handleWithdrawalPeriodChange} />
                            {
                                selectedWithdrawalPeriod === "1wk" ?
                                    user.weeklyWithdrawals[0]
                                : selectedWithdrawalPeriod === "1mo" ?
                                    user.weeklyWithdrawals[3]
                                : selectedWithdrawalPeriod === "3mos" ?
                                    user.weeklyWithdrawals[7]
                                : selectedWithdrawalPeriod === "6mos" ?
                                    user.weeklyWithdrawals[11]
                                : selectedWithdrawalPeriod === "1yr" ?
                                    user.weeklyWithdrawals[15]
                                : 
                                    user.weeklyWithdrawals[19]
                            }
                        </div> */}
                    </>
                ))
            }
        </>
    )
}
