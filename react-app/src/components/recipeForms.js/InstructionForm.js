import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function InstructionForm() {
    return (
        <div className="about_recipe-form-container">
            <form>
                <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">Instructions</label>
                    <input className="recipe_form-input instructions-input"></input>
                </Col>
            </form>
            <button className="recipe_form-Continue-btn">Submit</button>
        </div>
    );
}
