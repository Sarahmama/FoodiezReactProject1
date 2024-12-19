import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import EditCategoryModal from "./EditRecipeModal";
import logo from "../assets/images/project-logo 1.png";
import { fetchOneRecipe } from "../API/recipe";
import { useQuery } from "@tanstack/react-query";
import RecipeItem from "./RecipeItem";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClick = () => {
    navigate(`/recipes/${category?._id}`);
  };

  return (
    <>
      <div className="category-card d-flex flex-column align-items-center justify-content-center border rounded m-3 p-3">
        <div className="w-75 d-flex justify-content-between mb-3 flex-column align-items-center rounded-2 pb-3">
          <img
            className="category-image img-fluid rounded"
            src={category.image || logo}
            alt={`${category.name}-image`}
          />
          <div className="my-2 text-center w-100">
            <h2 className="font-weight-bold">{category.name}</h2>
          </div>
          <div className="d-flex justify-content-between w-100 mt-3">
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

      <EditCategoryModal
        show={showEditModal}
        setShowModal={setShowEditModal}
        categoryToEdit={category}
      />
    </>
  );
};

export default CategoryItem;
