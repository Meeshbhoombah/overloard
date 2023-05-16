import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Home() {
    let navigate = useNavigate();


    // REGISTER
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");

    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");

    const [registerRole, setRegisterRole] = useState("");

    const [registerBirthday, setRegisterBirthday] = useState("");
    const [registerAddress, setRegisterAddress] = useState("");

    let register = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/employees", {
                method: "POST",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                    email: registerEmail,
                    password: registerPassword,
                    phoneNumber: registerPhoneNumber,
                    firstName: registerFirstName,
                    lastName: registerLastName,
                    role: registerRole,
                    birthday: registerBirthday,
                    address: registerAddress
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                navigate('/me/' + resJson.id);
            } else {
                console.error(res);
                // TODO: Inform user of error
            }
        } catch (err) {
            console.error(err);
        }
    };


    // LOGIN
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let login = async(e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                    email: email,
                }),
            });

            let resJson = await res.json();

            if (resJson.password == password) {
                navigate('/me/' + resJson.id);
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
                <Col md='3'>
                    <br></br>
                    <h1>Overlord</h1>
                </Col>
            </Row>
            <Row>
                {/* LOGIN */}
                <Col md='4'> 
                    <br></br>
                    <h2>Login</h2>
                    <Form onSubmit={login}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email}
                            placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Welcome back! 
                        </Form.Text>
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
                {/* REGISTER */}
                <Col md='8'> 
                    <br></br>
                    <h2>Register</h2>
                    <Form onSubmit={register}>
                      <Form.Group className="mb-3" controlId="formRegisterBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={registerEmail}
                            placeholder="Enter email" 
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formRegisterBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={registerPassword}
                            placeholder="Password" 
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                            type="tel" 
                            value={registerPhoneNumber}
                            placeholder="0123456789" 
                            onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={registerFirstName}
                            placeholder="Satya" 
                            onChange={(e) => setRegisterFirstName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={registerLastName}
                            placeholder="Nadal" 
                            onChange={(e) => setRegisterLastName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control 
                            as="select" 
                            value={registerRole}
                            onChange={(e) => setRegisterRole(e.target.value)}
                        >
                        <option value="C-Suite">C-Suite</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Design">Design</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={registerBirthday}
                            placeholder="MM/DD/YYYY" 
                            onChange={(e) => setRegisterBirthday(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={registerAddress}
                            placeholder="One Microsoft Way, Redmond, Washington 98052-6399"
                            onChange={(e) => setRegisterAddress(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Register
                      </Button>
                    </Form>    
                    <br></br>
                </Col>
            </Row>
        </Container>

    );
}

