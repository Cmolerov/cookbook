import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCreatedRecipes } from "../services/user";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RecipesCard from "../RecipesCard";

export default function Profile() {
    const { userId } = useParams();
    const [loading, setLoading] = useState(false);
    const [createdRecipes, setCreatedRecipes] = useState(null);

    const fetchCreateRecipes = async () => {
        const fetchedRecipe = await getCreatedRecipes(userId);
        setCreatedRecipes(fetchedRecipe);
    };

    useEffect(() => {
        fetchCreateRecipes();
    }, []);

    if (createdRecipes === null) {
        return <h3>loading</h3>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="homePage_recipes-container" fluid>
                        {createdRecipes &&
                            createdRecipes.map((recipe, idx) => (
                                <RecipesCard
                                    key={idx}
                                    recipe={recipe}
                                ></RecipesCard>
                            ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
