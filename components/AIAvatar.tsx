"use client";

import { useState } from "react";

export default function AIAvatar() {

  const [active, setActive] = useState(true);

  return (
    <div className="glass rounded-3xl p-6 md:p-10 mt-12 overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}

          <div className="max-w-2xl">

            <div className="flex items-center gap-4 mb-6">

              <div className={`w-4 h-4 rounded-full ${
                active
                  ? "bg-green-400 animate-pulse"
                  : "bg-red-400"
              }`}></div>

              <span className="text-gray-300">
                {active
                  ? "Neural AI Assistant Online"
                  : "AI Offline"}
              </span>

            </div>

            <h2 className="text-5xl font-black text-cyan-400 mb-6">
              COMMUNE AI
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Advanced communication intelligence designed to bridge
              accessibility barriers through futuristic AI systems,
              multilingual translation, voice interaction,
              and educational assistance technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button
                onClick={() => setActive(!active)}
                className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300"
              >
                {active
                  ? "Deactivate AI"
                  : "Activate AI"}
              </button>

              <button className="px-8 py-4 bg-white/10 rounded-2xl hover:bg-white/20 transition duration-300">
                Neural Settings
              </button>

            </div>

          </div>

          {/* AI Orb */}

          <div className="relative flex items-center justify-center">

            {/* Outer Glow */}

            <div className={`absolute w-80 h-80 rounded-full blur-3xl ${
              active
                ? "bg-cyan-400/30 animate-pulse"
                : "bg-gray-500/20"
            }`}></div>

            {/* Main Orb */}

            <div className={`relative w-56 h-56 rounded-full flex items-center justify-center border-4 ${
              active
                ? "bg-cyan-400/20 border-cyan-400"
                : "bg-gray-500/10 border-gray-500"
            }`}>

              {/* Inner Ring */}

              <div className={`absolute w-44 h-44 rounded-full border-2 ${
                active
                  ? "border-cyan-300 animate-spin"
                  : "border-gray-500"
              }`}
              style={{ animationDuration: "12s" }}
              ></div>

              {/* Core */}

              <div className={`w-24 h-24 rounded-full ${
                active
                  ? "bg-cyan-400 animate-pulse"
                  : "bg-gray-500"
              }`}></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}