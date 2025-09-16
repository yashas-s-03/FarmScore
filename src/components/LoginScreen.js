import React from 'react';
import { User, Stethoscope, ShoppingCart } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-2">
            FarmScore
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Digital Livestock Quality Platform
          </p>
        </div>
        
        {/* Buttons */}
        <div className="space-y-5">
          {/* Farmer Login */}
          <button
            onClick={() => onLogin('farmer')}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <User size={24} />
            <span className="text-lg font-medium">Farmer Login</span>
          </button>

          {/* Vet Login */}
          <button
            onClick={() => onLogin('vet')}
            className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <Stethoscope size={24} />
            <span className="text-lg font-medium">Veterinary Doctor</span>
          </button>

          {/* Buyer Login */}
          <button
            onClick={() => onLogin('buyer')}
            className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            <ShoppingCart size={24} />
            <span className="text-lg font-medium">Buyer / Company</span>
          </button>
        </div>

        {/* Optional footer */}
        <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} FarmScore. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
