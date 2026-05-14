"use client";
import { Share2, Shield, Crown, User2 } from "lucide-react";
import LogoutButton from "../auth/LogoutButton";
import { useAuth } from "@/context/AuthContext";
export default function ProfileSidebar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-6
        "
      >
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40" />

            <img
              src={
                user?.photoURL
                  ? user?.photoURL
                  : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              }
              alt=""
              className="
                relative z-10
                w-32 h-32 rounded-full
                object-cover
                border-4 border-purple-500/30
              "
            />

            {/* Level */}
            <div
              className="
                absolute bottom-1 right-1
                z-20
                px-3 py-1 rounded-full
                bg-cyan-400
                text-black
                text-xs font-bold
              "
            >
              LVL 42
            </div>
          </div>

          {/* Info */}
          <div className="mt-6">
            <h1 className="text-3xl font-black">{user?.displayName}</h1>

            <p className="text-zinc-400 mt-1">{user?.email}</p>
          </div>

          {/* Buttons */}
          {/* <div className="grid grid-cols-2 gap-3 w-full mt-6">
            <button
              className="
                h-12 rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-cyan-400
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              Edit Profil
            </button>

            <button
              className="
                h-12 rounded-2xl
                border border-white/10
                bg-white/[0.03]
                flex items-center justify-center
                hover:bg-white/[0.06]
                transition
              "
            >
              <Share2 size={18} />
            </button>
          </div> */}
        </div>
      </div>

      {/* Stats */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-6
        "
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
          Statistik
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <StatCard title="Anime" value="342" />

          <StatCard title="Episode" value="1204" />

          <div
            className="
              col-span-2
              rounded-2xl
              bg-black/30
              border border-white/5
              p-4
            "
          >
            <div className="flex justify-between mb-3">
              <span className="text-zinc-400 text-sm">Waktu Menonton</span>

              <span className="text-cyan-400 font-bold">450 Jam</span>
            </div>

            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[75%] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-4
        "
      >
        <SidebarMenu icon={<User2 size={18} />} label="Akun Utama" />

        {/* <SidebarMenu icon={<Crown size={18} />} label="Premium" badge="AKTIF" /> */}

        <SidebarMenu icon={<Shield size={18} />} label="Privasi" />

        {/* <SidebarMenu icon={<LogOut size={18} />} label="Logout" danger /> */}
        <LogoutButton />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
        rounded-2xl
        bg-black/30
        border border-white/5
        p-5 text-center
      "
    >
      <div className="text-3xl font-black text-purple-300">{value}</div>

      <div className="text-zinc-500 text-sm mt-2">{title}</div>
    </div>
  );
}

function SidebarMenu({
  icon,
  label,
  badge,
  danger,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`
        w-full flex items-center justify-between
        px-4 py-4 rounded-2xl
        transition-all duration-300
        ${danger ? "hover:bg-red-500/10 text-red-400" : "hover:bg-white/5"}
      `}
    >
      <div className="flex items-center gap-3">
        {icon}

        <span>{label}</span>
      </div>

      {badge && (
        <div
          className="
            px-2 py-1 rounded-full
            bg-purple-500/20
            border border-purple-500/30
            text-purple-300
            text-xs
          "
        >
          {badge}
        </div>
      )}
    </button>
  );
}
