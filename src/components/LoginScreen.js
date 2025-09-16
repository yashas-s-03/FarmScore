import React from 'react';
import { User, Stethoscope, ShoppingCart } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700 mb-2">FarmScore</h1>
          <p className="text-gray-600">Digital Livestock Quality Platform</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => onLogin('farmer')}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors"
          >
            <User size={24} />
            <span className="text-lg">Farmer Login</span>
          </button>
          
          <button
            onClick={() => onLogin('vet')}
            className="w-full flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors"
          >
            <Stethoscope size={24} />
            <span className="text-lg">Veterinary Doctor</span>
          </button>
          
          <button
            onClick={() => onLogin('buyer')}
            className="w-full flex items-center justify-center space-x-3 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors"
          >
            <ShoppingCart size={24} />
            <span className="text-lg">Buyer/Company</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;