"use client";

const notifications = [
  {
    title: "Emergency SOS Connected",
    description: "Accessibility emergency system is active.",
  },
  {
    title: "AI Translation Ready",
    description: "Sign and speech translation services online.",
  },
  {
    title: "Ride Service Available",
    description: "Nearby accessible transport detected.",
  },
];

export default function NotificationCenter() {

  return (

    <section className="mb-14">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-cyan-400 font-bold mb-2">
            Live Updates
          </p>

          <h2 className="text-4xl font-black">
            Notification Center
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="glow-card rounded-3xl p-6 hover:scale-[1.02] transition duration-300"
          >

            <div className="w-4 h-4 rounded-full bg-cyan-400 mb-5 animate-pulse"></div>

            <h3 className="text-2xl font-black mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}