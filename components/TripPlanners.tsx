"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Jeep dengan sopir berpengalaman",
  "Rute fleksibel sesuai keinginan",
  "Harga bersahabat & transparan",
  "Free dokumentasi & air mineral",
];

export default function TripPlanners() {
  return (
    <section id="perencanaan" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-stone-900 via-stone-800 to-secondary">
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
                  Rencanakan Petualanganmu
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Siap Untuk Petualangan?
                </h2>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Hubungi kami sekarang dan rencanakan perjalanan tak terlupakan
                  Anda bersama Jeep Lava Tour Merapi. Kami siap memberikan
                  pengalaman terbaik untuk Anda dan keluarga.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-stone-200 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-accent shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#paket"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  Lihat Paket Tour
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative w-full aspect-5/4 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/package/sunrise.jpg"
                    alt="Jeep Adventure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
