"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { popularRoutes } from "@/data/packages";

export default function PopularRoutes() {
  return (
    <section id="rute" className="py-16 sm:py-20 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Pilih Rute Favoritmu
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Rute Populer
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Jelajahi destinasi terbaik di lereng Merapi dengan berbagai pilihan
            rute menarik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-stone-900 mb-1">
                  {route.name}
                </h3>
                <p className="text-sm text-stone-500 mb-3">
                  {route.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary-light px-3 py-1 rounded-full">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {route.duration}
                  </span>
                  <span className="text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
                    Selengkapnya →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
