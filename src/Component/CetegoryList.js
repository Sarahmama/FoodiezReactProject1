import { useState } from "react";
import CategoryItem from "./CategoryItem";
import RecipeItem from "./RecipeItem";

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (item) => {
    setSelectedCategory(category.filter(x => x.name !== item.name)); 
  };
  // const categories = category.map((item) => <CategoryItem item={item} handleCategoryClick={handleCategoryClick} />);

  return (
    <>
      <div className="App background text-center mt-4 secondory-color">
        <h1 className="font-bold">Category</h1>

        <div className="d-flex p-3 justify-content-center flex-wrap">
          <CategoryItem/>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
