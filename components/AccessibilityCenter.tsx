export default function AccessibilityCenter() {
  return (
    <div className="glass rounded-3xl p-8 mt-12">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-3xl font-black text-cyan-400">
            Accessibility Command Center
          </h2>

          <p className="text-gray-400 mt-2">
            Advanced communication assistance systems
          </p>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

          <span>Online</span>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Speech to Text
          </h3>

          <p className="text-gray-300">
            Converts spoken language into readable text instantly.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Sign Language AI
          </h3>

          <p className="text-gray-300">
            AI-powered sign language recognition and interpretation.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Voice Assistant
          </h3>

          <p className="text-gray-300">
            Intelligent voice navigation for hands-free interaction.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Language Translation
          </h3>

          <p className="text-gray-300">
            Real-time multilingual communication support.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Classroom Sync
          </h3>

          <p className="text-gray-300">
            Accessibility tools optimized for educational environments.
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Neural Assistance
          </h3>

          <p className="text-gray-300">
            Future AI systems designed to improve communication speed.
          </p>

        </div>

      </div>

    </div>
  );
}