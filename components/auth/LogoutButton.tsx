"use client";

import { LogOut } from "lucide-react";

import { logout } from "@/lib/logout";

export default function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="
        w-full flex items-center justify-between
        px-4 py-4 rounded-2xl
        hover:bg-red-500/10
        text-red-400
        transition-all duration-300
      "
    >
      <div className="flex items-center gap-3">
        <LogOut size={18} />

        <span>Logout</span>
      </div>
    </button>
  );
}
