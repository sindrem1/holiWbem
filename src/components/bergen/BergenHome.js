import React from "react";
import Heading from "../heading/Heading";
import Underhead from "../heading/Underhead";
import BergenInfo from "./BergenInfo"


function BergenHome() {
    return (
        <>
            <Heading content="Bergen" />
            <Underhead content="The city between the 7 mountains" />
            <BergenInfo/>
        </>
    )
}

export default BergenHome;