import { Typography } from "@mui/material";
import React from "react";
import { WithdrawalPeriodsRadioList } from "../WithdrawalPeriodsRadioList";

export default function SupportingOverview({ user }) {


    return (
        <>
            {
                user.map(user => (
                    <>
                        <div className="detail-1">
                            <Typography>
                                Your Investment
                            </Typography>
                            <Typography>
                                {/* {user.investment} */}
                            </Typography>
                        </div>
                        <div className="detail-2">
                            <Typography>
                                Your Balance
                            </Typography>
                            <Typography>
                                {/* {user.balance} */}
                            </Typography>
                        </div>
                        <div className="detail-3">
                            <Typography>Profit</Typography>
                            <WithdrawalPeriodsRadioList />
                        </div>
                        <div className="detail-4">
                            <Typography>Withdrawls</Typography>
                        </div>
                    </>
                ))
            }
        </>
    )
}