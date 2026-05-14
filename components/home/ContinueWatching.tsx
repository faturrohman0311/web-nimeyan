import ContinueCard from "../cards/ContinueCard";

const continueWatchingData = [
  {
    title: "Ghost in the Shell",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    episode: "Episode 12",
    remaining: "5 Menit",
    progress: 80,
  },
  {
    title: "Cyberpunk Edgerunners",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    episode: "Episode 4",
    remaining: "12 Menit",
    progress: 45,
  },
  {
    title: "Akira Rebirth",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    episode: "Episode 7",
    remaining: "20 Menit",
    progress: 60,
  },
];

export default function ContinueWatching() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-black">Lanjut Nonton</h2>

          <p className="text-zinc-400 mt-1">
            Lanjutkan anime yang belum selesai kamu tonton.
          </p>
        </div>

        <button className="text-sm text-purple-400 hover:text-purple-300 transition">
          Lihat Semua
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {continueWatchingData.map((anime, index) => (
          <ContinueCard
            key={index}
            title={anime.title}
            image={anime.image}
            episode={anime.episode}
            remaining={anime.remaining}
            progress={anime.progress}
          />
        ))}
      </div>
    </section>
  );
}
