import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import R from "../assets/images/R.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>
          <div className="flex space-x-4 mx-8 items-center justify-center">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E4655C" : "white",
                color: isActive ? "white" : "#E4655C",
              })}
              className="text-purple-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-large"
            >
              Home
            </NavLink>
            <NavLink
              to="/Cetegories"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E4655C" : "white",
                color: isActive ? "white" : "#E4655C",
              })}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Category
            </NavLink>
            <NavLink
              to="/Recipes"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E4655C" : "white",
                color: isActive ? "white" : "#E4655C",
              })}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Recipes
            </NavLink>
            <NavLink
              to="/AboutUs"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E4655C" : "white",
                color: isActive ? "white" : "#E4655C",
              })}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
