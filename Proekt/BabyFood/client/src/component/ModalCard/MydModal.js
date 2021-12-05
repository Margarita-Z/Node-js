import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Card } from 'react-bootstrap';

function MydModalWithGrid(props) {
    return (
        <div className='modal'>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Card.Title>Card Title</Card.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={8} md={4}>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9EW9K7i2Z_Hbn-oRyEEEj-53KiJ2E3VA2w&usqp=CAU/100px180" />
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <i class="bi bi-clock"></i>
                                <i class="bi bi-star"></i>
                            </Col>
                            <Col xs={10} md={8}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MydModalWithGrid;