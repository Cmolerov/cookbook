import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import { getAllRecipes } from "../services/recipes";
import RecipesCard from "./RecipesCard";

export default function HomePage() {
    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState(null);
    useEffect(() => {
        (async () => {
            const fetchedRecipes = await getAllRecipes();

            setRecipes(fetchedRecipes);
        })();
    }, []);
    return (
        <>
            <Container className="homePage_wrapper" fluid>
                <Row>
                    <Col className="homePage_content-container">
                        <div className="homePage_all-recipes">All Recipes</div>
                        <div className="homePage_recipes-container" fluid>
                            {recipes &&
                                recipes.map((recipe, idx) => (
                                    <RecipesCard
                                        key={idx}
                                        recipe={recipe}
                                    ></RecipesCard>
                                ))}
                        </div>
                    </Col>
                </Row>
                {/* <Row className="footer row-12">footer</Row> */}
            </Container>
            <Footer />
        </>
    );
}
