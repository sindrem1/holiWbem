import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Food from '../assets/food.png'
import Hotels from '../assets/hotels.png'
import Explore from '../assets/explore.png'
import Bergen from '../assets/bergen.png'

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is in a invalid format'),
});

function Home() {

 const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),

    });

    const [Newsletter, setNewsletter] = useState('')

    async function onSubmit() {

        console.log("Newsletter success!")
        setNewsletter("Thank you, you are now in the draw for free nights!");

    }
    return (
        <div className="home">
            <div className="home__mobile">
            <h1>Welcome to Bergen</h1>
            <h3>Home away from home</h3>
            </div>
            <img src={Bergen} alt="hotels" className="home__img" />
            <div className="home__welcome">
                <h1>Welcome to Bergen</h1>
                <h3>Home away from home</h3>
            </div>


                <div className="homerows">
                    <div className="homerows__columns">
                        <img src={Food} alt="contact" className="homerows__img" />
                    </div>
                    <div className="homerows__columns">
                        <img src={Hotels} alt="hotels" className="homerows__img" />
                    </div>
                    <div className="homerows__columns">
                        <img src={Explore} alt="bergen" className="homerows__img" />
                    </div>
                </div>
            <div className="info">
                <h3 className="info__welcome">Here at Holidaze customers are in the center</h3>
                <div className="info__columns">

                    <h3 className="info__header">We know Bergen</h3>
                    <p className="info__text">With over 20 years experience, 
                    you can be sure to get the best stay in Bergen here.</p>
                </div>
                <div className="info__columns">

                    <h3 className="info__header">Only the best</h3>
                    <p className="info__text">All accommodations on this site has been tried and passed our quality check.</p>
                </div>
                <div className="info__columns">

                    <h3 className="info__header">Need visitors?</h3>
                    <p className="info__text">Contact us and we can
                        help you advertise and get bookings</p>
                </div>
            </div>
            <div className="newsletter">
                <h2 className="newsletter__title">Subscribe to our Newsletter</h2>
                <p className="newsletter__text">Get updates on new hotels, and get a chance to win free nights!</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <p className="newsletter__success">{Newsletter}</p>
                <input className="newsletter__input" name="email" type="email" placeholder="Mail@mail.com" ref={register} />
                {errors.email && <p className="error">{errors.email.message}</p>}
                <p className="info__text"></p>
                <button id="submit" className="newsletter__btn">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Home;
