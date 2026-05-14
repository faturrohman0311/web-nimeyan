import { Flame, Heart, Lock, Swords } from "lucide-react";

const achievements = [
  {
    title: "Maraton Malam",
    desc: "Nonton 12 episode beruntun",
    icon: Flame,
    color: "text-orange-400",
  },
  {
    title: "Ahli Shonen",
    desc: "Selesaikan 50 anime shonen",
    icon: Swords,
    color: "text-cyan-400",
  },
  {
    title: "Pecinta Waifu",
    desc: "Tambahkan 100 favorit",
    icon: Heart,
    color: "text-pink-400",
  },
  {
    title: "Kritikus Elit",
    desc: "Tulis 50 review",
    icon: Lock,
    locked: true,
  },
];

export default function AchievementSection() {
  return (
    <section
      className="
        rounded-3xl
        border border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-6
      "
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black">Achievement</h2>

          <p className="text-zinc-400 mt-1">
            Progress dan pencapaian akun kamu
          </p>
        </div>

        <button className="text-purple-400 text-sm hover:text-purple-300">
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                rounded-2xl
                border border-white/5
                bg-black/30
                p-5
                hover:border-purple-500/30
                transition
              "
            >
              <div
                className="
                  w-16 h-16 rounded-2xl
                  bg-white/5
                  flex items-center justify-center
                  mb-4
                "
              >
                <Icon
                  className={item.locked ? "text-zinc-600" : item.color}
                  size={28}
                />
              </div>

              <h3 className="font-bold">{item.title}</h3>

              <p className="text-sm text-zinc-500 mt-2">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
