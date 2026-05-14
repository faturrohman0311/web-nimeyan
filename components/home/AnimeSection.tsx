import AnimeCard from "../cards/AnimeCard";

interface Props {
  title: string;
  type: "ongoing" | "completed";
}

const ongoingAnime = [
  {
    title: "Jujutsu Kaisen",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    genre: "Action, Supernatural",
    badge: "Episode Baru",
  },
  {
    title: "Solo Leveling",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    genre: "Action, Fantasy",
    badge: "Trending",
  },
  {
    title: "Bleach TYBW",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    genre: "Adventure, Action",
    badge: "On Going",
  },
  {
    title: "Chainsaw Man",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
    genre: "Action, Horror",
    badge: "Popular",
  },
];

const completedAnime = [
  {
    title: "Attack on Titan",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1200&auto=format&fit=crop",
    genre: "Drama, Action",
    badge: "Tamat",
  },
  {
    title: "Death Note",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    genre: "Mystery, Thriller",
    badge: "Completed",
  },
  {
    title: "Fullmetal Alchemist",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    genre: "Adventure, Fantasy",
    badge: "Classic",
  },
  {
    title: "Tokyo Ghoul",
    image:
      "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=1200&auto=format&fit=crop",
    genre: "Dark Fantasy",
    badge: "Finished",
  },
];

export default function AnimeSection({ title, type }: Props) {
  const data = type === "ongoing" ? ongoingAnime : completedAnime;

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
        {data.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            image={anime.image}
            genre={anime.genre}
            badge={anime.badge}
          />
        ))}
      </div>
    </section>
  );
}
