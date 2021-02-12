import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import EnquiryItem from "./Enquiryltem";

function HotelList() {
    const [Booking, setBooking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const url = BASE_URL + "establishments";

    const options = { headers }

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setBooking(json);
                setError(null);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setLoading(false));
    }, []);

    const renderLoading = () => {
        if (loading) {
        }
    }

    return (
        <>
            <div className="row">

                {renderLoading()}

                {error && <div>{error}</div>}

                {Booking.map(hotel => {
                    const { id, name, image, price, maxGuests, description  } = hotel;

                    return (
                        <EnquiryItem key={id} id={id} name={name} image={image} price={price} maxGuests={maxGuests} description={description} />
                    );
                })}
            </div>
        </>
    );

}

export default HotelList;