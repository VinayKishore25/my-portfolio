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
  HiBriefcase,
  HiAcademicCap,
  HiFire,
  HiCalendarDays,
  HiMapPin,
  HiChevronDown,
  HiCheckBadge,
  HiLightBulb,
  HiUserGroup,
  HiXMark,
} from "react-icons/hi2";
import Bulb from "@/components/ui/Bulb";
import { interviewsData, interviewStats } from "@/data/interviews";

const Interviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // "all", "completed"

  // Premium stats data
  const stats = [
    {
      icon: <HiBriefcase className="w-6 h-6" />,
      label: "Total Interviews",
      value: interviewStats.totalInterviews,
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: <HiCheckCircle className="w-6 h-6" />,
      label: "Completed",
      value: interviewStats.completedInterviews,
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: <HiClock className="w-6 h-6" />,
      label: "Avg Duration",
      value: interviewStats.avgDuration,
      color: "from-blue-500 to-cyan-500",
      delay: 0.4,
    },
    {
      icon: <HiFire className="w-6 h-6" />,
      label: "Topics Covered",
      value: interviewStats.totalTopics,
      color: "from-orange-500 to-red-500",
      delay: 0.5,
    },
  ];

  // Filter interviews by search
  const filteredInterviews = useMemo(() => {
    if (!searchQuery.trim() && statusFilter === "all") return interviewsData;
    const query = searchQuery.toLowerCase();
    return interviewsData.filter((interview) => {
      const matchesStatus =
        statusFilter === "all" || interview.status === statusFilter;

      const matchesSearch =
        interview.company.toLowerCase().includes(query) ||
        interview.position.toLowerCase().includes(query) ||
        interview.type.toLowerCase().includes(query) ||
        interview.topics.some((topic) => topic.toLowerCase().includes(query)) ||
        (interview.rounds || []).some(
          (round) =>
            round.title.toLowerCase().includes(query) ||
            round.focus.toLowerCase().includes(query) ||
            round.summary.toLowerCase().includes(query)
        );

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, statusFilter]);

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
              <HiUserGroup className="w-4 h-4" />
              Interview Journey
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
              Interview Experiences
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-3xl mx-auto text-white/70 text-base xl:text-lg leading-relaxed"
          >
            Interviews with leading companies, insights from technical
            assessments, and learnings from preparation and performance across
            various positions.
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
              placeholder="Search by company, position, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent/30 focus:bg-white/10 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Status Filter Buttons */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-12 flex justify-center gap-4 flex-wrap"
        >
          {[
            {
              label: "All Interviews",
              value: "all",
              icon: <HiBriefcase className="w-4 h-4" />,
            },
            {
              label: "Completed",
              value: "Completed",
              icon: <HiCheckBadge className="w-4 h-4" />,
            },
          ].map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStatusFilter(filter.value)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                statusFilter === filter.value
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

        {/* Interviews Grid */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full"
        >
          {filteredInterviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="text-center">
                <HiMagnifyingGlass className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <p className="text-xl text-white/50">
                  No interviews found matching "{searchQuery}"
                </p>
                <p className="text-sm text-white/40 mt-2">
                  Try searching with different keywords
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
              {filteredInterviews.map((interview, idx) => (
                <motion.div
                  key={interview.id}
                  variants={fadeIn("up", 0.3 + idx * 0.1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onClick={() => setSelectedInterview(interview)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 xl:p-8 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl xl:text-2xl font-bold text-white mb-1">
                          {interview.company}
                        </h3>
                        <p className="text-sm xl:text-base text-accent font-semibold mb-2">
                          {interview.position}
                        </p>
                        <div className="flex flex-col gap-1 text-xs xl:text-sm text-white/60">
                          <div className="flex items-center gap-2">
                            <HiCalendarDays className="w-4 h-4 flex-shrink-0" />
                            <span>{interview.date}</span>
                          </div>
                          {interview.location && (
                            <div className="flex items-center gap-2">
                              <HiMapPin className="w-4 h-4 flex-shrink-0" />
                              <span>{interview.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Type & Status Badges */}
                    <div className="mb-6 flex gap-2 flex-wrap">
                      <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium">
                        {interview.type}
                      </div>
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-300 font-medium flex items-center gap-1">
                        <HiCheckCircle className="w-3 h-3" />
                        {interview.status}
                      </div>
                      <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70">
                        {interview.duration}
                      </div>
                      <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-200 font-medium">
                        {interview.roundsCount || interview.rounds?.length || 0}{" "}
                        rounds
                      </div>
                    </div>

                    {/* Topics Tags */}
                    <div className="mb-6">
                      <p className="text-xs xl:text-sm text-white/50 mb-3 font-semibold uppercase tracking-wider">
                        Topics Covered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {interview.topics.slice(0, 3).map((topic, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70 hover:bg-accent/20 hover:border-accent/50 transition-all"
                          >
                            {topic}
                          </motion.div>
                        ))}
                        {interview.topics.length > 3 && (
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/70 hover:bg-accent/20 hover:border-accent/50 transition-all"
                          >
                            +{interview.topics.length - 3} more
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={() => setSelectedInterview(interview)}
                      className="w-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 text-accent py-3 rounded-xl font-semibold hover:from-accent hover:to-accent/90 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Details</span>
                      <HiRocketLaunch className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Interview Detail Modal */}
      <AnimatePresence>
        {selectedInterview && (
          <InterviewDetailModal
            interview={selectedInterview}
            onClose={() => setSelectedInterview(null)}
          />
        )}
      </AnimatePresence>

      <Bulb />
    </div>
  );
};

// Interview Detail Modal Component
const InterviewDetailModal = ({ interview, onClose }) => {
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
                  {interview.company}
                </h2>
                <p className="text-lg xl:text-xl text-accent font-semibold mb-3">
                  {interview.position}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium">
                {interview.type}
              </div>
              <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-sm text-green-300 font-medium flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4" />
                {interview.status}
              </div>
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm text-purple-200 font-medium">
                {interview.roundsCount || interview.rounds?.length || 0} Rounds
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white/70 flex items-center gap-2">
                <HiCalendarDays className="w-4 h-4" />
                {interview.date}
              </div>
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white/70 flex items-center gap-2">
                <HiMapPin className="w-4 h-4" />
                {interview.location}
              </div>
            </div>

            <p className="text-white/70 text-base xl:text-lg leading-relaxed">
              {interview.description}
            </p>
          </div>

          {/* Topics */}
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">
              Topics Covered
            </h3>
            <div className="flex flex-wrap gap-2">
              {interview.topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-accent/15 border border-accent/30 text-accent px-4 py-2 rounded-lg font-semibold text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Rounds Timeline */}
          {interview.rounds && interview.rounds.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-bold text-xl xl:text-2xl mb-6 flex items-center gap-2">
                <HiRocketLaunch className="w-6 h-6 text-accent" />
                Interview Rounds ({interview.rounds.length})
              </h3>
              <div className="space-y-4">
                {interview.rounds.map((round, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 xl:p-6 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg xl:text-xl font-bold text-white mb-2">
                          {round.title}
                        </h4>
                        <p className="text-sm xl:text-base text-white/70 leading-relaxed">
                          {round.summary}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 text-xs">
                        <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-white/70 whitespace-nowrap">
                          {round.duration}
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-accent/15 border border-accent/30 text-accent whitespace-nowrap">
                          {round.format}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-200 text-sm font-medium">
                        Focus: {round.focus}
                      </span>
                      {round.outcome && (
                        <span className="px-3 py-1.5 rounded-lg bg-green-500/15 border border-green-500/30 text-green-200 text-sm font-medium">
                          {round.outcome}
                        </span>
                      )}
                    </div>

                    {round.questions && round.questions.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <p className="text-sm font-semibold text-white/80">
                          Key Questions:
                        </p>
                        {round.questions.map((q, qi) => (
                          <p
                            key={qi}
                            className="text-sm xl:text-base text-white/75 pl-4 border-l-2 border-accent/30"
                          >
                            • {q}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Interviewers */}
          {interview.interviewers && interview.interviewers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <HiUserGroup className="w-5 h-5 text-accent" />
                Interviewers
              </h3>
              <div className="grid gap-3">
                {interview.interviewers.map((interviewer, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <HiCheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white/80">{interviewer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preparation & Learnings Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Preparation */}
            {interview.preparation && interview.preparation.length > 0 && (
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <HiSparkles className="w-5 h-5 text-accent" />
                  Preparation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interview.preparation.map((prep, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-accent/15 border border-accent/30 rounded-lg text-sm text-accent font-medium"
                    >
                      {prep}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Learnings */}
            {interview.learnings && interview.learnings.length > 0 && (
              <div>
                <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                  <HiLightBulb className="w-5 h-5 text-yellow-400" />
                  Key Learnings
                </h3>
                <div className="space-y-3">
                  {interview.learnings.map((learning, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <HiLightBulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{learning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Interviews;
