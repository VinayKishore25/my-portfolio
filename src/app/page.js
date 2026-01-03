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
  HiSignal,
  HiCodeBracket,
  HiCpuChip,
  HiGlobeAlt,
  HiLightBulb,
  HiClock,
  HiCheckBadge,
  HiArrowTrendingUp,
  HiCommandLine,
  HiMapPin,
  HiEnvelope,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import CountUp from "react-countup";

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
import { useRef } from "react";

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

  const impactStats = [
    {
      label: "Projects Delivered",
      value: 18,
      suffix: "+",
      icon: <HiRocketLaunch />,
    },
    {
      label: "Performance Boost",
      value: 32,
      suffix: "%",
      icon: <HiArrowTrendingUp />,
    },
    { label: "Automations Built", value: 26, suffix: "+", icon: <HiBolt /> },
    { label: "Happy Clients", value: 15, suffix: "+", icon: <HiCheckBadge /> },
  ];

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

  const signatureStack = [
    { name: "Next.js", category: "frontend" },
    { name: "React 19", category: "frontend" },
    { name: "TypeScript", category: "language" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Tailwind", category: "styling" },
    { name: "Framer Motion", category: "animation" },
    { name: "Three.js", category: "3d" },
    { name: "GSAP", category: "animation" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "devops" },
  ];

  const currentlyBuilding = [
    {
      title: "AI-Powered Portfolio Generator",
      description:
        "A tool that creates stunning portfolios using AI to analyze your work and generate personalized designs.",
      progress: 75,
      tags: ["Next.js", "OpenAI", "Tailwind"],
    },
    {
      title: "Real-time Collaboration Suite",
      description:
        "Building a Figma-like collaborative workspace for developers with live cursors and instant sync.",
      progress: 45,
      tags: ["WebSockets", "React", "PostgreSQL"],
    },
  ];

  const recentWins = [
    {
      text: "Reduced LCP by 38% with image strategy & code-splitting",
      icon: <HiSignal />,
    },
    {
      text: "Built an animated data viz dashboard with React + GSAP",
      icon: <HiCodeBracket />,
    },
    {
      text: "Automated CI checks and preview deployments for faster reviews",
      icon: <HiCommandLine />,
    },
    {
      text: "Implemented real-time notifications with WebSocket integration",
      icon: <HiGlobeAlt />,
    },
  ];

  const availability = [
    {
      icon: <HiEnvelope />,
      title: "Email",
      text: "vinaykishore2512@gmail.com",
    },
    {
      icon: <HiMapPin />,
      title: "Location",
      text: "Andhra Pradesh, India",
    },
    {
      icon: <HiClock />,
      title: "Response Time",
      text: "Replies within 24 hours",
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
            Problem Solver
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Dedicated to transforming innovative concepts into impactful digital
            solutions, with a strong emphasis on creativity and a continuous
            commitment to personal and professional growth in the ever-evolving
            tech landscape.
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
        className="relative bg-gradient-to-b from-primary via-primary/95 to-primary px-4 md:px-6 lg:px-10 py-16 overflow-hidden"
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
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Impact in <span className="text-accent">Numbers</span>
            </h3>
            <p className="text-white/60 max-w-xl mx-auto">
              Measurable results that showcase dedication to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative card-shine"
              >
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl hover:border-accent/50 transition-all duration-500 hover:transform hover:scale-105">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {statsInView ? (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                        />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-white/60 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pillars - Enhanced */}
      <section className="relative bg-primary/40 px-4 md:px-6 lg:px-10 py-20 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Services
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How I Can <span className="text-accent">Help You</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Specialized expertise to bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                  className={`relative h-full rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} backdrop-blur-sm p-8 shadow-xl transition-all duration-500 hover:border-accent/40 hover:shadow-accent/10 hover:shadow-2xl card-shine`}
                >
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <span className="text-accent text-3xl">{card.icon}</span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
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
      <section className="relative bg-primary px-4 md:px-6 lg:px-10 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Live Projects
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
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

      {/* Signature Stack - Enhanced Carousel */}
      <section className="bg-primary/40 px-4 md:px-6 lg:px-10 py-16">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Tech <span className="text-accent">Arsenal</span>
              </h3>
              <p className="text-white/60 text-sm">
                Technologies I work with daily
              </p>
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
            {/* Gradient overlays for seamless scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary/80 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 py-6 px-4 marquee-scroll hover:[animation-play-state:paused]">
              {[...signatureStack, ...signatureStack].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white/90 text-sm font-medium whitespace-nowrap hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Wins + Fun Facts */}
      <section className="bg-primary px-4 md:px-6 lg:px-10 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Wins */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-xl card-shine">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <HiRocketLaunch className="text-accent text-xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Recent Wins</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recentWins.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn("up", 0.3 + i * 0.1)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="group flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <span className="text-accent">{item.icon}</span>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Availability & Contact */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <HiSparkles className="text-accent text-xl" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Availability</h4>
                </div>

                <div className="space-y-4">
                  {availability.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                    >
                      <span className="text-accent text-xl">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-white font-semibold text-sm">
                          {item.title}
                        </span>
                        <span className="text-white/70 text-sm">
                          {item.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary/40 px-4 md:px-6 lg:px-10 py-20 overflow-hidden">
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
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
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
