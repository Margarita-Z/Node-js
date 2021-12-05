import React from "react";
import MyHeader from "../MyHeader";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap'

function MyProfile() {
    return (
        <div className='myprofile'>
            <MyHeader />
            <div className='formaProfile'>
            <Container>
                <p>My Profile</p>
                
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src="https://as1.ftcdn.net/v2/jpg/00/32/70/74/500_F_32707441_GB0Hdzkts7o0dkYBeSAj7wzuf3RoDLaJ.jpg" roundedCircle style={{ width: '171px' }, { height: '180px' }} />
                            <Col>
                                <Button variant="outline-secondary">CHANGE AVATAR</Button>
                            </Col>
                        </Col>
                        <Col xs={12} md={8}>
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
                                            <Button variant="success" >SAVE</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default MyProfile