export default function Page() {
  return (
    <main className="min-h-screen p-8 text-white">
      <div className="mb-8">
        <h1 className="text-5xl font-black mb-3">
          PAGE NAME
        </h1>

        <p className="text-gray-400 text-lg">
          Commune Bridge accessibility platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Main Features
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Accessibility support</li>
            <li>• Voice interaction</li>
            <li>• AI assistance</li>
            <li>• Real-time communication</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            System Status
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Services</span>
              <span className="text-cyan-400">
                Active
              </span>
            </div>

            <div className="flex justify-between">
              <span>Accessibility</span>
              <span className="text-cyan-400">
                Enabled
              </span>
            </div>

            <div className="flex justify-between">
              <span>AI Assistant</span>
              <span className="text-cyan-400">
                Connected
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}