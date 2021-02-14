import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "contacts";


    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setContacts([]);
                    setError(json.message);
                } else {
                    setContacts(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <div className="admincontact">
            <h1>Contacts:</h1>
            {error && <div className="error">{error}</div>}
            <div className="admincontact__contact">
            <ul>
                {contacts.map((contacts) => {
                    return (
                        
                        <li key={contacts.id}>
                                   <h2>{contacts.name}</h2>
                                    <p>Email: {contacts.email}</p>
                                    <p>Message: {contacts.message}</p>
                                    <p>Sent at: {contacts.createdAt}</p>
                                    <a href={`mailto:${contacts.email}?subject=Holidaze update on ${contacts.id}&body= ${contacts.message}`}> Answer</a>
                                    <NavLink to={`/admin/contacts/details/${contacts.id}`}><p>More details</p></NavLink>
                        </li>
                    );
                })}
            </ul>
            </div>
        </div>
        </>
    );
}

export default Contacts;
