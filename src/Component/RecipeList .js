import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
import { fetchAllRecipe } from "../API/recipe";
import { useQuery } from "@tanstack/react-query";
import NewRecipeModal from "./NewRecipeModal";

const RecipeList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    data: Recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Recipes"],
    queryFn: fetchAllRecipe,
  });

  const recipeList = Recipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  ).map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);
  console.log("Filtered recipes:", recipeList);
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
              onClick={() => setShowModal(true)}
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

      <NewRecipeModal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default RecipeList;
