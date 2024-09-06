// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">STUDY HUB</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="text-gray-600 hover:text-blue-600">
                Categories
              </a>
            </li>
            <li>
              <a href="/store" className="text-gray-600 hover:text-blue-600">
                Store
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-blue-600">
                About Us
              </a>
            </li>
          </ul>
          <div className="space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
