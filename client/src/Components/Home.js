import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Home() {
    return (
        <Container>
            <Row>
                <Col md='3'>
                    <br></br>
                    <h1>Overlord</h1>
                </Col>
            </Row>
            <Row>
                <Col md='4'> 
                    <br></br>
                    <h2>Login</h2>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Welcome back! 
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>    
                </Col>
                <Col md='8'> 
                    <br></br>
                    <h2>Register</h2>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>    
                </Col>
            </Row>
        </Container>
    );
}

