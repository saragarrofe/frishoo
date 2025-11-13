import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Frishoo Trips",
  description: "An easy way to design your trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {/* Navbar fijo arriba */}
        <Navbar />

        {/* Contenido principal */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-[#111827] py-6">
          <div className="container mx-auto px-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Frishoo Trips
          </div>
        </footer>
      </body>
    </html>
  );
}
