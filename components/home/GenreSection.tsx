import { Sword, Flame, Ghost, Heart, Rocket, Sparkles } from "lucide-react";

const genres = [
  {
    title: "Action",
    icon: Sword,
  },
  {
    title: "Fantasy",
    icon: Sparkles,
  },
  {
    title: "Romance",
    icon: Heart,
  },
  {
    title: "Horror",
    icon: Ghost,
  },
  {
    title: "Sci-Fi",
    icon: Rocket,
  },
  {
    title: "Shounen",
    icon: Flame,
  },
];

export default function GenreSection() {
  return (
    <section
      className="
        rounded-3xl border border-white/10
        bg-white/5 backdrop-blur-xl
        p-6 lg:p-8
        h-full
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black">Eksplorasi Genre</h2>

        <p className="text-zinc-400 text-sm mt-1">
          Temukan anime berdasarkan genre favoritmu
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {genres.map((genre, index) => {
          const Icon = genre.icon;

          return (
            <button
              key={index}
              className="
                group rounded-2xl
                border border-white/10
                bg-black/20
                hover:bg-purple-500/10
                hover:border-purple-500/30
                transition-all duration-300
                p-5
                flex flex-col items-center justify-center
                text-center
                gap-3
              "
            >
              <div
                className="
                  w-14 h-14 rounded-2xl
                  bg-white/5
                  group-hover:bg-purple-500/20
                  flex items-center justify-center
                  transition
                "
              >
                <Icon
                  className="
                    text-zinc-300
                    group-hover:text-purple-400
                    transition
                  "
                />
              </div>

              <span
                className="
                  font-semibold text-sm
                  group-hover:text-purple-300
                  transition
                "
              >
                {genre.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
