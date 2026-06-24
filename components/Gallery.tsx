"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Mosaic layout: mix portrait and landscape for visual variety using CSS columns (masonry)
const galleryImages = [
  {
    id: 1,
    src: "/images/package/sunrise.jpg",
    alt: "Sunrise Lava Tour Merapi",
  },
  {
    id: 2,
    src: "/images/rute/kaliurang.webp",
    alt: "Kawasan Kaliurang Merapi",
  },
  {
    id: 3,
    src: "/images/rute/bunker.webp",
    alt: "Bunker Kaliadem Merapi",
  },
  {
    id: 4,
    src: "/images/package/fullday.jpg",
    alt: "Petualangan Jeep Long",
  },
  {
    id: 5,
    src: "/images/rute/museum-sisa-hartaku.webp",
    alt: "Museum Sisa Hartaku",
  },
  {
    id: 6,
    src: "/images/rute/kalikuning.webp",
    alt: "Tebing Kali Kuning",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-16 sm:py-20 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Abadikan Momen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Galeri Destinasi
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Lihat keindahan destinasi wisata Jeep Lava Tour Merapi dalam galeri
            foto kami.
          </p>
        </motion.div>

        {/* CSS columns masonry — avoids row-span grid issues */}
        <div className="columns-2 md:columns-3 gap-4 space-y-0">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer mb-4 break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={index % 3 === 0 ? 800 : 400}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
