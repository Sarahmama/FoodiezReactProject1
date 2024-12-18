import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "./Input";
import { updateCategory } from "../API/category";

const EditCategoryModal = ({ show, setShowModal, categoryToEdit }) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (categoryToEdit) {
      setName(categoryToEdit.name);
      setImage(categoryToEdit.image);
    }
  }, [recipeToEdit]);

  const { mutate } = useMutation({
    mutationFn: () => updateRecipe(recipeToEdit.id, name, image),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
      setShowModal(false);
    },
  });

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={() => setShowModal(false)} className="close-button">
          Close
        </button>
        <h2>Edit Category</h2>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Link"
        />

        <button onClick={mutate}>Update Category</button>
      </div>
    </div>
  );
};

export default EditCategoryModal;
