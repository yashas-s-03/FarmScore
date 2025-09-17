import React, { useState } from 'react';
import { Shield, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';
import Header from './shared/Header';

const VetDashboard = ({ data }) => {
  const [showTreatmentForm, setShowTreatmentForm] = useState(false);
  const [showPrescriptionForm, setShowPrescriptionForm] = useState(false);

  const [treatmentData, setTreatmentData] = useState({
    farmName: '',
    FarmID: '',
    region: '',
    humidity: '',
    rainfall: '',
    antimicrobial: ''
  });

  const [prescriptionData, setPrescriptionData] = useState({
    farmName: '',
    farmID:'',
    uploadedImages: [],
    prescription: ''
  });

  const handleTreatmentChange = (e) => {
    setTreatmentData({ ...treatmentData, [e.target.name]: e.target.value });
  };

  const handlePrescriptionChange = (e) => {
    setPrescriptionData({ ...prescriptionData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setPrescriptionData({
      ...prescriptionData,
      uploadedImages: Array.from(e.target.files)
    });
  };

  const submitTreatment = () => {
    console.log('Treatment submitted:', treatmentData);
    setShowTreatmentForm(false);
    setTreatmentData({ farmName: '', region: '', humidity: '', rainfall: '', antimicrobial: '' });
  };

  const submitPrescription = () => {
    console.log('Prescription submitted:', prescriptionData);
    setShowPrescriptionForm(false);
    setPrescriptionData({ farmName: '', uploadedImages: [], prescription: '' });
  };

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
          <button
            onClick={() => setShowTreatmentForm(true)}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
          >
            <Shield className="text-green-600 mb-3" size={36} />
            <span className="font-semibold text-gray-700 hover:text-green-700 transition-colors">Log Treatment</span>
          </button>
          <button
            onClick={() => setShowPrescriptionForm(true)}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
          >
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

      {/* Treatment Modal */}
      {showTreatmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowTreatmentForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Log Antimicrobial Treatment</h2>
            <input
              type="text"
              placeholder="Farm Name"
              name="farmName"
              value={treatmentData.farmName}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              placeholder='Farm ID'
              value={treatmentData.FarmID}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
              />
            <input
              type="text"
              placeholder="Region"
              name="region"
              value={treatmentData.region}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Humidity (%)"
              name="humidity"
              value={treatmentData.humidity}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Rainfall (mm)"
              name="rainfall"
              value={treatmentData.rainfall}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <textarea
              placeholder="Antimicrobial Details"
              name="antimicrobial"
              value={treatmentData.antimicrobial}
              onChange={handleTreatmentChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <button
              onClick={submitTreatment}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mt-2"
            >
              Submit Treatment
            </button>
          </div>
        </div>
      )}

      {/* Prescription Modal */}
      {showPrescriptionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setShowPrescriptionForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Write Prescription</h2>
            <input
              type="text"
              placeholder="Farm Name"
              name="farmName"
              value={prescriptionData.farmName}
              onChange={handlePrescriptionChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mb-2"
            />
            <textarea
              placeholder="Prescription Details"
              name="prescription"
              value={prescriptionData.prescription}
              onChange={handlePrescriptionChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <button
              onClick={submitPrescription}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-2"
            >
              Submit Prescription
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VetDashboard;
