import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createRecipe } from "../../services/recipes";
import { useHistory } from "react-router-dom";
import InstructionForm from "./InstructionForm";

export default function RecipeForm({ user }) {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [cookTime, setCookTime] = useState(null);
    let [image, setImage] = useState("");
    let [recipe, setRecipe] = useState(null);
    const userId = user && user.id;
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const recipe = await createRecipe({
            userId,
            title,
            description,
            cookTime,
            image,
        });

        setRecipe(recipe);
        return;
    };

    return (
        <>
            {!recipe ? (
                <>
                    <div className="about_recipe-form-container">
                        <form onSubmit={handleSubmit}>
                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Title
                                </label>
                                <input
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="recipe_form-input"
                                ></input>
                            </Col>
                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Description
                                </label>
                                <input
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    className="recipe_form-input"
                                ></input>
                            </Col>
                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Time To Cook
                                </label>
                                <input
                                    onChange={(e) =>
                                        setCookTime(e.target.value)
                                    }
                                    className="recipe_form-input"
                                ></input>
                            </Col>
                            <Col className="recipe_input-wrapper">
                                <label className="recipe_form-label">
                                    Image
                                </label>
                                <input
                                    onChange={(e) => setImage(e.target.value)}
                                    className="recipe_form-input"
                                ></input>
                            </Col>
                            {/* <Col className="recipe_input-wrapper">
                    <label className="recipe_form-label">
                        Possible Allergies
                    </label>
                    <input
                        className="recipe_form-input"
                        placeholder="(seperate by comma) ex. seafood, gluten.."
                    ></input>
                </Col> */}
                            <button
                                type="submit"
                                className="recipe_form-Continue-btn"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                </>
            ) : (
                <InstructionForm recipe={recipe}></InstructionForm>
            )}
        </>
    );
}
