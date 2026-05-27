export default function SettingsPage() {
  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Settings
          </h1>

          <p className="text-xl text-gray-100">
            Personalize your Commune Bridge experience.
          </p>

        </div>

        <div className="space-y-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex justify-between items-center">

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Dark Mode
              </h2>

              <p className="text-gray-400">
                Optimized smart interface
              </p>
            </div>

            <div className="w-16 h-8 bg-cyan-500 rounded-full"></div>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex justify-between items-center">

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Accessibility AI
              </h2>

              <p className="text-gray-400">
                Smart communication assistance
              </p>
            </div>

            <div className="w-16 h-8 bg-cyan-500 rounded-full"></div>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex justify-between items-center">

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Location Services
              </h2>

              <p className="text-gray-400">
                Smart GPS navigation enabled
              </p>
            </div>

            <div className="w-16 h-8 bg-cyan-500 rounded-full"></div>

          </div>

        </div>

      </div>

    </main>
  );
}