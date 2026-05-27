"use client";

import {
  Mic,
  Volume2,
  Languages,
  Eye,
  Hand,
} from "lucide-react";

const tools = [
  {
    title: "Voice Commands",
    icon: Mic,
    description: "Control the platform using speech.",
  },
  {
    title: "Text To Speech",
    icon: Volume2,
    description: "Read interface content aloud.",
  },
  {
    title: "Live Translation",
    icon: Languages,
    description: "Translate speech and text instantly.",
  },
  {
    title: "Vision Assistance",
    icon: Eye,
    description: "Enhanced accessibility for visually impaired users.",
  },
  {
    title: "Sign Language",
    icon: Hand,
    description: "Sign-language communication support.",
  },
];

export default function AccessibilityPanel() {

  return (

    <section className="mt-12">

      <h2 className="text-4xl font-black mb-8">
        Accessibility Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {tools.map((tool, index) => {

          const Icon = tool.icon;

          return (

            <div
              key={index}
className="glow-card rounded-3xl p-6 hover:border-cyan-400/40 transition duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">

                <Icon className="text-cyan-400" size={28} />

              </div>

              <h3 className="text-2xl font-bold mb-3">
                {tool.title}
              </h3>

              <p className="text-gray-400">
                {tool.description}
              </p>

            </div>

          );
        })}

      </div>

    </section>
  );
}