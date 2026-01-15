"use client";

import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiClock, HiUser } from "react-icons/hi2";

const BlogDetailClient = ({ post, allPosts = [] }) => {
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousBlog = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="relative bg-primary min-h-screen pt-20 sm:pt-24 pb-12">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative max-w-3xl">
        {/* Back button */}
        <motion.div
          variants={fadeIn("down", 0.05)}
          initial="hidden"
          animate="show"
          className="mb-4"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-xs font-medium"
          >
            <HiArrowLeft size={14} />
            Back
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8"
        >
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <HiCalendar className="w-3 h-3" />
              {post.date}
            </div>
            <div className="w-0.5 h-0.5 rounded-full bg-white/30" />
            <div className="flex items-center gap-1">
              <HiClock className="w-3 h-3" />
              {post.readingTime} min
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author card */}
          {post.author && (
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <HiUser className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm">
                    {post.author.name}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {post.author.title}{" "}
                    {post.author.org && `• ${post.author.org}`}
                  </p>
                  {post.author.location && (
                    <p className="text-white/50 text-xs">
                      {post.author.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Author social links */}
              {post.author && (
                <div className="flex flex-wrap gap-1.5">
                  {post.author.email && (
                    <a
                      className="text-xs px-2 py-0.5 rounded border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all"
                      href={`mailto:${post.author.email}`}
                    >
                      Email
                    </a>
                  )}
                  {post.author.phone && (
                    <a
                      className="text-xs px-2 py-0.5 rounded border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all"
                      href={`tel:${post.author.phone}`}
                    >
                      Call
                    </a>
                  )}
                  {post.author.linkedin && (
                    <a
                      className="text-xs px-2 py-0.5 rounded border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all"
                      href={post.author.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}
                  {post.author.github && (
                    <a
                      className="text-xs px-2 py-0.5 rounded border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all"
                      href={post.author.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {post.author.website && (
                    <a
                      className="text-xs px-2 py-0.5 rounded border border-white/15 bg-white/5 text-white/80 hover:text-accent hover:border-accent/50 hover:bg-white/10 transition-all"
                      href={post.author.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Intro */}
          <p className="text-base text-white/90 leading-relaxed">
            {post.intro}
          </p>

          {/* Table of Contents */}
          {post.sections && post.sections.length > 0 && (
            <div className="mt-6 p-4 rounded-lg border border-white/10 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-white mb-3">
                In this article:
              </h3>
              <ul className="space-y-1">
                {post.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="text-xs text-white/70 hover:text-accent transition-colors"
                    >
                      {idx + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.section>

        {/* Content sections */}
        <div className="space-y-5">
          {post.sections.map((section, idx) => (
            <motion.section
              key={section.title}
              id={`section-${idx}`}
              variants={fadeIn("up", 0.12 + idx * 0.03)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 hover:border-white/20 transition-colors scroll-mt-20"
            >
              <h2 className="text-lg text-white font-bold mb-2">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-accent font-medium text-sm mb-3">
                  {section.description}
                </p>
              )}

              {section.paragraphs &&
                section.paragraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-white/80 leading-relaxed text-sm mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))}

              {section.bullets && (
                <ul className="space-y-2 text-white/80 text-sm leading-relaxed mt-3 ml-3">
                  {section.bullets.map((point, bIdx) => (
                    <li key={bIdx} className="flex gap-2">
                      <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        {/* Key takeaways */}
        {post.takeaways && (
          <motion.section
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-6 rounded-lg border border-accent/30 bg-accent/10 backdrop-blur-sm p-5"
          >
            <h3 className="text-lg text-white font-bold mb-3">
              Key <span className="text-accent">Takeaways</span>
            </h3>
            <ul className="space-y-2">
              {post.takeaways.map((takeaway, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-white/90 text-sm leading-relaxed"
                >
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Back to blogs CTA */}
        <motion.div
          variants={fadeIn("up", 0.85)}
          initial="hidden"
          animate="show"
          className="mt-8 text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30 hover:border-accent transition-all text-sm font-medium"
          >
            <HiArrowLeft size={14} />
            Back to blogs
          </Link>
        </motion.div>

        {/* Navigation to other blogs */}
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          animate="show"
          className="mt-10 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previousBlog ? (
              <Link
                href={`/blogs/${previousBlog.slug}`}
                className="group rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:border-accent/50 hover:bg-white/5 transition-all"
              >
                <p className="text-xs text-white/60 mb-1">← Previous</p>
                <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                  {previousBlog.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextBlog ? (
              <Link
                href={`/blogs/${nextBlog.slug}`}
                className="group rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:border-accent/50 hover:bg-white/5 transition-all text-right sm:text-left"
              >
                <p className="text-xs text-white/60 mb-1">Next →</p>
                <p className="text-sm font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                  {nextBlog.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailClient;
