import React from "react";
import { Link } from "react-router-dom";

export default function RecipesCard({ recipe }) {
    return (
        <div className="recipe-card-container">
            <Link to={`/recipes/${recipe?.id}`}>
                <div className="recipe-card">
                    <img className="recipe-card_img" src={recipe.image}></img>
                    <label className="recipe-card_title">{recipe.title}</label>
                    {/* <label className="recipe-card_description">
                    {recipe.description}
                </label> */}
                    <br />
                    <label className="recipe-card_time">
                        {recipe.cookTime} min
                    </label>
                </div>
            </Link>
        </div>
    );
}
