export const getInstructions = async (recipeId) => {
    const response = await fetch(`/api/instructions/${recipeId}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
};
