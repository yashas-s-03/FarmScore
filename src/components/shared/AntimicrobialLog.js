import React from 'react';
import { Shield } from 'lucide-react';

const AntimicrobialLog = ({ logs }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Shield className="mr-2 text-orange-600" size={20} />
        Antimicrobial Log
      </h3>
      <div className="space-y-3">
        {logs.map((log, index) => (
          <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{log.antibiotic} - {log.dose}</div>
                <div className="text-sm text-gray-600">Prescribed by {log.vet}</div>
                <div className="text-xs text-gray-500">{log.date}</div>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                {log.compliance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AntimicrobialLog;