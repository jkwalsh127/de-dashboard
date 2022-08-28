import React from 'react';
import SupportingOverview from "./SupportingOverview/SupportingOverview";
import SupportingPerformance from "./SupportingPerformance/SupportingPerformance";

export default function SupportingContent({ supporting, user }) {


    return (
        <div className="supportingcontent-container">

            {
                supporting === "Overview" ? <SupportingOverview user={user} /> : <SupportingPerformance />
            }

        </div>
    )
}