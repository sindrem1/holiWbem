import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../constants/api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteContact(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Confirm deletion",
            buttons: [
                {
                    label: "yes",
                    onClick: () => DeleteContact(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    async function DeleteContact() {
        const url = BASE_URL + "contacts/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/contacts");
    }

    return (
        <Button variant="danger" onClick={checkDelete}>
            Delete
        </Button>
    );
}

export default DeleteContact;
