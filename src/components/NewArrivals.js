// src/components/NewArrivals.js

import React from 'react';

// Import images from the assets folder
import leadnImg from '../assets/Arrival1.png';
import winterImg from '../assets/Arrival2.png';
import brdsImg from '../assets/Arrival3.png';

const newArrivals = [
  {
    title: 'LEADN',
    author: 'AbstrnctDegigu',
    cover: leadnImg,
    bgColor: 'bg-blue-100', // Tailwind background class
  },
  {
    title: 'THE WINTER',
    author: 'Marusa Thilos',
    cover: winterImg,
    bgColor: 'bg-blue-200', // Tailwind background class
  },
  {
    title: 'BRDS',
    author: 'Saloxson',
    cover: brdsImg,
    bgColor: 'bg-pink-100', // Tailwind background class
  },
];

const NewArrivals = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading and description in the same line */}
        <div className="flex items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 flex-1">
            New Arrivals
          </h2>
          <p className="text-gray-500 flex-1 ml-4 max-w-2xl">
            Starting off in eighteenth century London, this book invites readers to an exciting journey. 
            The lifelong fight of the protagonist’s crime solving, the life of his fight against 
            the biggest villains, criminals, and cons of his era.
          </p>
        </div>

        {/* Book cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {newArrivals.map((book, index) => (
            <div
              key={index}
              className={`p-6 shadow-lg rounded-lg ${book.bgColor} flex flex-col items-center transition-shadow hover:shadow-xl`}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-40 h-60 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
