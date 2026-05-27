export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="text-center">

        <div className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>

        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
          Commune Bridge
        </h1>

        <p className="text-gray-400 text-xl">
          Initializing Smart Community Systems...
        </p>

      </div>

    </main>
  );
}