import React from "react";
import MainContentRadioList from "./RadioLists/MainContentRadioList";

export default function SupportingPerformance({ handleMainContentChange }) {

    return (
        <>
            <MainContentRadioList handleMainContentChange={handleMainContentChange}/>
        </>
    )
}