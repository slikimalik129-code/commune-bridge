"use client";

export default function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-400/30 rounded-full blur-3xl floating" />

      <div className="absolute top-[40%] right-20 w-52 h-52 bg-blue-500/30 rounded-full blur-3xl floating" />

      <div className="absolute bottom-10 left-[30%] w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl floating" />

      <div className="absolute bottom-20 right-[20%] w-44 h-44 bg-white/10 rounded-full blur-3xl floating" />

    </div>
  );
}