import { Play } from "lucide-react";

interface Props {
  title: string;
  image: string;
  episode: string;
  remaining: string;
  progress: number;
}

export default function ContinueCard({
  title,
  image,
  episode,
  remaining,
  progress,
}: Props) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        hover:border-purple-500/40
        transition-all duration-300
      "
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

        {/* Play Button */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <button
            className="
              w-16 h-16 rounded-full
              bg-purple-600/90
              backdrop-blur-xl
              flex items-center justify-center
              hover:scale-110 transition
            "
          >
            <Play className="fill-white ml-1" />
          </button>
        </div>

        {/* Episode Badge */}
        <div
          className="
            absolute top-4 left-4
            bg-black/70 backdrop-blur-xl
            border border-white/10
            px-3 py-1 rounded-full
            text-xs font-medium
          "
        >
          {episode}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg line-clamp-1">{title}</h3>

            <p className="text-zinc-400 text-sm mt-1">
              Sisa waktu: {remaining}
            </p>
          </div>

          <button
            className="
              px-3 py-2 rounded-xl
              bg-white/5 hover:bg-purple-500/20
              border border-white/10
              transition
            "
          >
            ▶
          </button>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="
                h-full rounded-full
                bg-gradient-to-r from-purple-500 to-cyan-400
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-zinc-500">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
