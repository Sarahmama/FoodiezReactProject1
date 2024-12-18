import React from "react";
import pizza from "../assets/images/images.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
const CategoryItem = () => {
  return (
    <>
      <div className="category-card d-flex flex-column align-items-center justify-content-center secondory-color m-3">
        <div className="d-flex justify-content-center">
          <img className="category-image" src={pizza} />
          {/* <img src={item.pic} alt={item.name} className="category-image" /> */}
        </div>
        <div className="mt-4">
          pizza
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
