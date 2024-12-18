import instance from ".";

const fetchOneRecipe = async (recipeId) => {
  const res = await instance.get(`/Recipes/${recipeId}`);
  return res.data;
};

const fetchAllRecipe = async () => {
  const res = await instance.get("/Recipes");
  return res.data;
};
const createRecipe = async (name, ingredients, instructions, image) => {
  const res = await instance.post("/Recipes", {
    name: name,
    ingredients: ingredients,
    instructions: instructions,
    image: image,
  });

  return res.data;
};
const updateRecipe = async (
  recipeId,
  name,
  ingredients,
  instructions,
  image
) => {
  const response = await fetch(`/Recipes/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, ingredients, instructions, image }),
  });
  if (!response.ok) {
    throw new Error("Error updating recipe");
  }
  return response.json();
};
export { fetchOneRecipe, fetchAllRecipe, createRecipe, updateRecipe };
