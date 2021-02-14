import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constants/api";
import DeleteHotel from "./DeleteHotel";

function AddHotel() {
    const defaultState = {
        name: "",
        email: "",
    };

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [hotel, setHotel] = useState(defaultState);

    let { id } = useParams();

    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setHotel(json))
            .catch((error) => console.log(error));
    }, []);

    async function onSubmit(data) {
        console.log("data", data);

        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, updateOptions);
        history.push("/admin/hotels");
    }

    return (
        <>
        <div className="HotelAdmin">
        <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name:</p> 
        <input className="adminfield" name="name" defaultValue={hotel.name} placeholder="Hotel name" ref={register} />
        
        <p>Email:</p>
        <input className="adminfield" name="email" type="email" defaultValue={hotel.email} placeholder="Mail@mail.com" ref={register} />
        
        <p>Image:</p>
        <input className="adminfield" name="image" defaultValue={hotel.image} placeholder="Image URL" ref={register} />
       
        <p>Price:</p>
        <input className="adminfield" name="price" defaultValue={hotel.price} type="number" placeholder="Price" ref={register} />
     
        <p>Max Guests:</p>
        <input className="adminfield" name="maxGuests" defaultValue={hotel.maxGuests} type="number" placeholder="Max Guests" ref={register} />
    
        <p>Latitude:</p>
        <input className="adminfield" name="lat" defaultValue={hotel.lat} placeholder="Example: 61.084654" ref={register} />

        <p>Longitude:</p>
        <input className="adminfield" name="lng" defaultValue={hotel.lng} placeholder="Example: 6.228147" ref={register} />


        <p>Self Catering:</p>
        <p><b>If left with no boxes marked will stay at value it had.</b></p>
        <input type='radio' name='selfCatering'  value='true' ref={register}/><p>True</p>
        <input type='radio' name='selfCatering'  value='false' ref={register}/> <p>False</p>
        

        <input className="adminfield" name="SelfCatering" defaultValue={hotel.SelfCatering}/>

        <p>Description:</p>
        <textarea className="adminfield" name="description" defaultValue={hotel.description} placeholder="Description" ref={register} />



        <br/>
        <input className="adminfield" type="submit" />
    </form>
    <br/>
            <DeleteHotel id={id} />
            </div>
        </>
    );
}




export default AddHotel;
