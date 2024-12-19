import instance from ".";

const fetchOneRecipe = async (categoryId) => {
  const data = await instance.get(`/recipes/${categoryId}`);
  console.log(data, "this is the data ");
  return data;
};

const fetchAllRecipe = async () => {
  const data = await instance.get("/recipes");
  return data;
};
const createRecipe = async ({ name, ingredients, instructions, image }) => {
  const res = await instance.post("/recipes", {
    name: name,
    ingredients: ingredients,
    instructions: instructions,
    image: image,
  });

  return res.data;
};
const updateRecipe = async (
  recipeId,
  { name, ingredients, instructions, image }
) => {
  const response = await instance.put(`/recipes/${recipeId}`, {
    name,
    ingredients,
    instructions,
    image,
  });
  if (!response.ok) {
    throw new Error("Error updating recipe");
  }
  return response.json();
};
async function deleteRecipe(recipeId) {
  const response = await instance.delete(`recipes/${recipeId}`);
  console.log(response);
  return response;
}
export {
  fetchOneRecipe,
  fetchAllRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
