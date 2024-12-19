import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import { fetchAllCategory } from "../API/category";
import { useQuery } from "@tanstack/react-query";
import NewCategoryModal from "./NewCategoryModal";
const CategoryList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategory,
  });

  const recipeList = category?.map((category, i) => <CategoryItem category={category} key={i} />);
  console.log("Filtered categories:", CategoryList);
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
              onClick={() => setShowModal(true)}
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

      <NewCategoryModal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default CategoryList;
