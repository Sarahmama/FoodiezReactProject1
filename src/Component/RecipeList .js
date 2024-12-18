import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({item}) => {
  // setPetsList(petsList.filter(pet => pet.id !== id))
  return (
    <>
      <div className="App background text-center mt-4 secondory-color">
        <h1 className="font-bold">Recipes</h1>

        <div className="d-flex p-3 justify-content-center flex-wrap">
          <RecipeItem />
          <RecipeItem />

          <RecipeItem />
        </div>
      </div>
    </>
  );
};

export default RecipeList;
