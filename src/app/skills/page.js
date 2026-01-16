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
  SiTensorflow,
  SiPytorch,
  SiGithub,
  SiLinux,
  SiPostman,
  SiVisualstudiocode,
  SiIntellijidea,
  SiJupyter,
  SiGoogle,
  SiBootstrap,
  SiSpring,
  SiAngular,
  SiMysql,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaServer,
  FaPython,
  FaUsers,
  FaComments,
  FaCrown,
  FaBrain,
  FaNetworkWired,
  FaCogs,
  FaCode,
  FaAws,
} from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsGearFill } from "react-icons/bs";

import SpiderChart from "@/components/features/SpiderChart";
import Bulb from "@/components/ui/Bulb";
import { fadeIn } from "@/lib/animations";

// --- SKILL CATEGORIES DATA (Total: 4100+ hours) ---
const skillCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-yellow-400",
        hours: 520,
      },
      { name: "Java", icon: <FaJava />, color: "text-red-500", hours: 480 },
      {
        name: "Python",
        icon: <SiPython />,
        color: "text-blue-500",
        hours: 420,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-400",
        hours: 280,
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
        color: "text-blue-600",
        hours: 220,
      },
      { name: "C", icon: <SiCplusplus />, color: "text-blue-700", hours: 180 },
      { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500", hours: 150 },
      { name: "CSS", icon: <SiCss3 />, color: "text-blue-400", hours: 140 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Frameworks",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-sky-400", hours: 480 },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
        hours: 350,
      },
      {
        name: "Angular",
        icon: <SiAngular />,
        color: "text-red-500",
        hours: 180,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
        hours: 220,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        color: "text-purple-500",
        hours: 150,
      },
      {
        name: "React Native",
        icon: <SiReact />,
        color: "text-sky-500",
        hours: 160,
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & Databases",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: "text-green-500",
        hours: 320,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "text-white",
        hours: 280,
      },
      {
        name: "Spring Boot",
        icon: <SiSpring />,
        color: "text-green-600",
        hours: 260,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "text-green-600",
        hours: 180,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "text-blue-600",
        hours: 200,
      },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700", hours: 170 },
    ],
  },
  {
    id: "cs-fundamentals",
    name: "CS Fundamentals",
    skills: [
      { name: "DSA", icon: <FaBrain />, color: "text-purple-400", hours: 450 },
      { name: "OOP", icon: <FaCogs />, color: "text-green-400", hours: 200 },
      {
        name: "DBMS",
        icon: <FaDatabase />,
        color: "text-blue-400",
        hours: 150,
      },
      {
        name: "OS",
        icon: <BsGearFill />,
        color: "text-yellow-400",
        hours: 120,
      },
      {
        name: "Networks",
        icon: <FaNetworkWired />,
        color: "text-cyan-400",
        hours: 100,
      },
      {
        name: "System Design",
        icon: <FaServer />,
        color: "text-orange-400",
        hours: 130,
      },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "text-orange-400", hours: 220 },
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "text-blue-500",
        hours: 180,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes />,
        color: "text-blue-400",
        hours: 140,
      },
      {
        name: "Jenkins",
        icon: <SiJenkins />,
        color: "text-red-400",
        hours: 120,
      },
      {
        name: "Terraform",
        icon: <SiTerraform />,
        color: "text-purple-500",
        hours: 100,
      },
      {
        name: "Linux",
        icon: <SiLinux />,
        color: "text-yellow-600",
        hours: 200,
      },
    ],
  },
  {
    id: "ml-ai",
    name: "Machine Learning & AI",
    skills: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow />,
        color: "text-orange-500",
        hours: 140,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch />,
        color: "text-red-500",
        hours: 120,
      },
      {
        name: "Deep Learning",
        icon: <FaBrain />,
        color: "text-pink-400",
        hours: 130,
      },
      {
        name: "ML Algorithms",
        icon: <FaCogs />,
        color: "text-green-400",
        hours: 150,
      },
      {
        name: "Data Analysis",
        icon: <FaDatabase />,
        color: "text-blue-400",
        hours: 110,
      },
      {
        name: "Computer Vision",
        icon: <FaCode />,
        color: "text-purple-400",
        hours: 80,
      },
    ],
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    skills: [
      {
        name: "VS Code",
        icon: <SiVisualstudiocode />,
        color: "text-blue-400",
        hours: 520,
      },
      { name: "Git", icon: <SiGit />, color: "text-orange-600", hours: 280 },
      {
        name: "GitHub",
        icon: <SiGithub />,
        color: "text-gray-400",
        hours: 250,
      },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea />,
        color: "text-purple-500",
        hours: 200,
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "text-orange-500",
        hours: 140,
      },
      {
        name: "Jupyter",
        icon: <SiJupyter />,
        color: "text-orange-500",
        hours: 120,
      },
      {
        name: "Google Colab",
        icon: <SiGoogle />,
        color: "text-yellow-500",
        hours: 100,
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: "text-purple-500",
        hours: 110,
      },
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    skills: [
      {
        name: "Communication",
        icon: <FaComments />,
        color: "text-green-400",
        hours: 300,
      },
      {
        name: "Teamwork",
        icon: <FaUsers />,
        color: "text-blue-400",
        hours: 280,
      },
      {
        name: "Leadership",
        icon: <FaCrown />,
        color: "text-yellow-400",
        hours: 200,
      },
      {
        name: "Problem Solving",
        icon: <FaBrain />,
        color: "text-purple-400",
        hours: 350,
      },
      {
        name: "Debugging",
        icon: <FaCode />,
        color: "text-red-400",
        hours: 250,
      },
      {
        name: "Agile/Scrum",
        icon: <FaCogs />,
        color: "text-cyan-400",
        hours: 150,
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
        proficiency: "Native",
      },
      {
        name: "English",
        icon: <span className="text-2xl font-bold">En</span>,
        color: "text-blue-400",
        hours: 5,
        proficiency: "Fluent",
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
        proficiency: "Basic",
      },
      {
        name: "Tamil",
        icon: <span className="text-2xl font-bold">த</span>,
        color: "text-pink-500",
        hours: 1,
        proficiency: "Basic",
      },
    ],
  },
];

// Spider chart data - always 6 parameters for hexagonal shape (values as percentage 0-100)
const getSpiderChartData = (categoryId) => {
  const dataMap = {
    programming: {
      labels: [
        "JavaScript",
        "Java",
        "Python",
        "TypeScript",
        "C/C++",
        "Web Tech",
      ],
      values: [95, 90, 85, 80, 75, 88],
    },
    frontend: {
      labels: ["React", "Next.js", "Angular", "Styling", "Mobile", "UI/UX"],
      values: [95, 88, 70, 90, 75, 85],
    },
    backend: {
      labels: [
        "Node.js",
        "Express",
        "Spring Boot",
        "MongoDB",
        "PostgreSQL",
        "APIs",
      ],
      values: [90, 88, 82, 85, 80, 92],
    },
    "cs-fundamentals": {
      labels: ["DSA", "OOP", "DBMS", "OS", "Networks", "System Design"],
      values: [92, 88, 82, 78, 75, 80],
    },
    "cloud-devops": {
      labels: ["AWS", "Docker", "Kubernetes", "CI/CD", "IaC", "Linux"],
      values: [85, 82, 75, 78, 72, 88],
    },
    "ml-ai": {
      labels: [
        "TensorFlow",
        "PyTorch",
        "Deep Learning",
        "ML Algo",
        "Data",
        "CV",
      ],
      values: [78, 75, 76, 80, 75, 70],
    },
    "dev-tools": {
      labels: ["VS Code", "Git", "IDEs", "Testing", "Debug", "Design"],
      values: [95, 90, 85, 82, 88, 78],
    },
    "soft-skills": {
      labels: ["Comm", "Team", "Lead", "Problem Solve", "Debug", "Agile"],
      values: [88, 90, 82, 92, 88, 85],
    },
    languages: {
      labels: ["Telugu", "English", "Hindi", "Kannada", "Tamil", "Tech Comm"],
      values: [100, 95, 65, 25, 20, 90],
    },
  };
  return dataMap[categoryId];
};

// Category descriptions for below the spider chart
const getCategoryDescription = (categoryId) => {
  const descriptions = {
    programming:
      "Mastery in multiple programming languages with 2000+ hours of hands-on coding. 660+ LeetCode problems solved (1813 rating), 650+ GFG problems (1850 score). 5-star HackerRank badges.",
    frontend:
      "Built production-grade React & Next.js applications at Airbus India. 95% Lighthouse scores and 30% faster load times. Expert in responsive design and modern CSS frameworks.",
    backend:
      "Enterprise backend development with Spring Boot, Express.js & microservices at Airbus. Built systems handling 1000+ concurrent queries. NPTEL certified in DBMS.",
    "cs-fundamentals":
      "Strong foundation in computer science fundamentals. Competitive programmer with proven DSA skills. Deep understanding of system design patterns and database optimization.",
    "cloud-devops":
      "Red Hat Certified System Administrator (RHCSA). Proficient in AWS cloud services, containerization with Docker/Kubernetes, and infrastructure automation.",
    "ml-ai":
      "Practical experience with TensorFlow, PyTorch for deep learning projects. Strong foundation in ML algorithms, data analysis, and computer vision applications.",
    "dev-tools":
      "Expert in professional development environments with 1500+ hours in VS Code. Proficient in version control, API testing, and collaborative development workflows.",
    "soft-skills":
      "Strong communication and leadership skills demonstrated through team projects. Agile methodology practitioner with excellent problem-solving and debugging abilities.",
    languages:
      "Native Telugu speaker, fluent in English for professional communication. Intermediate Hindi proficiency with basic understanding of South Indian languages.",
  };
  return descriptions[categoryId];
};

const Skills = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = skillCategories[categoryIndex];
  const maxHours = Math.max(...currentCategory.skills.map((s) => s.hours));
  const spiderData = getSpiderChartData(currentCategory.id);
  const categoryDescription = getCategoryDescription(currentCategory.id);

  // Calculate total hours
  const totalHours = skillCategories
    .filter((cat) => cat.id !== "languages")
    .reduce(
      (total, cat) => total + cat.skills.reduce((sum, s) => sum + s.hours, 0),
      0
    );

  const nextCategory = () =>
    setCategoryIndex((p) => (p + 1) % skillCategories.length);
  const prevCategory = () =>
    setCategoryIndex(
      (p) => (p - 1 + skillCategories.length) % skillCategories.length
    );

  return (
    <div className="h-full bg-primary/30 py-16 xl:py-24 flex flex-col justify-center overflow-y-auto xl:overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col gap-4">
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          className="text-center z-10"
        >
          <h2 className="h2">Skills & Expertise</h2>
          <p className="text-white/60 mt-1 text-sm md:text-base">
            {totalHours.toLocaleString()}+ hours of coding across multiple
            domains
          </p>
        </motion.div>

        {/* Category Carousel - Card Style */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="relative bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 shadow-lg"
        >
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button
              onClick={prevCategory}
              className="p-2 md:p-3 hover:text-accent hover:bg-white/10 rounded-full transition-all text-xl md:text-2xl z-20 flex-shrink-0"
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
                  className="bg-gradient-to-br from-white/10 to-transparent rounded-xl p-4 md:p-6 border border-white/20 shadow-xl backdrop-blur-sm"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-accent mb-1 text-center">
                    {currentCategory.name}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm text-center mb-4">
                    {currentCategory.skills.length} skills •{" "}
                    {currentCategory.id === "languages"
                      ? "Multilingual"
                      : `${currentCategory.skills
                          .reduce((sum, s) => sum + s.hours, 0)
                          .toLocaleString()}+ hours`}
                  </p>

                  {/* Skills Grid inside carousel card */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {currentCategory.skills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex flex-col items-center gap-1 p-2 md:p-3 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-300 group cursor-pointer w-[70px] md:w-[80px]"
                      >
                        <div
                          className={`text-2xl md:text-3xl ${skill.color} group-hover:scale-110 transition-transform`}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-[10px] md:text-xs text-center text-white/80 truncate w-full">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-1.5 mt-4">
                    {skillCategories.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCategoryIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === categoryIndex
                            ? "w-6 bg-accent"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextCategory}
              className="p-2 md:p-3 hover:text-accent hover:bg-white/10 rounded-full transition-all text-xl md:text-2xl z-20 flex-shrink-0"
              aria-label="Next category"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Spider Chart + Bar Chart Section */}
        <div className="flex flex-col xl:flex-row gap-4 flex-1 min-h-[350px]">
          {/* Spider Chart */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 shadow-lg flex flex-col items-center justify-center relative"
          >
            <h4 className="text-xs md:text-sm font-bold mb-2 text-center text-white/80">
              Proficiency Overview
            </h4>

            {/* Spider Chart Container */}
            <div className="flex-1 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                  <SpiderChart
                    categoryData={spiderData}
                    showLabelsBelow={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Category Parameters Below Spider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`params-${currentCategory.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-3 w-full"
              >
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 md:gap-2 mb-3">
                  {spiderData.labels.map((label, idx) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center bg-white/5 rounded-lg p-1.5 md:p-2"
                    >
                      <span className="text-[10px] md:text-xs text-white/70 truncate w-full text-center">
                        {label}
                      </span>
                      <span className="text-xs md:text-sm font-bold text-accent">
                        {spiderData.values[idx]}%
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-xs md:text-sm text-center max-w-lg mx-auto leading-relaxed">
                  {categoryDescription}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="flex-1 bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 shadow-lg"
          >
            <h4 className="text-xs md:text-sm font-bold mb-4 text-center text-white/80">
              {currentCategory.id === "languages"
                ? "Proficiency Level"
                : "Practice Hours"}
            </h4>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {/* Bars */}
                {currentCategory.skills.map((skill, i) => {
                  const isLanguage = currentCategory.id === "languages";
                  const heightPercent = isLanguage
                    ? (skill.hours / 5) * 100
                    : (skill.hours / maxHours) * 100;
                  const barColors = [
                    "bg-gradient-to-r from-yellow-400 to-yellow-500",
                    "bg-gradient-to-r from-blue-400 to-blue-500",
                    "bg-gradient-to-r from-green-400 to-green-500",
                    "bg-gradient-to-r from-red-400 to-red-500",
                    "bg-gradient-to-r from-purple-400 to-purple-500",
                    "bg-gradient-to-r from-pink-400 to-pink-500",
                    "bg-gradient-to-r from-cyan-400 to-cyan-500",
                    "bg-gradient-to-r from-orange-400 to-orange-500",
                  ];
                  const barColor = barColors[i % barColors.length];

                  return (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs md:text-sm text-white/80 font-medium truncate flex-1">
                          {skill.name}
                        </span>
                        <span className="text-xs text-accent font-bold ml-2 min-w-fit">
                          {isLanguage ? skill.proficiency : `${skill.hours}h`}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden border border-white/20">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${heightPercent}%` }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${barColor} shadow-lg`}
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
