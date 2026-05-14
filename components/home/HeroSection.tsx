export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <img
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">
            Trending #1
          </span>

          <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
            NEON GENESIS:
            <br />
            CYBER TOKYO
          </h1>

          <p className="text-zinc-300 mt-6 text-lg">
            Di kota futuristik Tokyo, teknologi dan manusia mulai kehilangan
            batasnya.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-semibold">
              Tonton Sekarang
            </button>

            <button className="border border-white/10 bg-white/5 px-8 py-4 rounded-xl">
              Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
