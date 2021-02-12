import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import DeleteContact from "./DeleteContact";
import "react-confirm-alert/src/react-confirm-alert.css";

function CheckContact() {

    const [contact, setContact] = useState([]);

    let { id } = useParams();

    const options = { headers };
    
    const fetchUrl = BASE_URL + "contacts/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setContact(json))
            .catch((error) => console.log(error));
    }, []);

 
    return (
        <>
            
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
            <p>Id: {contact.id}</p>
            <p>Contacted at: {contact.createdAt}</p>
            <a href={`mailto:${contact.email}?subject=Holidaze update on ${contact.id}&body= ${contact.message}`}> Answer</a>
            <DeleteContact id={id} />
        </>
    );
}

export default CheckContact;
