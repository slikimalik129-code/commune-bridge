"use client";

export default function AppDownload() {

  return (

    <section className="mb-20">

      <div className="glow-card rounded-[40px] p-6 md:p-10 overflow-hidden relative">

        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <p className="text-cyan-400 font-bold mb-4">
            Mobile Ecosystem
          </p>

          <h2 className="text-5xl font-black mb-6 max-w-3xl">
            Access COMMUNE Anywhere
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mb-10">
            Download the COMMUNE mobile experience with accessibility-first
            navigation, emergency support, smart AI communication,
            and connected daily services.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="px-8 py-5 bg-cyan-400 text-black rounded-2xl font-black hover:scale-105 transition duration-300">

              Download Android

            </button>

            <button className="px-8 py-5 border border-white/10 rounded-2xl font-bold hover:border-cyan-400/40 transition">

              Download iOS

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}