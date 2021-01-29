export const getIngredients = async (recipeId) => {
    const response = await fetch(`/api/ingredients/${recipeId}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};
