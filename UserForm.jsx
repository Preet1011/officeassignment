import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

function UserForm() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setSubmitted(true);
            let arr = [];
            let users = localStorage.getItem("users");
            if (users && IsJSON(users)) {
                users = JSON.parse(users);
                arr = users;
            }
            arr.push({
                ...userdata,
                id: new Date().getTime()
            });
            localStorage.setItem("users", JSON.stringify(arr));
            navigate(-1);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const IsJSON = (data) => {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.log("error", error);
        }
        return false;
    };

    return (
        <div className="flex-column d-flex align-items-center justify-content-center">
            <h4 className="mt-5 mb-3">User Form</h4>
            <Form className="w-25" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        name="firstname"
                        value={userdata.firstname}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastname"
                        value={userdata.lastname}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={userdata.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {submitted && (
                <code>{JSON.stringify(userdata)}</code>
            )}
        </div>
    );
}

export default UserForm;
