import React from 'react';
import { Card } from 'react-bootstrap';
import ModalCard from '../ModalCard/ModalCard';



function CardRecipe() {

    return (

        <div className="Card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9EW9K7i2Z_Hbn-oRyEEEj-53KiJ2E3VA2w&usqp=CAU/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <i class="bi bi-clock"></i>
                    <i class="bi bi-star"></i>
                    <ModalCard />
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardRecipe;