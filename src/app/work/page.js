"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiBriefcase,
  HiSparkles,
  HiCodeBracketSquare,
  HiArrowRight,
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";

const Work = () => {
  const sections = [
    {
      id: "experience",
      title: "Work Experience",
      description: "My professional journey, projects, and career milestones",
      icon: <HiBriefcase className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/work/experience",
      delay: 0.2,
    },
    {
      id: "interviews",
      title: "Interview Experiences",
      description: "Technical interviews, preparation, and learnings",
      icon: <HiSparkles className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      path: "/work/interviews",
      delay: 0.3,
    },
    {
      id: "freelance",
      title: "Freelance Projects",
      description: "Client projects and independent work",
      icon: <HiCodeBracketSquare className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      path: "/work/freelance",
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen bg-primary/30 py-12 xl:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 xl:mb-20">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <HiBriefcase className="w-4 h-4" />
              Work & Experience
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 xl:mb-6"
          >
            My{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-3xl mx-auto text-white/70 text-base xl:text-lg leading-relaxed"
          >
            Explore my professional experience, technical interviews, and
            freelance projects. Each section showcases different aspects of my
            career journey and expertise.
          </motion.p>
        </div>

        {/* Navigation Cards Grid */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8"
        >
          {sections.map((section) => (
            <Link key={section.id} href={section.path}>
              <motion.div
                variants={fadeIn("up", section.delay)}
                initial="hidden"
                animate="show"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 xl:p-10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  {/* Background gradient glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl"
                    style={{
                      background: `linear-gradient(135deg, var(--color-accent), transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} p-4 mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {section.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl xl:text-3xl font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <p className="text-white/70 text-base xl:text-lg mb-8 leading-relaxed">
                    {section.description}
                  </p>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-semibold text-lg">
                      Explore
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
