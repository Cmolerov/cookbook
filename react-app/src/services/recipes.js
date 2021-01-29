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

export const createInstruction = async (formData) => {
    try {
        const response = await fetch("/api/instructions/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw response;
        }
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

export const createIngredient = async (formData) => {
    try {
        const response = await fetch("/api/ingredients/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw response;
        }
        return await response.json();
    } catch (e) {
        console.log(e);
    }
};

export const getAllRecipes = async () => {
    const response = await fetch("/api/recipes/", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
};
