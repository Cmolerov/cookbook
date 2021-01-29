import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/recipes";
import { getInstructions } from "../services/instructions";
import { getIngredients } from "../services/ingredients";
import { Container, Col, Row } from "react-bootstrap";

export default function SingleRecipe() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [instructions, setInstructions] = useState(null);
    const [ingredients, setIngredients] = useState(null);

    const fetchRecipe = async () => {
        const fetchedRecipe = await getRecipe(id);
        setRecipe(fetchedRecipe);
        setInstructions(fetchedRecipe?.instructions);
        setIngredients(fetchedRecipe?.ingredients);
    };

    useEffect(() => {
        fetchRecipe();
    }, []);
    if (recipe === null) {
        return <h3>loading</h3>;
    }

    return (
        <Container className="single_recipe-main" fluid>
            <Row className="single_recipe-container">
                {/* <div className="top_row col-5"></div> */}
                <Col className="single_recipe-display">
                    <div className="single_recipe-left">
                        <h3 className="single_recipe-header">{recipe.title}</h3>
                        <img
                            className="single_recipe-img"
                            src={recipe?.image}
                        ></img>

                        <p>
                            Descritpion: <br />
                            <span>{recipe.description}</span>
                        </p>
                        <p>Time to cook: {recipe.cookTime} min</p>
                    </div>
                    <div className="single_recipe-middle">
                        <h3 className="single_recipe-title">Ingredients</h3>
                        <div className="content_container">
                            {ingredients &&
                                ingredients.map((ingredient, idx) => (
                                    <div className="container_ingredients">
                                        <label>
                                            {ingredient.measurement}{" "}
                                            {ingredient.measurementType}
                                            {" of "}
                                            {ingredient.product}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="single_recipe-right">
                        <h3 className="single_recipe-title">Instructions</h3>
                        <div className="content_container">
                            {instructions &&
                                instructions.map((instruction, idx) => (
                                    <div className="container_ingredients">
                                        <label className="instruction_list-order">
                                            {instruction.list_order}
                                            {". "}
                                            {instruction.instruction_text}
                                        </label>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
