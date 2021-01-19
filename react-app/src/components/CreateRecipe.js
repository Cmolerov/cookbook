import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeForm from "./recipeForms.js/RecipeForm";
import InstructionForm from "./recipeForms.js/InstructionForm";

export default function CreateRecipe() {
    return (
        <Container className="create_recipe-main" fluid>
            <Row className="recipe_form-container">
                <Col className="create_recipes-container">
                    <h1 className="recipe_title">Create a Recipe</h1>
                    {/* <RecipeForm /> */}
                    <InstructionForm />
                </Col>
            </Row>
        </Container>
    );
}

/* <form className="recipe_form">
                        <Row>
                            <Col className="recipe_input-wrapper col-8">
                                <label className="recipe_form-label">
                                    Title
                                </label>
                                <input className="recipe_form-input"></input>
                            </Col>
                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Cook Time
                                </label>
                                <input className="recipe_form-input"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="recipe_input-wrapper col-8">
                                <label className="recipe_form-label">
                                    Description
                                </label>
                                <input className="recipe_form-input"></input>
                            </Col>

                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Image
                                </label>
                                <input className="recipe_form-input"></input>
                            </Col>
                        </Row>

                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">
                                Ingredient
                            </label>
                            <input
                                className="recipe_form-input"
                                placeholder="ex. 4 apples, 3 peppers"
                            ></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">
                                Instructions
                            </label>
                            <input
                                className="recipe_form-input"
                                placeholder="ex. cut 2 apples, mix peppers"
                            ></input>
                        </div>
                    </form> */
