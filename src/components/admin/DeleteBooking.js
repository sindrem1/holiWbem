import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../constants/api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteBooking(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Confirm deletion",
            buttons: [
                {
                    label: "yes",
                    onClick: () => DeleteBooking(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    async function DeleteBooking() {
        const url = BASE_URL + "enquiries/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/bookings");
    }

    return (
        <Button variant="danger" onClick={checkDelete}>
            Delete
        </Button>
    );
}

export default DeleteBooking;
