"use client";

import {
  Eye,
  Mic,
  AlertTriangle,
  Type,
} from "lucide-react";

const actions = [
  {
    title: "High Contrast",
    description: "Improved visibility for visually impaired users.",
    icon: Eye,
  },
  {
    title: "Voice Navigation",
    description: "Navigate the platform using voice commands.",
    icon: Mic,
  },
  {
    title: "Emergency Mode",
    description: "Quick emergency communication and assistance.",
    icon: AlertTriangle,
  },
  {
    title: "Large Text Mode",
    description: "Increase text size for easier readability.",
    icon: Type,
  },
];

export default function AccessibilityQuickActions() {

  return (
    <section className="mt-12">

      <div className="mb-8">

        <h2 className="text-4xl font-black text-white mb-3">
          Accessibility Quick Actions
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl">
          Instant accessibility controls designed to make communication
          easier and more inclusive for all users.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action, index) => {

          const Icon = action.icon;

          return (

            <button
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left hover:border-cyan-400/40 hover:scale-[1.02] transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">

                <Icon className="w-8 h-8 text-cyan-400" />

              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {action.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {action.description}
              </p>

            </button>

          );
        })}

      </div>

    </section>
  );
}