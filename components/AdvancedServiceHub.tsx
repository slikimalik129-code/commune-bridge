"use client";

import Link from "next/link";

const services = [
  {
    title: "Ride Requests",
    description: "Accessible transport and smart mobility.",
    href: "/dashboard/rides",
  },
  {
    title: "Food Ordering",
    description: "Accessible restaurant and delivery services.",
    href: "/dashboard/food",
  },
  {
    title: "Online Shopping",
    description: "Inclusive shopping ecosystem.",
    href: "/dashboard/shopping",
  },
  {
    title: "AI Communication",
    description: "Speech, sign language and translation AI.",
    href: "/dashboard/assistant",
  },
];

export default function AdvancedServiceHub() {

  return (

    <section className="mb-16">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-cyan-400 font-bold mb-2">
            Connected Ecosystem
          </p>

          <h2 className="text-5xl font-black">
            Smart Services
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {services.map((service, index) => (

          <Link
            key={index}
            href={service.href}
            className="group glow-card rounded-3xl p-8 hover:scale-105 transition duration-300 overflow-hidden relative"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-400/5"></div>

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">

                <div className="w-6 h-6 rounded-full bg-cyan-400 animate-pulse"></div>

              </div>

              <h3 className="text-3xl font-black mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );
}