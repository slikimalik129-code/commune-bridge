export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Emergency Center
          </h1>

          <p className="text-xl text-red-100">
            Smart emergency response and SOS assistance.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Emergency SOS
            </h2>

            <button className="w-full h-48 rounded-full bg-red-600 text-4xl font-extrabold hover:scale-105 transition">
              SOS
            </button>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Nearby Services
            </h2>

            <div className="space-y-4">

              <div className="bg-zinc-800 p-4 rounded-2xl">
                🚑 Mbabane Hospital
              </div>

              <div className="bg-zinc-800 p-4 rounded-2xl">
                🚓 Police Station
              </div>

              <div className="bg-zinc-800 p-4 rounded-2xl">
                🚒 Fire Department
              </div>

            </div>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">

            <div className="h-full min-h-[400px] bg-zinc-800 flex items-center justify-center text-4xl">
              🗺 Emergency Map
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}