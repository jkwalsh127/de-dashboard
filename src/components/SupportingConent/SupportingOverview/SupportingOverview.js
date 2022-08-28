import { Typography } from "@mui/material";
import React from "react";

export default function SupportingOverview() {


    return (
        <>
            <div className="detail-1">
                <Typography>Your Investment</Typography>
                <Typography>$100,000</Typography>
            </div>
            <div className="detail-2">
                <Typography>Your Balance</Typography>
                <Typography>$131,254</Typography>
            </div>
            <div className="detail-3">
                <Typography>Profit</Typography>
            </div>
            <div className="detail-4">
                <Typography>Withdrawls</Typography>
            </div>
        </>
    )
}