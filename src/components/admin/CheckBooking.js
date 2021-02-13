import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import DeleteBooking from "./DeleteBooking";

import "react-confirm-alert/src/react-confirm-alert.css";

function CheckBooking() {

    const [booking, setBooking] = useState([]);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "enquiries/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setBooking(json))
            .catch((error) => console.log(error));
    }, []);


    
    return (
        <>
            <div className="adminbook">
            <div className="adminbook__container">
            <h2>{booking.name}</h2>
            <p>Email: {booking.email}</p>
            <p>Hotel: {booking.establishmentId}</p>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>
            <p>Booked at: {booking.createdAt}</p>             
            <DeleteBooking id={id} />
            </div>
            </div>
        </>
    );
}

export default CheckBooking;

