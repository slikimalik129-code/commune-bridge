"use client";

import {
  Car,
  ShoppingBag,
  UtensilsCrossed,
  ShieldAlert,
} from "lucide-react";

const services = [
  {
    title: "Ride Requests",
    description: "Accessible transportation assistance.",
    icon: Car,
  },
  {
    title: "Food Delivery",
    description: "Order meals with accessibility support.",
    icon: UtensilsCrossed,
  },
  {
    title: "Shopping",
    description: "Inclusive online shopping experience.",
    icon: ShoppingBag,
  },
  {
    title: "Emergency Help",
    description: "Fast emergency communication tools.",
    icon: ShieldAlert,
  },
];

export default function QuickServices() {

  return (

    <section className="mb-14">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-4xl font-black">
          Quick Services
        </h2>

        <p className="text-gray-400">
          Accessibility-first ecosystem
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (

            <div
              key={index}
className="glow-card rounded-3xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">

                <Icon className="text-cyan-400" size={28} />

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.description}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}