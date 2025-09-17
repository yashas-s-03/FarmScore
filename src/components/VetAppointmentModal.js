import React, { useState } from 'react';
import { X, MapPin, Phone, Star, Clock, Navigation } from 'lucide-react';

const VetAppointmentModal = ({ isOpen, onClose }) => {
  const [selectedVet, setSelectedVet] = useState(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  // Mock vet data
  const nearbyVets = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Large Animal Veterinarian",
      phone: "+91 9876543210",
      address: "123 MG Road, Bangalore",
      distance: "2.5 km",
      rating: 4.8,
      experience: "12 years",
      availableSlots: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
      consultationFee: "₹500",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Poultry & Livestock Specialist",
      phone: "+91 9876543211",
      address: "456 Brigade Road, Bangalore",
      distance: "3.2 km",
      rating: 4.9,
      experience: "8 years",
      availableSlots: ["10:00 AM", "1:00 PM", "3:30 PM"],
      consultationFee: "₹400",
      latitude: 12.9716,
      longitude: 77.6033
    },
    {
      id: 3,
      name: "Dr. Anil Reddy",
      specialization: "Farm Animal Health",
      phone: "+91 9876543212",
      address: "789 Commercial Street, Bangalore",
      distance: "4.1 km",
      rating: 4.7,
      experience: "15 years",
      availableSlots: ["8:30 AM", "12:00 PM", "5:00 PM"],
      consultationFee: "₹600",
      latitude: 12.9716,
      longitude: 77.6108
    }
  ];

  const [selectedSlot, setSelectedSlot] = useState("");

  const handleBookAppointment = () => {
    if (selectedVet && selectedSlot) {
      setAppointmentBooked(true);
      setTimeout(() => {
        setAppointmentBooked(false);
        onClose();
        setSelectedVet(null);
        setSelectedSlot("");
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Book Vet Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Map Section */}
          <div className="md:w-1/2 bg-gray-100 p-4">
            <h3 className="font-semibold mb-4">Nearby Veterinarians</h3>

            {/* Dummy map (iframe instead of Google Maps API) */}
            <div className="rounded-lg overflow-hidden h-[250px] w-full">
              <iframe
                title="Dummy Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.780905964057!2d77.5035!3d12.9582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3de59e5b6c6d%3A0x9c99e6a7b3e3a6e!2sNagarbhavi%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1705400000000"
              ></iframe>
            </div>

            {/* Vet markers list */}
            <div className="space-y-2 max-h-64 overflow-y-auto mt-4">
              {nearbyVets.map(vet => (
                <div
                  key={vet.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedVet?.id === vet.id
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedVet(vet)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-sm">{vet.name}</h4>
                      <p className="text-xs text-gray-600">{vet.distance} away</p>
                      <div className="flex items-center mt-1">
                        <Star size={12} className="text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{vet.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vet Details Section */}
          <div className="md:w-1/2 p-4 overflow-y-auto">
            {selectedVet ? (
              <div>
                {/* you can fill in vet details here */}
                <h3 className="text-lg font-bold">{selectedVet.name}</h3>
                <p className="text-sm text-gray-600">{selectedVet.specialization}</p>
                <p className="text-sm text-gray-600">{selectedVet.address}</p>
                <p className="text-sm text-gray-600">Experience: {selectedVet.experience}</p>
                <p className="text-sm text-gray-600">Fee: {selectedVet.consultationFee}</p>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>Select a veterinarian from the list to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetAppointmentModal;
    