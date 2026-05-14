import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Nimeyan",
  description: "Anime Streaming Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#131313] text-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
