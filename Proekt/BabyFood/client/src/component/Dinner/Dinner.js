import React from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from '../CardRecipe/CardRecipe';
import Header from '../Header';


function Dinner() {

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <div className="Dinner">
                    <h3>Dinner</h3>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default Dinner;