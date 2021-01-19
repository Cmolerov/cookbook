import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function IngredientsForm() {
    return (
        <div className="about_recipe-form-container">
            <form>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Ingredients</label>
                    <input className="recipe_form-input instructions-input"></input>
                </Col>
            </form>
            <button className="recipe_form-Continue-btn">Continue</button>
        </div>
    );
}
