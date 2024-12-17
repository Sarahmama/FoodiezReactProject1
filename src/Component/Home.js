import React from "react";
import "../App.css";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CetegoryList";
import RecipeList from "./RecipeList ";

const Home = () => {
  return (
    <div className="Home-Page background">
      <div className="Wlc-Contanier">
        <h1>Welcome to TRIDISH !!!</h1>
        <h4>
          Explore diverse food categories, discover delicious recipes, and learn
          about ingredients to create extraordinary meals. Whether you're a
          seasoned chef or a beginner, we've got everything you need to bring
          flavor to your kitchen. Let's cook up something amazing!
        </h4>
      </div>
    </div>
  );
};

export default Home;
