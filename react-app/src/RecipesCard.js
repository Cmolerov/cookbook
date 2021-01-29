import React from "react";
import { Link } from "react-router-dom";

export default function RecipesCard({ recipe }) {
    return (
        <div className="recipe-card-container">
            <div className="recipe-card">
                <label>{recipe.title}</label>
                <label>{recipe.description}</label>
                <label>{recipe.cookTime}</label>
            </div>
        </div>
    );
}
