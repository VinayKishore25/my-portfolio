"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import { blogPosts } from "@/data";

const BlogsPage = () => {
  return (
    <div className="relative bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
            Writing, shipped
          </p>
          <h1 className="h2 mb-4">
            Latest <span className="text-accent">Blogs</span>
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Deep dives on the practices I use to build reliable products:
            competitive programming, Spring Boot APIs, full-stack delivery, and
            React Native that feels native.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              variants={fadeIn("up", 0.12 + idx * 0.05)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/15 via-transparent to-white/10" />
              <div className="relative p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between text-white/70 text-sm">
                  <span>{post.date}</span>
                  <span>{post.readingTime} read</span>
                </div>

                <h3 className="text-white text-xl font-semibold leading-snug">
                  {post.title}
                </h3>

                <p className="text-white/70 text-xs uppercase tracking-wide">
                  By {post.author?.name || "Guest Author"}
                </p>

                <p className="text-white/80 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-accent text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read the article
                    <span className="text-lg" aria-hidden>
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
