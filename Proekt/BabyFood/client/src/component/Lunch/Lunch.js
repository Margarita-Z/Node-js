import React from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from '../CardRecipe/CardRecipe';
import Header from '../Header';


function Lunch() {

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <div className="Breakfast">
                    <h3>Lunch</h3>
                    <section>
                        <CardRecipe />
                    </section>
                </div>
            </Container>
        </div>
    )
}
export default Lunch;