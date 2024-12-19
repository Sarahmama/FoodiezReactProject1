import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Ensure your custom styles are defined here
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditRecipeModal from "./EditRecipeModal";
import logo from "../assets/images/project-logo 1.png";
import { updateRecipe } from "../API/recipe";

const RecipeItem = ({ recipe }) => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (recipe) {
      setName(recipe.name);
      setImage(recipe.image);
      setIngredients(recipe.ingredients || []);
      setInstructions(recipe.instructions || "");
    }
  }, [recipe]);

  const { mutate } = useMutation({
    mutationFn: () =>
      updateRecipe(recipe._id, {
        name,
        image,
        ingredients,
        instructions,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]); // Replace with your query key
      setShowEditModal(false);
    },
  });

  const handleClick = () => {
    setRecipeId(recipe.id); // Pass the recipe id instead of constructing a path
    navigate(`/RecipeDetail/${recipe?._id}`); // Navigate to
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <div className="category-card d-flex flex-column align-items-center justify-content-center border rounded m-3 p-3">
        <div className="w-75 d-flex justify-content-between mb-3 flex-column align-items-center rounded-2 pb-3">
          <img
            className="category-image img-fluid rounded"
            src={recipe.image || logo}
            alt={`${recipe.name}-image`}
          />
          <div className="my-2 text-center">
            <h2 className="font-weight-bold">{recipe.name}</h2>
          </div>
          <div className="d-flex justify-content-around w-100 mt-3">
            <button
              onClick={handleClick}
              className="border border-black px-4 py-1 rounded transition-all duration-300 hover:bg-dark text-white"
            >
              View
            </button>
            <button
              onClick={() => setShowEditModal(true)}
              className="border border-black px-4 py-1 rounded transition-all duration-300 hover:bg-dark text-white"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {showEditModal && (
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
                <h5 className="modal-title">Edit Recipe</h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="recipeName" className="font-weight-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipeName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter recipe name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeImage" className="font-weight-bold">
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipeImage"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Enter recipe image URL"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeIngredients" className="font-weight-bold">
                    Ingredients
                  </label>
                  <textarea
                    className="form-control"
                    id="recipeIngredients"
                    value={ingredients.join(", ")}
                    onChange={(e) =>
                      setIngredients(e.target.value.split(",").map((item) => item.trim()))
                    }
                    placeholder="Enter ingredients, separated by commas"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipeInstructions" className="font-weight-bold">
                    Instructions
                  </label>
                  <textarea
                    className="form-control"
                    id="recipeInstructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Enter recipe instructions"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={mutate}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeItem;
