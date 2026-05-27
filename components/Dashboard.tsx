"use client";

const dashboardItems = [
  {
    title: "AI Assistant",
    status: "ACTIVE",
  },
  {
    title: "Speech Recognition",
    status: "ONLINE",
  },
  {
    title: "Translations",
    status: "24 Languages",
  },
  {
    title: "School Mode",
    status: "ENABLED",
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">
          AI Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dashboardItems.map((item, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:scale-105 transition duration-300"
            >
              <div className="w-4 h-4 rounded-full bg-cyan-400 mb-6 animate-pulse" />

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-cyan-400 font-semibold">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}