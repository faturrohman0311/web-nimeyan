const activities = [
  {
    title: "Neon Genesis Rebirth",
    episode: "Episode 12",
    time: "2 jam lalu",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RecentActivity() {
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
      <div className="mb-8">
        <h2 className="text-3xl font-black">Aktivitas Terkini</h2>

        <p className="text-zinc-400 mt-1">Riwayat anime yang baru ditonton</p>
      </div>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="
              flex items-center gap-4
              rounded-2xl
              border border-white/5
              bg-black/30
              p-4
            "
          >
            <img
              src={item.image}
              alt=""
              className="
                w-16 h-20 rounded-xl
                object-cover
              "
            />

            <div className="flex-1">
              <div className="text-cyan-400 text-xs uppercase tracking-widest">
                Menonton
              </div>

              <h3 className="font-bold mt-1">{item.title}</h3>

              <p className="text-zinc-500 text-sm mt-1">{item.episode}</p>
            </div>

            <div className="text-zinc-500 text-sm">{item.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
