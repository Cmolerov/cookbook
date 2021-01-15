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
                            <label>Title</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label>Description</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label>Cook Time</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <label>Image</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <p>ingredients</p>
                            <label>Measurement</label>
                            <input></input>
                            <label>Product</label>
                            <input></input>
                        </div>
                        <div className="recipe_input-wrapper">
                            <p>instructions</p>
                            <label>list order</label>
                            <input></input>
                            <label>Ingredient</label>
                            <input></input>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
