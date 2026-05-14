"use client";

import { Menu, Search, User } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "@/components/layout/MobileSidebar";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex items-center justify-between px-4 py-4">
              {/* Logo */}
              <div className="text-2xl font-bold">Nimeyan</div>

              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#">Beranda</a>
                <a href="#">Jadwal</a>
                <a href="#">Genre</a>
                <a href="#">Watchlist</a>
              </nav>

              {/* Desktop Right */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />

                  <input
                    placeholder="Cari anime..."
                    className="bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 outline-none w-64"
                  />
                </div>

                <Link href="/profile">
                  <User />
                </Link>
              </div>

              {/* Mobile */}
              <button onClick={() => setOpen(true)} className="lg:hidden">
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileSidebar open={open} setOpen={setOpen} />
    </>
  );
}
