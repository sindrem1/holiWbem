import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";


function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);

    const url = BASE_URL + "enquiries";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setBookings([]);
                    setError(json.message);
                } else {
                    setBookings(json);
                }
            })
            .catch((error) => console.log(error));
    }, []);

 
    return (
        <>
            <div className="adminbook">
            <div className="adminbook__container">
            <h1>Bookings</h1>
            {error && <div className="error">{error}</div>}
                {bookings.map((bookings) => {
                    return (
                        <div key={bookings.id}>
                                   <h2 className="adminbook__title">{bookings.name}</h2>
                                   <NavLink to={`/hotel/${bookings.establishmentId}`}><p>Hotel: {bookings.establishmentId}</p></NavLink>       
                                    <p>Check-in: {bookings.checkIn}</p>
                                    <p>Check-out: {bookings.checkOut}</p>
                            <NavLink to={`/admin/boookings/details/${bookings.id}`}>More details</NavLink>
                        </div>
                    );
                })}
        </div>
        </div>
        </>
    );
}

export default Bookings;
