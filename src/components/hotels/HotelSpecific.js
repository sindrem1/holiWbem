import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Link } from "react-router-dom";

function Hotelspecifics() {
    const [info, setInfo] = useState({});


    let { id } = useParams();

    const options = { headers }

    const url = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then(json => setInfo(json))
            .catch((error) => {
            });
    }, []);

    let CateringOptions = "";

    if (info.selfCatering === true) {
		CateringOptions =
			'We unfortunately do not serve any food';
	} else {
		CateringOptions =
			'We have a resturant with free breakfast every morning';
	}

    return (
        <>
            <div className="specific">
            <div className="specific__left">
            <h2 className="specific__name">{info.name}</h2>
            <img className="specific__img" src={info.image} alt="thumbnail for hotel"/>
            <div className="specific__desc">
            <h4 className="specific__header">Description:</h4>
            <p>{info.description}</p>
            </div>
            </div>
            <div className="specific__info">
                    <h4 className="specific__header">E-mail:</h4>
                    <a className="specific__mail" href ={`mailto:${info.email}`}>{info.email}</a>
                    <h4 className="specific__header">Max guests:</h4><p>{info.maxGuests}</p>
                    <h4 className="specific__header">Price:</h4><p>{info.price}	&euro;</p>
                    <h4 className="specific__header">Food:</h4><p>{CateringOptions}</p>
            </div>
            <Link to={"../enquiry/" + id}>
                <button className="specific__btn">Book a stay at {info.name}</button>
            </Link>
            </div>
            <div className="map">
                <iframe title="HotelMap" className="map__google" z="23" width="300" height="250" frameBorder="0"
                    scrolling="no" marginHeight="0" marginWidth="0"
                    src={`https://maps.google.com/maps?q=${info.lat},${info.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`} />
            </div>

        </>
    );

}

export default Hotelspecifics;
