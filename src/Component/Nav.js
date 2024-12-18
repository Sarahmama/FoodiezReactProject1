import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import R from "../assets/images/R.png";

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const username = "John Doe";

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
    navigate("/");
  };

  return (
    <nav className="bg-white falx">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex  h-16">
          <Link to="/" className="flex ">
            <img src={logo} alt="Logo" className="h-14 w-500 mr-3" />
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

          {/* User Icon and Dropdown */}
          <div className="relative flex items-center ml-auto text-#E4655C ">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "white" : "#E4655C",
                  color: isActive ? "#E4655C" : "white",
                };
              }}
              className="text-gray-300 hover:bg-[#E4655C] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={logout}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
