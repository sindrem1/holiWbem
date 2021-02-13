import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function AdminNav() {
    const { user } = useContext(AuthContext);
    return (
        <div className="admin">
            {user ? (
                <>
                    <NavLink to="/admin">Admin</NavLink>
                    <Logout />
                </>
            ) : (
                    <NavLink to="/register">Login</NavLink>
                )}
            </div>

    );
}


export default AdminNav;