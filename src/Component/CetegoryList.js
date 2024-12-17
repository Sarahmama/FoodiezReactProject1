import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <>
      <div className="App background text-center mt-4 secondory-color">
        <h1 className="font-bold">Category</h1>

        <div className="d-flex p-3 justify-content-center flex-wrap">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </>
  );
};

export default CategoryList;
