import React, { useState } from "react";

const IngredientModal = ({
  visible,
  onClose,
  onAddIngredients,
  availableIngredients,
}) => {
  const [selected, setSelected] = useState([]);

  const toggleIngredient = (ingredient) => {
    setSelected((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((item) => item !== ingredient)
        : [...prevSelected, ingredient]
    );
  };

  const handleAdd = () => {
    onAddIngredients(selected);
    setSelected([]); // Reset the selected ingredients after adding
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-4 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">Select Ingredients</h2>
        <ul className="max-h-60 overflow-y-auto">
          {availableIngredients.map((ingredient) => (
            <li key={ingredient} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={ingredient}
                checked={selected.includes(ingredient)}
                onChange={() => toggleIngredient(ingredient)}
              />
              <label htmlFor={ingredient} className="ml-2">
                {ingredient}
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="mr-2 bg-gray-300 p-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-[#E4655C] text-white p-2 rounded"
          >
            Add Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;
