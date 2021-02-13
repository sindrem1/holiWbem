import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function EnquiryItem({ id, name, image, price, maxGuests, description }) {

  return (
    <div className="enquiry">
      <Link to={"enquiry/" + id}>
      <h2 className="enquiry__name">{name}</h2>
      <img className="enquiry__img" src={image} alt={name} />
      <div className="enquiry__info">
      <p>Price: {price} &euro;</p>
      <p>Max Guests: {maxGuests}</p>
      <p>{description}</p>
      </div>
    </Link>
      <Link to={"hotel/" + id}>
        <button className="enquiry__btn">View Hotel</button>
      </Link>
    </div>
  );
}

EnquiryItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  maxGuests: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default EnquiryItem;
