"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiAdobexd,
  SiTensorflow,
  SiPytorch,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";

import SpiderChart from "../../../components/SpiderChart";
import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";
import { fadeIn } from "../../../variants";

// --- SKILL CATEGORIES DATA ---
const skillCategories = [
  {
    id: "web-dev",
    name: "Web Development",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-sky-400", hours: 600 },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
        hours: 450,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "text-green-500",
        hours: 500,
      },
      { name: "Express", icon: <SiExpress />, color: "text-white", hours: 400 },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
        hours: 350,
      },
      {
        name: "Three.js",
        icon: <TbBrandThreejs />,
        color: "text-gray-300",
        hours: 200,
      },
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-yellow-400",
        hours: 700,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-400",
        hours: 500,
      },
      {
        name: "Python",
        icon: <SiPython />,
        color: "text-blue-500",
        hours: 600,
      },
      { name: "Java", icon: <FaJava />, color: "text-red-500", hours: 400 },
      {
        name: "C++",
        icon: <SiCplusplus />,
        color: "text-blue-600",
        hours: 350,
      },
      { name: "Go", icon: <SiGo />, color: "text-cyan-400", hours: 250 },
    ],
  },
  {
    id: "data-ai",
    name: "Data & AI",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow />,
        color: "text-orange-500",
        hours: 300,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch />,
        color: "text-red-600",
        hours: 280,
      },
      {
        name: "Python",
        icon: <SiPython />,
        color: "text-blue-500",
        hours: 600,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-600",
        hours: 350,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "text-blue-700",
        hours: 320,
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-600", hours: 500 },
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "text-blue-500",
        hours: 300,
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "text-purple-500",
        hours: 400,
      },
      {
        name: "Adobe XD",
        icon: <SiAdobexd />,
        color: "text-pink-500",
        hours: 250,
      },
    ],
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    skills: [
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "text-purple-500",
        hours: 450,
      },
      {
        name: "Adobe XD",
        icon: <SiAdobexd />,
        color: "text-pink-500",
        hours: 300,
      },
      { name: "React", icon: <SiReact />, color: "text-sky-400", hours: 600 },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
        hours: 400,
      },
    ],
  },
];

// Spider chart data mapping per category
const getSpiderChartData = (categoryId) => {
  const dataMap = {
    "web-dev": {
      labels: [
        "Frontend",
        "Backend",
        "APIs",
        "UI/UX",
        "Performance",
        "Animation",
      ],
      values: [5, 4.5, 4, 4.5, 4, 4],
    },
    programming: {
      labels: [
        "Syntax",
        "OOP",
        "Algorithms",
        "Data Structures",
        "Debugging",
        "Best Practices",
      ],
      values: [5, 4.5, 4, 4.5, 4.5, 4],
    },
    "data-ai": {
      labels: [
        "ML Models",
        "Data Processing",
        "Neural Networks",
        "Databases",
        "Analytics",
        "Deployment",
      ],
      values: [3.5, 4, 3, 4, 3.5, 3],
    },
    tools: {
      labels: [
        "Version Control",
        "Containerization",
        "Design Tools",
        "CI/CD",
        "Collaboration",
        "Automation",
      ],
      values: [5, 3.5, 4, 3, 4.5, 4],
    },
    uiux: {
      labels: [
        "Prototyping",
        "Visual Design",
        "User Research",
        "Interaction",
        "Accessibility",
        "Responsive",
      ],
      values: [4.5, 4, 3.5, 4.5, 4, 5],
    },
  };
  return dataMap[categoryId];
};

const Skills = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = skillCategories[categoryIndex];
  const maxHours = Math.max(...currentCategory.skills.map((s) => s.hours));
  const spiderData = getSpiderChartData(currentCategory.id);

  const nextCategory = () =>
    setCategoryIndex((p) => (p + 1) % skillCategories.length);
  const prevCategory = () =>
    setCategoryIndex(
      (p) => (p - 1 + skillCategories.length) % skillCategories.length
    );

  return (
    <div className="h-full bg-primary/30 py-20 xl:py-28 flex flex-col justify-center overflow-y-auto xl:overflow-hidden">
      <Circles />

      <div className="container mx-auto px-4 h-full flex flex-col gap-6">
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          className="text-center z-10"
        >
          <h2 className="h2">Skills & Expertise</h2>
          <p className="text-white/60 mt-2">
            Comprehensive technical proficiency across multiple domains
          </p>
        </motion.div>

        {/* Category Carousel - Card Style */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="relative bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg"
        >
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevCategory}
              className="p-3 hover:text-accent hover:bg-white/10 rounded-full transition-all text-2xl z-20 flex-shrink-0"
              aria-label="Previous category"
            >
              <FaChevronLeft />
            </button>

            <div className="flex-1 max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white/10 to-transparent rounded-xl p-6 border border-white/20 shadow-xl backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold text-accent mb-2 text-center">
                    {currentCategory.name}
                  </h3>
                  <p className="text-white/60 text-sm text-center mb-6">
                    {currentCategory.skills.length} skills •{" "}
                    {Math.round(
                      currentCategory.skills.reduce(
                        (sum, s) => sum + s.hours,
                        0
                      ) / currentCategory.skills.length
                    )}{" "}
                    avg hours
                  </p>

                  {/* Skills Grid inside carousel card */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                    {currentCategory.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer"
                      >
                        <div
                          className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform`}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-xs text-center text-white/80">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2 mt-4">
                    {skillCategories.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === categoryIndex
                            ? "w-8 bg-accent"
                            : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextCategory}
              className="p-3 hover:text-accent hover:bg-white/10 rounded-full transition-all text-2xl z-20 flex-shrink-0"
              aria-label="Next category"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Spider Chart + Bar Chart Section */}
        <div className="flex flex-col xl:flex-row gap-6 flex-1 min-h-[400px]">
          {/* Spider Chart */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col items-center justify-center relative"
          >
            <h4 className="text-sm font-bold mb-4 text-center">
              Proficiency Overview
            </h4>
            <div className="w-full max-w-[400px] h-[300px] flex items-center justify-center">
              <SpiderChart categoryData={spiderData} />
              <div className="absolute top-2 right-2 text-xs text-white/50">
                Avg.{" "}
                {(
                  spiderData.values.reduce((a, b) => a + b, 0) /
                  spiderData.values.length
                ).toFixed(1)}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white/70 text-sm text-center mt-4 max-w-md"
              >
                {currentCategory.name === "Web Development" &&
                  "Full-stack expertise with modern frameworks and tools for building performant web applications."}
                {currentCategory.name === "Programming Languages" &&
                  "Strong foundation across multiple paradigms—OOP, functional, and systems programming."}
                {currentCategory.name === "Data & AI" &&
                  "Machine learning pipelines, data processing, and intelligent system development."}
                {currentCategory.name === "Tools & Platforms" &&
                  "DevOps, version control, and design tools for efficient development workflows."}
                {currentCategory.name === "UI/UX Design" &&
                  "User-centered design thinking with modern prototyping and implementation skills."}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg relative"
          >
            <h4 className="text-sm font-bold mb-4 text-center">
              Practice Hours
            </h4>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-[300px] flex items-end justify-around gap-2 px-4 pb-6 border-b border-white/10 relative"
              >
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-white w-full h-0" />
                  ))}
                </div>

                {/* Bars */}
                {currentCategory.skills.map((skill, i) => {
                  const heightPercent = (skill.hours / maxHours) * 100;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 w-full z-10 group"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-10 text-xs bg-black text-white px-3 py-1.5 rounded shadow-lg transition-opacity whitespace-nowrap">
                        {skill.hours} hours
                      </div>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          ease: "easeOut",
                        }}
                        className={`w-full max-w-[50px] rounded-t-lg ${
                          skill.color.includes("yellow")
                            ? "bg-yellow-400"
                            : skill.color.includes("blue")
                            ? "bg-blue-500"
                            : skill.color.includes("green")
                            ? "bg-green-500"
                            : skill.color.includes("red")
                            ? "bg-red-500"
                            : skill.color.includes("purple")
                            ? "bg-purple-500"
                            : skill.color.includes("pink")
                            ? "bg-pink-500"
                            : skill.color.includes("orange")
                            ? "bg-orange-500"
                            : skill.color.includes("cyan")
                            ? "bg-cyan-400"
                            : "bg-gray-400"
                        } opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                      />
                      <span className="text-[9px] md:text-[10px] text-white/60 truncate w-full text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Y-axis labels */}
            <div className="absolute left-2 top-20 bottom-16 flex flex-col justify-between text-[10px] text-white/30">
              <span>{Math.round(maxHours)}</span>
              <span>{Math.round(maxHours * 0.75)}</span>
              <span>{Math.round(maxHours * 0.5)}</span>
              <span>{Math.round(maxHours * 0.25)}</span>
              <span>0</span>
            </div>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Skills;
