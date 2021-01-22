import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeForm from "./recipeForms.js/RecipeForm";
import InstructionForm from "./recipeForms.js/InstructionForm";
import IngredientsForm from "./recipeForms.js/IngredientsForm";

export default function CreateRecipe() {
    return (
        <Container className="create_recipe-main" fluid>
            <Row className="recipe_form-container">
                <Col className="create_recipes-container">
                    <h1 className="recipe_title">Create a Recipe</h1>
                    <RecipeForm />
                    {/* <IngredientsForm /> */}
                    {/* <InstructionForm /> */}
                </Col>
            </Row>
        </Container>
    );
}
