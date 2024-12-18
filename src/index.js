import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./Component/Nav";
import RegisterPage from "./Component/RegisterPage";
import Ingredient from "./Component/Ingredient";
import Home from "./Component/Home";
import Cetegories from "./Component/CetegoryList";
import Recipes from "./Component/RecipeList ";
import AboutUs from "./Component/AboutUs";
import RecipeDetail from "./Component/RecipeDetail";
import Footer from "./Component/Footer";
import NavReg from "./Component/NavReg";
import Navbar from "./Component/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <App />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Home",
    element: (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/RegisterPage",
    element: (
      <div>
        <Navbar />
        <RegisterPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Ingredient",
    element: (
      <div>
        <Nav />
        <Ingredient />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Cetegories",
    element: (
      <div>
        <Nav />
        <Cetegories />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Recipes",
    element: (
      <div>
        <Nav />
        <Recipes />
        <Footer />
      </div>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <div>
        <Nav />
        <AboutUs />
        <Footer />
      </div>
    ),
  },
  {
    path: "/RecipeDetail/:id",
    element: (
      <div>
        <Nav />
        <RecipeDetail />
        <Footer />
      </div>
    ),
  },
]);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
