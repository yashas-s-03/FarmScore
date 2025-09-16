import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const FloatingAIAssistant = () => {
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <>
      <button 
        onClick={toggleListening}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        } text-white`}
      >
        <Mic size={24} />
      </button>
      
      {isListening && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Listening... Ask about dosages or treatments</span>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIAssistant;