import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import R from "../assets/images/R.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>

          {/* Register icon and button on the right */}
          <div className="flex items-center">
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

export default Navbar;
