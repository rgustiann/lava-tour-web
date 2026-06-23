"use client";

import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { label: "Tentang Kami", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Hubungi Kami", href: "#" },
    { label: "Pusat Bantuan", href: "#" },
    { label: "Status", href: "#" },
  ],
  tour: [
    { label: "Paket Basic", href: "#" },
    { label: "Paket Medium", href: "#" },
    { label: "Paket Full Day", href: "#" },
    { label: "Sunrise Adventure", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="kontak" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 border-b border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚙</span>
                <span className="font-bold text-xl text-white">
                  Jeep Lava Tour
                </span>
              </div>
              <p className="text-stone-400 leading-relaxed max-w-md">
                Nikmati pengalaman wisata tak terlupakan menjelajahi keindahan
                Gunung Merapi dengan Jeep wisata kami. Aman, nyaman, dan penuh
                petualangan.
              </p>
              <div className="flex items-center gap-4 mt-6">
                {[
                  {
                    name: "Instagram",
                    href: "#",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    name: "Facebook",
                    href: "#",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    href: "#",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    ),
                  },
                  {
                    name: "TikTok",
                    href: "#",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.07-2.89-.54-4.06-1.42-.45-.34-.85-.73-1.21-1.16-.02 2.2-.01 4.4-.02 6.6 0 1.4-.27 2.84-.96 4.07-.8 1.44-2.17 2.6-3.79 3.13-1.63.53-3.48.45-5.06-.2-1.58-.66-2.91-1.97-3.6-3.57-.75-1.74-.75-3.8-.02-5.55.67-1.6 1.96-2.94 3.58-3.59.98-.39 2.04-.55 3.09-.48v4.07c-.77-.12-1.6.09-2.22.58-.69.54-1.07 1.43-1.02 2.31.05.97.7 1.87 1.63 2.14.93.27 1.99-.07 2.52-.86.37-.55.48-1.25.46-1.9.02-3.15.01-6.31.01-9.46v-.01z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-stone-800 border border-stone-800 relative group shadow-lg"
            >
              <iframe
                title="Lokasi Basecamp Jeep Lava Tour Merapi"
                src="https://maps.google.com/maps?q=-7.629222,110.471056&z=15&output=embed"
                className="w-full h-full border-0 grayscale invert contrast-110 opacity-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>

        <div className="py-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Bantuan
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Paket Tour
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.tour.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-stone-800 text-center">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Jeep Lava Tour Merapi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
