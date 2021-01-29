import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/recipes";
import { getInstructions } from "../services/instructions";
import { getIngredients } from "../services/ingredients";

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
        <div>
            <img className="recipe-card_img" src={recipe.image}></img>
            <label className="recipe-card_title">{recipe.title}</label>
            {/* <label className="recipe-card_description">
                    {recipe.description}
                </label> */}
            <br />
            <label className="recipe-card_time">{recipe.cookTime} min</label>
            {/* <div>
                <label>{instructions.list_order}</label>
                <label>{instructions.instructions_text}</label>
            </div> */}
            <div>
                {instructions &&
                    instructions.map((instruction, idx) => (
                        <div>
                            <label>{instruction.list_order}</label>
                            <label>{instruction.instruction_text}</label>
                        </div>
                    ))}
            </div>
            <div>
                {ingredients &&
                    ingredients.map((ingredient, idx) => (
                        <div>
                            <label>{ingredient.measurement}</label>
                            <label>{ingredient.measurementType}</label>
                            <label>{ingredient.product}</label>
                        </div>
                    ))}
            </div>
        </div>
    );
}
