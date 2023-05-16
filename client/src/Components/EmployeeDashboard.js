import { useState } from "react";

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function EmployeeDashboard() {
    let { userId } = useParams();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [role, setRole] = useState("");

    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");


    let getEmployeeData = async() => {
        try {
            let res = await fetch("http://localhost:8080/api/employee/" + userId, {
                method: "GET",
            });   

            let resJson = await res.json();
            
            setEmail(resJson.email);
            setPassword(resJson.password);
            setPhoneNumber(resJson.phoneNumber);
            setFirstName(resJson.firstName);
            setLastName(resJson.lastName);
            setRole(resJson.role);
            setBirthday(resJson.birthday);
            setAddress(resJson.address);
        } catch (err) {
            console.error(err);
        }
    }

    getEmployeeData();


    const [updatedEmail, setUpdatedEmail] = useState("");
    const [updatedPassword, setUpdatedPassword] = useState("");
    const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState("");

    const [updatedFirstName, setUpdatedFirstName] = useState("");
    const [updatedLastName, setUpdatedLastName] = useState("");

    const [updatedRole, setUpdatedRole] = useState("");

    const [updatedBirthday, setUpdatedBirthday] = useState("");
    const [updatedAddress, setUpdatedAddress] = useState("");

    let update = async() => {
        try {
            let res = await fetch("http://localhost:8080/api/employee/" + userId, {
                method: "PUT",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                    email: updatedEmail ? updatedEmail : email,
                    password: updatedPassword ? updatedPassword : password,
                    phoneNumber: updatedPhoneNumber ? updatedPhoneNumber : phoneNumber,
                    firstName: updatedFirstName ? updatedFirstName : firstName,
                    lastName: updatedLastName ? updatedLastName : lastName,
                    role: updatedRole ? updatedRole : role,
                    birthday: updatedBirthday ? updatedBirthday : birthday,
                    address: updatedAddress ? updatedAddress : address 
                }),
            })

            let resJson = await res.json();
            console.log(resJson);
        } catch (err) {
            console.err(err);
        };
    }


    return (
        <Container>
            <Row>
                <Col md="12">
                    <br></br>
                    <h1>Welcome, {firstName} ❤️</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <br></br>
                    <Table striped="columns">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                                <th>Birthday</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phoneNumber}</td>
                                <td>{role}</td>
                                <td>{birthday}</td>
                                <td>{address}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md='8'> 
                    <br></br>
                    <h2>Update Your Details</h2>
                    <Form onSubmit={update}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={updatedEmail}
                            placeholder={email} 
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={updatedPassword}
                            placeholder="Password" 
                            onChange={(e) => setUpdatedPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                            type="tel" 
                            value={updatedPhoneNumber}
                            placeholder={phoneNumber} 
                            onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={updatedFirstName}
                            placeholder={firstName} 
                            onChange={(e) => setUpdatedFirstName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={updatedLastName}
                            placeholder={lastName}
                            onChange={(e) => setUpdatedLastName(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control 
                            as="select" 
                            value={updatedRole}
                            onChange={(e) => setUpdatedRole(e.target.value)}
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
                            value={updatedBirthday}
                            placeholder={birthday} 
                            onChange={(e) => setUpdatedBirthday(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={updatedAddress}
                            placeholder={address}
                            onChange={(e) => setUpdatedAddress(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Update
                      </Button>
                    </Form>    
                    <br></br>
                </Col>
            </Row>
        </Container>
    )

}

