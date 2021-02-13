import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h1>Admin Panel</h1>
            <ul>
                <li>
                    <NavLink to="/admin/hotels">Edit Hotels</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/hotels/add">Add New Hotel</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/bookings">Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="/admin/contacts">Contactforms</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Dashboard;
