import React from "react";
import { Link } from "react-router-dom";

export default function RecipesCard({ recipe, fetchAllRecipes }) {
    return (
        <div className="recipe-card-container">
            <Link
                className="recipe-link"
                to={{
                    pathname: `/recipes/${recipe?.id}`,
                    state: { fetchAllRecipes: fetchAllRecipes },
                }}
            >
                <div className="recipe-card">
                    <img className="recipe-card_img" src={recipe.image}></img>
                    <label className="recipe-card_title">{recipe.title}</label>
                    {/* <label className="recipe-card_description">
                    {recipe.description}
                </label> */}
                    <br />
                    <label className="recipe-card_time">
                        <i className="fas fa-clock" />
                        {recipe.cookTime} min
                    </label>
                </div>
            </Link>
        </div>
    );
}
{
    /* <Link to={{
   pathname: '/Content/' + this.props.index
   state: {decrease: this.props.decreaseIndexProject}
}}>Page n°1</Link> */
}
