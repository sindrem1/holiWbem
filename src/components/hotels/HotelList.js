import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constants/api";
import HotelItem from "./Hoteltem";

function HotelList() {
    const [Hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const url = BASE_URL + "establishments";

    const options = { headers }

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotels(json);
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

                {Hotels.map(hotel => {
                    const { id, name, image } = hotel;

                    return (
                        <HotelItem key={id} id={id} name={name} image={image} />
                    );
                })}
            </div>
        </>
    );

}

export default HotelList;