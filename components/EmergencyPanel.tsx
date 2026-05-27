"use client";

export default function EmergencyPanel() {

  return (

    <section className="mb-16">

      <div className="rounded-[40px] border border-red-500/20 bg-red-500/10 p-6 md:p-10 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <p className="text-red-400 font-bold mb-4">
            Emergency Accessibility Support
          </p>

          <h2 className="text-5xl font-black mb-6">
            Need Immediate Help?
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mb-10">
            Quickly contact emergency services, accessibility rescue teams,
            caregivers, or AI-powered emergency assistance.
          </p>

          <div className="flex flex-wrap gap-5">

            <button className="px-6 md:px-10 py-5 bg-red-500 rounded-2xl font-black text-white hover:scale-105 transition duration-300">

              Trigger SOS

            </button>

            <button className="px-6 md:px-10 py-5 border border-white/10 rounded-2xl font-bold hover:border-red-400/40 transition">

              Contact Caregiver

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}