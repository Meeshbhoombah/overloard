import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function AdminLogin() {
    let navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let login = async(e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/admin/login", {
                method: "POST",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            let resJson = await res.json();
            if (username === resJson.username) {
                console.log(resJson);
            } else {
                console.error("Unable to find password");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col md='4'>
                    <br></br>
                    <h1>Welcome, Overlord</h1>
                </Col>
            </Row>
            <Row>
                <Col md='4'>
                    <Form onSubmit={login}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={username}
                            placeholder="Enter username" 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password}
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Log In
                      </Button>
                    </Form>    
                </Col>
            </Row>
        </Container>
    )
}

