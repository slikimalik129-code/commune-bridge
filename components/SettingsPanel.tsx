"use client";

import { useState } from "react";

export default function SettingsPanel() {
  const [voiceControl, setVoiceControl] = useState(true);
  const [accessibilityMode, setAccessibilityMode] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState(true);

  return (
    <div className="glass rounded-3xl p-8 mt-12">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h2 className="text-3xl font-black text-cyan-400">
            System Settings
          </h2>

          <p className="text-gray-400 mt-2">
            Personalize your AI communication experience
          </p>
        </div>

        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

      </div>

      <div className="space-y-6">

        {/* Voice Control */}

        <div className="bg-white/5 rounded-2xl p-6 flex justify-between items-center">

          <div>
            <h3 className="text-xl font-bold">
              Voice Control
            </h3>

            <p className="text-gray-400 mt-1">
              Enable voice navigation and AI listening
            </p>
          </div>

          <button
            onClick={() => setVoiceControl(!voiceControl)}
            className={`w-20 h-10 rounded-full transition duration-300 ${
              voiceControl
                ? "bg-cyan-400"
                : "bg-gray-600"
            }`}
          >
            <div
              className={`w-8 h-8 bg-white rounded-full mt-1 transition duration-300 ${
                voiceControl
                  ? "translate-x-10"
                  : "translate-x-1"
              }`}
            ></div>
          </button>

        </div>

        {/* Accessibility */}

        <div className="bg-white/5 rounded-2xl p-6 flex justify-between items-center">

          <div>
            <h3 className="text-xl font-bold">
              Accessibility Mode
            </h3>

            <p className="text-gray-400 mt-1">
              Enhanced support for communication assistance
            </p>
          </div>

          <button
            onClick={() =>
              setAccessibilityMode(!accessibilityMode)
            }
            className={`w-20 h-10 rounded-full transition duration-300 ${
              accessibilityMode
                ? "bg-cyan-400"
                : "bg-gray-600"
            }`}
          >
            <div
              className={`w-8 h-8 bg-white rounded-full mt-1 transition duration-300 ${
                accessibilityMode
                  ? "translate-x-10"
                  : "translate-x-1"
              }`}
            ></div>
          </button>

        </div>

        {/* AI Suggestions */}

        <div className="bg-white/5 rounded-2xl p-6 flex justify-between items-center">

          <div>
            <h3 className="text-xl font-bold">
              AI Suggestions
            </h3>

            <p className="text-gray-400 mt-1">
              Smart communication recommendations
            </p>
          </div>

          <button
            onClick={() =>
              setAiSuggestions(!aiSuggestions)
            }
            className={`w-20 h-10 rounded-full transition duration-300 ${
              aiSuggestions
                ? "bg-cyan-400"
                : "bg-gray-600"
            }`}
          >
            <div
              className={`w-8 h-8 bg-white rounded-full mt-1 transition duration-300 ${
                aiSuggestions
                  ? "translate-x-10"
                  : "translate-x-1"
              }`}
            ></div>
          </button>

        </div>

      </div>

    </div>
  );
}