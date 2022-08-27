import React from "react";
import Dropdown from "./Dropdown";

export default function Header({ handleSupportingChange, handleMainChange }) {


    return (
        <div className="header-container">
            <Dropdown handleSupportingChange={handleSupportingChange} handleMainChange={handleMainChange} />
        </div>
    )
}