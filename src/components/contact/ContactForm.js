import { React, useState} from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, headers } from "../../constants/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Contact from '../assets/contact.png'

const schema = yup.object().shape({
    name: yup.string().required("Please enter a name").min(2, "Name needs to be atleast 2 characters"),
    email: yup.string().required('Email is required').email('Email is in a invalid format'),
    message: yup.string().required('A message is required').min(10, "Message needs to be atleast 10 characters"),


});

function ContactForm() {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),

    });

    const [successMsg, setsuccessMsg] = useState('')
    

    async function onSubmit(data) {

        setsuccessMsg("Thank you for contacting us, we will get back to you!");

        const ContactSent = {
            "name": data.name,
            "email": data.email,
            "message": data.message,

        };

        console.log(JSON.stringify(data.name));

        const url = BASE_URL + "contacts";

        console.log(data)

        const options = { headers, method: "POST", body: JSON.stringify(ContactSent) };

        await fetch(url, options)
            .then((r) => r.json())

    }

    return (
    <div className="contact">
        <div className="row">
        <div className="contact__column">
        <img src={Contact} alt="contactpicture" className="contact__pic" />
        </div>
        <div className="contact__column">
            <div className="contact__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="contact__success">{successMsg}</p>
                    <p>Name:</p> <input className="contact__field" name="name" placeholder="Your name" ref={register} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    <br />
                    <p>Email:</p> <input className="contact__field" name="email" type="email" placeholder="Mail@mail.com" ref={register} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <br />
                    <p>Message:</p> <textarea className="contact__txtfield" name="message" placeholder="Message to us" ref={register} />
                    {errors.message && <p className="error">{errors.message.message}</p>}
                    <br />
                    <button id="submit" className="contact__btn">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ContactForm;