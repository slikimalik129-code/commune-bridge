"use client";

export default function Accessibility() {
  return (
    <section
      id="accessibility"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">
          Accessibility Center
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-10">

          <div className="glass rounded-3xl p-6 md:p-10 hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Blind Accessibility
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>• Voice Navigation</li>
              <li>• Audio Feedback</li>
              <li>• Screen Reader Support</li>
              <li>• Smart AI Guidance</li>
              <li>• Gesture Assistance</li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-6 md:p-10 hover:scale-105 transition duration-300">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Deaf & Mute Support
            </h3>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>• Real-Time Speech To Text</li>
              <li>• Instant AI Translation</li>
              <li>• Communication Shortcuts</li>
              <li>• Sign Language Integration</li>
              <li>• Classroom Accessibility</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}