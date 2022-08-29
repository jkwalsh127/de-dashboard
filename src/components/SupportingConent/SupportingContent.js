import React from 'react';
import SupportingOverview from "./SupportingOverview/SupportingOverview";
import SupportingPerformance from "./SupportingPerformance/SupportingPerformance";

export default function SupportingContent({ supporting, userArray }) {


    return (
        <div className="supportingcontent-container">

            {
                supporting === "Overview" ? <SupportingOverview user={userArray} /> : <SupportingPerformance />
            }

        </div>
    )
}