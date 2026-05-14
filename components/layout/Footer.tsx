export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111]">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Nimeyan
            </h2>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Platform streaming anime Indonesia dengan pengalaman modern,
              cepat, dan immersive untuk para wibu Indonesia.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>

            <div className="flex flex-col gap-3 text-zinc-400">
              <a href="#" className="hover:text-purple-400 transition">
                Beranda
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Anime Trending
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Jadwal Rilis
              </a>

              <a href="#" className="hover:text-purple-400 transition">
                Genre
              </a>
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bantuan</h3>

            <div className="flex flex-col gap-3 text-zinc-400">
              <a href="#" className="hover:text-cyan-400 transition">
                Pusat Bantuan
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                FAQ
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Kebijakan Privasi
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Syarat & Ketentuan
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Komunitas</h3>

            <div className="flex gap-4">
              <SocialButton label="FB" />
              <SocialButton label="IG" />
              <SocialButton label="YT" />
              <SocialButton label="DC" />
            </div>

            <div className="mt-6">
              <p className="text-zinc-500 text-sm">
                Update anime terbaru setiap hari.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 Nimeyan. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>Indonesia</span>
            <span>•</span>
            <span>Anime Streaming Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <button
      className="
      w-11 h-11 rounded-xl
      bg-white/5 border border-white/10
      hover:border-purple-500
      hover:bg-purple-500/10
      transition
      flex items-center justify-center
      text-sm font-semibold
    "
    >
      {label}
    </button>
  );
}
