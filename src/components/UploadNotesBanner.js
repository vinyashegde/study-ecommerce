import React from 'react';

const UploadNotesBanner = () => {
  return (
    <div className="bg-blue-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left: Text */}
          <p className="text-gray-700">
            Contribute your notes to help fellow students, and enjoy exclusive discounts on our study materials for any engineering branch!
          </p>

          {/* Right: Upload Button */}
          <button className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition-colors">
            Upload Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadNotesBanner;
