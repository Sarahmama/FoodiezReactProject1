import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "./Input";
import { updateRecipe } from "../API/recipe";

const EditRecipeModal = ({ show, setShowModal, recipeToEdit }) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([{ value: "" }]);
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (recipeToEdit) {
      setName(recipeToEdit.name);
      setImage(recipeToEdit.image);
      setIngredients(
        recipeToEdit.ingredients.map((ingredient) => ({ value: ingredient }))
      );
      setInstructions(recipeToEdit.instructions);
    }
  }, [recipeToEdit]);

  const { mutate } = useMutation({
    mutationFn: () =>
      updateRecipe(
        recipeToEdit.id,
        name,
        ingredients.map((i) => i.value),
        instructions,
        image
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["Recipes"]);
      setShowModal(false);
    },
  });

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index].value = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { value: "" }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={() => setShowModal(false)} className="close-button">
          Close
        </button>
        <h2>Edit Recipe</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe Name"
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Link"
        />

        <h4>Ingredients</h4>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <Input
              value={ingredient.value}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              placeholder={`Ingredient ${index + 1}`}
            />
            <button onClick={() => removeIngredient(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addIngredient}>Add Ingredient</button>

        <h4>Instructions</h4>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        />

        <button onClick={mutate}>Update Recipe</button>
      </div>
    </div>
  );
};

export default EditRecipeModal;
