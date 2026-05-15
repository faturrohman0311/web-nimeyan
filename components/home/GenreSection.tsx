"use client";
import { Sword, Flame, Ghost, Heart, Rocket, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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

import { getAllGenre } from "@/lib/api";

export default function GenreSection() {
  const [genresData, setGenresData]: any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const genreDatas = await getAllGenre();
      setGenresData(genreDatas?.data);
    };
    fetchData();
  }, []);

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
        {genresData?.genreList.map((genre: any, index: number) => {
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
