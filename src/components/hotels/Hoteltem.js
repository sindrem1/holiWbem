import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function HotelItem({ id, name, image }) {

  return (
    <div className="hotel">
      <h2 className="hotel__name">{name}</h2>
      <img className="hotel__img" src={image} alt={name} />
      <div className="hotel__btnholder">
      <Link to={"enquiry/" + id}>
        <button className="hotel__btn">Book Now</button>
      </Link>
      <Link to={"hotel/" + id}>
        <button className="hotel__btn">View Hotel</button>
      </Link>
      </div>
    </div>
  );
}

HotelItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
