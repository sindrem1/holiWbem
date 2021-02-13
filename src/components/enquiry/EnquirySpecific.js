import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Please enter a name").min(2, "Name needs to be atleast 2 characters"),
    email: yup.string().required('Email is required').email('Email is in a invalid format'),
    checkIn: yup.date().required("You must pick a Check-In date!"),
    checkOut: yup.date().required("You must pick a Check-Out date!"),

});

function EnquiryForm() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),

    });

    const [bookSucc, setbookSucc] = useState('')

    async function onSubmit(data) {

        console.log("Thanks for booking with us!")
        setbookSucc("Thanks for booking with us!");


        const MyBooking = {
            "name": data.name,
            "email": data.email,
            "establishmentId": data.establishmentId,
            "checkIn": data.checkIn,
            "checkOut": data.checkOut
        };

        console.log(JSON.stringify(data.name));

        const send = BASE_URL + "enquiries";

        const post = { headers, method: "POST", body: JSON.stringify(MyBooking) };

        await fetch(send, post)
            .then((r) => r.json())

    }
    const [info, setInfo] = useState({});

    let { id } = useParams();

    const options = { headers }

    const url = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then(json => setInfo(json))
            .catch(() => {
            });
    })


    return (
        <div className="row">
            <div className="booking">
                <div className="booking__columns">
                    <p>Hotel:</p>
                    <p>{info.name}</p>
                    <p>Price per night:</p>
                    <p>{info.price} &euro;</p>

                    <img className="booking__img" src={info.image} alt="thumbnail for hotel"/>
                </div>

                <div className="booking__columns">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="booking__success">{bookSucc}</p>
                       <p>Name:</p> <input className="booking__field" name="name" placeholder="Your name" ref={register} />
                        {errors.name && <p className="error">{errors.name.message}</p>}

                        <p>Email:</p><input className="booking__field" name="email" type="email" placeholder="Mail@mail.com" ref={register} />
                        {errors.email && <p className="error">{errors.email.message}</p>}

                        <input type="hidden" name="establishmentId" defaultValue={info.id} ref={register} />

                        <p>Check-in:</p> <input className="booking__field" name="checkIn" type="date" ref={register} />
                        {errors.checkIn && <p className="error">{errors.checkIn.message}</p>}
                        <p className="booking__warning">Check-in after 12:00. </p>
                        <p>Check-out:</p> <input className="booking__field" name="checkOut" type="date" ref={register} />
                        <p className="booking__warning">Check-out at 11:00, delayed check-out can be arranged for an extra fee. </p>
                        {errors.checkOut && <p className="error">{errors.checkOut.message}</p>}

                        <button id="submit" className="booking__btn">Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
    }

export default EnquiryForm;
