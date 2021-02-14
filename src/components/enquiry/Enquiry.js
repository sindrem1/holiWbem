import React from "react";
import Heading from "../heading/Heading";
import Underhead from "../heading/Underhead"
import EnquiryItem from "./EnquiryList"

function Booking() {
    return (
        <>
            <Heading content="Booking" />
            <Underhead content="Please select the hotel you want to book a stay at:"/>
            <div className="hotel__container">
            <EnquiryItem />
            </div>
        </>
    )
}

export default Booking;