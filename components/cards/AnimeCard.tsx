import Link from "next/link";

interface Props {
  title: string;
  image: string;
  genre: string;
  badge?: string;
  slug?: string;
}

export default function AnimeCard({ title, image, genre, badge, slug }: Props) {
  return (
    <Link
      href={`/anime/${slug}`}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        hover:border-purple-500/40
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover
            transition duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Badge */}
        {badge && (
          <div
            className="
              absolute top-4 left-4
              px-3 py-1 rounded-full
              text-xs font-semibold
              bg-purple-500/20
              border border-purple-500/30
              text-purple-300
              backdrop-blur-xl
            "
          >
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 w-full">
        <h3
          className="
            text-lg font-bold
            text-white
            line-clamp-1
          "
        >
          {title}
        </h3>

        <p className="text-sm text-zinc-400 mt-1">{genre}</p>
      </div>
    </Link>
  );
}
