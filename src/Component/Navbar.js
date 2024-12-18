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


          {/* Register icon and button on the right */}
          <div className="flex ml-auto items-center">
            <img src={R} alt="Icon" className="h-10 w-10 mr-2" />
            <NavLink
              to="/RegisterPage"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E4655C" : "white",
                color: isActive ? "white" : "#E4655C",
              })}
              className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Register Page
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
