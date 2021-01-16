import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function CreateRecipe() {
    return (
        <Container className="create_recipe-main" fluid>
            <Row className="recipe_form-container">
                <Col className="create_recipes-container">
                    <h1 className="recipe_title">Create a Recipe</h1>
                    <form className="recipe_form">
                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">Title</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">
                                Description
                            </label>
                            <input className="recipe_form-input"></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">
                                Cook Time
                            </label>
                            <input className="recipe_form-input"></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label className="recipe_form-label">Image</label>
                            <input className="recipe_form-input"></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <p>ingredients</p>
                            <label className="recipe_form-label">
                                Measurement
                            </label>
                            <input className="recipe_form-input"></input>
                            <label className="recipe_form-label">Product</label>
                            <input className="recipe_form-input"></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <p>instructions</p>
                            <label className="recipe_form-label">
                                list order
                            </label>
                            <input className="recipe_form-input"></input>
                            <label className="recipe_form-label">
                                Ingredient
                            </label>
                            <input className="recipe_form-input"></input>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
