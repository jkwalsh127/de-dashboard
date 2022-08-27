import React from 'react';
import SupportingOverview from "./SupportingOverview/SupportingOverview";
import SupportingPerformance from "./SupportingPerformance/SupportingPerformance";

export default function SupportingContent({ supporting }) {


    return (
        <div className="supportingcontent-container">

            {
                supporting === "Overview" ? <SupportingOverview /> : <SupportingPerformance />
            }

        </div>
    )
}