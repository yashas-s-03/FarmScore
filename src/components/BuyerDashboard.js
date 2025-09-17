import React, { useState } from 'react';
import Header from './shared/Header';
import FarmCard from './shared/FarmCard';
import CommunityFeed from './CommunityFeed'
import FloatingButtonsBuyer from './FloatingButtonsBuyer';

const BuyerDashboard = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleContactFarm = (farm) => {
    alert(`Contacting ${farm.name} at ${farm.contact}`);
  };

  const filteredFarms = data.farms.filter(farm => {
    return (!selectedRegion || farm.location === selectedRegion) &&
           (!selectedType || farm.type === selectedType);
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header 
        title="Farm Directory"
        subtitle="Quality-sorted livestock suppliers"
        bgColor="bg-purple-600"
      />

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter Farms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select 
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="">All Regions</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Hubli">Hubli</option>
              <option value="Mangalore">Mangalore</option>
            </select>
            <select 
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Dairy">Dairy</option>
              <option value="Poultry">Poultry</option>
              <option value="Goat">Goat</option>
              <option value="Mixed">Mixed</option>
            </select>
          </div>
        </div>

        {/* Farms List */}
        <div className="space-y-4">
          {filteredFarms.length > 0 ? (
            filteredFarms.map((farm, index) => (
              <FarmCard 
                key={index}
                farm={farm}
                onContact={handleContactFarm}
              />
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6 text-center text-gray-500">
              No farms found for the selected filters.
            </div>
          )}
        </div>
      </div>
      <FloatingButtonsBuyer/>
    </div>
  );
};

export default BuyerDashboard;
