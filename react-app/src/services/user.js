export const getCreatedRecipes = async (userId) => {
    let response = await fetch(`/api/users/${userId}/recipes`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
};
