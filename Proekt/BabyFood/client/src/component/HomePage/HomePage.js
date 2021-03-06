import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from '../CardRecipe/CardRecipe';
import Header from '../Header';
import { API_BASE_URL } from '../../constants/apiConstants';
import { Card, Row, Col } from 'react-bootstrap';
import ModalCard from '../ModalCard/ModalCard';



function HomePage() {
    const [FreshNew, setFreshNew] = useState([]);
    const [MostPopular, setMostPopular] = useState([]);

    function homePage() {
        fetch(API_BASE_URL.root)
            .then(res => res.json())
            .then(data => {
                setFreshNew(data.FreshNew)
                setMostPopular(data.MostPopular)

            })
            .catch(err => alert(err));
    }
    useEffect(() => {
        homePage();
    }, []);

    return (

        <div className="HomePage">
            <Header />
            <Container>
                <Row >
                    <Row><h3 style={{ color: "green", marginBottom: "3%" }}>Fresh & New</h3></Row>
                    {FreshNew.map(recipe => {
                        console.log(recipe)
                        return (
                            <Col xs={4} key={recipe._id}>
                                <Card style={{ width: '24rem', borderRadius: "2%" }}>
                                    <Card.Img style={{ borderTopLeftRadius: "2%", borderTopRightRadius: "2%" }} variant="top" src="https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ=" />
                                    <Card.Body>
                                        <Card.Title>{recipe.title}</Card.Title>
                                        <Card.Text>
                                            {recipe.description}
                                        </Card.Text>
                                        <i class="bi bi-clock"></i>{recipe.time}
                                        <i class="bi bi-star"></i> {recipe.review}
                                        <ModalCard />
                                    </Card.Body>
                                </Card>
                            </Col>)
                    })}
                </Row>


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