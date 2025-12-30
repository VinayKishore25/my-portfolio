"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiSpringboot, SiMongodb } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

const projectsData = [
  {
    title: "Veda Website",
    description:
      "A comprehensive educational platform built with modern web technologies, featuring interactive learning modules and user management.",
    image: "/veda-website.png",
    technologies: [
      <FaReact key="react" />,
      <SiNextdotjs key="next" />,
      <SiMongodb key="mongo" />,
    ],
    techNames: ["React", "Next.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    title: "Number Detection System",
    description:
      "AI-powered number recognition system using machine learning algorithms for accurate digit detection and classification.",
    image: "/number_detection.png",
    technologies: [<FaPython key="python" />, <FaJava key="java" />],
    techNames: ["Python", "Java"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    title: "Snake Game",
    description:
      "Classic snake game implementation with modern UI/UX design, featuring smooth animations and responsive controls.",
    image: "/snake-game.png",
    technologies: [<FaReact key="react" />, <SiNextdotjs key="next" />],
    techNames: ["React", "Next.js"],
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-primary via-primary/95 to-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Showcasing some of my best work that demonstrates technical skills
            and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-xl hover:border-accent/40 transition-all duration-500 card-shine">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.liveLink}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <HiArrowUpRight className="text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <p className="text-white/60 mb-5 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techNames.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={project.liveLink}
                      className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-medium group/link"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo</span>
                      <HiArrowUpRight
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                        size={12}
                      />
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium group/link"
                    >
                      <FaGithub size={14} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-accent hover:border-accent transition-all duration-300 group"
          >
            View All Projects
            <HiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
