import { Button } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";

export default function Header({ signOut, handleSupportingChange, handleMainChange }) {


    return (
        <div className="header-container">
            <Dropdown handleSupportingChange={handleSupportingChange} handleMainChange={handleMainChange} />
            <Button className="signout-button" onClick={signOut}>Sign Out</Button>
        </div>
    )
}