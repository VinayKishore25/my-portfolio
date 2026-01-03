"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiCodeBracket,
  HiRocketLaunch,
  HiChartBarSquare,
  HiSparkles,
  HiLightBulb,
  HiCpuChip,
  HiAcademicCap,
  HiMapPin,
  HiEnvelope,
  HiCheckBadge,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      label: "Hours Coded",
      value: "1,300+",
      color: "from-blue-500 to-cyan-500",
      icon: <HiCodeBracket className="w-5 h-5" />,
      description: "Dedicated coding time",
    },
    {
      label: "Projects Shipped",
      value: "42+",
      color: "from-accent to-orange-500",
      icon: <HiRocketLaunch className="w-5 h-5" />,
      description: "Production deployments",
    },
    {
      label: "LeetCode Solved",
      value: "246+",
      color: "from-green-500 to-emerald-500",
      icon: <HiChartBarSquare className="w-5 h-5" />,
      description: "Problem-solving mastery",
    },
  ];

  const skills = {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "Spring Boot", "REST APIs"],
    ai: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    tools: ["Git", "Docker", "MongoDB", "PostgreSQL"],
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <HiSparkles /> },
    { id: "expertise", label: "Expertise", icon: <HiCpuChip /> },
    { id: "journey", label: "Journey", icon: <HiLightBulb /> },
  ];

  const journey = [
    {
      year: "2026",
      title: "Graduation Year",
      description: "B.Tech in AI & ML from Aditya University",
      icon: <HiAcademicCap className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "VEDA Website",
      description: "Led development of event platform with 1000+ users",
      icon: <HiRocketLaunch className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Started Coding Journey",
      description: "Began exploring full-stack and AI development",
      icon: <HiCodeBracket className="w-5 h-5" />,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-white/80 text-base xl:text-lg leading-relaxed">
                I am an{" "}
                <span className="text-white font-semibold bg-accent/10 px-2 py-0.5 rounded">
                  Artificial Intelligence and Machine Learning Student
                </span>{" "}
                at Aditya University '26, bridging the gap between complex
                backend logic and intuitive frontend design.
              </p>

              <p className="text-white/70 text-sm xl:text-base leading-relaxed">
                My passion lies in{" "}
                <span className="text-accent font-semibold">
                  Artificial Intelligence
                </span>{" "}
                and{" "}
                <span className="text-accent font-semibold">
                  Full Stack Development
                </span>
                . Whether it's crushing LeetCode problems or deploying scalable
                applications, I build digital experiences that matter.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <HiAcademicCap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-medium">
                    Education
                  </div>
                  <div className="text-white text-sm font-semibold">
                    Aditya University '26
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <HiMapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-medium">
                    Location
                  </div>
                  <div className="text-white text-sm font-semibold">
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/contact">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 shadow-lg hover:shadow-accent/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiEnvelope className="w-4 h-4" />
                  <span>Get In Touch</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        );

      case "expertise":
        return (
          <motion.div
            key="expertise"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Skills Grid */}
            <div className="pt-4">
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                Tech Stack
              </h4>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <div className="text-white/50 text-xs font-semibold mb-2 uppercase">
                      {category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:bg-accent/20 hover:border-accent/30 hover:text-accent transition-all"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case "journey":
        return (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/25">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-accent/30 transition-all group">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="text-accent text-xs font-bold mb-1">
                            {item.year}
                          </div>
                          <h4 className="text-white font-bold text-base mb-2">
                            {item.title}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {item.description}
                          </p>
                        </div>
                        <HiCheckBadge className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/VinayKishore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.div>
                </a>

                <a
                  href="https://linkedin.com/in/vinaykishore2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.div>
                </a>

                <a
                  href="mailto:vinaykishore2512@gmail.com"
                  className="group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-accent/20 hover:border-accent/30 hover:text-accent transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiEnvelope className="w-5 h-5" />
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen flex items-center py-12 xl:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Giant Text Watermark */}
        <div className="absolute top-20 right-0 text-[200px] font-bold text-white/[0.02] leading-none select-none hidden xl:block">
          ABOUT
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Abstract Line Decor */}
        <div className="absolute left-0 top-1/2 w-24 h-1 bg-gradient-to-r from-accent to-transparent transform -translate-y-1/2 hidden xl:block" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center xl:items-start">
          {/* LEFT SIDE: IMAGE & STATS */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-5/12 max-w-lg xl:max-w-none"
          >
            {/* Image Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/IMG_4997.jpg"
                    alt="Vinay Kishore"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Name Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-accent font-bold text-lg">
                            VK
                          </span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            Vinay Kishore
                          </h3>
                          <p className="text-white/60 text-xs">
                            AI/ML Developer & Full Stack Engineer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats HUD */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md border-t border-white/10 p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className="relative group/stat cursor-pointer"
                          onMouseEnter={() => setHoveredStat(index)}
                          onMouseLeave={() => setHoveredStat(null)}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <div
                                className={`w-6 h-6 rounded-lg bg-gradient-to-br ${stat.color} p-1 text-white`}
                              >
                                {stat.icon}
                              </div>
                            </div>
                            <div className="text-white text-lg xl:text-xl font-bold font-mono">
                              {stat.value}
                            </div>
                            <div className="text-white/60 text-[10px] uppercase tracking-wider font-semibold">
                              {stat.label}
                            </div>
                          </div>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredStat === index && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg whitespace-nowrap"
                              >
                                <div className="text-white/80 text-xs">
                                  {stat.description}
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                  <div className="border-4 border-transparent border-t-black/90" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="w-full xl:w-7/12 flex flex-col"
          >
            {/* Header */}
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-4"
              >
                <HiSparkles className="w-4 h-4" />
                <span>ABOUT ME</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                Building the{" "}
                <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                with Code
              </h1>

              <div className="h-1 w-20 bg-gradient-to-r from-accent to-orange-500 rounded-full" />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl w-fit">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-white/60 hover:text-white/80"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 xl:p-8 min-h-[400px]">
              <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
