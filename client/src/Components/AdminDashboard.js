import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


export default function AdminDashboard() {

    const [users, setUsers] = useState([]);

    const [query, setQuery] = useState("");
   

    let getEmployeeData = async() => {
        try {
            let res = await fetch("http://localhost:8080/api/employees", {
                method: "GET",
            });   

            let resJson = await res.json();
            setUsers(resJson);
            console.log(users);
        } catch (err) {
            console.error(err);
        }
    }

    getEmployeeData();
    

    let search = async() => {
        
    }

    getEmployeeData();

   
    return (
        <Container>
                <Row>
                    <Col md="12">
                        <br></br>
                        <h1>Welcome, Overlord</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <br></br>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search by Name..." 
                                />
                            </Form.Group>
                        </Form>
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
                                {users.map((user) => (
                                    <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.role}</td>
                                        <td>{user.birthday}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
        </Container>
    )
}

