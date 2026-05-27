export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Accessibility Hub
          </h1>

          <p className="text-xl text-gray-200">
            Communication and accessibility tools for all users.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

            <div className="text-4xl md:text-6xl mb-6">
              🧏
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Sign Language
            </h2>

            <p className="text-gray-400">
              AI-assisted sign language interpretation.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

            <div className="text-4xl md:text-6xl mb-6">
              🔊
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Voice Assistance
            </h2>

            <p className="text-gray-400">
              Real-time speech accessibility tools.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

            <div className="text-4xl md:text-6xl mb-6">
              👁
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Visual Support
            </h2>

            <p className="text-gray-400">
              Navigation and screen assistance systems.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}