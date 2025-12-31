"use client";

import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogDetailClient = ({ post }) => {
  return (
    <div className="relative bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative max-w-5xl">
        <motion.section
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl shadow-black/10"
        >
          <div className="flex flex-wrap gap-3 items-center text-sm text-white/70 mb-4">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" aria-hidden />
            <span>{post.readingTime} read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-white text-base font-semibold">
                {post.author?.name || "Guest Author"}
              </p>
              <p className="text-white/70 text-sm">
                {post.author?.title
                  ? `${post.author.title} at ${post.author.org}`
                  : "Contributing writer"}
              </p>
              {post.author?.location && (
                <p className="text-white/60 text-xs">{post.author.location}</p>
              )}
            </div>
            {post.author?.bio && (
              <p className="text-white/70 text-sm max-w-xl leading-relaxed">
                {post.author.bio}
              </p>
            )}
          </div>

          {post.author && (
            <div className="flex flex-wrap gap-3 mb-6">
              {post.author.email && (
                <a
                  className="text-xs px-3 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                  href={`mailto:${post.author.email}`}
                >
                  Email
                </a>
              )}
              {post.author.phone && (
                <a
                  className="text-xs px-3 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                  href={`tel:${post.author.phone}`}
                >
                  Call
                </a>
              )}
              {post.author.linkedin && (
                <a
                  className="text-xs px-3 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {post.author.twitter && (
                <a
                  className="text-xs px-3 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                  href={post.author.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              )}
              {post.author.website && (
                <a
                  className="text-xs px-3 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 transition-colors"
                  href={post.author.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              )}
            </div>
          )}

          <p className="text-white/80 leading-relaxed mb-6">{post.intro}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.section>

        <div className="mt-8 space-y-6">
          {post.sections.map((section, idx) => (
            <motion.section
              key={section.title}
              variants={fadeIn("up", 0.12 + idx * 0.05)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h2 className="text-xl text-white font-semibold mb-2">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-white/80 leading-relaxed mb-3">
                  {section.description}
                </p>
              )}

              {section.paragraphs &&
                section.paragraphs.map((para) => (
                  <p
                    key={para}
                    className="text-white/80 leading-relaxed text-sm mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))}

              {section.bullets && (
                <ul className="space-y-2 text-white/80 text-sm leading-relaxed list-disc list-inside mt-2">
                  {section.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        <motion.section
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6"
        >
          <h3 className="text-lg font-semibold text-accent mb-3">
            Key takeaways
          </h3>
          <ul className="space-y-2 text-white/90 text-sm leading-relaxed list-disc list-inside">
            {post.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
          >
            <span aria-hidden>-&gt;</span>
            Back to all blogs
          </Link>
          <span className="text-white/60 text-xs">Updated {post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailClient;
