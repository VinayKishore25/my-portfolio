"use client";
//Importing React and other important libraries
import dynamic from "next/dynamic";
import Link from "next/link";
import { HiArrowTrendingUp, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

//Importing Components
import ParticlesContainer from "@/components/features/ParticlesContainer";
import ResumeButtons from "@/components/ui/ResumeButtons";
import Avatar from "@/components/ui/Avatar";
import Bulb from "@/components/ui/Bulb";
//Importing Framer Motion
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import AboutMe from "@/components/sections/AboutMe";
import { booksRead, booksSuggested } from "@/data/books";
import { useRef, useState } from "react";

// Lazy load below-the-fold components
const TestimonialSlider = dynamic(
  () => import("@/components/sections/TestimonialSlider"),
  {
    loading: () => <div className="h-screen" />,
  },
);

//Home Page
const Home = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [readBooksPage, setReadBooksPage] = useState(1);
  const [suggestedBooksPage, setSuggestedBooksPage] = useState(1);
  const booksPerPage = 8;

  const achievements = [
    {
      title: "LeetCode Knight",
      subtitle: "700+ solved | Peak 1896",
      badge: "Knight",
    },
    {
      title: "Codeforces Specialist",
      subtitle: "Handle: vinaykishore2512",
      badge: "Specialist",
    },
    {
      title: "CodeChef 3-Star",
      subtitle: "Highest rating: 1643",
      badge: "3★",
    },
  ];

  return (
    <>
      <div className="bg-primary/60 min-h-screen relative pt-24 sm:pt-28 overflow-hidden">
        {/* Particles Background - Top Layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesContainer />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Text */}
        <Bulb />
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10 px-4">
          {/* Badge */}
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-accent">
              Vinay
            </span>
            <br />
            <span className="text-white/90">Software Developer</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 text-white/70 text-base md:text-lg leading-relaxed"
          >
            Crafting elegant, scalable digital experiences through modern web
            technologies. I specialize in full-stack development, building
            production-ready applications that solve real-world problems.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-wrap justify-center xl:justify-start gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-accent">
                700+
              </span>
              <span className="text-white/60 text-sm">
                LeetCode
                <br />
                Problems
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-accent">
                3+
              </span>
              <span className="text-white/60 text-sm">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-accent">
                12
              </span>
              <span className="text-white/60 text-sm">
                Projects
                <br />
                Delivered
              </span>
            </div>
          </motion.div>

          {/* Resume Buttons */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start"
          >
            <ResumeButtons />
          </motion.div>
        </div>

        {/* Image */}
        <div className="hidden lg:block w-full max-w-[480px] md:max-w-[520px] xl:max-w-[600px] h-full absolute right-4 sm:right-10 bottom-0 z-20">
          {/* Avatar Img Wrapper */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full max-w-full h-full"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
      <section id="about-me">
        <AboutMe />
      </section>

      {/* Animated Stats Section */}
      <section
        ref={statsRef}
        className="relative bg-gradient-to-b from-primary via-primary/95 to-primary px-4 md:px-6 lg:px-10 py-12 md:py-16 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              Books & <span className="text-accent">Learning</span>
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
              Continuous learning through reading and knowledge sharing
            </p>
          </motion.div>

          {/* Books I've Read */}
          <div className="mb-12">
            <motion.h4
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6"
            >
              📚 Books I've <span className="text-accent">Read</span>
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {booksRead
                .slice(
                  (readBooksPage - 1) * booksPerPage,
                  readBooksPage * booksPerPage,
                )
                .map((book, index) => (
                  <motion.div
                    key={book.id}
                    variants={fadeIn("up", 0.3 + index * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 md:p-4 shadow-lg hover:border-accent/50 transition-all duration-300 h-full hover:bg-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-sm md:text-base font-semibold text-white group-hover:text-accent transition-colors flex-1">
                          {book.title}
                        </h5>
                      </div>
                      <p className="text-xs md:text-sm text-white/70 mb-3">
                        {book.author}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">
                          {book.year}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-accent text-sm">★</span>
                          <span className="text-xs text-white/70">
                            {book.rating}/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
            {Math.ceil(booksRead.length / booksPerPage) > 1 && (
              <div className="flex items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={() => setReadBooksPage((p) => Math.max(1, p - 1))}
                  disabled={readBooksPage === 1}
                  className="px-3 md:px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
                >
                  ← Prev
                </button>
                <div className="flex items-center gap-1 md:gap-2">
                  {Array.from({
                    length: Math.ceil(booksRead.length / booksPerPage),
                  }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setReadBooksPage(i + 1)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg text-sm font-semibold transition-all ${
                        readBooksPage === i + 1
                          ? "bg-accent text-primary"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setReadBooksPage((p) =>
                      Math.min(
                        Math.ceil(booksRead.length / booksPerPage),
                        p + 1,
                      ),
                    )
                  }
                  disabled={
                    readBooksPage === Math.ceil(booksRead.length / booksPerPage)
                  }
                  className="px-3 md:px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          {/* Books I Suggest */}
          <div>
            <motion.h4
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6"
            >
              💡 Books I <span className="text-accent">Suggest</span>
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {booksSuggested
                .slice(
                  (suggestedBooksPage - 1) * booksPerPage,
                  suggestedBooksPage * booksPerPage,
                )
                .map((book, index) => (
                  <motion.div
                    key={book.id}
                    variants={fadeIn("up", 0.4 + index * 0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-3 md:p-4 shadow-lg hover:border-accent/50 transition-all duration-300 h-full hover:bg-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-sm md:text-base font-semibold text-white group-hover:text-accent transition-colors flex-1">
                          {book.title}
                        </h5>
                      </div>
                      <p className="text-xs md:text-sm text-white/70 mb-2">
                        {book.author}
                      </p>
                      <p className="text-xs text-white/60 mb-3 line-clamp-2">
                        {book.why}
                      </p>
                      <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">
                        {book.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
            {Math.ceil(booksSuggested.length / booksPerPage) > 1 && (
              <div className="flex items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
                <button
                  onClick={() =>
                    setSuggestedBooksPage((p) => Math.max(1, p - 1))
                  }
                  disabled={suggestedBooksPage === 1}
                  className="px-3 md:px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
                >
                  ← Prev
                </button>
                <div className="flex items-center gap-1 md:gap-2">
                  {Array.from({
                    length: Math.ceil(booksSuggested.length / booksPerPage),
                  }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setSuggestedBooksPage(i + 1)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg text-sm font-semibold transition-all ${
                        suggestedBooksPage === i + 1
                          ? "bg-accent text-primary"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setSuggestedBooksPage((p) =>
                      Math.min(
                        Math.ceil(booksSuggested.length / booksPerPage),
                        p + 1,
                      ),
                    )
                  }
                  disabled={
                    suggestedBooksPage ===
                    Math.ceil(booksSuggested.length / booksPerPage)
                  }
                  className="px-3 md:px-4 py-2 rounded-lg bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Competitive Achievements */}
      <section className="bg-primary px-4 md:px-6 lg:px-10 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Competitive <span className="text-accent">Achievements</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
              Highlights from coding contests and problem solving
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-stretch justify-center gap-0 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          >
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className={`flex-1 p-6 md:p-8 text-center ${
                  i !== achievements.length - 1
                    ? "border-b md:border-b-0 md:border-r border-white/10"
                    : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {item.badge}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm">{item.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Existing Sections */}
      <TestimonialSlider />

      {/* Footer Section */}
      <footer className="relative bg-gradient-to-b from-primary via-primary/95 to-black border-t border-white/10 px-4 md:px-6 lg:px-10 py-16 md:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                Amazing
              </span>
            </h3>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Have a project in mind? Let&apos;s collaborate and bring your
              ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent/80 text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all"
            >
              Start a Conversation
              <HiArrowTrendingUp size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg shadow-accent/20">
                  <span className="text-white font-bold text-xl">VK</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Vinay Kishore
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Full-stack developer passionate about building amazing digital
                experiences and solving complex problems.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/VinayKishore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/vinaykishore2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://twitter.com/vinaykishore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="mailto:vinaykishore2512@gmail.com"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all"
                >
                  <HiEnvelope size={18} />
                </a>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
                Navigation
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Me", path: "/about" },
                  { name: "My Skills", path: "/skills" },
                  { name: "Blog Posts", path: "/blogs" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex items-center gap-2 text-white/60 hover:text-accent transition-all group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Work & Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
                Work & Projects
              </h4>
              <div className="space-y-3">
                {[
                  { name: "Experience", path: "/work/experience" },
                  { name: "Interviews", path: "/work/interviews" },
                  { name: "Freelance", path: "/work/freelance" },
                  { name: "Coding Journey", path: "/coding-journey" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex items-center gap-2 text-white/60 hover:text-accent transition-all group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Get In Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
                Get In Touch
              </h4>
              <p className="text-white/60 text-sm mb-6">
                Ready to collaborate? Reach out and let&apos;s create something
                amazing together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-accent to-accent/80 text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all text-center justify-center text-sm"
              >
                <HiEnvelope size={16} />
                Contact Me
              </Link>
              <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <p className="text-white/40 text-xs mb-2">Email me at</p>
                <a
                  href="mailto:vinaykishore2512@gmail.com"
                  className="text-white/80 text-sm hover:text-accent transition-colors"
                >
                  vinaykishore2512@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-white/50 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Vinay Kishore. Crafted with ❤️ using
              Next.js
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/blogs"
                className="text-white/50 hover:text-accent text-sm transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/skills"
                className="text-white/50 hover:text-accent text-sm transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-white/50 hover:text-accent text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center hover:bg-accent/30 transition-all z-40 hidden lg:flex"
          >
            <HiArrowTrendingUp className="rotate-[-45deg]" size={20} />
          </motion.button>
        </div>
      </footer>
    </>
  );
};

export default Home;
