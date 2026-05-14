import AnimeSection from "@/components/home/AnimeSection";
import ContinueWatching from "@/components/home/ContinueWatching";
import GenreSection from "@/components/home/GenreSection";
import HeroSection from "@/components/home/HeroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection />

        <div className="container mx-auto px-4 lg:px-8 space-y-16 py-16">
          <ContinueWatching />

          <AnimeSection title="Anime Sedang Tayang" type="ongoing" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <ScheduleSection />
            </div>

            <div className="lg:col-span-4">
              <GenreSection />
            </div>
          </div>

          <AnimeSection title="Anime Tamat" type="completed" />
        </div>
      </main>

      <Footer />
    </>
  );
}
