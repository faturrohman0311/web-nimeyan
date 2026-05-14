import ProfileSidebar from "@/components/profile/ProfileSidebar";
import AchievementSection from "@/components/profile/AchievementSection";
import RecentActivity from "@/components/profile/RecentActivity";
import ProtectedRoute from "@/auth/ProtectedRoute";
import Link from "next/link";
export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#070707] text-white overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black" />

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-10">
          {/* Back */}
          <Link
            href={"/"}
            className="mb-8 block text-zinc-400 hover:text-purple-400 transition"
          >
            ← Kembali
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="xl:col-span-4">
              <ProfileSidebar />
            </div>

            {/* Content */}
            <div className="xl:col-span-8 space-y-6">
              <AchievementSection />

              <RecentActivity />
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
