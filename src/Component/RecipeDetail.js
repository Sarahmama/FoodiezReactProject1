// import React from "react";
// import MargheritaPizza from "../assets/images/MargheritaPizza.jpg";

// const RecipeDetail = () => {
//   return (
//     <div className="bg-[url('./assets//images/pattern.png')]">
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <div className="max-w-lg px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
//           <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center font-monospace">
//             Margherita Pizza
//           </h1>
//           <img
//             src={MargheritaPizza}
//             alt="Margherita Pizza"
//             className="h-150 w-250  mb-4 size-m"
//           />
//           <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
//             Ingredients:
//           </h4>
//           <ol className="max-w-2xl text-[#184548] text-justify px-4 mb-6 list-decimal font-inherit">
//             <li>Pizza dough</li>
//             <li>Tomato sauce</li>
//             <li>Mozzarella cheese</li>
//             <li>Pepperoni</li>
//             <li>Bell peppers</li>
//             <li>Onions</li>
//             <li>Olive oil</li>
//             <li>Basil</li>
//           </ol>
//           <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
//             Instructions:
//           </h4>
//           <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
//             Preheat the oven to 475°F (245°C). Roll out the pizza dough on a
//             floured surface to your desired thickness. Spread tomato sauce on
//             top, then sprinkle with mozzarella cheese and add toppings
//             (pepperoni, bell peppers, onions). Drizzle some olive oil over the
//             pizza. Bake in the oven for 12-15 minutes until the crust is golden
//             and the cheese is bubbly. Remove from the oven, garnish with fresh
//             basil, slice, and serve.
//           </p>
//           <div className="flex flex-col items-center justify-center">
//             <button className="ml-2 bg-[#E4655C] text-white p-2 rounded mb-4 flex justify-center text-cinter  font-monospace">
//               Add Ingredient
//             </button>
//           </div>
//           <p className="text-[#184548] text-justify px-4 font-inherit">
//             Thank you for choosing Tridish - where every dish tells a story!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeDetail;
import React, { useState } from "react";
import IngredientModal from "./IngredientModal";
import { fetchOneRecipe } from "../API/recipe";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import EditRecipeModal from "./EditRecipeModal";

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const { data: recipe, isLoading } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => fetchOneRecipe(recipeId),
  });

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addSelectedIngredients = (newIngredients) => {
    setSelectedIngredients((prev) => [
      ...new Set([...prev, ...newIngredients]),
    ]);
    setModalVisible(false);
  };
  const [showEditModal, setShowEditModal] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="background">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-lg px-6 py-8 bg-white rounded-md shadow-lg m-20 text-sm">
          <h1 className="text-3xl font-bold text-[#184548] mb-4 flex justify-center font-monospace">
            {recipe.name}
          </h1>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-150 w-250 mb-4 size-m"
          />
          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
            Ingredients:
          </h4>
          <ol className="max-w-2xl text-[#184548] text-justify px-4 mb-6 list-decimal font-inherit">
            {[...recipe.ingredients, ...selectedIngredients].map(
              (ingredient, index) => (
                <li key={index}>{ingredient}</li>
              )
            )}
          </ol>

          <h4 className="text-3xl font-bold text-[#E4655C] mb-4 flex text-justify font-monospace">
            Instructions:
          </h4>
          <p className="max-w-2xl text-[#184548] text-justify px-4 mb-6 font-inherit">
            {recipe.instructions}
          </p>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={() => setModalVisible(true)}
              className="bg-[#E4655C] text-white p-2 rounded mb-4 font-monospace"
            >
              Add Ingredients
            </button>
            <IngredientModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onAddIngredients={addSelectedIngredients}
              availableIngredients={recipe.ingredients.filter(
                (ingredient) => !selectedIngredients.includes(ingredient)
              )}
            />
            <EditRecipeModal
              show={showEditModal}
              setShowModal={setShowEditModal}
              recipeToEdit={recipe}
            />
            <p className="text-[#184548] text-justify px-4 font-inherit">
              Thank you for choosing Tridish - where every dish tells a story!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
