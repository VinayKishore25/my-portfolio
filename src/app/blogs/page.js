"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Link from "next/link";

const dummyBlogs = [
  {
    id: 1,
    title: "Sharpening Problem-Solving: My Daily Routine",
    excerpt:
      "A quick overview of the exercises, tools, and habits I use to stay sharp and creative.",
    date: "Dec 20, 2025",
    readingTime: "4 min",
    tags: ["Productivity", "Mindset"],
  },
  {
    id: 2,
    title: "Building a Modern Portfolio with Next.js 15",
    excerpt:
      "Lessons learned while migrating to the latest Next.js App Router and optimizing performance.",
    date: "Dec 15, 2025",
    readingTime: "6 min",
    tags: ["Next.js", "Performance"],
  },
  {
    id: 3,
    title: "Animating UI with Framer Motion",
    excerpt:
      "How I approach subtle, performant animations that make interfaces feel alive.",
    date: "Dec 10, 2025",
    readingTime: "5 min",
    tags: ["UX", "Framer Motion"],
  },
  {
    id: 4,
    title: "Tuning Tailwind for a Clean Design System",
    excerpt:
      "Tweaks and patterns I use in Tailwind to keep styles consistent and maintainable.",
    date: "Dec 03, 2025",
    readingTime: "7 min",
    tags: ["Tailwind", "Design"],
  },
  {
    id: 5,
    title: "Email Workflows in Next.js",
    excerpt:
      "Using server routes and Nodemailer to build reliable contact flows.",
    date: "Nov 28, 2025",
    readingTime: "3 min",
    tags: ["Next.js", "Backend"],
  },
];

const BlogsPage = () => {
  return (
    <div className="bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-10"
        >
          Latest <span className="text-accent">Blogs</span>
        </motion.h2>

        {/* Grid of blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyBlogs.map((post, idx) => (
            <motion.article
              key={post.id}
              variants={fadeIn("up", 0.2 + idx * 0.06)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white/10 border border-white/10 hover:border-accent/50 transition-colors rounded-xl p-6 backdrop-blur-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between text-white/70 text-sm">
                <span>{post.date}</span>
                <span>{post.readingTime} read</span>
              </div>
              <h3 className="text-white text-xl font-semibold">{post.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="#"
                  className="text-accent hover:opacity-80 transition-opacity text-sm"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
