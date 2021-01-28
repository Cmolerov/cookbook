import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { createInstruction } from "../../services/recipes";
import IngredientsForm from "./IngredientsForm";

export default function InstructionForm({ recipe }) {
    const [listOrder, setListOrder] = useState(1);
    const [instruction, setInstruction] = useState("");
    const [prev, setPrev] = useState([]);
    const [done, setDone] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDone(true);
    };

    const onKeyDown = async (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            let saved = await createInstruction({
                recipeId: recipe.id,
                list_order: listOrder,
                instruction_text: instruction,
            });
            if (saved) {
                setPrev([...prev, { listOrder, instruction }]);
                setListOrder(listOrder + 1);
                setInstruction("");
            }
        }
    };
    return (
        <>
            {!done ? (
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
                            <label className="recipe_form-label">
                                Instructions
                            </label>
                            <div
                                style={{
                                    marginTop: "10px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <label>{listOrder}.</label>
                                <input
                                    value={instruction}
                                    onChange={(e) =>
                                        setInstruction(e.target.value)
                                    }
                                    style={{ width: "95%" }}
                                    className="recipe_form-input instructions-input"
                                ></input>
                            </div>
                        </Col>
                        {prev.length == 0 ? (
                            <button
                                disabled="true"
                                className="recipe_form-Continue-btn"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="recipe_form-Continue-btn"
                            >
                                Next
                            </button>
                        )}
                    </form>
                    <div>
                        {prev &&
                            prev.map(({ listOrder, instruction }) => (
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
                                        <span>{instruction}</span>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
            ) : (
                <IngredientsForm recipe={recipe}></IngredientsForm>
            )}
        </>
    );
}
