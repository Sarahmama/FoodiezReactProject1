import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import EditCategoryModal from "./EditRecipeModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import logo from "../assets/images/project-logo 1.png";
import { updateCategory } from "../API/category";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setImage(category.image);
    }
  }, [category]);
  const { mutate } = useMutation({
    mutationFn: () =>
      updateCategory(category._id, {
        name,
        image,
        ingredients: [],
        instructions: "",
      }),
    onSuccess: () => {
      console.log(category);
      queryClient.invalidateQueries(["categories"]); // Replace with your query key
      setShowEditModal(false);
    },
  });

  const handleClick = () => {
    navigate(`/Recipes/${category?._id}`);
  };

  const handleEdit = () => {
    setShowEditModal(true);
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
              onClick={handleEdit}
              className="border border-black px-4 py-1 rounded transition-all duration-300 hover:bg-dark text-white"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
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
                <h5 className="modal-title">Edit Category</h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label
                    htmlFor="categoryName"
                    className="catcss font-weight-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="categoryName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="categoryImage"
                    className="catcss font-weight-bold"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    className="Edit-control"
                    id="categoryImage"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Enter category image URL"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
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

export default CategoryItem;
