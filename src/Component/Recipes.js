// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const RecipeProfile = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/apis/recipes/${id}`
//         );
//         setRecipe(response.data);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

//   if (!recipe) {
//     return <div className="loader">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
//       <h2 className="text-xl text-gray-600 mb-4">
//         Category: {recipe.category}
//       </h2>
//       {/* <h3 className="text-lg mb-2">
//         Created by:{" "}
//         <span className="font-bold">{recipe.creator?.username}</span>
//       </h3> */}
//       {recipe.imageUrl && (
//         <img
//           src={recipe.imageUrl}
//           alt={recipe.name}
//           className="w-full h-auto rounded-lg mb-4"
//         />
//       )}
//       <h4 className="text-2xl font-semibold mt-4">Ingredients:</h4>
//       <ul className="list-disc list-inside mb-4">
//         {recipe.ingredients.map((ingredient, index) => (
//           <li key={index} className="text-gray-700">
//             {ingredient}
//           </li>
//         ))}
//       </ul>
//       <h4 className="text-2xl font-semibold">Instructions:</h4>
//       <ol className="list-decimal list-inside mb-4">
//         {recipe.instructions.map((step, index) => (
//           <li key={index} className="text-gray-700">
//             {step}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default RecipeProfile;
import React from "react";

const Ingredient = () => {
  return <div>Recipes</div>;
};

export default Ingredient;
