import { useState, useEffect } from "react";

import CsvDownloadButton from 'react-json-to-csv'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function AdminDashboard() {

    const [users, setUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const [query, setQuery] = useState("");
   

    let getEmployeeData = async() => {
        try {
            let res = await fetch("http://localhost:8080/api/employees", {
                method: "GET",
            });   

            let resJson = await res.json();
            setUsers(resJson);
            setDisplayedUsers(resJson);
        } catch (err) {
            console.error(err);
        }
    }

    if (users.length === 0) {
        getEmployeeData();
    }


    let search = async(e) => {
        setQuery(e.target.value)
        console.log(query);

        let f = users.filter((user) => {
            return user.role.includes(query) 
        })

        if (f != []) {
            setDisplayedUsers(f);
        }
    }


    useEffect(() => {
    }, [displayedUsers]);

   
    return (
        <Container>
                <Row>
                    <Col md="12">
                        <br></br>
                        <h1>Welcome, Overlord</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="11">
                        <br></br>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Search by Role..."
                                    value={query}
                                    onChange={(e) => search(e)}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs="1">
                        <br></br>
                        <CsvDownloadButton 
                            data = {displayedUsers} 
                            filename = "employees.csv"
                        >
                            Save
                        </CsvDownloadButton>
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
                                {displayedUsers.map((user) => (
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

