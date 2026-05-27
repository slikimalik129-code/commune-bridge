export default function AnalyticsPanel() {

  const analytics = [
    {
      title: "AI Accuracy",
      value: "98%",
      width: "98%",
    },
    {
      title: "Speech Recognition",
      value: "94%",
      width: "94%",
    },
    {
      title: "Translation Speed",
      value: "0.2s",
      width: "90%",
    },
    {
      title: "Accessibility Optimization",
      value: "99%",
      width: "99%",
    },
  ];

  return (
    <div className="glass rounded-3xl p-8 mt-12">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <h2 className="text-4xl font-black text-cyan-400">
            AI Analytics Dashboard
          </h2>

          <p className="text-gray-400 mt-2">
            Real-time neural system monitoring and performance metrics
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

          <span>Systems Stable</span>

        </div>

      </div>

      {/* Analytics Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {analytics.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl p-6 border border-white/10"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <span className="text-cyan-400 font-black text-2xl">
                {item.value}
              </span>

            </div>

            <div className="w-full bg-black/30 rounded-full h-5 overflow-hidden">

              <div
                className="bg-cyan-400 h-full rounded-full transition-all duration-1000"
                style={{ width: item.width }}
              ></div>

            </div>

          </div>
        ))}

      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Active AI Sessions
          </p>

          <h3 className="text-5xl font-black text-cyan-400">
            12K
          </h3>

        </div>

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Daily Translations
          </p>

          <h3 className="text-5xl font-black text-cyan-400">
            1.8M
          </h3>

        </div>

        <div className="bg-white/5 rounded-2xl p-6">

          <p className="text-gray-400 mb-2">
            Accessibility Requests
          </p>

          <h3 className="text-5xl font-black text-cyan-400">
            850K
          </h3>

        </div>

      </div>

    </div>
  );
}