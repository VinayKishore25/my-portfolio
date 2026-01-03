"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiSparkles,
  HiRocketLaunch,
  HiCheckCircle,
  HiClock,
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiChevronDown,
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";
import WorkDetails from "@/components/features/WorkDetails";
import { projectStats, projectCategories } from "@/data/projects";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Stats data
  const stats = [
    {
      icon: <HiRocketLaunch className="w-6 h-6" />,
      label: "Total Projects",
      value: projectStats.total,
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: <HiCheckCircle className="w-6 h-6" />,
      label: "Completed",
      value: projectStats.completed + projectStats.live,
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      label: "In Progress",
      value: projectStats.inProgress,
      color: "from-amber-500 to-orange-500",
      delay: 0.4,
    },
    {
      icon: <HiSparkles className="w-6 h-6" />,
      label: "Technologies",
      value: projectStats.totalTechStack,
      color: "from-purple-500 to-pink-500",
      delay: 0.5,
    },
  ];

  return (
    <div className="min-h-screen bg-primary/30 py-12 xl:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 xl:mb-16">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <HiSparkles className="w-4 h-4" />
              Portfolio Showcase
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 xl:mb-6"
          >
            Featured{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-3xl mx-auto text-white/70 text-base xl:text-lg leading-relaxed"
          >
            A curated collection of my work showcasing technical expertise,
            creative problem-solving, and passion for building impactful digital
            experiences across various domains and technologies.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mb-12 xl:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", stat.delay)}
              initial="hidden"
              animate="show"
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(to bottom right, var(--color-accent), transparent)`,
                }}
              />
              <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 xl:p-6 hover:border-accent/30 transition-all duration-300">
                <div
                  className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 xl:p-3 mb-3 xl:mb-4 text-white shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl xl:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs xl:text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 xl:mb-12"
        >
          {/* Search Bar and Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-3 xl:gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search projects by name, tech, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-xl pl-12 pr-4 py-3 xl:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:w-auto flex items-center justify-center gap-2 bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-xl px-4 xl:px-6 py-3 xl:py-4 text-white hover:border-accent/30 transition-all"
            >
              <HiAdjustmentsHorizontal className="w-5 h-5" />
              <span className="font-medium">Filters</span>
              <HiChevronDown
                className={`w-4 h-4 transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Expandable Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-secondary/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 xl:p-6 space-y-4 xl:space-y-6">
                  {/* Category Filters */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 xl:mb-4 text-sm xl:text-base">
                      Category
                    </h3>
                    <div className="flex flex-wrap gap-2 xl:gap-3">
                      {projectCategories.map((category, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 flex items-center gap-2 ${
                            selectedCategory === category.name
                              ? "bg-accent text-white shadow-lg shadow-accent/25 scale-105"
                              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded-full ${
                              selectedCategory === category.name
                                ? "bg-white/20"
                                : "bg-white/10"
                            }`}
                          >
                            {category.count}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 xl:mb-4 text-sm xl:text-base">
                      Sort By
                    </h3>
                    <div className="flex flex-wrap gap-2 xl:gap-3">
                      {[
                        { value: "featured", label: "Featured First" },
                        { value: "newest", label: "Newest First" },
                        { value: "oldest", label: "Oldest First" },
                        { value: "name", label: "Name (A-Z)" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value)}
                          className={`px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg font-medium text-sm xl:text-base transition-all duration-300 ${
                            sortBy === option.value
                              ? "bg-accent/20 text-accent border border-accent/30"
                              : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <WorkDetails
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
          />
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
