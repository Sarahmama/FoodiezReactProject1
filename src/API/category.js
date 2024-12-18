import instance from ".";

const fetchOneCategory = async (recipeId) => {
  const res = await instance.get(`/categories/${recipeId}`);
  return res.data;
};

const fetchAllCategory = async () => {
  const res = await instance.get("/categories");
  return res.data;
};
const createCategory = async (name, image) => {
  const res = await instance.post("/categories", {
    name: name,
    image: image,
  });

  return res.data;
};
const updateCategory = async (
  recipeId,
  name,
  ingredients,
  instructions,
  image
) => {
  const response = await fetch(`/categories/${recipeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, ingredients, instructions, image }),
  });
  if (!response.ok) {
    throw new Error("Error updating categories");
  }
  return response.json();
};
export { fetchOneCategory, fetchAllCategory, createCategory, updateCategory };
