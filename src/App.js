import React, { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import FarmerDashboard from "./components/FarmerDashboard";
import BuyerDashboard from "./components/BuyerDashboard";
import VetDashboard from "./components/VetDashboard";
import { mockData } from "./data/mockData";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userType) => {
    setCurrentUser(userType);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
          FarmScore
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        {currentUser === "farmer" && <FarmerDashboard data={mockData} />}
        {currentUser === "buyer" && <BuyerDashboard data={mockData} />}
        {currentUser === "vet" && <VetDashboard data={mockData} />}
      </main>
    </div>
  );
};

export default App;
