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
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";
import { companiesData, experienceStats } from "@/data/companies";

const Experience = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [expandedCompany, setExpandedCompany] = useState(null);

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
    if (!searchQuery.trim()) return companiesData;
    const query = searchQuery.toLowerCase();
    return companiesData.filter(
      (company) =>
        company.name.toLowerCase().includes(query) ||
        company.role.toLowerCase().includes(query) ||
        company.skills.some((skill) => skill.toLowerCase().includes(query))
    );
  }, [searchQuery]);

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
                  No companies found matching "{searchQuery}"
                </p>
                <p className="text-sm text-white/40 mt-2">
                  Try searching with different keywords
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
                  onClick={() =>
                    setExpandedCompany(
                      expandedCompany === company.id ? null : company.id
                    )
                  }
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
                      <motion.div
                        animate={{
                          rotate: expandedCompany === company.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <HiChevronDown className="w-6 h-6 text-white/60 group-hover:text-accent" />
                      </motion.div>
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

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedCompany === company.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-white/20 pt-6 mt-6 space-y-6"
                        >
                          {/* Projects Section */}
                          {company.projects && company.projects.length > 0 && (
                            <div>
                              <h4 className="text-sm xl:text-base font-bold text-white mb-3 flex items-center gap-2">
                                <HiRocketLaunch className="w-4 h-4 text-accent" />
                                Key Projects ({company.projects.length})
                              </h4>
                              <div className="space-y-3">
                                {company.projects.map((project, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all"
                                  >
                                    <p className="text-sm font-semibold text-white mb-2">
                                      {project.title}
                                    </p>
                                    <p className="text-xs text-white/60 mb-2">
                                      {project.description}
                                    </p>
                                    {project.technologies && (
                                      <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map(
                                          (tech, ti) => (
                                            <span
                                              key={ti}
                                              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded"
                                            >
                                              {tech}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Achievements Section */}
                          {company.achievements &&
                            company.achievements.length > 0 && (
                              <div>
                                <h4 className="text-sm xl:text-base font-bold text-white mb-3 flex items-center gap-2">
                                  <HiCheckCircle className="w-4 h-4 text-green-400" />
                                  Key Achievements
                                </h4>
                                <div className="space-y-2">
                                  {company.achievements.map(
                                    (achievement, i) => (
                                      <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-2 text-xs xl:text-sm"
                                      >
                                        <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-white/70">
                                          {achievement}
                                        </p>
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Bulb />
    </div>
  );
};

export default Experience;
