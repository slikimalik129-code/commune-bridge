"use client";

import { useState } from "react";

export default function VoiceAssistant() {

  const [listening, setListening] = useState(false);

  const toggleListening = () => {
    setListening(!listening);
  };

  return (
    <div className="glass rounded-3xl p-8 mt-12">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        {/* Left Side */}

        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className={`w-4 h-4 rounded-full ${
              listening
                ? "bg-red-400 animate-pulse"
                : "bg-green-400 animate-pulse"
            }`}></div>

            <span className="text-gray-300">
              {listening
                ? "Voice Assistant Listening..."
                : "Voice Assistant Ready"}
            </span>

          </div>

          <h2 className="text-4xl font-black text-cyan-400 mb-4">
            Voice Assistant
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Advanced voice accessibility interface designed to help users
            communicate through intelligent speech interaction systems.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <button
            onClick={toggleListening}
            className={`relative w-40 h-40 rounded-full flex items-center justify-center text-4xl md:text-6xl transition duration-500 ${
              listening
                ? "bg-red-400 text-black scale-110"
                : "bg-cyan-400 text-black hover:scale-105"
            }`}
          >

            🎤

            {listening && (
              <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping"></div>
            )}

          </button>

        </div>

      </div>

      {/* Voice Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Recognition Accuracy
          </p>

          <h3 className="text-4xl font-black text-cyan-400">
            98%
          </h3>

        </div>

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Languages Supported
          </p>

          <h3 className="text-4xl font-black text-cyan-400">
            42
          </h3>

        </div>

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Voice Response Speed
          </p>

          <h3 className="text-4xl font-black text-cyan-400">
            0.3s
          </h3>

        </div>

      </div>

    </div>
  );
}