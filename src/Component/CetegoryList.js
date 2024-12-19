import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { createCategory, fetchAllCategory } from "../API/category";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewCategoryModal from "./NewCategoryModal";
import { useNavigate } from "react-router";
const CategoryList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategory,
  });

  const filteredCategories = category?.filter((category) =>
    category.name.toLowerCase().includes(query.toLowerCase())
  );

  const recipeList = filteredCategories?.map((category, i) => (
    <CategoryItem category={category} key={i} />
  ));
  useEffect(() => {
    if (category) {
      setName(category.name);
      setImage(category.image);
    }
  }, [category]);

  console.log("Filtered categories:", CategoryList);
  const { mutate } = useMutation({
    mutationFn: () =>
      createCategory({
        name,
        image,
      }),
    onSuccess: () => {
      console.log(category);
      queryClient.invalidateQueries(["categories"]); // Replace with your query key
      setShowEditModal(false);
    },
  });
  const handleAdd = () => {
    setShowEditModal(true);
  };
  const handleCloseModal = () => {
    setShowEditModal(false);
  };
  const recipeLists = category?.map((category, i) => (
    <CategoryItem category={category} key={i} />
  ));
  return (
    <>
      <div className="background">
        <div className="App text-center mt-4 p-4 rounded shadow">
          <h1 className="text-3xl font-bold mb-4 font-monospace text-[#184548]">
            Category
          </h1>
          <input
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Recipes..."
            className="border border-gray-300 rounded-md px-4 py-2 w-3/4 md:w-1/2 lg:w-1/3 shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-center mt-4">
            <button
              className="mt-4 bg-green-400 hover:bg-green-600 transition duration-300 text-white px-6 py-2 rounded-md shadow-lg"
              onClick={handleAdd}
            >
              Add New category
            </button>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-4 justify-center items-center">
            {isLoading && <h1 className="text-lg">Loading...</h1>}
            {error && <h1 className="text-red-500">{JSON.stringify(error)}</h1>}
            {!isLoading && !error && recipeList}
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
                <h5 className="modal-title">Add Category</h5>
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
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryList;
