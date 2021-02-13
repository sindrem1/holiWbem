import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";


function AddHotel() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    async function onSubmit(data) {
        console.log("data", data);

        const url = BASE_URL + "establishments";

        const options = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, options);

        history.push("/admin/hotels");
    }

    return (
        <div className="admin_addhotel"> 
        <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name:</p> <input className="adminfield" name="name" placeholder="Hotel name" ref={register} />

        <p>Email:</p> <input className="adminfield" name="email" type="email" placeholder="Hotel@mail.com" ref={register} />

        <p>Image:</p> <input className="adminfield" name="image" placeholder="Image URL" ref={register} />

        <p>Price:</p> <input className="adminfield" name="price" type="number" placeholder="Price" ref={register} />

        <p>Max Guests:</p> <input className="adminfield" name="maxGuests" type="number" placeholder="Max Guests" ref={register} />

        <p>Latidue:</p> <input className="adminfield" name="lat" placeholder="Example: 61.084654" ref={register} />

        <p>Longitude:</p> <input className="adminfield" name="lng" placeholder="Example: 6.228147" ref={register} />

        <p>Descripton:</p> <textarea className="adminfield" name="description" placeholder="Description" ref={register} />

        <p>Self Catering:</p>
        <input type='radio' name='selfCatering'  value='true' ref={register}/>True
        <input type='radio' name='selfCatering'  value='false' ref={register}/> False


        <input className="submit" type="submit" />
    </form>
    </div>
    );
}

export default AddHotel;
