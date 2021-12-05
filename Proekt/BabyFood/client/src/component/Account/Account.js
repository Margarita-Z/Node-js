import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Header from '../Header';


function Account() {
    return (
        <div className="Account" >
            <Header />
            <Container>
                <Row className="g-2">
                    <Col md>
                        <p>Create Account</p>
                        <div className="tekstAccount" >
                            <h4>Create your</h4>
                            <h4>account</h4>
                            <p>All the Lorem Ipsum generations on the Internet tend to repeat predefined chunks as necessary, making this the first true generation on the Internet. It uses a dictionary of over 200 Latin words, combinet with a handful of model sentence structures, to generate Lorem Ipsum ehich looks reasonable. The generated Lorem Isum is therefore always free from repetition, injected humour, or non - characteristic words etc. </p>
                        </div>
                    </Col>
                    <Col md>
                        <div className="formaAccount"  >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Birthday</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option></option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button variant="success" href='/login'>CREATE ACCOUNT</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Account;