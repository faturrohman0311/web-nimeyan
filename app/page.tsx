"use client";
import AnimeSection from "@/components/home/AnimeSection";
import ContinueWatching from "@/components/home/ContinueWatching";
import GenreSection from "@/components/home/GenreSection";
import HeroSection from "@/components/home/HeroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { getHome } from "@/lib/api";
export default function HomePage() {
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const homeData = await getHome();
      setData(homeData?.data);
      setLoading(false);
    };
    fetchData();
  }, []);

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

      <main className="min-h-screen">
        {/* <HeroSection /> */}

        <div className="container mx-auto px-4 lg:px-8 space-y-16 py-16 mt-16">
          {/* <ContinueWatching /> */}

          <AnimeSection
            title="Anime Sedang Tayang"
            animeData={data?.ongoing?.animeList}
          />

          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <ScheduleSection />
            </div>

            <div className="lg:col-span-4">
              <GenreSection />
            </div>
          </div> */}

          <AnimeSection
            title="Anime Tamat"
            animeData={data?.completed?.animeList}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
