import instance from ".";

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
