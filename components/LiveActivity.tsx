"use client";

const activities = [
  "Blind user requested AI navigation assistance.",
  "Emergency accessibility response activated.",
  "Sign language translation completed.",
  "Accessible ride matched successfully.",
  "Voice assistant started communication session.",
];

export default function LiveActivity() {

  return (

    <section className="mb-14">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-cyan-400 font-bold mb-2">
            Real-Time Platform Activity
          </p>

          <h2 className="text-4xl font-black">
            Live Accessibility Feed
          </h2>

        </div>

      </div>

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="glow-card rounded-3xl p-6 flex items-center gap-5 hover:translate-x-2 transition duration-300"
          >

            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>

            <p className="text-lg text-gray-300">
              {activity}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}