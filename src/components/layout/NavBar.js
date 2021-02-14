import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import AsyncExample from './typeahead'



function Nav() {
    return (
        <nav>
        <div class="togglearea">
          <label for="toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="menu">
            <NavLink activeClassName="menu" to="/" exact>
                <img src={logo} alt={"logo"} className="logo" />
            </NavLink>
    
            <div className="links">
          <input type="checkbox" id="toggle">
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
          </input>
          <div className="searchright">
                <AsyncExample />
            </div>
          </div>
        </div>
 
      </nav>
       );
}



export default Nav;
