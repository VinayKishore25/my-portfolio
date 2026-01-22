"use client";
import React, { useMemo, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  HiSparkles,
  HiRocketLaunch,
  HiCheckCircle,
  HiClock,
  HiMagnifyingGlass,
  HiAdjustmentsHorizontal,
  HiChevronDown,
  HiCodeBracketSquare,
  HiFire,
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";
import WorkDetails from "@/components/features/WorkDetails";
import { projectStats, projectCategories } from "@/data/projects";

// Cursor Glow Component
const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      style={{
        background: `radial-gradient(400px circle at ${cursorXSpring}px ${cursorYSpring}px, rgba(241, 48, 36, 0.06), transparent 80%)`,
      }}
    />
  );
};

const Freelance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-primary/30 relative overflow-hidden">
      <CursorGlow />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 xl:py-20 relative z-10">
        {/* Compact Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 xl:mb-14"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <HiCodeBracketSquare className="w-6 h-6 text-white" />
                </div>
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-3">
                Freelance <span className="text-accent">Projects</span>
              </h1>
              <p className="text-white/60 max-w-xl text-sm md:text-base">
                Professional client work delivering real-world solutions with
                excellence
              </p>
            </div>

            {/* Inline Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 lg:gap-8"
            >
              {[
                {
                  value: projectStats.total,
                  label: "Projects",
                  icon: <HiRocketLaunch className="w-4 h-4" />,
                },
                {
                  value: projectStats.completed + projectStats.live,
                  label: "Delivered",
                  icon: <HiCheckCircle className="w-4 h-4" />,
                },
                {
                  value: projectStats.totalTechStack,
                  label: "Technologies",
                  icon: <HiFire className="w-4 h-4" />,
                },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 text-accent mb-1">
                    {stat.icon}
                    <span className="text-2xl xl:text-3xl font-bold">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 xl:mb-12"
        >
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative max-w-md">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 text-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <HiAdjustmentsHorizontal className="w-4 h-4" />
                <span>
                  {sortBy === "featured"
                    ? "Featured"
                    : sortBy === "newest"
                      ? "Newest"
                      : sortBy === "oldest"
                        ? "Oldest"
                        : "A-Z"}
                </span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl z-20"
                  >
                    {[
                      { value: "featured", label: "Featured" },
                      { value: "newest", label: "Newest" },
                      { value: "oldest", label: "Oldest" },
                      { value: "name", label: "A-Z" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowFilters(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                          sortBy === option.value
                            ? "bg-accent/20 text-accent"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Category Pills - Always Visible */}
          <div className="flex flex-wrap gap-2.5">
            {projectCategories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/25 border border-accent/50"
                    : "bg-secondary/50 text-white/60 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 transition-opacity duration-300 ${
                    selectedCategory !== category.name
                      ? "group-hover:opacity-100"
                      : ""
                  }`}
                />

                <span className="relative flex items-center gap-2">
                  <span>{category.name}</span>
                  <span
                    className={`ml-1 text-[11px] px-2 py-0.5 rounded-md font-semibold transition-all duration-300 ${
                      selectedCategory === category.name
                        ? "bg-white/25 text-white"
                        : "bg-white/5 text-white/40 group-hover:bg-accent/20 group-hover:text-accent"
                    }`}
                  >
                    {category.count}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <WorkDetails
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            sortBy={sortBy}
            activeTab="freelance"
          />
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Freelance;
