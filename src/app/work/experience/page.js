"use client";
import React, { useMemo, useState } from "react";
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
  HiBriefcase,
  HiAcademicCap,
  HiFire,
  HiLightBulb,
  HiStar,
  HiCalendarDays,
  HiMapPin,
  HiArrowRight,
  HiXMark,
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";
import { companiesData, experienceStats } from "@/data/companies";

const Experience = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [typeFilter, setTypeFilter] = useState("all"); // "all", "internship", "full-time"

  // Premium stats data for experience
  const stats = [
    {
      icon: <HiBriefcase className="w-6 h-6" />,
      label: "Companies",
      value: experienceStats.totalCompanies,
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <HiRocketLaunch className="w-6 h-6" />,
      label: "Projects",
      value: experienceStats.totalProjects,
      color: "from-blue-500 to-cyan-500",
      delay: 0.3,
    },
    {
      icon: <HiFire className="w-6 h-6" />,
      label: "Skills Learned",
      value: experienceStats.totalSkills,
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
    {
      icon: <HiCalendarDays className="w-6 h-6" />,
      label: "Total Duration",
      value: `${experienceStats.totalMonths}+ months`,
      color: "from-green-500 to-emerald-500",
      delay: 0.5,
    },
  ];

  // Filter companies by search
  const filteredCompanies = useMemo(() => {
    if (!searchQuery.trim() && typeFilter === "all") return companiesData;
    const query = searchQuery.toLowerCase();
    return companiesData.filter(
      (company) =>
        (typeFilter === "all" || company.type === typeFilter) &&
        (company.name.toLowerCase().includes(query) ||
          company.role.toLowerCase().includes(query) ||
          company.skills.some((skill) => skill.toLowerCase().includes(query)))
    );
  }, [searchQuery, typeFilter]);

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
              <HiBriefcase className="w-4 h-4" />
              Learning & Experience
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 xl:mb-6"
          >
            My{" "}
            <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
              Experience Projects
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-3xl mx-auto text-white/70 text-base xl:text-lg leading-relaxed"
          >
            Professional experience working with leading organizations, building
            impactful solutions and developing expertise across diverse
            technologies and domains.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-12"
        >
          <div className="flex-1 relative max-w-2xl mx-auto">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by company, role, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent/30 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Type Filter Buttons */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-12 flex justify-center gap-4 flex-wrap"
        >
          {[
            {
              label: "All",
              value: "all",
              icon: <HiBriefcase className="w-4 h-4" />,
            },
            {
              label: "Full-Time",
              value: "full-time",
              icon: <HiRocketLaunch className="w-4 h-4" />,
            },
            {
              label: "Internships",
              value: "internship",
              icon: <HiAcademicCap className="w-4 h-4" />,
            },
          ].map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTypeFilter(filter.value)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                typeFilter === filter.value
                  ? "bg-accent text-white shadow-lg shadow-accent/50"
                  : "bg-white/10 border border-white/20 text-white/70 hover:bg-white/20 hover:border-white/40"
              }`}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Premium Stats Cards */}
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
              whileHover={{ translateY: -5 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(to bottom right, var(--color-accent), transparent)`,
                }}
              />
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-4 xl:p-6 hover:border-accent/50 transition-all duration-300">
                <div
                  className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 xl:p-3 mb-3 xl:mb-4 text-white shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl xl:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs xl:text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          {filteredCompanies.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="text-center">
                <HiMagnifyingGlass className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <p className="text-xl text-white/50">
                  {typeFilter === "full-time"
                    ? "Currently focusing on internships & exciting full-time opportunities ahead!"
                    : `Nothing matches "${searchQuery}" yet. Try another search?`}
                </p>
                <p className="text-sm text-white/40 mt-2">
                  {typeFilter === "full-time"
                    ? "My journey continues with impactful roles 🚀"
                    : "Browse all experiences or refine your search"}
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
              {filteredCompanies.map((company, idx) => (
                <motion.div
                  key={company.id}
                  variants={fadeIn("up", 0.3 + idx * 0.1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onClick={() => setSelectedCompany(company)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 xl:p-8 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl xl:text-2xl font-bold text-white mb-1">
                          {company.name}
                        </h3>
                        <p className="text-sm xl:text-base text-accent font-semibold mb-2">
                          {company.role}
                        </p>
                        <div className="flex flex-col gap-1 text-xs xl:text-sm text-white/60">
                          <div className="flex items-center gap-2">
                            <HiCalendarDays className="w-4 h-4 flex-shrink-0" />
                            <span>{company.duration}</span>
                          </div>
                          {company.location && (
                            <div className="flex items-center gap-2">
                              <HiMapPin className="w-4 h-4 flex-shrink-0" />
                              <span>{company.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="mb-6">
                      <p className="text-xs xl:text-sm text-white/50 mb-3 font-semibold uppercase tracking-wider">
                        Skills & Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {company.skills.slice(0, 4).map((skill, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70 hover:bg-accent/20 hover:border-accent/50 transition-all"
                          >
                            {skill}
                          </motion.div>
                        ))}
                        {company.skills.length > 4 && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70 hover:bg-accent/20 hover:border-accent/50 transition-all"
                          >
                            +{company.skills.length - 4} more
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={() => setSelectedCompany(company)}
                      className="w-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent py-3 rounded-xl font-semibold hover:from-accent hover:to-accent/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Details</span>
                      <HiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Company Detail Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <CompanyDetailModal
            company={selectedCompany}
            onClose={() => setSelectedCompany(null)}
          />
        )}
      </AnimatePresence>

      <Bulb />
    </div>
  );
};

// Company Detail Modal Component
const CompanyDetailModal = ({ company, onClose }) => {
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
        className="relative bg-secondary/95 backdrop-blur-xl border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-6 xl:p-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl xl:text-4xl font-bold text-white mb-2">
                  {company.name}
                </h2>
                <p className="text-lg xl:text-xl text-accent font-semibold mb-3">
                  {company.role}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm text-purple-200 font-medium flex items-center gap-2">
                <HiBriefcase className="w-4 h-4" />
                {company.type === "internship" ? "Internship" : "Full-Time"}
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white/70 flex items-center gap-2">
                <HiCalendarDays className="w-4 h-4" />
                {company.duration}
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white/70 flex items-center gap-2">
                <HiMapPin className="w-4 h-4" />
                {company.location}
              </div>
            </div>

            <p className="text-white/70 text-base xl:text-lg leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {company.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-accent/15 border border-accent/30 text-accent px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          {company.projects && company.projects.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-bold text-xl xl:text-2xl mb-6 flex items-center gap-2">
                <HiRocketLaunch className="w-6 h-6 text-accent" />
                Key Projects ({company.projects.length})
              </h3>
              <div className="space-y-4">
                {company.projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 xl:p-6 space-y-4"
                  >
                    <div>
                      <h4 className="text-lg xl:text-xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm xl:text-base text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {project.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <p className="text-sm font-semibold text-white/80">
                          Key Highlights:
                        </p>
                        {project.highlights.map((highlight, hi) => (
                          <p
                            key={hi}
                            className="text-sm text-white/75 pl-4 border-l-2 border-accent/30"
                          >
                            • {highlight}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {company.achievements && company.achievements.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5 text-green-400" />
                Key Achievements
              </h3>
              <div className="grid gap-3">
                {company.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{achievement}</span>
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

export default Experience;
