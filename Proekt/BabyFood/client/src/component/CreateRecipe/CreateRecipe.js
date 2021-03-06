import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyHeader from "../MyHeader";
import { Image, Button, Form } from "react-bootstrap";
import { Circle } from "react-bootstrap-icons";
import { amber } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

function CreateRecipe() {
    return (
        <div className='create'>
            <MyHeader />
            <Container>
            <Row>
                    <Col>
                        <h3>My recipes</h3>
                    </Col>
                    <Col align = 'end'>
                    <Button variant="link" href='/myRecipes' ><Icon sx={{ color: amber[700] }}>undo-circle</Icon></Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={2}>
                        <Col>
                        <p>Resipe Image</p>
                        </Col>
                        <Col>
                        <Image src="https://www.pinclipart.com/picdir/big/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" roundedCircle style={{ width: '171px' }, { height: '180px' }} />
                        </Col>
                        <br/>
                        <Col>
                            <Button variant="outline-secondary">UPLOAD IMAGE</Button>
                        </Col>
                    </Col>
                    <Col xs={8} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe Title</Form.Label>
                                <Form.Control type="RecipeTitle" placeholder="Recipe Title" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Breakfast</option>
                                        <option>Braunch</option>
                                        <option>Lanch</option>
                                        <option>Dinner</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Preparation Time</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>No. People</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="success">SAVE</Button>
                        </Form>
                    </Col>
                    <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Recipe</Form.Label>
                                <Form.Control as="textarea" rows={10} />
                            </Form.Group>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default CreateRecipe;