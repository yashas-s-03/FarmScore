import React from 'react';
import { FileText } from 'lucide-react';

const PrescriptionList = ({ prescriptions }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FileText className="mr-2 text-blue-600" size={20} />
        Prescriptions
      </h3>
      <div className="space-y-3">
        {prescriptions.map((prescription, index) => (
          <div key={index} className="border rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{prescription.treatment}</div>
                <div className="text-sm text-gray-600">By {prescription.vet}</div>
                <div className="text-xs text-gray-500">{prescription.date}</div>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${
                prescription.status === 'Active' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {prescription.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionList;