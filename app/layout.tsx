import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeep Lava Tour Merapi | Petualangan Tak Terlupakan",
  description:
    "Nikmati pengalaman wisata Jeep Lava Tour di lereng Gunung Merapi. Jelajahi lava bantal, bunker, dan pemandangan spektakuler dengan Jeep wisata kami.",
  keywords: [
    "Jeep Lava Tour",
    "Merapi",
    "Wisata Merapi",
    "Lava Tour Merapi",
    "Jeep Wisata",
    "Tour Merapi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
