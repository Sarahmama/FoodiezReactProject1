import React, { useState } from "react";
import Input from "./Input";
import { createRecipe } from "../API/recipe";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewRecipeModal = ({ show, setShowModal }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([{ value: "" }]);
  const [instructions, setInstructions] = useState("");
  const [categories, setCategories] = useState([{ value: "" }]);
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["add recipe"],
    mutationFn: () =>
      createRecipe(
        name,
        categories.map((c) => c.value).join(", "),
        ingredients.map((i) => i.value).join(", "),
        instructions,
        image
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]); // Refetch recipes
      setShowModal(false); // Close modal
      // You can also reset the form here if needed
    },
  });

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].value = value;
    setCategories(newCategories);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index].value = value;
    setIngredients(newIngredients);
  };

  const addCategory = () => {
    setCategories([...categories, { value: "" }]);
  };

  const removeCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
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
    <div className="inset-0 fixed flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-70 inset-0"></div>
      <div className="relative z-10 flex flex-col border-[2px] border-gray-300 rounded-lg w-[90%] md:w-[40%] bg-white p-6">
        <button
          className="absolute right-3 top-3 w-[80px] bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>

        <h2 className="text-xl font-bold mb-4">Add a New Recipe</h2>

        <div className="overflow-y-auto max-h-60 mb-4">
          <Input
            name="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            name="Image Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <div>
            <h4 className="font-semibold mb-2">Ingredients</h4>

            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={ingredient.value}
                  onChange={(e) =>
                    handleIngredientChange(index, e.target.value)
                  }
                  placeholder={`Ingredient ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              Add Ingredient
            </button>
          </div>

          <h4 className="font-semibold mb-2">Categories</h4>
          {categories.map((category, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={category.value}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                placeholder={`Category ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeCategory(index)}
                className="text-red-600 hover:text-red-800 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCategory}
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Add Category
          </button>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Instructions</h4>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Write your instructions here..."
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>

        {error && <p className="text-red-500">Error: {error.message}</p>}

        <button
          onClick={mutate}
          className={`bg-green-500 text-white rounded-md w-full py-2 hover:bg-green-600 transition mt-4 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default NewRecipeModal;
