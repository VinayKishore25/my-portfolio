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
import { HiOutlineSpeakerphone } from "react-icons/hi";

import SpiderChart from "@/components/features/SpiderChart";
import Bulb from "@/components/ui/Bulb";
import Circles from "@/components/ui/Circles";
import { fadeIn } from "@/lib/animations";

// --- SKILL CATEGORIES DATA ---
const skillCategories = [
  {
    id: "web-dev",
    name: "Web Development",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-sky-400", hours: 1200 },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
        hours: 800,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "text-green-500",
        hours: 900,
      },
      { name: "Express", icon: <SiExpress />, color: "text-white", hours: 850 },
      {
        name: "HTML/CSS",
        icon: <SiTailwindcss />,
        color: "text-orange-500",
        hours: 1000,
      },
      {
        name: "Bootstrap",
        icon: <SiTailwindcss />,
        color: "text-purple-500",
        hours: 600,
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
        hours: 1500,
      },
      { name: "Java", icon: <FaJava />, color: "text-red-500", hours: 1300 },
      {
        name: "Python",
        icon: <SiPython />,
        color: "text-blue-500",
        hours: 1100,
      },
      {
        name: "C",
        icon: <SiCplusplus />,
        color: "text-blue-700",
        hours: 800,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-400",
        hours: 700,
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
        color: "text-blue-600",
        hours: 600,
      },
    ],
  },
  {
    id: "backend-db",
    name: "Backend & Databases",
    skills: [
      {
        name: "Spring Boot",
        icon: <SiGo />,
        color: "text-green-600",
        hours: 650,
      },
      { name: "Express", icon: <SiExpress />, color: "text-white", hours: 850 },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-600",
        hours: 750,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "text-blue-600",
        hours: 700,
      },
      {
        name: "MySQL",
        icon: <SiPostgresql />,
        color: "text-blue-700",
        hours: 650,
      },
      {
        name: "Microservices",
        icon: <SiDocker />,
        color: "text-cyan-500",
        hours: 400,
      },
    ],
  },
  {
    id: "devops-tools",
    name: "DevOps & Cloud Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-600", hours: 1000 },
      {
        name: "GitHub",
        icon: <SiGit />,
        color: "text-gray-400",
        hours: 950,
      },
      {
        name: "Linux",
        icon: <SiGit />,
        color: "text-yellow-600",
        hours: 800,
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "text-blue-500",
        hours: 500,
      },
      {
        name: "Postman",
        icon: <SiGit />,
        color: "text-orange-500",
        hours: 600,
      },
      {
        name: "ServiceNow",
        icon: <SiGit />,
        color: "text-green-400",
        hours: 450,
      },
    ],
  },
  {
    id: "tools-ide",
    name: "IDEs & Dev Tools",
    skills: [
      {
        name: "VS Code",
        icon: <TbBrandThreejs />,
        color: "text-blue-400",
        hours: 1500,
      },
      {
        name: "IntelliJ",
        icon: <TbBrandThreejs />,
        color: "text-purple-500",
        hours: 800,
      },
      {
        name: "Jupyter",
        icon: <TbBrandThreejs />,
        color: "text-orange-500",
        hours: 550,
      },
      {
        name: "Colab",
        icon: <TbBrandThreejs />,
        color: "text-yellow-500",
        hours: 500,
      },
      {
        name: "Spyder",
        icon: <TbBrandThreejs />,
        color: "text-red-500",
        hours: 400,
      },
      {
        name: "PGAdmin",
        icon: <TbBrandThreejs />,
        color: "text-blue-600",
        hours: 450,
      },
    ],
  },
  {
    id: "mobile-design",
    name: "Mobile & Design",
    skills: [
      {
        name: "React Native",
        icon: <SiReact />,
        color: "text-sky-500",
        hours: 700,
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "text-purple-500",
        hours: 600,
      },
      {
        name: "Material UI",
        icon: <SiReact />,
        color: "text-blue-400",
        hours: 550,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
        hours: 650,
      },
      {
        name: "Adobe XD",
        icon: <SiAdobexd />,
        color: "text-pink-500",
        hours: 350,
      },
      {
        name: "Responsive",
        icon: <SiReact />,
        color: "text-green-400",
        hours: 800,
      },
    ],
  },
  {
    id: "languages",
    name: "Spoken Languages",
    skills: [
      {
        name: "Telugu",
        icon: <span className="text-2xl font-bold">తె</span>,
        color: "text-green-500",
        hours: 5,
        proficiency: "Advanced",
      },
      {
        name: "English",
        icon: <span className="text-2xl font-bold">En</span>,
        color: "text-blue-400",
        hours: 5,
        proficiency: "Advanced",
      },
      {
        name: "Hindi",
        icon: <span className="text-2xl font-bold">हि</span>,
        color: "text-orange-500",
        hours: 3,
        proficiency: "Intermediate",
      },
      {
        name: "Kannada",
        icon: <span className="text-2xl font-bold">ಕ</span>,
        color: "text-purple-500",
        hours: 1,
        proficiency: "Beginner",
      },
      {
        name: "Tamil",
        icon: <span className="text-2xl font-bold">த</span>,
        color: "text-pink-500",
        hours: 1,
        proficiency: "Beginner",
      },
    ],
  },
];
const getSpiderChartData = (categoryId) => {
  const dataMap = {
    "web-dev": {
      labels: [
        "Frontend",
        "Backend",
        "Full-Stack",
        "Performance",
        "Scalability",
        "Deployment",
      ],
      values: [5, 5, 5, 4.5, 4.5, 4],
    },
    programming: {
      labels: [
        "Problem Solving",
        "DSA",
        "OOP",
        "Clean Code",
        "Algorithms",
        "Debugging",
      ],
      values: [5, 5, 5, 4.5, 5, 4.5],
    },
    "backend-db": {
      labels: [
        "REST APIs",
        "Authentication",
        "Database Design",
        "Query Optimization",
        "Microservices",
        "Spring Boot",
      ],
      values: [5, 4.5, 4.5, 4.5, 4, 4.5],
    },
    "devops-tools": {
      labels: [
        "Version Control",
        "CI/CD",
        "Linux Admin",
        "Containerization",
        "ServiceNow",
        "Postman",
      ],
      values: [5, 4, 5, 4, 4.5, 5],
    },
    "tools-ide": {
      labels: [
        "VS Code",
        "IntelliJ",
        "Jupyter",
        "Colab",
        "Database Tools",
        "Productivity",
      ],
      values: [5, 4.5, 4, 4, 4.5, 5],
    },
    "mobile-design": {
      labels: [
        "React Native",
        "Responsive Design",
        "UI Frameworks",
        "Figma",
        "Accessibility",
        "User Experience",
      ],
      values: [4.5, 5, 4.5, 4, 4, 4.5],
    },
    languages: {
      labels: [
        "Telugu",
        "English",
        "Hindi",
        "Kannada",
        "Tamil",
        "Communication",
      ],
      values: [5, 5, 3, 1, 1, 4.5],
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
                  "Professional full-stack developer at Airbus India & Technical Hub. Built 2+ production apps (Resume Builder, Infrastructure Tracker) with 95% Lighthouse scores and 30% faster load times."}
                {currentCategory.name === "Programming Languages" &&
                  "Competitive programmer with 660+ LeetCode problems (rating 1813), 650+ GFG problems (1850 score). 5-star HackerRank badges in C, Python, Java. 3-star CodeChef (1643 rating)."}
                {currentCategory.name === "Backend & Databases" &&
                  "Enterprise backend development with Spring Boot, Express.js & PostgreSQL at Airbus. Built microservices handling 1000+ concurrent queries. NPTEL certified in DBMS, Oracle Database Foundations."}
                {currentCategory.name === "DevOps & Cloud Tools" &&
                  "Red Hat Certified System Administrator (RHCSA). ServiceNow Certified System Admin & App Developer. Proficient in Git version control with 1000+ commits across production projects."}
                {currentCategory.name === "IDEs & Dev Tools" &&
                  "Expert in professional development environments: VS Code (1500+ hours), IntelliJ IDEA, Jupyter Notebooks, Google Colab, Spyder IDE, PGAdmin for database management."}
                {currentCategory.name === "Mobile & Design" &&
                  "Cross-platform mobile development with React Native. Built Connect App serving 2000+ users with women's safety features, blood donation system, and ambulance services with 30% faster response times."}
                {currentCategory.name === "Spoken Languages" &&
                  "Fluent in Telugu and English. Intermediate Hindi proficiency. Basic understanding of Kannada and Tamil. Strong communication skills in professional and casual environments."}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            <h4 className="text-sm font-bold mb-6 text-center text-white">
              {currentCategory.name === "Spoken Languages"
                ? "Proficiency Level"
                : "Practice Hours"}
            </h4>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Bars */}
                {currentCategory.skills.map((skill, i) => {
                  const isLanguage = currentCategory.id === "languages";
                  const heightPercent = isLanguage
                    ? (skill.hours / 5) * 100
                    : (skill.hours / maxHours) * 100;
                  const barColors = [
                    "bg-yellow-400",
                    "bg-blue-500",
                    "bg-green-500",
                    "bg-red-500",
                    "bg-purple-500",
                    "bg-pink-500",
                  ];
                  const barColor = barColors[i % barColors.length];

                  return (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs md:text-sm text-white/80 font-medium truncate flex-1">
                          {skill.name}
                        </span>
                        <span className="text-xs text-accent font-bold ml-2 min-w-fit">
                          {isLanguage ? skill.proficiency : `${skill.hours}h`}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden border border-white/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${heightPercent}%` }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${barColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Skills;
