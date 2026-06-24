"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TourPackage } from "@/data/packages";

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: TourPackage | null;
  onBook: (pkg: TourPackage) => void;
}

export default function PackageDetailModal({
  isOpen,
  onClose,
  pkg,
  onBook,
}: PackageDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="detail-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              id="detail-modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-56 w-full shrink-0">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Tutup modal"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10 border border-white/10"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Badges on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {pkg.duration}
                  </span>
                  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xs rounded-full px-2 py-0.5 shadow-xs">
                    <span className="text-amber-500 text-xs">⭐</span>
                    <span className="text-xs font-semibold text-stone-800">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">{pkg.name}</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed text-sm">
                    {pkg.description}
                  </p>
                </div>

                {/* Rute Perjalanan */}
                <div className="border-t border-stone-100 pt-5">
                  <h4 className="font-semibold text-stone-950 text-sm mb-3">Rute Destinasi</h4>
                  <div className="relative border-l border-orange-200 pl-4 space-y-4 ml-2">
                    {pkg.route.split(" → ").map((stop, idx) => (
                      <div key={idx} className="relative text-sm">
                        <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 border border-white shadow-xs" />
                        <span className="text-stone-700 font-medium">{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fasilitas Include */}
                <div className="border-t border-stone-100 pt-5">
                  <h4 className="font-semibold text-stone-950 text-sm mb-3">Fasilitas Termasuk</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-stone-600">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-green-500 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="border-t border-stone-100 p-6 bg-stone-50 shrink-0 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400 block">Total Biaya</span>
                  <span className="text-xl font-bold text-primary">
                    Rp{pkg.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-sm font-semibold active:scale-95 transition-all"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => onBook(pkg)}
                    className="px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-hover text-sm font-semibold shadow-md shadow-primary/20 active:scale-95 transition-all"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
