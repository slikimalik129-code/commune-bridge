"use client";

import { useState } from "react";

export default function TranslationCenter() {

  const [fromLanguage, setFromLanguage] = useState("English");
  const [toLanguage, setToLanguage] = useState("French");

  return (
    <div className="glass rounded-3xl p-8 mt-12">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h2 className="text-4xl font-black text-cyan-400">
            Translation Center
          </h2>

          <p className="text-gray-400 mt-2">
            Real-time multilingual communication systems
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

          <span>Translation Systems Active</span>

        </div>

      </div>

      {/* Language Controls */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* From */}

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-3">
            Translate From
          </p>

          <select
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
          >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Siswati</option>
            <option>Zulu</option>
            <option>Portuguese</option>
          </select>

        </div>

        {/* To */}

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-3">
            Translate To
          </p>

          <select
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
          >
            <option>French</option>
            <option>English</option>
            <option>Spanish</option>
            <option>Siswati</option>
            <option>Zulu</option>
            <option>Portuguese</option>
          </select>

        </div>

      </div>

      {/* Translation Boxes */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Input */}

        <div className="bg-white/5 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-2xl font-bold">
              Input
            </h3>

            <span className="text-cyan-400">
              {fromLanguage}
            </span>

          </div>

          <textarea
            placeholder="Type text to translate..."
            className="w-full h-56 bg-black/20 rounded-2xl p-5 border border-white/10 outline-none resize-none"
          ></textarea>

        </div>

        {/* Output */}

        <div className="bg-white/5 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-4">

            <h3 className="text-2xl font-bold">
              Output
            </h3>

            <span className="text-cyan-400">
              {toLanguage}
            </span>

          </div>

          <div className="w-full h-56 bg-black/20 rounded-2xl p-5 border border-white/10">
            <p className="text-gray-500">
              Translation output will appear here...
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Buttons */}

      <div className="flex flex-wrap gap-4 mt-8">

        <button className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300">
          Translate
        </button>

        <button className="px-8 py-4 bg-white/10 rounded-2xl hover:bg-white/20 transition duration-300">
          Voice Input
        </button>

        <button className="px-8 py-4 bg-white/10 rounded-2xl hover:bg-white/20 transition duration-300">
          Speak Translation
        </button>

      </div>

    </div>
  );
}