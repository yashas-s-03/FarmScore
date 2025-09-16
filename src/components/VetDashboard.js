import React from 'react';
import { Shield, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Header from './shared/Header';

const VetDashboard = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Veterinary Portal"
        subtitle="Certified livestock health management"
        bgColor="bg-blue-600"
      />

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <Shield className="text-green-600 mb-2" size={32} />
            <span className="font-medium">Log Treatment</span>
          </button>
          <button className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
            <FileText className="text-blue-600 mb-2" size={32} />
            <span className="font-medium">Write Prescription</span>
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="text-green-600 mt-1" size={20} />
              <div>
                <div className="font-medium">Treatment logged for Kumar Farm</div>
                <div className="text-sm text-gray-600">Amoxicillin prescribed - MRL compliant</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <AlertCircle className="text-orange-600 mt-1" size={20} />
              <div>
                <div className="font-medium">Inspection due at Dairy Farm</div>
                <div className="text-sm text-gray-600">Hygiene assessment pending</div>
                <div className="text-xs text-gray-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Compliance Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>MRL Compliance Rate</span>
              <span className="font-bold text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Farms Under Supervision</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Pending Inspections</span>
              <span className="font-bold text-orange-600">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetDashboard;