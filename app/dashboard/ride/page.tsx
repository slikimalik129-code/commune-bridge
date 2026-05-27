export default function RidePage() {
  const drivers = [
    {
      name: "Sipho Dlamini",
      car: "Toyota Corolla",
      time: "3 mins away",
    },
    {
      name: "Musa Khumalo",
      car: "Honda Fit",
      time: "5 mins away",
    },
    {
      name: "Linda Maseko",
      car: "VW Polo",
      time: "7 mins away",
    },
  ];

  return (
    <main className="min-h-screen text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[40px] p-6 md:p-10 mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Ride Services
          </h1>

          <p className="text-xl text-gray-100">
            Smart transportation and GPS navigation.
          </p>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <div className="xl:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden">

            <div className="h-[500px] bg-zinc-900 flex items-center justify-center relative">

              <div className="absolute w-10 h-10 bg-cyan-500 rounded-full animate-ping"></div>

              <div className="absolute w-6 h-6 bg-cyan-400 rounded-full"></div>

              <span className="text-4xl z-10">
                🗺 Live GPS Tracking
              </span>

            </div>

          </div>

          <div className="space-y-6">

            {drivers.map((driver) => (
              <div
                key={driver.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
              >

                <h2 className="text-2xl font-bold mb-3">
                  {driver.name}
                </h2>

                <p className="text-gray-400 mb-2">
                  {driver.car}
                </p>

                <p className="text-cyan-400 mb-5">
                  {driver.time}
                </p>

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black py-3 rounded-2xl font-bold">
                  Request Ride
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}