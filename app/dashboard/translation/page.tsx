export default function TranslationPage() {
  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-cyan-600 to-indigo-700 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            AI Translation
          </h1>

          <p className="text-xl text-gray-100">
            Real-time multilingual communication.
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

          <textarea
            placeholder="Enter text to translate..."
            className="w-full h-52 bg-zinc-900 rounded-3xl p-6 text-xl outline-none mb-6"
          />

          <div className="flex gap-4 mb-8">

            <select className="bg-zinc-900 px-5 py-4 rounded-2xl">
              <option>English</option>
              <option>Siswati</option>
              <option>French</option>
            </select>

            <select className="bg-zinc-900 px-5 py-4 rounded-2xl">
              <option>Siswati</option>
              <option>English</option>
              <option>Spanish</option>
            </select>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-bold text-black text-lg mb-8">
            Translate
          </button>

          <div className="bg-zinc-900 rounded-3xl p-8 text-xl text-gray-300">
            Translation output will appear here...
          </div>

        </div>

      </div>

    </main>
  );
}