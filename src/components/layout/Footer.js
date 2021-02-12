import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";



const Footer = () => (
  <div className="footer">
    <div className="footer__columns">
    <p className="footer__left">Holidaze</p>
    <p className="footer__left">Bryggen 1, 5020 Bergen</p>
    </div>
    <div className="footer__columns">
    <div className="footer__icons">
      <FontAwesomeIcon icon={faFacebook} color={"#7c3ddb"} />
      <FontAwesomeIcon icon={faTwitterSquare} color={"#7c3ddb"} />
      <FontAwesomeIcon icon={faInstagram} color={"#7c3ddb"} />
      <FontAwesomeIcon icon={faYoutube} color={"#7c3ddb"} />
      </div>
    </div>
    <div className="footer__columns">
      <p className="footer__right"><NavLink to="#">Terms of Service</NavLink> <NavLink to="#">Privacy Policy</NavLink></p>
      </div>

  </div>
);

export default Footer;

