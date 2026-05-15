"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
  Bookmark,
  Calendar,
  Clock3,
  Download,
  PlayCircle,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAnimeEpisodes } from "@/lib/api";
import Navbar from "@/components/layout/Navbar";
const anime = {
  title: "Sakamoto Days Part 2 Episode 10 Subtitle Indonesia",

  image:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",

  type: "TV",

  duration: "25 Menit",

  release: "10:48 PM",

  genres: ["Action", "Comedy", "Organized Crime", "Shounen"],

  streamingUrl: "https://example.com",

  episodes: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],

  downloads: [
    {
      quality: "360p",
      size: "40.9 MB",
    },
    {
      quality: "480p",
      size: "74.9 MB",
    },
    {
      quality: "720p",
      size: "136 MB",
    },
  ],
};

export default function AnimeDetailPage() {
  const params: { slug: string } = useParams();

  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!params.slug) return;

        const episodesData = await getAnimeEpisodes(params.slug);
        setData(episodesData?.data);

        console.log("Episodes Data:", episodesData?.data);
      } catch (error) {
        console.error("Error fetching anime episodes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return (
      <>
        {/* loading spinner */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen mt-16 bg-[#070707] text-white overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <img
            src={data?.poster}
            alt={data?.title}
            className="object-cover opacity-20 blur-sm"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-10">
          {/* Top */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Poster */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="lg:col-span-4"
            >
              <div
                className="
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={data?.poster}
                    alt={data?.title}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="lg:col-span-8"
            >
              <div
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6 lg:p-8
              "
              >
                {/* Badge */}
                <div
                  className="
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-purple-500/10
                  border border-purple-500/20
                  text-purple-300 text-sm
                "
                >
                  {data?.status}
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-6xl font-black leading-tight mt-6">
                  {data?.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <MetaItem icon={<Calendar size={16} />} label={data?.type} />

                  <MetaItem
                    icon={<Clock3 size={16} />}
                    label={data?.duration}
                  />

                  <MetaItem
                    icon={<PlayCircle size={16} />}
                    label={data?.aired}
                  />
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {data?.genreList.map((genre: any) => (
                    <div
                      key={genre?.genreId}
                      className="
                      px-4 py-2 rounded-full
                      bg-white/[0.04]
                      border border-white/10
                      text-sm
                    "
                    >
                      {genre?.title}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-10">
                  <Link
                    href={`/anime/watch/${data?.episodeList[0]?.episodeId}`}
                    className="
                    h-14 px-8 rounded-2xl
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-400
                    font-semibold
                    flex items-center gap-3
                    hover:scale-[1.02]
                    transition-all duration-300
                  "
                  >
                    <PlayCircle size={20} />
                    Tonton Sekarang
                  </Link>

                  <button
                    className="
                    h-14 px-6 rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    flex items-center gap-3
                    hover:bg-white/[0.07]
                    transition-all duration-300
                  "
                  >
                    <Bookmark size={18} />
                    Bookmark
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Episode List */}
          <section className="mt-10">
            <div
              className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6 lg:p-8
            "
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black">Daftar Episode</h2>

                  <p className="text-zinc-400 mt-2">
                    Streaming episode terbaru subtitle Indonesia
                  </p>
                </div>

                <div
                  className="
                  px-4 py-2 rounded-xl
                  bg-purple-500/10
                  border border-purple-500/20
                  text-purple-300 text-sm
                "
                >
                  {data?.episodeList.length} Episode
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data?.episodeList.map((episode: any) => (
                  <Link
                    key={episode?.eps}
                    href={`/anime/watch/${episode?.episodeId}`}
                    className="
                    h-14 rounded-2xl
                    border border-white/10
                    bg-black/30
                    hover:border-purple-500/40
                    hover:bg-purple-500/10
                    transition-all duration-300
                    flex items-center justify-center
                    font-semibold
                  "
                  >
                    Episode {episode?.eps}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Download */}
          {/* <section className="mt-10">
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6 lg:p-8
            "
          >
            <div className="mb-8">
              <h2 className="text-3xl font-black">Download Anime</h2>

              <p className="text-zinc-400 mt-2">
                Pilih kualitas video yang tersedia
              </p>
            </div>

            <div className="space-y-4">
              {anime.downloads.map((item) => (
                <div
                  key={item.quality}
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    border border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <div>
                    <h3 className="font-bold text-lg">{item.quality}</h3>

                    <p className="text-zinc-500 text-sm mt-1">{item.size}</p>
                  </div>

                  <button
                    className="
                      h-12 px-5 rounded-2xl
                      bg-purple-500/10
                      border border-purple-500/20
                      text-purple-300
                      flex items-center gap-3
                      hover:bg-purple-500/20
                      transition
                    "
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        </div>
      </main>
    </>
  );
}

function MetaItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      className="
        h-12 px-5 rounded-2xl
        bg-white/[0.04]
        border border-white/10
        flex items-center gap-3
        text-zinc-300
      "
    >
      {icon}

      <span>{label}</span>
    </div>
  );
}
