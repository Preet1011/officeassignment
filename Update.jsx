import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Update() {
    const [userdata, setUserdata] = useState({
        firstname: "",
        lastname: "",
        email: ""
    });
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userdata.firstname == "" || userdata.lastname =="" || userdata.email =="") {
            alert("Invalid input");
            return;
        }

        const updatedUsers = JSON.parse(localStorage.getItem("users")).map((user) => {
            if (user.id === userdata.id) {
                return { ...user, firstname: userdata.firstname, lastname: userdata.lastname, email: userdata.email };
            }
            return user;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        history("/users");
    };

    useEffect(() => {
        const storedFirstname = localStorage.getItem("username");
        const storedLastname = localStorage.getItem("lastname");
        const storedEmail = localStorage.getItem("email");
        const storedId = localStorage.getItem("id");
       
        setUserdata(prevData => ({
            ...prevData,
            firstname: storedFirstname,
            lastname: storedLastname,
            email: storedEmail,
            id: storedId
        }));
    }, []);

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="formBasicFirstname">
                    <Form.Control
                        value={userdata.firstname}
                        onChange={(e) => setUserdata({ ...userdata, firstname: e.target.value })}
                        type="text"
                        placeholder="Enter First Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastname">
                    <Form.Control
                        value={userdata.lastname}
                        onChange={(e) => setUserdata({ ...userdata, lastname: e.target.value })}
                        type="text"
                        placeholder="Enter Last Name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        value={userdata.email}
                        onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                        type="email"
                        placeholder="Enter Email"
                    />
                </Form.Group>

                <Button
                    onClick={(e) => handleSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

                <Link className="d-grid gap-2" to="/users">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Update;
