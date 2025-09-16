import React, { useState } from 'react';
import Header from './shared/Header';
import FarmCard from './shared/FarmCard';

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
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Farm Directory"
        subtitle="Quality-sorted livestock suppliers"
        bgColor="bg-purple-600"
      />

      <div className="p-4">
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <h3 className="font-semibold mb-3">Filter Farms</h3>
          <div className="grid grid-cols-2 gap-4">
            <select 
              className="border rounded-lg p-2"
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
              className="border rounded-lg p-2"
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

        <div className="space-y-4">
          {filteredFarms.map((farm, index) => (
            <FarmCard 
              key={index}
              farm={farm}
              onContact={handleContactFarm}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;