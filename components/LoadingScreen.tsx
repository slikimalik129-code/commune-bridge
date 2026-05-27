"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Loader */}

      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}

        <div
          className="absolute w-64 h-64 border-4 border-cyan-400/20 rounded-full animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>

        {/* Middle Ring */}

        <div
          className="absolute w-48 h-48 border-4 border-cyan-400/40 rounded-full animate-spin"
          style={{
            animationDuration: "6s",
            animationDirection: "reverse",
          }}
        ></div>

        {/* Core */}

        <div className="w-24 h-24 bg-cyan-400 rounded-full animate-pulse"></div>

      </div>

      {/* Text */}

      <div className="mt-20 text-center relative z-10">

        <h1 className="text-5xl font-black text-cyan-400 mb-4">
          COMMUNE BRIDGE
        </h1>

        <p className="text-gray-400 text-lg">
          Initializing Neural Accessibility Systems...
        </p>

      </div>

    </div>
  );
}