import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function RecipeForm() {
    return (
        <div className="about_recipe-form-container">
            <form>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Title</label>
                    <input className="recipe_form-input"></input>
                </Col>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Description</label>
                    <input className="recipe_form-input"></input>
                </Col>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Time To Cook</label>
                    <input className="recipe_form-input"></input>
                </Col>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Image</label>
                    <input className="recipe_form-input"></input>
                </Col>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Possible Allergies</label>
                    <input className="recipe_form-input" placeholder="(seperate by comma) ex. seafood, gluten.."></input>
                </Col>
            </form>
            <button className="recipe_form-Continue-btn">Continue</button>
        </div>
    );
}
