import React from 'react';
import Header from '../Header';
import CardRecipe from '../CardRecipe/CardRecipe';
import { Container } from 'react-bootstrap';


function Braunch() {

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <div className="Breakfast">
                    <h3>Braunch</h3>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default Braunch;