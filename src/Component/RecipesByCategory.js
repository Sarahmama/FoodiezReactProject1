import React, { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import { createRecipe, fetchAllRecipe, fetchOneRecipe } from "../API/recipe";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewRecipeModal from "./NewRecipeModal";
import { fetchOneCategory } from "../API/category";
import { useParams } from "react-router";

const RecipesByCategory = () => {
  const { categoryId } = useParams();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const queryClient = useQueryClient();
  const [showAddModal, setShowAddModal] = useState(false);

  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetchOneRecipe(categoryId),
  });

  useEffect(() => {
    if (recipes) {
      setName(recipes.name);
      setImage(recipes.image);
      setIngredients(recipes.ingredients);
      setInstructions(recipes.instructions);
      setCategory(categoryId);
    }
  }, [recipes]);

  const { mutate } = useMutation({
    mutationFn: () =>
      createRecipe({
        name,
        ingredients,
        instructions,
        image,
      }),
    onSuccess: () => {
      console.log(recipes);
      queryClient.invalidateQueries(["categories"]); // Replace with your query key
      setShowAddModal(false);
    },
  });
  const handleAdd = () => {
    setShowAddModal(true);
  };
  const handleCloseModal = () => {
    setShowAddModal(false);
  };
  console.log("Filtered recipesssssss:", error);

  const recipeList = recipes?.map((recipe, i) => (
    <RecipeItem recipe={recipe} key={i} />
  ));
  return (
    <>
      <div className="background">
        <div className="App text-center mt-4 p-4 rounded shadow">
          <h1 className="text-3xl font-bold mb-4 font-monospace text-[#184548]">
            Recipes
          </h1>
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Recipes..."
            className="border border-gray-300 rounded-md px-4 py-2 w-3/4 md:w-1/2 lg:w-1/3 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-center mt-4">
            <button
              className="mt-4 bg-green-400 hover:bg-green-600 transition duration-300 text-white px-6 py-2 rounded-md shadow-lg"
              onClick={handleAdd}
            >
              Add New Recipe
            </button>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-4 justify-center items-center">
            {isLoading && <h1 className="text-lg">Loading...</h1>}
            {error && <h1 className="text-red-500">{JSON.stringify(error)}</h1>}
            {!isLoading && !error && recipeList}
          </div>
        </div>
      </div>
      {/* Modal */}
      {showAddModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            style={{ maxWidth: "600px", width: "90%" }}
          >
            <div className="modal-content">
              <div className="modal-header bg-primary text-white ">
                <h5 className="modal-title">Add Recipe</h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label
                    htmlFor="recipeName"
                    className="catcss font-weight-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="recipeName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter recipe name"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="recipeImage"
                    className="catcss font-weight-bold"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="recipeImage"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Enter recipe image URL"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="recipeIngredients"
                    className="catcss font-weight-bold"
                  >
                    ingredients
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="recipeIngredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Enter recipe ingredients  "
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="recipeInstructions"
                    className="catcss font-weight-bold"
                  >
                    instructions
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="recipeInstructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Enter recipe instructions  "
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={mutate}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesByCategory;
