"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.webp"
          alt="Jeep Lava Tour Merapi hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="inline-block rounded-full bg-accent/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-accent mb-6">
            #PetualanganTakTerlupakan
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Jeep Lava Tour
            <br />
            <span className="text-accent">Merapi</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-200 leading-relaxed mb-10">
            Jelajahi keindahan dan kegagahan Gunung Merapi dengan Jeep wisata
            kami. Nikmati pengalaman petualangan yang aman, nyaman, dan tak
            terlupakan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#paket"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40 transition-all"
            >
              Lihat Paket Tour
            </a>
            <a
              href="#galeri"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all"
            >
              Lihat Galeri
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
