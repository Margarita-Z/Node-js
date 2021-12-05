import React from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from '../CardRecipe/CardRecipe';
import Header from '../Header';


function HomePage() {

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <div className="FreshNew">
                    <h3>Fresh & New</h3>
                    <section>
                        <CardRecipe />
                    </section>
                </div>
                <div className="MostPopular">
                    <h3> Most Popular Recipes</h3>
                    <section>
                        <CardRecipe />
                    </section>
                </div>
            </Container>
        </div>
    )
}
export default HomePage;