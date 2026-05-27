"use client";

import Link from "next/link";

export default function QuickActions() {

  return (

    <section className="mb-14">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-cyan-400 font-bold mb-2">
            Accessibility Shortcuts
          </p>

          <h2 className="text-4xl font-black">
            Quick Actions
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Link
          href="/dashboard/emergency"
          className="glow-card rounded-3xl p-8 hover:scale-105 transition duration-300"
        >

          <h3 className="text-2xl font-black mb-4">
            Emergency SOS
          </h3>

          <p className="text-gray-400">
            Instantly access emergency support systems.
          </p>

        </Link>

        <Link
          href="/dashboard/assistant"
          className="glow-card rounded-3xl p-8 hover:scale-105 transition duration-300"
        >

          <h3 className="text-2xl font-black mb-4">
            AI Assistant
          </h3>

          <p className="text-gray-400">
            Start voice and communication assistance.
          </p>

        </Link>

        <Link
          href="/dashboard/rides"
          className="glow-card rounded-3xl p-8 hover:scale-105 transition duration-300"
        >

          <h3 className="text-2xl font-black mb-4">
            Request Ride
          </h3>

          <p className="text-gray-400">
            Accessible transport and mobility support.
          </p>

        </Link>

        <Link
          href="/dashboard/accessibility"
          className="glow-card rounded-3xl p-8 hover:scale-105 transition duration-300"
        >

          <h3 className="text-2xl font-black mb-4">
            Accessibility
          </h3>

          <p className="text-gray-400">
            Customize accessibility experience.
          </p>

        </Link>

      </div>

    </section>

  );
}