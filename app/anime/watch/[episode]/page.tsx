"use client";

import Link from "next/link";

import { ChevronLeft, ChevronRight, Download, Play } from "lucide-react";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getEpisodeDetail, getStreamingUrlByServerId } from "@/lib/api";

export default function WatchPage() {
  const params: { episode: string } = useParams();
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [defaultStreamingUrl, setDefaultStreamingUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const episodeData = await getEpisodeDetail(params.episode);
        setData(episodeData?.data);
        setDefaultStreamingUrl(episodeData?.data?.defaultStreamingUrl);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching episode detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.episode]);

  async function changeServer(serverId: string) {
    try {
      const serverData = await getStreamingUrlByServerId(serverId);

      if (serverData?.data?.url) {
        setDefaultStreamingUrl(serverData?.data?.url);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
      <main className="min-h-screen mt-18 bg-[#050505] text-white overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black" />

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Top */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Player */}
            <div className="flex-1">
              {/* Player */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-black
                shadow-[0_0_40px_rgba(168,85,247,0.12)]
              "
              >
                {/* Video */}
                <div className="relative aspect-video">
                  <iframe
                    src={defaultStreamingUrl}
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Info */}
              <div
                className="
                mt-6
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6 lg:p-8
              "
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                  <div>
                    <h1 className="text-3xl lg:text-5xl font-black leading-tight">
                      {data?.title}
                    </h1>

                    {/* Genre */}
                    <div className="flex flex-wrap gap-3 mt-6">
                      {data?.info.genreList.map((genre: any) => (
                        <div
                          key={genre?.genreId}
                          className="
                          px-4 py-2 rounded-full
                          bg-black/30
                          border border-white/10
                          text-sm text-zinc-300
                        "
                        >
                          {genre?.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3">
                    {data?.prevEpisode && (
                      <Link
                        href={data.prevEpisode?.episodeId}
                        className="
                        h-14 px-5 rounded-2xl
                        border border-white/10
                        bg-white/[0.04]
                        flex items-center gap-3
                        hover:bg-white/[0.08]
                        transition
                      "
                      >
                        <ChevronLeft size={18} />
                        Prev
                      </Link>
                    )}

                    {data?.nextEpisode && (
                      <Link
                        href={data.nextEpisode?.episodeId}
                        className="
                        h-14 px-5 rounded-2xl
                        bg-gradient-to-r
                        from-purple-500
                        to-cyan-400
                        flex items-center gap-3
                        font-semibold
                      "
                      >
                        Next
                        <ChevronRight size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Download */}
              <section
                className="
                mt-6
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6 lg:p-8
              "
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-black">Download Episode</h2>

                  <p className="text-zinc-400 mt-2">
                    Download anime dengan kualitas terbaik
                  </p>
                </div>

                <div className="space-y-4">
                  {data?.downloadUrl?.qualities?.map((item: any) => (
                    <div
                      key={item.title}
                      className="
                      rounded-2xl
                      border border-white/10
                      bg-black/20
                      p-5
                      flex flex-col gap-2
                    "
                    >
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>

                        <p className="text-zinc-500 text-sm mt-1">
                          {item.size}
                        </p>
                      </div>

                      <div className="flex-wrap flex gap-3 mt-3">
                        {item?.urls?.map((url: any) => (
                          <a
                            key={url.title}
                            href={url.url}
                            target="_blank"
                            rel="noopener noreferrer"
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
                            {url.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="w-full xl:w-[380px]">
              {/* Server */}
              <div
                className="
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6
              "
              >
                <h2 className="text-2xl font-black mb-6">Streaming Server</h2>

                <div className="space-y-5">
                  {data?.server?.qualities.map((quality: any) => (
                    <div key={quality.title}>
                      <div
                        className="
                        text-sm text-zinc-500
                        mb-3 uppercase
                        tracking-widest
                      "
                      >
                        {quality.title}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {quality.serverList.map((server: any) => (
                          <button
                            key={server.serverId}
                            onClick={() => changeServer(server.serverId)}
                            className="
                              h-11 px-4 rounded-2xl
                              bg-black/30
                              border border-white/10
                              hover:border-purple-500/40
                              hover:bg-purple-500/10
                              transition-all duration-300
                              text-sm
                            "
                          >
                            {server.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Episode List */}
              <div
                className="
                mt-6
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6
              "
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black">Episode</h2>

                  <div
                    className="
                    px-3 py-1 rounded-full
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-300 text-xs
                  "
                  >
                    {data?.info?.episodeList.length} EPS
                  </div>
                </div>

                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {data?.info?.episodeList.map((episode: any) => (
                    <Link
                      key={episode.episodeId}
                      href={`/anime/watch/${episode.episodeId}`}
                      className={`
                      h-14 rounded-2xl
                      flex items-center justify-between
                      px-5
                      transition-all duration-300
                      ${
                        episode?.episodeId === params.episode
                          ? `
                            bg-gradient-to-r
                            from-purple-500
                            to-cyan-400
                            text-white
                          `
                          : `
                            bg-black/20
                            border border-white/10
                            hover:border-purple-500/40
                            hover:bg-purple-500/10
                          `
                      }
                    `}
                    >
                      <div className="flex items-center gap-3">
                        <Play size={16} />
                        Episode {episode?.eps}
                      </div>

                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
