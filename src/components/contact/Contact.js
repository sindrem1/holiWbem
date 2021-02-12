import React from "react";
import ContactForm from "./ContactForm";
import Heading from "../heading/Heading";
import Underhead from "../heading/Underhead"


function Contact() {
    return (
        <>
        <Heading content="Contact" />
        <Underhead content="Here you can send in your questions" />
        
            <ContactForm />
        </>
    )
}

export default Contact;