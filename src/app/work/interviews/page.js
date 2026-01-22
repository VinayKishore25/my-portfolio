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

const Interviews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter interviews by search
  const filteredInterviews = useMemo(() => {
    if (!searchQuery.trim() && statusFilter === "all") return interviewsData;
    const query = searchQuery.toLowerCase();
    const completedStatuses = [
      "Completed",
      "Selected",
      "Rejected",
      "Not shortlisted",
      "Dropped",
      "Offer",
    ];
    return interviewsData.filter((interview) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "Completed"
          ? completedStatuses.includes(interview.status)
          : interview.status === statusFilter);

      const matchesSearch =
        interview.company.toLowerCase().includes(query) ||
        interview.position.toLowerCase().includes(query) ||
        interview.type.toLowerCase().includes(query) ||
        interview.topics.some((topic) => topic.toLowerCase().includes(query)) ||
        (interview.rounds || []).some(
          (round) =>
            round.title.toLowerCase().includes(query) ||
            round.focus.toLowerCase().includes(query) ||
            round.summary.toLowerCase().includes(query),
        );

      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-primary/30 relative overflow-hidden">
      <CursorGlow />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <HiUserGroup className="w-6 h-6 text-white" />
                </div>
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-purple-500/50 to-transparent" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-3">
                Interview <span className="text-accent">Experiences</span>
              </h1>
              <p className="text-white/60 max-w-xl text-sm md:text-base">
                Technical assessments, learnings, and insights from interviews
                with leading companies
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
                  value: interviewStats.totalInterviews,
                  label: "Interviews",
                  icon: <HiBriefcase className="w-4 h-4" />,
                },
                {
                  value: interviewStats.completedInterviews,
                  label: "Completed",
                  icon: <HiCheckCircle className="w-4 h-4" />,
                },
                {
                  value: interviewStats.totalTopics,
                  label: "Topics",
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

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search company, position, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300 text-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2">
              {[
                {
                  label: "All",
                  value: "all",
                  icon: <HiSparkles className="w-4 h-4" />,
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
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    statusFilter === filter.value
                      ? "bg-accent text-white shadow-lg shadow-accent/30"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          {filteredInterviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <HiMagnifyingGlass className="w-8 h-8 text-white/30" />
                </div>
                <p className="text-lg text-white/50">
                  No interviews found matching "{searchQuery}"
                </p>
                <p className="text-sm text-white/40 mt-2">
                  Try searching with different keywords
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6">
              {filteredInterviews.map((interview, idx) => (
                <motion.div
                  key={interview.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  onClick={() => setSelectedInterview(interview)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-5 xl:p-6 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 border border-accent/30 text-accent">
                      {interview.status}
                    </div>

                    {/* Header */}
                    <div className="relative mb-4">
                      <h3 className="text-lg xl:text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {interview.company}
                      </h3>
                      <p className="text-sm text-accent/80 font-medium mb-3">
                        {interview.position}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-white/50">
                        <div className="flex items-center gap-1.5">
                          <HiCalendarDays className="w-3.5 h-3.5" />
                          <span>{interview.date}</span>
                        </div>
                        {interview.location && (
                          <div className="flex items-center gap-1.5">
                            <HiMapPin className="w-3.5 h-3.5" />
                            <span>{interview.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Type & Duration Pills */}
                    <div className="relative mb-5 flex gap-2 flex-wrap">
                      <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium">
                        {interview.type}
                      </span>
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                        {interview.duration}
                      </span>
                    </div>

                    {/* Topics */}
                    <div className="relative mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {interview.topics.slice(0, 3).map((topic, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/60"
                          >
                            {topic}
                          </span>
                        ))}
                        {interview.topics.length > 3 && (
                          <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/50">
                            +{interview.topics.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="relative w-full bg-white/5 border border-white/10 text-white/70 py-2.5 rounded-xl text-sm font-medium group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <HiRocketLaunch className="w-4 h-4" />
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Bulb />

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
