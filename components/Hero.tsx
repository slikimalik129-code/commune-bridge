"use client";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700/20 blur-3xl rounded-full animate-pulse" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl md:text-8xl font-black leading-tight">
          Breaking
          <span className="text-cyan-400"> Communication </span>
          Barriers
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          AI-powered accessibility and communication platform
          for deaf, mute, blind, and multilingual communities.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300">
            Launch Demo
          </button>

          <button className="px-8 py-4 border border-cyan-400 rounded-2xl hover:bg-cyan-400/10 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}