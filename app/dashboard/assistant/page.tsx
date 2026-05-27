export default function AssistantPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            AI Assistant
          </h1>

          <p className="text-xl text-gray-200">
            Smart multilingual AI assistant for communication,
            accessibility, navigation and emergency support.
          </p>

        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 h-[500px] flex flex-col">

          <div className="flex-1 overflow-y-auto space-y-5">

            <div className="bg-zinc-800 p-5 rounded-2xl max-w-xl">
              Hello 👋 How can I help you today?
            </div>

            <div className="bg-cyan-500 text-black p-5 rounded-2xl max-w-xl ml-auto">
              Find nearby accessible transport.
            </div>

            <div className="bg-zinc-800 p-5 rounded-2xl max-w-xl">
              I found 5 nearby accessible rides within 3km.
            </div>

          </div>

          <div className="flex gap-4 mt-6">

            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 bg-zinc-800 rounded-2xl px-5 py-4 outline-none"
            />

            <button className="bg-cyan-500 px-8 rounded-2xl font-bold">
              Send
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}