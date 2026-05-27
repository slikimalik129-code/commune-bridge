export default function ActivityFeed() {
  const activities = [
    "AI Translation request completed",
    "Voice recognition initialized",
    "Accessibility systems synced",
    "Neural communication bridge active",
    "School collaboration environment enabled",
  ];

  return (
    <div className="glass rounded-3xl p-8 mt-12">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-black text-cyan-400">
          Live Activity Feed
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <span>Realtime</span>
        </div>

      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:bg-white/10 transition duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>

              <p>{activity}</p>

            </div>

            <span className="text-gray-400 text-sm">
              Live
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}