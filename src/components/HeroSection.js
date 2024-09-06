// src/components/HeroSection.js

import React from "react";
import heroImage from "../assets/hero.png"; // Make sure the image path is correct

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800">
            Best Place to Find Your{" "}
            <span className="text-yellow-500">Educational Notes</span>
          </h1><br/>
          <p className="text-gray-600 text-lg mt-4">
            Explore a Wide Range of Digital Notes at Unbeatable Prices. Secure
            Payments for Instant Access to Top-Quality Study Material!
          </p><br/>
          <div className="mt-6 flex justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Search Here"
              className="px-4 py-2 border border-gray-300 rounded-l-lg"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
              Find Book
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
