import React, { useState } from 'react';
import { X, Calendar, Clock, IndianRupee, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const FarmInspectionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    inspectionType: '',
    preferredDate: '',
    preferredTime: '',
    farmSize: '',
    animalCount: '',
    urgency: 'normal',
    additionalNotes: '',
    contactPreference: 'phone'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const inspectionTypes = [
    { id: 'routine', name: 'Routine Health Check', baseCost: 1500, description: 'General farm and animal health assessment' },
    { id: 'disease', name: 'Disease Investigation', baseCost: 2500, description: 'Specific disease outbreak investigation' },
    { id: 'certification', name: 'Certification Inspection', baseCost: 3000, description: 'Official certification for compliance' },
    { id: 'biosecurity', name: 'Biosecurity Assessment', baseCost: 2000, description: 'Farm biosecurity evaluation' },
    { id: 'welfare', name: 'Animal Welfare Check', baseCost: 1800, description: 'Animal welfare and housing assessment' }
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM', 
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Low Priority', multiplier: 1, color: 'text-green-600' },
    { id: 'normal', name: 'Normal', multiplier: 1.2, color: 'text-blue-600' },
    { id: 'high', name: 'High Priority', multiplier: 1.5, color: 'text-orange-600' },
    { id: 'emergency', name: 'Emergency', multiplier: 2, color: 'text-red-600' }
  ];

  // Calculate estimated cost based on form data
  const calculateCost = () => {
    const selectedInspection = inspectionTypes.find(type => type.id === formData.inspectionType);
    if (!selectedInspection) return 0;

    let cost = selectedInspection.baseCost;
    
    // Add cost based on farm size
    const farmSize = parseInt(formData.farmSize) || 0;
    if (farmSize > 10) cost += (farmSize - 10) * 50;
    
    // Add cost based on animal count
    const animalCount = parseInt(formData.animalCount) || 0;
    if (animalCount > 100) cost += Math.floor((animalCount - 100) / 50) * 200;
    
    // Apply urgency multiplier
    const urgencyMultiplier = urgencyLevels.find(level => level.id === formData.urgency)?.multiplier || 1;
    cost = Math.round(cost * urgencyMultiplier);
    
    return cost;
  };

  React.useEffect(() => {
    setEstimatedCost(calculateCost());
  }, [formData.inspectionType, formData.farmSize, formData.animalCount, formData.urgency]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.inspectionType || !formData.preferredDate || !formData.preferredTime) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the data to your API
    console.log('Inspection Request:', { ...formData, estimatedCost });
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset form
      setFormData({
        inspectionType: '',
        preferredDate: '',
        preferredTime: '',
        farmSize: '',
        animalCount: '',
        urgency: 'normal',
        additionalNotes: '',
        contactPreference: 'phone'
      });
    }, 3000);
  };

  if (!isOpen) return null;

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Inspection Requested!</h3>
          <p className="text-gray-600 mb-4">
            Your farm inspection request has been submitted successfully.
          </p>
          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <p className="text-green-800 font-medium">Estimated Cost: ₹{estimatedCost}</p>
          </div>
          <p className="text-sm text-gray-500">
            You will receive a confirmation call within 24 hours to schedule the inspection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Request Farm Inspection</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Inspection Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inspection Type *
              </label>
              <div className="space-y-2">
                {inspectionTypes.map(type => (
                  <div 
                    key={type.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      formData.inspectionType === type.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => handleInputChange('inspectionType', type.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{type.name}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                      <span className="text-sm font-medium text-green-600">₹{type.baseCost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-1" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock size={16} className="inline mr-1" />
                  Preferred Time *
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  required
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Farm Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Size (acres)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. 5"
                  value={formData.farmSize}
                  onChange={(e) => handleInputChange('farmSize', e.target.value)}
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Animal Count
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g. 100"
                  value={formData.animalCount}
                  onChange={(e) => handleInputChange('animalCount', e.target.value)}
                  min="0"
                />
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <AlertCircle size={16} className="inline mr-1" />
                Urgency Level
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {urgencyLevels.map(level => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => handleInputChange('urgency', level.id)}
                    className={`p-2 text-sm rounded border transition-colors ${
                      formData.urgency === level.id
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className={formData.urgency === level.id ? 'text-white' : level.color}>
                      {level.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="phone"
                    checked={formData.contactPreference === 'phone'}
                    onChange={(e) => handleInputChange('contactPreference', e.target.value)}
                    className="mr-2"
                  />
                  Phone Call
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="whatsapp"
                    checked={formData.contactPreference === 'whatsapp'}
                    onChange={(e) => handleInputChange('contactPreference', e.target.value)}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText size={16} className="inline mr-1" />
                Additional Notes
              </label>
              <textarea
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific concerns or additional information..."
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              />
            </div>

            {/* Cost Estimate */}
            {estimatedCost > 0 && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-green-800 flex items-center">
                      <IndianRupee size={16} className="mr-1" />
                      Estimated Cost
                    </h4>
                    <p className="text-sm text-green-600 mt-1">
                      *Final cost may vary based on actual inspection requirements
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-800">₹{estimatedCost}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center"
            >
              <CheckCircle size={20} className="mr-2" />
              Request Inspection
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FarmInspectionModal;