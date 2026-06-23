"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { tourPackages, TourPackage } from "@/data/packages";
import BookingModal from "@/components/BookingModal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.round(rating) ? "text-accent" : "text-stone-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-stone-500 ml-1">({rating})</span>
    </div>
  );
}

export default function TourPackages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  const openModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  return (
    <>
      <section id="paket" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Pilihan Paket Wisata
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Paket Tour
            </h2>
            <p className="mt-3 text-stone-500 max-w-lg mx-auto">
              Pilih paket yang sesuai dengan kebutuhan petualangan Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="relative overflow-hidden rounded-t-2xl aspect-3/2">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <span className="text-xs font-semibold text-stone-700">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-5">
                  <StarRating rating={pkg.rating} />
                  <h3 className="mt-1.5 font-bold text-lg text-stone-900">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pkg.includes.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                    {pkg.includes.length > 3 && (
                      <span className="text-xs bg-stone-100 text-stone-400 px-2 py-0.5 rounded-full">
                        +{pkg.includes.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex items-end justify-between">
                    <div>
                      <span className="text-xs text-stone-400">Mulai dari</span>
                      <p className="text-xl font-bold text-primary">
                        Rp{pkg.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <button
                      id={`book-pkg-${pkg.id}`}
                      onClick={() => openModal(pkg)}
                      className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover active:scale-95 transition-all"
                    >
                      Pesan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPackage={selectedPackage}
        key={selectedPackage?.id ?? "general"}
      />
    </>
  );
}
