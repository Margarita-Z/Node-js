import React from 'react';
import Header from '../Header';
import CardRecipe from '../CardRecipe/CardRecipe';
import { Container } from 'react-bootstrap';


function BreakFast() {

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <div className="Breakfast">
                    <h3>Breakfast</h3>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default BreakFast;