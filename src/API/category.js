import instance from "./index";

const fetchOneCategory = async (categoryId) => {
  const res = await instance.get(`/categories/${categoryId}`);
  return res.data;
};

const fetchAllCategory = async () => {
  const data = await instance.get("/categories");
  return data;
};
const createCategory = async (name, image) => {
  const res = await instance.post("/categories", {
    name: name,
    image: image,
  });

  return res.data;
};
const updateCategory = async (recipeId, name, ingredients, instructions, image) => {
  try {
    const response = await instance.put(`/categories/${recipeId}`, {
      name,
      ingredients,
      instructions,
      image,
    });

    return response.data; // Return the response data
  } catch (error) {
    throw new Error("Error updating categories");
  }
};
export { fetchOneCategory, fetchAllCategory, createCategory, updateCategory };
