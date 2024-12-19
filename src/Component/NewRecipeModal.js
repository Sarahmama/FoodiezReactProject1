import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRecipe } from "../API/recipe";
import { useParams } from "react-router";

const NewRecipeModal = ({ show, setShowModal }) => {
  const queryClient = useQueryClient();
  const { categoryId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
    categoryId: "",
  });

  const mutation = useMutation({
    mutationFn: (newRecipe) => createRecipe(newRecipe),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
      setShowModal(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Ingredients"
            value={formData.ingredients}
            onChange={(e) =>
              setFormData({ ...formData, ingredients: e.target.value })
            }
            required
          />
          <input
            type="hidden"
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({ ...formData, categoryId: categoryId })
            }
          />
          <button type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Adding..." : "Add Recipe"}
          </button>
          <button type="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeModal;
