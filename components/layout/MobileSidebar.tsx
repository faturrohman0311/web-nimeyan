"use client";

import { Home, Calendar, Bookmark, Layers, X } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileSidebar({ open, setOpen }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/60 z-40 transition-opacity
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[280px]
          bg-[#181818] border-r border-white/10
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Nimeyan</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col px-4 gap-2">
          <SidebarItem icon={<Home />} label="Beranda" />
          <SidebarItem icon={<Calendar />} label="Jadwal" />
          <SidebarItem icon={<Layers />} label="Genre" />
          <SidebarItem icon={<Bookmark />} label="Watchlist" />
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}
