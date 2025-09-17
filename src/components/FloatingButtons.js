import React, { useState, useRef, useEffect } from "react";
import { Mic, Linkedin, Cloud, Loader2, CheckCircle } from "lucide-react";
import axios from "axios";

const FloatingButtons = () => {
  const [isListening, setIsListening] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [weatherFetched, setWeatherFetched] = useState(false);
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

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // Reset weather data when region changes
    if (e.target.name === 'region') {
      setWeatherFetched(false);
      setInput(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
        temperature: 0,
        rainfall: 0,
        humidity: 0
      }));
    }
  };

  // Mock weather service - replace with real weather API if needed
  const getWeatherData = async (region) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock weather data for different regions
    const weatherData = {
      "Bangalore": { temperature: 24, rainfall: 85, humidity: 65 },
      "Mysuru": { temperature: 26, rainfall: 92, humidity: 70 },
      "Mandya": { temperature: 28, rainfall: 78, humidity: 68 },
      "Hubli": { temperature: 29, rainfall: 60, humidity: 58 },
      "Mangalore": { temperature: 27, rainfall: 120, humidity: 78 }
    };

    return weatherData[region] || { temperature: 25, rainfall: 80, humidity: 65 };
  };

  const getPrediction = async () => {
    if (!input.region) {
      alert("Please select a region first");
      return;
    }

    // First, fetch weather data if not already fetched
    if (!weatherFetched) {
      setIsLoadingWeather(true);
      
      try {
        const weatherData = await getWeatherData(input.region);
        
        const updatedInput = {
          ...input,
          temperature: weatherData.temperature,
          rainfall: weatherData.rainfall,
          humidity: weatherData.humidity
        };
        
        setInput(updatedInput);
        setWeatherFetched(true);
        setIsLoadingWeather(false);
        
        // Small delay to show the fetched data
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Now make prediction with updated data
        await makePredictionCall(updatedInput);
        
      } catch (error) {
        setIsLoadingWeather(false);
        alert("Error fetching weather data: " + error.message);
        return;
      }
    } else {
      // Weather already fetched, just make prediction
      await makePredictionCall(input);
    }
  };

  const makePredictionCall = async (inputData) => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", inputData);
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setResult(res.data);
      }
    } catch (err) {
      console.error(err);
      alert("Error calling prediction API. Make sure your backend is running on http://127.0.0.1:8000");
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
          className="fixed bottom-40 right-6 bg-white rounded-lg shadow-xl p-4 max-w-sm z-50"
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

              {/* Weather data display (only shown when fetched) */}
              {weatherFetched && (
                <div className="bg-blue-50 p-2 rounded border">
                  <div className="flex items-center mb-1">
                    <CheckCircle size={16} className="text-green-500 mr-1" />
                    <span className="text-sm font-medium">Weather Data Fetched:</span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div>🌡️ Temperature: {input.temperature}°C</div>
                    <div>🌧️ Rainfall: {input.rainfall}mm</div>
                    <div>💧 Humidity: {input.humidity}%</div>
                  </div>
                </div>
              )}

              {/* Manual inputs */}
              <input
                name="antimicrobial_use"
                type="number"
                placeholder="Antimicrobial Use(PCU)"
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

              {/* Predict button */}
              <button
                onClick={getPrediction}
                disabled={isLoadingWeather}
                className="bg-green-500 text-white px-4 py-2 rounded w-full disabled:bg-gray-400 flex items-center justify-center"
              >
                {isLoadingWeather ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Fetching Weather...
                  </>
                ) : (
                  'Predict'
                )}
              </button>

              {/* Results display */}
              {result && (
                <div className="mt-2 p-2 border rounded bg-green-50">
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