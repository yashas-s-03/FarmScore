import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import Header from './shared/Header';
import ScoreCard from './shared/ScoreCard';
import PriceCard from './shared/PriceCard';
import AntimicrobialLog from './shared/AntimicrobialLog';
import PrescriptionList from './shared/PrescriptionList';
import FloatingAIAssistant from './FloatingAIAssistant';

const FarmerDashboard = ({ data }) => {
  const { farmer, prices } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={`Welcome, ${farmer.name}`}
        subtitle={farmer.cluster}
        bgColor="bg-green-600"
      />

      <div className="p-4 space-y-6">
        <ScoreCard 
          score={farmer.farmScore}
          cluster={farmer.cluster}
          ranking="Top 15%"
        />

        <PriceCard prices={prices} />

        <AntimicrobialLog logs={farmer.antimicrobialLog} />

        <PrescriptionList prescriptions={farmer.prescriptions} />

        <div className="grid grid-cols-1 gap-4">
          <button className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
            <Calendar size={20} />
            <span>Book Vet Appointment</span>
          </button>
          <button className="bg-orange-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2">
            <CheckCircle size={20} />
            <span>Request Farm Inspection</span>
          </button>
        </div>
        
      </div>

      <FloatingAIAssistant />
    </div>
  );
};

export default FarmerDashboard;