import React from "react";
import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
        <>
        <div className="adminpanel">
            <h1>Admin Panel</h1>

                    <NavLink to="/admin/hotels"><h2>Edit Hotels</h2></NavLink>

                    <NavLink to="/admin/hotels/add"><h2>Add New Hotel</h2></NavLink>

                    <NavLink to="/admin/bookings"><h2>Bookings</h2></NavLink>

                    <NavLink to="/admin/contacts"><h2>Contactforms</h2></NavLink>

            </div>
        </>
    );
}

export default Dashboard;
