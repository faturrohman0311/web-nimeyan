"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import GuestOnlyRoute from "@/components/auth/GuestOnlyRoute";

export default function LoginPage() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // User signed in successfully
      console.log("Signed in with Google!");
    } catch (error: any) {
      // Handle Errors here.
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <GuestOnlyRoute>
      <main className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop"
            alt="Anime Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Glow */}
          <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-purple-600/30 blur-[140px] rounded-full" />

          <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
            relative
            w-full max-w-md
            overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_0_60px_rgba(168,85,247,0.15)]
          "
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

            <div className="p-8 lg:p-10">
              {/* Logo */}
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="
                  relative
                  w-24 h-24
                  rounded-[28px]
                  bg-gradient-to-br
                  from-purple-500
                  via-fuchsia-500
                  to-cyan-400
                  flex items-center justify-center
                  shadow-[0_0_50px_rgba(168,85,247,0.45)]
                "
                >
                  <div className="absolute inset-[1px] rounded-[28px] bg-[#111111]" />

                  <div className="relative z-10">
                    <Play className="fill-white text-white ml-1" size={38} />
                  </div>
                </motion.div>

                {/* Brand */}
                <div className="mt-6">
                  <h1
                    className="
                    text-5xl
                    font-black
                    tracking-tight
                    bg-gradient-to-r
                    from-purple-300
                    via-fuchsia-200
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                  >
                    Nimeyan
                  </h1>

                  <div
                    className="
                    inline-flex items-center gap-2
                    mt-4
                    px-4 py-2
                    rounded-full
                    border border-purple-500/20
                    bg-purple-500/10
                    text-purple-300
                    text-sm
                  "
                  >
                    <Sparkles size={15} />
                    Streaming Anime Indonesia
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-3">
                  <h2 className="text-2xl font-bold">Selamat Datang Kembali</h2>

                  <p className="text-zinc-400 leading-relaxed text-sm lg:text-base max-w-sm">
                    Nikmati pengalaman streaming anime modern dengan kualitas
                    premium dan tampilan futuristik.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 space-y-4">
                {/* Google Login */}
                <motion.button
                  onClick={signInWithGoogle}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className="
                  group
                  relative
                  w-full h-14
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  text-black
                  font-semibold
                  flex items-center justify-center gap-3
                  transition-all duration-300
                "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-zinc-100 opacity-0 group-hover:opacity-100 transition" />

                  <div className="relative z-10 flex items-center gap-3">
                    <FcGoogle size={24} />

                    <span>Masuk dengan Google</span>
                  </div>
                </motion.button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="border-t border-white/10" />

                <span
                  className="
                  absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  bg-[#101010]
                  px-4
                  text-xs tracking-[0.3em]
                  text-zinc-500
                "
                >
                  NIMEYAN
                </span>
              </div>

              {/* Footer */}
              <div className="text-center">
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Dengan masuk, kamu menyetujui
                  <span className="text-purple-400 hover:text-purple-300 cursor-pointer transition">
                    {" "}
                    Syarat & Ketentuan
                  </span>{" "}
                  serta
                  <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition">
                    {" "}
                    Kebijakan Privasi
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </GuestOnlyRoute>
  );
}
