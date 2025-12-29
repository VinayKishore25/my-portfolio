"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaExternalLinkAlt, FaGithub, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiMongodb } from 'react-icons/si';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Veda Website',
    description: 'A comprehensive educational platform built with modern web technologies, featuring interactive learning modules and user management.',
    image: '/veda-website.png',
    technologies: [<FaReact />, <SiNextdotjs />, <SiMongodb />],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Number Detection System',
    description: 'AI-powered number recognition system using machine learning algorithms for accurate digit detection and classification.',
    image: '/number_detection.png',
    technologies: [<FaPython />, <FaJava />],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Snake Game',
    description: 'Classic snake game implementation with modern UI/UX design, featuring smooth animations and responsive controls.',
    image: '/snake-game.png',
    technologies: [<FaReact />, <SiNextdotjs />],
    liveLink: '#',
    githubLink: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-16"
        >
          <h2 className="h2 mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Showcasing some of my best work that demonstrates technical skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-secondary/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="bg-accent text-white p-3 rounded-full hover:bg-accent/80 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-white text-black p-3 rounded-full hover:bg-white/80 transition-colors"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex items-center space-x-3 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-accent text-xl">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center space-x-1"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center space-x-1"
                  >
                    <FaGithub size={12} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

