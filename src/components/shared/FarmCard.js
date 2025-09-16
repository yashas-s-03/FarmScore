import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const FarmCard = ({ farm, onContact }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{farm.name}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin size={16} className="mr-1" />
            <span>{farm.location}</span>
          </div>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mt-2 inline-block">
            {farm.type}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">{farm.score}</div>
          <div className="text-sm text-gray-600">FarmScore</div>
        </div>
      </div>
      <button 
        onClick={() => onContact(farm)}
        className="w-full bg-purple-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2"
      >
        <Phone size={20} />
        <span>Contact Farmer</span>
      </button>
    </div>
  );
};

export default FarmCard;