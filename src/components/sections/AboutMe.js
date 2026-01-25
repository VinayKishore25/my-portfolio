"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiCodeBracket,
  HiRocketLaunch,
  HiChartBarSquare,
  HiSparkles,
  HiAcademicCap,
  HiMapPin,
  HiArrowRight,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const AboutMe = () => {
  const highlights = [
    {
      icon: <HiCodeBracket />,
      label: "4,055+ Hours Coded",
      color: "text-blue-400",
    },
    {
      icon: <HiRocketLaunch />,
      label: "12+ Projects Shipped",
      color: "text-accent",
    },
    {
      icon: <HiChartBarSquare />,
      label: "700+ DSA Problems",
      color: "text-green-400",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "TypeScript",
    "TensorFlow",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <HiSparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Turning Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Reality
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Image Container */}
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-3xl border border-white/5" />
              <div className="absolute -inset-8 rounded-3xl border border-white/[0.02]" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/IMG_4997.jpg"
                    alt="Vinay Kishore"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                        <span className="text-accent font-bold text-xl">
                          VK
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          Vinay Kishore
                        </h3>
                        <p className="text-white/60 text-sm">
                          Full Stack Developer & AI Enthusiast
                        </p>
                      </div>
                    </div>

                    {/* Quick Info Pills */}
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs">
                        <HiAcademicCap className="w-3.5 h-3.5" />
                        Aditya University '26
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs">
                        <HiMapPin className="w-3.5 h-3.5" />
                        Andhra Pradesh, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-4 lg:-right-8 top-8 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:block"
              >
                <div className="space-y-3">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-white/80 text-sm font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                I'm an{" "}
                <span className="text-accent font-semibold">AI/ML Student</span>{" "}
                & Full Stack Developer passionate about building digital
                products that make a difference.
              </p>
              <p className="text-white/60 leading-relaxed">
                From crushing 700+ LeetCode problems to shipping production apps
                used by thousands, I love turning complex problems into elegant
                solutions. My focus is on creating scalable, user-centric
                applications using modern technologies.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-4">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Mobile Stats (visible on small screens) */}
            <div className="flex flex-wrap gap-4 sm:hidden">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-white/80 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
                >
                  Let's Connect
                  <HiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <div className="flex gap-3">
                <a
                  href="https://github.com/VinayKishore25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/vinaykishore2512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
