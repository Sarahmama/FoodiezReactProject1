import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Ensure your custom styles are defined here
import { useNavigate } from "react-router-dom";
import EditRecipeModal from "./EditRecipeModal";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClick = () => {
    navigate(`/Recipe/${recipe.id}`);
  };

  return (
    <>
      <div className="category-card d-flex flex-column align-items-center justify-content-center border rounded m-3 p-3">
        <div className="d-flex justify-content-center mb-3">
          <img
            className="category-image img-fluid rounded"
            src={recipe.image}
            alt={`${recipe.name}-image`}
          />
        </div>
        <div className="my-2 text-center">
          <h2 className="font-weight-bold">{recipe.name}</h2>
        </div>
        <div className="d-flex justify-content-around w-100 mt-3">
          <button
            onClick={handleClick}
            className="border border-black px-4 py-1 rounded transition-all duration-300 hover:bg-dark hover:text-white"
          >
            View
          </button>
          <button
            onClick={() => setShowEditModal(true)}
            className="border border-black px-4 py-1 rounded transition-all duration-300 hover:bg-dark hover:text-white"
          >
            Edit
          </button>
        </div>
      </div>

      <EditRecipeModal
        show={showEditModal}
        setShowModal={setShowEditModal}
        recipeToEdit={recipe}
      />
    </>
  );
};

export default RecipeItem;
