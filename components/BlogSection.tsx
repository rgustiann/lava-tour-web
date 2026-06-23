"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/packages";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Artikel &amp; Tips
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Blog &amp; Artikel
          </h2>
          <p className="mt-3 text-stone-500 max-w-lg mx-auto">
            Dapatkan inspirasi dan informasi menarik seputar wisata Merapi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-stone-400 mb-2">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span>{post.author}</span>
                </div>
                <h3 className="font-bold text-stone-900 mb-1.5 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
