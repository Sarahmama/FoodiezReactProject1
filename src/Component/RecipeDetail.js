import React, { useState } from "react";
import IngredientModal from "./IngredientModal";
import { fetchOneRecipe, deleteRecipe } from "../API/recipe";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import EditRecipeModal from "./EditRecipeModal";
import logo from "../assets/images/project-logo 1.png";
const RecipeDetail = () => {
  const { recipeId } = useParams();
  console.log(recipeId);
  const {
    data: recipe,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => fetchOneRecipe(recipeId),
  });

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const addSelectedIngredients = (newIngredients) => {
    setSelectedIngredients((prev) => [
      ...new Set([...prev, ...newIngredients]),
    ]);
    setModalVisible(false);
  };
  const mutation = useMutation({
    mutationKey: ["deleteRecipe"],
    mutationFn: (recipeId) => deleteRecipe(recipeId),
    onSuccess: () => {
      // Optionally redirect or show a success message after deletion
    },
  });
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      mutation.mutate(recipeId);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching recipe. Please try again later.</h1>;
  }

  return (
    <div className="background">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-lg px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
          <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center font-monospace">
            {recipe?.name}
          </h1>
          <img
            src={recipe?.image || logo}
            alt={recipe?.name}
            className="h-auto w-full mb-4"
          />
          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
            Ingredients:
          </h4>
          <ol className="max-w-2xl text-[#184548] text-justify px-4 mb-6 list-decimal font-inherit">
            {typeof recipe?.ingredients === "Array" &&
              [...recipe?.ingredients, ...selectedIngredients].map(
                (ingredient, index) => <li key={index}>{ingredient}</li>
              )}
          </ol>

          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
            Instructions:
          </h4>
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
            {recipe?.instructions}
          </p>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => setModalVisible(true)}
              className="bg-[#E4655C] text-white p-2 rounded mb-4 font-monospace"
            >
              Add Ingredients
            </button>
            <button
              className="bg-[#E4655C] text-white p-2 rounded mb-4 font-monospace"
              onClick={handleDelete}
            >
              Delete
            </button>
            <IngredientModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onAddIngredients={addSelectedIngredients}
              availableIngredients={recipe.ingredients?.filter(
                (ingredient) => !selectedIngredients.includes(ingredient)
              )}
            />
            <EditRecipeModal
              show={showEditModal}
              setShowModal={setShowEditModal}
              recipeToEdit={recipe}
            />
            <p className="text-[#184548] text-justify px-4 font-inherit mt-16">
              Thank you for choosing Tridish - where every dish tells a story!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
