import instance from "./index";

const fetchOneCategory = async (categoryId) => {
  const res = await instance.get(`/categories/${categoryId}`);
  return res.data;
};

const fetchAllCategory = async () => {
  const data = await instance.get("/categories");
  return data;
};
const createCategory = async ({ name, image }) => {
  const data = await instance.post("/categories", { name, image });

  return data;
};

const updateCategory = async (
  recipeId,
  { name, ingredients, instructions, image }
) => {
  const response = await instance.put(`/categories/${recipeId}`, {
    name,
    ingredients,
    instructions,
    image,
  });
  if (!response.ok) {
    throw new Error("Error updating categories");
  }
};
async function deleteCategory(id) {
  const response = await instance.delete(`categories/${id}`);
  console.log(response);
  return response;
}
export {
  fetchOneCategory,
  fetchAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
