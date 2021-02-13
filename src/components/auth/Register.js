import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";

function Register() {
    const { register, handleSubmit } = useForm();
    const { registerUser } = useContext(AuthContext);

    const history = useHistory();

    function onSubmit(data) {
        console.log("data", data);
        registerUser(data.username);
        history.push("/admin");
    }

    return (
        <div className="adminlogin">
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control className="adminlogin__input" name="username" placeholder="Enter your username" ref={register} />
                <Form.Label>Password:</Form.Label>
                <Form.Control className="adminlogin__input" type="password" name="password" placeholder="Enter your password" ref={register} />
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
        </div>
    );
}

export default Register;
