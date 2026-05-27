"use client";

const features = [
  {
    title: "Speech To Text",
    description:
      "Convert spoken communication into readable text instantly.",
  },
  {
    title: "Text To Speech",
    description:
      "Transform written messages into realistic voice output.",
  },
  {
    title: "Blind Accessibility",
    description:
      "Voice navigation and screen-reader optimized experience.",
  },
  {
    title: "AI Translation",
    description:
      "Real-time multilingual communication assistance.",
  },
  {
    title: "School Mode",
    description:
      "Accessibility tools designed for classrooms and education.",
  },
  {
    title: "Sign Language AI",
    description:
      "Future-ready gesture and sign language recognition support.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">
          AI-Powered Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}