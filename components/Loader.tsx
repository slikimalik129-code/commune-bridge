"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[9999]">

      <div className="text-center">

        <div className="w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />

        <h1 className="mt-10 text-5xl font-black text-cyan-400">
          COMMUNE Bridge
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Initializing Future Communication Systems...
        </p>

      </div>

    </div>
  );
}