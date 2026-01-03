"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiCodeBracket,
  HiStar,
  HiCalendar,
  HiUserGroup,
  HiArrowTopRightOnSquare,
  HiXMark,
  HiCheckBadge,
  HiClock,
  HiSparkles,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projectData } from "@/data/projects";

const WorkDetails = ({
  searchQuery = "",
  selectedCategory = "All",
  sortBy = "featured",
}) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoading, setImageLoading] = useState({});

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projectData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
          p.tagline.toLowerCase().includes(query)
      );
    }

    // Sort projects
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return parseInt(b.year) - parseInt(a.year);
        case "newest":
          return parseInt(b.year) - parseInt(a.year);
        case "oldest":
          return parseInt(a.year) - parseInt(b.year);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  const openLink = (url, e) => {
    e?.stopPropagation();
    if (url && url !== "#" && url !== "/_notfound") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const getStatusConfig = (status) => {
    const configs = {
      Live: {
        color: "from-green-500/20 to-emerald-500/20",
        textColor: "text-green-400",
        borderColor: "border-green-500/50",
        icon: <HiCheckBadge className="w-3 h-3" />,
      },
      Completed: {
        color: "from-blue-500/20 to-cyan-500/20",
        textColor: "text-blue-400",
        borderColor: "border-blue-500/50",
        icon: <HiCheckBadge className="w-3 h-3" />,
      },
      "In Progress": {
        color: "from-amber-500/20 to-yellow-500/20",
        textColor: "text-amber-400",
        borderColor: "border-amber-500/50",
        icon: <HiClock className="w-3 h-3" />,
      },
      "In Development": {
        color: "from-amber-500/20 to-yellow-500/20",
        textColor: "text-amber-400",
        borderColor: "border-amber-500/50",
        icon: <HiClock className="w-3 h-3" />,
      },
      Planning: {
        color: "from-purple-500/20 to-pink-500/20",
        textColor: "text-purple-400",
        borderColor: "border-purple-500/50",
        icon: <HiSparkles className="w-3 h-3" />,
      },
    };
    return configs[status] || configs.Completed;
  };

  return (
    <div className="w-full">
      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${searchQuery}-${sortBy}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6"
        >
          {filteredProjects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-secondary/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 xl:h-56 overflow-hidden bg-secondary/60">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent/90 backdrop-blur-sm text-white text-xs font-bold shadow-lg">
                          <HiStar className="w-3.5 h-3.5" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg backdrop-blur-sm ${statusConfig.textColor} ${statusConfig.borderColor} border text-xs font-semibold bg-gradient-to-br ${statusConfig.color}`}
                      >
                        {statusConfig.icon}
                        <span>{project.status}</span>
                      </div>
                    </div>

                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      onLoadingComplete={() =>
                        setImageLoading((prev) => ({
                          ...prev,
                          [project.id]: false,
                        }))
                      }
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Quick Actions on Hover */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {project.link &&
                        project.link !== "#" &&
                        project.link !== "/_notfound" && (
                          <motion.button
                            initial={{ scale: 0 }}
                            animate={{
                              scale: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ delay: 0.1 }}
                            onClick={(e) => openLink(project.link, e)}
                            className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/90 shadow-lg hover:scale-110 transition-all"
                            title="View Live"
                          >
                            <HiArrowTopRightOnSquare className="w-5 h-5" />
                          </motion.button>
                        )}
                      {project.github && (
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{
                            scale: hoveredProject === project.id ? 1 : 0,
                          }}
                          transition={{ delay: 0.15 }}
                          onClick={(e) => openLink(project.github, e)}
                          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 shadow-lg hover:scale-110 transition-all"
                          title="View Code"
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 xl:p-6 flex flex-col flex-grow">
                    {/* Tagline */}
                    <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">
                      {project.tagline}
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-lg xl:text-xl mb-2 group-hover:text-accent transition-colors line-clamp-1">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-2 flex-grow">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                      <div className="flex items-center gap-1.5">
                        <HiCalendar className="w-3.5 h-3.5" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <HiUserGroup className="w-3.5 h-3.5" />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-accent/15 border border-accent/30 text-accent text-xs px-2.5 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="bg-white/5 border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-md font-medium">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent py-3 rounded-xl font-semibold hover:from-accent hover:to-accent/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Details</span>
                      <HiArrowTopRightOnSquare className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <HiCodeBracket className="w-10 h-10 text-accent/60" />
          </div>
          <h3 className="text-white/80 text-xl xl:text-2xl font-semibold mb-2">
            No projects found
          </h3>
          <p className="text-white/50 text-sm xl:text-base">
            Try adjusting your filters or search query
          </p>
        </motion.div>
      )}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            openLink={openLink}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Project Detail Modal Component
const ProjectDetailModal = ({ project, onClose, openLink }) => {
  const statusConfig = {
    Live: {
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-green-400",
      borderColor: "border-green-500/50",
      icon: <HiCheckBadge className="w-4 h-4" />,
    },
    Completed: {
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/50",
      icon: <HiCheckBadge className="w-4 h-4" />,
    },
    "In Progress": {
      color: "from-amber-500/20 to-yellow-500/20",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/50",
      icon: <HiClock className="w-4 h-4" />,
    },
    "In Development": {
      color: "from-amber-500/20 to-yellow-500/20",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/50",
      icon: <HiClock className="w-4 h-4" />,
    },
    Planning: {
      color: "from-purple-500/20 to-pink-500/20",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/50",
      icon: <HiSparkles className="w-4 h-4" />,
    },
  }[project.status] || {
    color: "from-blue-500/20 to-cyan-500/20",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/50",
    icon: <HiCheckBadge className="w-4 h-4" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 xl:h-80 overflow-hidden rounded-t-3xl bg-secondary">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-6 left-6">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/90 backdrop-blur-sm text-white text-sm font-bold shadow-lg">
                <HiStar className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-6 right-6">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm ${statusConfig.textColor} ${statusConfig.borderColor} border text-sm font-semibold bg-gradient-to-br ${statusConfig.color}`}
            >
              {statusConfig.icon}
              <span>{project.status}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 xl:p-8">
          {/* Title and Tagline */}
          <div className="mb-6">
            <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">
              {project.tagline}
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4">
              {project.name}
            </h2>
            <p className="text-white/70 text-base xl:text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.link &&
              project.link !== "#" &&
              project.link !== "/_notfound" && (
                <motion.button
                  onClick={(e) => openLink(project.link, e)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 shadow-lg hover:shadow-accent/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiArrowTopRightOnSquare className="w-5 h-5" />
                  <span>View Live Project</span>
                </motion.button>
              )}
            {project.github && (
              <motion.button
                onClick={(e) => openLink(project.github, e)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span>View Source Code</span>
              </motion.button>
            )}
          </div>

          {/* Meta Information Grid */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-white/50 text-xs mb-1 font-medium">Year</div>
              <div className="text-white text-lg font-bold">{project.year}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-white/50 text-xs mb-1 font-medium">
                Duration
              </div>
              <div className="text-white text-lg font-bold">
                {project.duration}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-white/50 text-xs mb-1 font-medium">Team</div>
              <div className="text-white text-lg font-bold">{project.team}</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-white/50 text-xs mb-1 font-medium">
                Category
              </div>
              <div className="text-white text-lg font-bold">
                {project.category}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent/15 border border-accent/30 text-accent px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">Key Features</h3>
            <div className="grid gap-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiCheckBadge className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/80">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.solutions && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">
                  Challenges
                </h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="text-amber-400 mt-1">⚠️</span>
                      <span className="text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4">Solutions</h3>
                <div className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Impact Metrics */}
          {project.impact && (
            <div className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-white font-bold text-xl mb-4">
                Project Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(project.impact).map(([key, value], index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl xl:text-3xl font-bold text-accent mb-1">
                      {value}
                    </div>
                    <div className="text-white/60 text-sm capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkDetails;
