import { Bell, CalendarDays } from "lucide-react";

const schedules = [
  {
    time: "19:00",
    title: "Jujutsu Kaisen S3",
    episode: "Episode 14",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    time: "20:30",
    title: "Solo Leveling",
    episode: "Episode 8",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    time: "22:00",
    title: "Chainsaw Man",
    episode: "Episode 12",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ScheduleSection() {
  return (
    <section
      className="
        rounded-3xl border border-white/10
        bg-white/5 backdrop-blur-xl
        p-6 lg:p-8
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="
              w-12 h-12 rounded-2xl
              bg-purple-500/20
              flex items-center justify-center
            "
          >
            <CalendarDays className="text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-black">Jadwal Rilis</h2>

            <p className="text-zinc-400 text-sm">Anime terbaru hari ini</p>
          </div>
        </div>

        <div
          className="
            px-4 py-2 rounded-xl
            bg-white/5 border border-white/10
            text-sm text-zinc-300
          "
        >
          Jumat
        </div>
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {schedules.map((anime, index) => (
          <div
            key={index}
            className="
              flex items-center gap-4
              rounded-2xl
              border border-white/5
              bg-black/20
              hover:bg-white/5
              hover:border-purple-500/30
              transition-all duration-300
              p-4
              group
            "
          >
            {/* Time */}
            <div
              className="
                min-w-[70px]
                text-purple-400
                font-bold
                text-sm
              "
            >
              {anime.time}
            </div>

            {/* Image */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden">
              <img
                src={anime.image}
                alt={anime.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition duration-500
                "
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className="
                  font-bold text-white
                  line-clamp-1
                "
              >
                {anime.title}
              </h3>

              <p className="text-sm text-zinc-400 mt-1">{anime.episode}</p>
            </div>

            {/* Button */}
            <button
              className="
                w-11 h-11 rounded-xl
                bg-white/5
                border border-white/10
                hover:border-purple-500/30
                hover:bg-purple-500/10
                flex items-center justify-center
                transition
              "
            >
              <Bell size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
