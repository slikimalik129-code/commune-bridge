"use client";

import {
  Car,
  ShoppingBag,
  UtensilsCrossed,
  ShieldAlert,
  Languages,
} from "lucide-react";

const services = [
  {
    title: "Ride Requests",
    description:
      "Accessible ride-booking system with future voice and hardware-button controls.",
    icon: Car,
  },
  {
    title: "Food Services",
    description:
      "Order meals easily through an accessibility-first food delivery interface.",
    icon: UtensilsCrossed,
  },
  {
    title: "Online Shopping",
    description:
      "Accessible marketplace experience with simplified AI-assisted navigation.",
    icon: ShoppingBag,
  },
  {
    title: "Emergency Assistance",
    description:
      "Quick emergency communication tools for differently abled individuals.",
    icon: ShieldAlert,
  },
  {
    title: "Live Translation",
    description:
      "AI-powered multilingual communication and accessibility translation systems.",
    icon: Languages,
  },
];

export default function ServiceHub() {

  return (
    <section className="mt-12">

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white mb-3">
          Accessibility Service Ecosystem
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl">
          COMMUNE Bridge combines accessibility, communication,
          transportation, shopping, food services, and AI assistance
          into one unified platform.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300 hover:scale-[1.02]"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">

                <Icon className="w-8 h-8 text-cyan-400" />

              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 px-5 py-3 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300">
                Explore
              </button>

            </div>

          );
        })}

      </div>

    </section>
  );
}