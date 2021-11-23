import React, { useState } from "react";

import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { createIngredient } from "../../services/recipes";

export default function IngredientsForm({ recipe }) {
    const history = useHistory();
    const [listOrder, setListOrder] = useState(1);
    const [ingredient, setIngredient] = useState("");
    const [prev, setPrev] = useState([]);

    const [amount, setAmount] = useState("");
    const [measurementType, setMeasurementType] = useState("Cup");

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push("/");
    };

    const onKeyDown = async (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            let saved = await createIngredient({
                recipeId: recipe.id,
                measurement: amount,
                measurement_type: measurementType,
                product: ingredient,
            });
            if (saved) {
                setPrev([
                    ...prev,
                    { listOrder, ingredient, measurementType, amount },
                ]);
                setListOrder(listOrder + 1);
                setIngredient("");
                setMeasurementType("Cup");
                setAmount(1);
            }
        }
    };

    return (
        <div className="about_recipe-form-container">
            <form onKeyDown={onKeyDown} onSubmit={handleSubmit}>
                <Col
                    style={{
                        marginTop: "20px",
                        marginLeft: "0",
                        paddingLeft: "0",
                    }}
                    className="recipe_input-wrapper"
                >
                    <label className="recipe_form-label">Ingredients</label>
                    <div
                        style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <label>{listOrder}.</label>
                        <input
                            onChange={(e) => {
                                if (e.target.value === "") {
                                    setAmount(0);
                                } else {
                                    setAmount(parseInt(e.target.value));
                                }
                            }}
                            value={amount}
                            style={{ width: "10%" }}
                            placeholder="Amt"
                            className="recipe_form-input instructions-input"
                        ></input>
                        <select
                            onChange={(e) => setMeasurementType(e.target.value)}
                            value={measurementType}
                            style={{ width: "15%" }}
                            placeholder="Type"
                            className="recipe_form-input instructions-input"
                        >
                            <option>Cup</option>
                            <option>Oz</option>
                            <option>Tsp</option>
                            <option>Lb</option>
                            <option>g</option>
                            <option>Tbsp</option>
                            <option>Other</option>
                        </select>
                        <input
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                            style={{ width: "65%" }}
                            className="recipe_form-input instructions-input"
                            placeholder="Press Enter to add"
                        ></input>
                    </div>
                </Col>
                {prev.length === 0 ? (
                    <button
                        disabled="true"
                        className="recipe_form-Continue-btn"
                    >
                        Next
                    </button>
                ) : (
                    <button type="submit" className="recipe_form-Continue-btn">
                        Next
                    </button>
                )}
            </form>
            <div>
                {prev &&
                    prev.map(
                        ({
                            listOrder,
                            ingredient,
                            measurementType,
                            amount,
                        }) => (
                            <>
                                <div
                                    style={{
                                        marginTop: "10px",
                                        display: "flex",
                                    }}
                                >
                                    <label
                                        style={{
                                            marginRight: "20px",
                                        }}
                                    >
                                        {listOrder}.
                                    </label>
                                    <span style={{ marginRight: "10px" }}>
                                        {amount}
                                    </span>
                                    <span style={{ marginRight: "10px" }}>
                                        {measurementType}
                                    </span>
                                    <span>{ingredient}</span>
                                </div>
                            </>
                        )
                    )}
            </div>
        </div>
    );
}
