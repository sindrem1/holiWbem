import React from "react";
import Heading from "../heading/Heading";
import Underhead from "../heading/Underhead";
import HotelList from "./HotelList"

function HotelsHome() {
    return (
        <>
            <Heading content="Hotels" />
            <Underhead content="Here you can see our great partners" />
            <div className="hotel__container">
            <HotelList />
            </div>
        </>
    )
}

export default HotelsHome;