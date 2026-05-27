export default function HeroSection() {

  return (

    <section className="mb-14">

<div className="glow-card rounded-3xl p-8 md:p-12 transition duration-500">

        <p className="text-cyan-400 font-bold mb-4">
          Inclusive Technology Platform
        </p>

        <h1 className="text-5xl md:text-4xl md:text-6xl font-black leading-tight mb-6">
          COMMUNE Bridge
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
          A smart accessibility ecosystem connecting communication,
          transportation, shopping, food delivery, emergency assistance,
          and inclusive digital services for everyone.
        </p>

        <div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-cyan-400 text-black rounded-2xl font-bold hover:scale-105 transition duration-300 glow-button">
            Explore Services
          </button>

          <button className="px-8 py-4 border border-white/10 rounded-2xl hover:border-cyan-400/40 transition duration-300">
            Accessibility Demo
          </button>

        </div>

      </div>

    </section>
  );
}