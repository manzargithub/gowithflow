import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const ClientProfile = () => {
  const handleBack = () => {
    window.history.back(); // or use navigate(-1) if using React Router
  };

  return (
    <div className="max-w-5xl h-80 md:mt-36 mx-auto bg-white shadow-md rounded-2xl p-6 border">
      <div className="flex items-center mb-4">
        <button onClick={handleBack} className="mr-2 text-gray-600 hover:text-black text-2xl">
          <FiArrowLeft />
        </button>
        <h2 className="text-2xl font-semibold">👤 Client Profile</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <div>
          <span className="block text-sm font-medium text-gray-500">Total Hires</span>
          <span className="text-lg font-bold">hires</span>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">Posted Jobs</span>
          <span className="text-lg font-bold">jobs</span>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">Ratings</span>
          <span className="text-lg font-bold">⭐ rates</span>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">Total Spending</span>
          <span className="text-lg font-bold">spending</span>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
