import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCreatedRecipes } from "../services/user";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
import RecipesCard from "./RecipesCard";

export default function Profile() {
    const { userId } = useParams();
    // const { user } = props;
    // console.log(userId);
    // console.log(user.id);
    // const [loading, setLoading] = useState(false);
    const [createdRecipes, setCreatedRecipes] = useState(null);

    const fetchCreateRecipes = async () => {
        const fetchedRecipe = await getCreatedRecipes(userId);
        setCreatedRecipes(fetchedRecipe);
    };

    useEffect(() => {
        fetchCreateRecipes();
    },[]);

    if (createdRecipes === null) {
        return <h3>loading</h3>;
    }

    return (
        <>
            <Container className="homePage_wrapper" fluid>
                <Row>
                    <Col className="homePage_content-container">
                        <div className="homePage_all-recipes">My Recipes</div>
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
                {/* <Row className="footer row-12">footer</Row> */}
            </Container>
        </>
    );
}
