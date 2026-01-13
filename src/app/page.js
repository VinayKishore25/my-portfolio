"use client";
//Importing React and other important libraries
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  HiBolt,
  HiRocketLaunch,
  HiWrenchScrewdriver,
  HiSparkles,
  HiMiniBriefcase,
  HiCpuChip,
  HiLightBulb,
  HiCheckBadge,
  HiArrowTrendingUp,
  HiEnvelope,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

//Importing Components
import ParticlesContainer from "@/components/features/ParticlesContainer";
import ResumeButtons from "@/components/ui/ResumeButtons";
import Avatar from "@/components/ui/Avatar";
import Bulb from "@/components/ui/Bulb";
import ScrollControls from "@/components/features/ScrollControls";
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
  }
);

//Home Page
const Home = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const [readBooksPage, setReadBooksPage] = useState(1);
  const [suggestedBooksPage, setSuggestedBooksPage] = useState(1);
  const booksPerPage = 8;

  const servicePillars = [
    {
      title: "Product Engineering",
      copy: "From idea to launch with frontend, backend, and DX focus. Building scalable solutions that users love.",
      icon: <HiMiniBriefcase />,
      gradient: "from-rose-500/20 to-orange-500/10",
    },
    {
      title: "Experience Design",
      copy: "UI/UX with motion, accessibility, and responsive polish. Creating delightful digital experiences.",
      icon: <HiSparkles />,
      gradient: "from-violet-500/20 to-purple-500/10",
    },
    {
      title: "Systems & Tooling",
      copy: "APIs, pipelines, and dev tooling that scale reliably. Infrastructure that just works.",
      icon: <HiWrenchScrewdriver />,
      gradient: "from-cyan-500/20 to-blue-500/10",
    },
  ];

  const achievements = [
    {
      title: "LeetCode Knight",
      subtitle: "660+ solved | Peak 1813",
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

  const currentlyBuilding = [
    {
      title: "Sign Language Converter",
      description:
        "Building an app that converts text to sign language gestures and vice versa, helping deaf and mute individuals communicate seamlessly with others.",
      progress: 65,
      tags: ["React Native", "TensorFlow", "Computer Vision"],
    },
    {
      title: "Connect App Separation",
      description:
        "Converting the Connect app into 3 individual applications - Blood Donation Service, Human Safety Service, and Ambulance Service for better focus and performance.",
      progress: 50,
      tags: ["React Native", "Firebase", "Microservices"],
    },
  ];

  return (
    <>
      <div className="bg-primary/60 h-screen relative pt-24 sm:pt-28">
        {/* Particles Background - Top Layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesContainer />
        </div>

        {/* Text */}
        <Bulb />
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            I&apos;m<span className="text-accent"> Vinay</span> <br />
            Software Developer
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Crafting elegant, scalable digital experiences through modern web
            technologies. I specialize in full-stack development, building
            production-ready applications that solve real-world problems. Driven
            by a passion for clean code, continuous learning, and creating
            technology that truly matters.
          </motion.p>
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
                  readBooksPage * booksPerPage
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
                        p + 1
                      )
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
                  suggestedBooksPage * booksPerPage
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
                        p + 1
                      )
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

      {/* Service Pillars - Enhanced */}
      <section className="relative bg-primary/40 px-4 md:px-6 lg:px-10 py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4 block">
              Services
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              How I Can <span className="text-accent">Help You</span>
            </h3>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
              Specialized expertise to bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {servicePillars.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeIn("up", 0.3 + index * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`relative h-full rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} backdrop-blur-sm p-6 md:p-8 shadow-xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/10 hover:shadow-2xl card-shine`}
                >
                  {/* Icon container */}
                  <div className="w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <span className="text-accent text-2xl md:text-3xl">
                      {card.icon}
                    </span>
                  </div>

                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">{card.copy}</p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Building Section */}
      <section className="relative bg-primary px-4 md:px-6 lg:px-10 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14"
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Live Projects
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
              What I&apos;m <span className="text-accent">Building</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Current projects I&apos;m actively working on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentlyBuilding.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn("up", 0.3 + index * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl hover:border-accent/30 transition-all duration-500 card-shine">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-accent font-bold text-lg">
                      {project.progress}%
                    </span>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent/70 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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

      {/* CTA Section */}
      <section className="relative bg-primary/40 px-4 md:px-6 lg:px-10 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Build Something{" "}
              <span className="text-accent">Amazing?</span>
            </h3>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Let&apos;s collaborate on your next project. Whether it&apos;s a
              stunning website, a powerful web app, or anything in between –
              I&apos;m here to help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-accent text-primary font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all text-center"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/15 text-white font-semibold bg-white/5 hover:bg-white/10 hover:border-accent/40 transition-all text-center"
              >
                View Work
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className="text-white/60 text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/VinayKishore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/20 transition-all"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/vinaykishore2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/20 transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:vinaykishore2512@gmail.com"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:bg-white/20 transition-all"
                >
                  <HiEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Existing Sections */}
      <TestimonialSlider />
      <ScrollControls />
    </>
  );
};

export default Home;
