import AnimeCard from "../cards/AnimeCard";

interface Props {
  title: string;
  animeData?: {
    title: string;
    poster: string;
    genre: string;
    badge: string;
    slug: string;
    href: string;
    animeId: string;
  }[];
}

const getAnimeSlug = (href: string) => {
  return href
    .replace("/anime/anime/", "")
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
};

export default function AnimeSection({ title, animeData }: Props) {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-black">{title}</h2>

          <p className="text-zinc-400 mt-1">
            Temukan anime terbaik pilihan hari ini.
          </p>
        </div>

        <button className="text-sm text-purple-400 hover:text-purple-300 transition">
          Lihat Semua
        </button>
      </div>

      {/* Anime Grid */}
      <div
        className="
          grid grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
        "
      >
        {animeData?.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            image={anime.poster}
            genre={anime.genre}
            badge={anime.badge}
            slug={anime.animeId}
          />
        ))}
      </div>
    </section>
  );
}
