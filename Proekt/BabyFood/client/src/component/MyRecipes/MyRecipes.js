import React from "react";
import MyHeader from "../MyHeader";
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

function MyRecipes() {
    return (
        <div>
            <MyHeader />
            <Container>
                <Row>
                    <Col>
                        <p>My recipes</p>
                    </Col>
                    <Col>
                        <Button variant="warning" href='/createRecipe'><i class="bi bi-plus-lg"></i></Button>
                    </Col>
                </Row>
                <Row>
                    <div>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Recipe Name</th>
                                    <th>Category</th>
                                    <th>Created On</th>
                                    <th colSpan='3'></th>
                                    <th></th>
                                    <th style={{ textAlign: "right" }}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td colSpan='3'></td>
                                    <td></td>
                                    <td style={{ textAlign: "right" }}><i class="bi bi-trash" ></i></td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default MyRecipes;