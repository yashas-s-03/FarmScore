import React, { useState } from "react";

export default function Messages() {
  const [messages] = useState([
    { id: 1, name: "Ramesh", lastMsg: "Can you share that remedy?" },
    { id: 2, name: "Meera", lastMsg: "Check the new FSSAI rules" },
    { id: 3, name: "Anita", lastMsg: "Organic market prices are rising!" },
  ]);

  return (
    <div className="h-screen w-80 bg-white dark:bg-gray-800 shadow-md p-4">
      <h2 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4">
        💬 Messages
      </h2>
      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
          >
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {msg.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {msg.lastMsg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
