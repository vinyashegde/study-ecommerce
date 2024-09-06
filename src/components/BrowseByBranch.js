// src/components/BrowseByBranch.js

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaLaptopCode, FaNetworkWired, FaMicroscope, FaRocket, FaCogs } from "react-icons/fa"; // For navigation arrows and icons
import { MdDevices } from "react-icons/md"; // Material Design icons (optional)

// Define branches with icons
const branches = [
  { name: "Computer", items: 302, icon: <FaLaptopCode className="text-4xl text-blue-600" /> },
  { name: "IT", items: 206, icon: <FaNetworkWired className="text-4xl text-blue-600" /> },
  { name: "ENTC", items: 658, icon: <MdDevices className="text-4xl text-blue-600" /> },
  { name: "Aeronautical", items: 892, icon: <FaRocket className="text-4xl text-blue-600" /> },
  { name: "Electronics", items: 436, icon: <FaCogs className="text-4xl text-blue-600" /> },
  { name: "Mechanical", items: 512, icon: <FaCogs className="text-4xl text-blue-600" /> },
  { name: "Civil", items: 423, icon: <FaRocket className="text-4xl text-blue-600" /> },
  { name: "Biomedical", items: 345, icon: <FaMicroscope className="text-4xl text-blue-600" /> },
  { name: "Environmental", items: 276, icon: <FaLaptopCode className="text-4xl text-blue-600" /> },
  { name: "Chemical", items: 198, icon: <FaNetworkWired className="text-4xl text-blue-600" /> },
  // Add more branches as necessary
];

const ITEMS_PER_PAGE = 6; // Number of items per page (two rows of 3 items each)
const TOTAL_PAGES = Math.ceil(branches.length / ITEMS_PER_PAGE);

const BrowseByBranch = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : TOTAL_PAGES - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < TOTAL_PAGES - 1 ? prevPage + 1 : 0));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentBranches = branches.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 relative">
        {/* Heading with arrows */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Browse by <span className="text-yellow-500">Book Branch Wise</span>
          </h2>

          {/* Navigation Arrows in top-right */}
          <div className="absolute top-0 right-0 mt-2 flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Grid of Branches */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16">
          {currentBranches.map((branch, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{branch.icon}</div>
              <h3 className="text-lg font-semibold text-blue-600">{branch.name}</h3>
              <p className="text-gray-500">{branch.items} Items</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByBranch;
