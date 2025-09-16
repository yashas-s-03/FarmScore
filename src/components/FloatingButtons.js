import React, { useState, useRef, useEffect } from "react";
import { Mic, Linkedin } from "lucide-react";
import axios from "axios";

const FloatingButtons = () => {
  const [isListening, setIsListening] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState({
    farm_type: "egg",
    region: "",
    temperature: 0,
    rainfall: 0,
    humidity: 0,
    antimicrobial_use: 0,
    mrl_compliance: 0,
    lab_values: 0,
  });
  const [result, setResult] = useState(null);

  const popupRef = useRef(null);

  // Toggle listening
  const toggleListening = () => setIsListening(!isListening);
  const openLinkedIn = () => window.open("https://www.linkedin.com", "_blank");
  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const getPrediction = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", input);
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setResult(res.data);
      }
    } catch (err) {
      console.error(err);
      alert("Error calling API");
    }
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowForm(false);
        setIsListening(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Voice Assistant Button */}
      <button
        onClick={toggleListening}
        className={`fixed bottom-24 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isListening ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        } text-white z-50`}
      >
        <Mic size={24} />
      </button>

      {/* LinkedIn Button */}
      <button
        onClick={openLinkedIn}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-transform hover:scale-110 z-50"
      >
        <Linkedin size={28} />
      </button>

      {/* Listening / FarmScore Popup */}
      {isListening && (
        <div
          ref={popupRef}
          className="fixed bottom-40 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs z-50"
        >
          <div className="flex items-center space-x-2 text-sm mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Listening... Ask about dosages or treatments</span>
          </div>

          <button
            onClick={toggleForm}
            className="bg-blue-600 text-white px-3 py-1 rounded mt-2 w-full"
          >
            FarmScore Predictor
          </button>

          {showForm && (
            <div className="mt-3 space-y-2">
              {/* Dropdown for farm type */}
              <select
                name="farm_type"
                value={input.farm_type}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              >
                <option value="egg">Egg</option>
                <option value="fish">Fish</option>
                <option value="goat">Goat</option>
                <option value="milk">Milk</option>
                <option value="poultry">Poultry</option>
              </select>

              {/* Dropdown for region */}
    <select
      name="region"
      value={input.region}
      onChange={handleChange}
      className="border p-2 w-full rounded"
    >
      <option value="">Select Region</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Mysuru">Mysuru</option>
      <option value="Mandya">Mandya</option>
      <option value="Hubli">Hubli</option>
      <option value="Mangalore">Mangalore</option>
    </select>
              <input
                name="temperature"
                type="number"
                placeholder="Temperature (°C)"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="rainfall"
                type="number"
                placeholder="Rainfall (mm)"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="humidity"
                type="number"
                placeholder="Humidity (%)"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="antimicrobial_use"
                type="number"
                placeholder="Antimicrobial Use"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="mrl_compliance"
                type="number"
                placeholder="MRL Compliance"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />
              <input
                name="lab_values"
                type="number"
                placeholder="Lab Values"
                onChange={handleChange}
                className="border p-2 w-full rounded"
              />

              <button
                onClick={getPrediction}
                className="bg-green-500 text-white px-4 py-2 rounded w-full"
              >
                Predict
              </button>

              {result && (
                <div className="mt-2 p-2 border rounded bg-gray-50">
                  <p><strong>Farm Type:</strong> {result.farm_type}</p>
                  <p><strong>FarmScore:</strong> {result.FarmScore}</p>
                  <p><strong>Grade:</strong> {result.Grade}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
