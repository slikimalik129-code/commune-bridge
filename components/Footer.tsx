"use client";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          <div>
            <h2 className="text-4xl font-black text-cyan-400">
              COMMUNE Bridge
            </h2>

            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              Futuristic AI-powered communication and accessibility
              platform designed to bridge barriers for everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:p-10">

            <div>
              <h3 className="text-xl font-bold mb-4">
                Platform
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>AI Assistant</li>
                <li>Accessibility</li>
                <li>Translations</li>
                <li>School Mode</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Future Systems
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>Voice AI</li>
                <li>Sign Language AI</li>
                <li>Smart Learning</li>
                <li>Global Connectivity</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500">
          © 2026 COMMUNE Bridge. Future Communication Technology.
        </div>

      </div>
    </footer>
  );
}