"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";

// Sample Data
const projectData = [
  {
    category: "All",
    projects: [],
  },
  {
    category: "Java",
    projects: [
      {
        name: "Snake Game",
        image: "/snake-game.png",
        description:
          "Classic snake game with modern UI and smooth gameplay mechanics",
        techStack: ["Java", "Swing", "AWT"],
        link: "https://github.com/VinayKishore25/Snake-Game",
        featured: true,
      },
      {
        name: "Pac Man Game",
        image: "/pac-man.png",
        description: "Retro Pac-Man game recreation with enhanced graphics",
        techStack: ["Java", "Swing", "AWT"],
        link: "https://github.com/VinayKishore25/Pac-Man",
        featured: false,
      },
    ],
  },
  {
    category: "Python",
    projects: [
      {
        name: "Number Detection",
        image: "/number_detection.png",
        description:
          "AI-powered phone number information finder with intuitive interface",
        techStack: ["Python", "Tkinter", "ML"],
        link: "https://github.com/VinayKishore25/Number-Detection",
        featured: true,
      },
      {
        name: "Language Translator",
        image: "/comingsoon.jpeg",
        description:
          "Multi-language translation tool with real-time processing",
        techStack: ["Python", "NLP"],
        link: "#",
        featured: false,
      },
    ],
  },
  {
    category: "FullStack",
    projects: [
      {
        name: "Veda Website",
        image: "/veda-website.png",
        description:
          "Comprehensive event management platform with seamless registration",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "https://adityauniversity.in/veda2024",
        featured: true,
      },
      {
        name: "Infrastructure Tracker",
        image: "/comingsoon.jpeg",
        description:
          "Hierarchical system for efficient infrastructure asset management",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "/_notfound",
        featured: false,
      },
      {
        name: "Resume Builder",
        image: "/comingsoon.jpeg",
        description:
          "Professional resume creation platform with customizable templates",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "/_notfound",
        featured: false,
      },
    ],
  },
  {
    category: "App",
    projects: [
      {
        name: "Connect",
        image: "/comingsoon.jpeg",
        description:
          "Social networking app connecting people based on their needs",
        techStack: ["React Native", "Spring Boot"],
        link: "/_notfound",
        featured: false,
      },
    ],
  },
];

const WorkDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData.flatMap((data) => data.projects)
      : projectData.find((data) => data.category === selectedCategory)
          ?.projects || [];

  const openProjectLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full">
      {/* Category Filter */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {projectData.map((data, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(data.category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === data.category
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {data.category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${selectedCategory}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-secondary/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <motion.button
                      onClick={() => openProjectLink(project.link)}
                      className="bg-accent text-white p-3 rounded-full hover:bg-accent/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.button>
                    <motion.button
                      className="bg-white text-black p-3 rounded-full hover:bg-white/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEye size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent/20 text-accent text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  onClick={() => openProjectLink(project.link)}
                  className="w-full bg-gradient-to-r from-accent to-accent/80 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt size={14} />
                  <span>View Project</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-white/40 text-6xl mb-4">🚀</div>
          <h3 className="text-white/60 text-xl mb-2">No projects yet</h3>
          <p className="text-white/40">More amazing projects coming soon!</p>
        </motion.div>
      )}
    </div>
  );
};

export default WorkDetails;
