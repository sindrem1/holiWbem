import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import SearchBox from './typeahead'



function Nav() {
    return (
        <nav>
            <div className="togglearea">
                <label htmlFor="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="logo">
                <NavLink to="/" exact>
                    <img src={logo} alt={"logo"} />
                </NavLink>
                </div>

                <div className="topnav">
                    <input type="checkbox" id="toggle" />
                    <div className="topnav-center">
                        <NavLink activeClassName="active" to="/hotels" exact>
                            Hotels
            </NavLink>

                        <NavLink activeClassName="active" to="/booking" exact>
                            Booking
            </NavLink>

                        <NavLink activeClassName="active" to="/bergen" exact>
                            Bergen
            </NavLink>

                        <NavLink activeClassName="active" to="/contact" exact>
                            Contact
            </NavLink>

                    </div>
                </div>
                <div className="searchright">
                <SearchBox />
            </div>
        </nav>
    );
}




export default Nav;
