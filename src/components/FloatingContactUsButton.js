// src/components/FloatingContactUsButton.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons

const FloatingContactUsButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center justify-center space-x-3 transition duration-300"
        style={{ minWidth: '160px', height: '60px' }} // Increased button size
      >
        <FaWhatsapp className="text-2xl" /> {/* WhatsApp Icon */}
        <span className="text-base">Contact Us</span>
      </a>
    </div>
  );
};

export default FloatingContactUsButton;
