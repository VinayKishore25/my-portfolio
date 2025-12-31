"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FaExternalLinkAlt } from "react-icons/fa";
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
        highlights: [
          "Real-time collision detection",
          "Score tracking system",
          "Responsive controls",
        ],
        status: "Completed",
        year: "2024",
      },
      {
        name: "Pac Man Game",
        image: "/pac-man.png",
        description: "Retro Pac-Man game recreation with enhanced graphics",
        techStack: ["Java", "Swing", "AWT"],
        link: "https://github.com/VinayKishore25/Pac-Man",
        featured: false,
        highlights: [
          "Ghost AI pathfinding",
          "Level progression",
          "Power-up mechanics",
        ],
        status: "Completed",
        year: "2024",
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
        highlights: [
          "Carrier detection",
          "Location tracking",
          "Real-time validation",
        ],
        status: "Completed",
        year: "2024",
      },
      {
        name: "Language Translator",
        image: "/comingsoon.jpeg",
        description:
          "Multi-language translation tool with real-time processing",
        techStack: ["Python", "NLP"],
        link: "#",
        featured: false,
        highlights: ["50+ languages", "Voice input support", "Offline mode"],
        status: "In Progress",
        year: "2025",
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
        highlights: [
          "1000+ registrations",
          "Payment integration",
          "Live event tracking",
        ],
        status: "Live",
        year: "2024",
      },
      {
        name: "Infrastructure Tracker",
        image: "/comingsoon.jpeg",
        description:
          "Hierarchical system for efficient infrastructure asset management",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "/_notfound",
        featured: false,
        highlights: [
          "Asset lifecycle tracking",
          "Multi-level hierarchy",
          "Report generation",
        ],
        status: "In Progress",
        year: "2025",
      },
      {
        name: "Resume Builder",
        image: "/comingsoon.jpeg",
        description:
          "Professional resume creation platform with customizable templates",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "/_notfound",
        featured: false,
        highlights: ["10+ templates", "PDF export", "ATS-friendly format"],
        status: "Planning",
        year: "2025",
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
        highlights: [
          "Real-time chat",
          "Need-based matching",
          "Push notifications",
        ],
        status: "In Development",
        year: "2025",
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay with project highlights */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-400 border border-green-500/50"
                            : project.status === "Completed"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                            : project.status === "In Progress" ||
                              project.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-xs text-white/60">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-xs font-medium mb-2 text-accent">
                      Key Features:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights?.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-xs text-white/90 flex items-start"
                        >
                          <span className="text-accent mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
