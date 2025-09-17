import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import Header from './shared/Header';
import ScoreCard from './shared/ScoreCard';
import PriceCard from './shared/PriceCard';
import AntimicrobialLog from './shared/AntimicrobialLog';
import PrescriptionList from './shared/PrescriptionList';
import FloatingButtons from './FloatingButtons';
import VetAppointmentModal from './VetAppointmentModal';
import FarmInspectionModal from './FarmInspectionModal';

const FarmerDashboard = ({ data }) => {
  const { farmer, prices } = data;
  const [showVetModal, setShowVetModal] = useState(false);
  const [showInspectionModal, setShowInspectionModal] = useState(false);

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
          <button 
            onClick={() => setShowVetModal(true)}
            className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Calendar size={20} />
            <span>Book Vet Appointment</span>
          </button>
          <button 
            onClick={() => setShowInspectionModal(true)}
            className="bg-orange-600 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-700 transition-colors"
          >
            <CheckCircle size={20} />
            <span>Request Farm Inspection</span>
          </button>
        </div>
      </div>
      
      <FloatingButtons />
      
      {/* Modals */}
      <VetAppointmentModal 
        isOpen={showVetModal} 
        onClose={() => setShowVetModal(false)} 
      />
      <FarmInspectionModal 
        isOpen={showInspectionModal} 
        onClose={() => setShowInspectionModal(false)} 
      />
    </div>
  );
};

export default FarmerDashboard;