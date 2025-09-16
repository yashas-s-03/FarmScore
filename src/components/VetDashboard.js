import React from 'react';
import { Shield, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Header from './shared/Header';

const VetDashboard = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header
        title="Veterinary Portal"
        subtitle="Certified livestock health management"
        bgColor="bg-blue-600"
      />

      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <Shield className="text-green-600 mb-3" size={36} />
            <span className="font-semibold text-gray-700 hover:text-green-700 transition-colors">Log Treatment</span>
          </button>
          <button className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
            <FileText className="text-blue-600 mb-3" size={36} />
            <span className="font-semibold text-gray-700 hover:text-blue-700 transition-colors">Write Prescription</span>
          </button>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <CheckCircle className="text-green-600 mt-1" size={22} />
              <div>
                <div className="font-semibold text-gray-800">Treatment logged for Kumar Farm</div>
                <div className="text-sm text-gray-600">Amoxicillin prescribed - MRL compliant</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <AlertCircle className="text-orange-600 mt-1" size={22} />
              <div>
                <div className="font-semibold text-gray-800">Inspection due at Dairy Farm</div>
                <div className="text-sm text-gray-600">Hygiene assessment pending</div>
                <div className="text-xs text-gray-500">1 day ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Compliance Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-gray-700">MRL Compliance Rate</span>
              <span className="font-bold text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-gray-700">Farms Under Supervision</span>
              <span className="font-bold text-gray-800">12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-gray-700">Pending Inspections</span>
              <span className="font-bold text-orange-600">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetDashboard;
