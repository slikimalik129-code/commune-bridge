"use client";

import { useState } from "react";

export default function Assistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-cyan-400 text-black text-3xl font-bold shadow-2xl z-50 hover:scale-110 transition duration-300"
      >
        AI
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-28 right-6 w-[340px] glass rounded-3xl p-6 z-50">

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            COMMUNE AI
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to COMMUNE Bridge AI Assistant.
            Future communication systems are loading.
          </p>

          <div className="space-y-3">

            <button className="w-full py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300">
              Start Voice Assistant
            </button>

            <button className="w-full py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
              Translate Message
            </button>

            <button className="w-full py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400/10 transition duration-300">
              Accessibility Help
            </button>

          </div>
        </div>
      )}
    </>
  );
}