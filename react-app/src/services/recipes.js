export const createRecipe = async (formData) => {
    const response = await fetch("/api/recipes/", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
    });

    return await response.json();
};
