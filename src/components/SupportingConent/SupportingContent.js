import React from 'react';
import SupportingOverview from "./SupportingOverview/SupportingOverview";
import SupportingPerformance from "./SupportingPerformance/SupportingPerformance";

export default function SupportingContent({ supporting, users, withdrawals, weeklyWithdrawals }) {


    return (
        <div className="supportingcontent-container">

            {
                supporting === "Overview" ? <SupportingOverview users={users} withdrawals={withdrawals} weeklyWithdrawals={weeklyWithdrawals} /> : <SupportingPerformance />
            }

        </div>
    )
}