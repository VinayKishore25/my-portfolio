/**
 * Coding Journey Page
 * 
 * Displays real-time statistics from competitive programming platforms.
 * Architecture follows separation of concerns with:
 * - Constants: Platform configuration
 * - Hooks: Data fetching logic
 * - Components: UI components and panels
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsLightningCharge } from "react-icons/bs";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

// Animations
import { fadeIn } from "@/lib/animations";

// Local modules
import { platformConfig, PLATFORM_LIST, PLATFORMS } from "./_constants";
import { useCodingStats } from "./_hooks";
import { PlatformCard, QuickStatsBar, DetailPanel } from "./_components";

/**
 * Page Header Component
 */
const PageHeader = () => (
  <motion.div
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    animate="show"
    className="text-center mb-10"
  >
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-5">
      <BsLightningCharge className="w-4 h-4 text-accent" />
      <span className="text-xs uppercase tracking-wider text-accent font-medium">
        Live Stats
      </span>
    </div>
    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
      My Coding <span className="text-accent">Journey</span>
    </h1>
    <p className="text-white/50 text-base max-w-lg mx-auto">
      Real-time statistics from competitive programming platforms
    </p>
  </motion.div>
);

/**
 * Background decoration component
 */
const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
  </div>
);

/**
 * Panel Header Component
 */
const PanelHeader = ({ platform }) => {
  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${config.color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color: config.color }} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">{config.name}</h2>
          <p className="text-xs text-white/40">@{config.username}</p>
        </div>
      </div>
      <Link
        href={config.profileUrl}
        target="_blank"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 text-white/60 hover:text-accent text-sm font-medium transition-all"
      >
        View Profile
        <HiArrowTopRightOnSquare className="w-4 h-4" />
      </Link>
    </div>
  );
};

/**
 * Footer CTA Component
 */
const FooterCTA = () => (
  <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    animate="show"
    className="mt-12 text-center"
  >
    <div className="inline-flex items-center gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
      <p className="text-white/40 text-sm">Connect with me on</p>
      <div className="flex items-center gap-2">
        {PLATFORM_LIST.map((platform) => {
          const config = platformConfig[platform];
          const Icon = config.icon;
          return (
            <Link
              key={platform}
              href={config.profileUrl}
              target="_blank"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all group"
            >
              <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  </motion.div>
);

/**
 * Main Page Component
 */
const CodingJourneyPage = () => {
  const [activePlatform, setActivePlatform] = useState(PLATFORMS.LEETCODE);
  const { stats, loading } = useCodingStats();

  return (
    <div className="relative bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <BackgroundDecoration />

      <div className="container mx-auto px-4 relative max-w-6xl">
        <PageHeader />

        {/* Quick Stats Bar */}
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <QuickStatsBar stats={stats} loading={loading} />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Platform Selector */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 space-y-3"
          >
            <p className="text-xs uppercase tracking-wider text-white/30 font-medium mb-4 px-1">
              Select Platform
            </p>
            {PLATFORM_LIST.map((platform) => (
              <PlatformCard
                key={platform}
                platform={platform}
                data={stats[platform]}
                loading={loading[platform]}
                isActive={activePlatform === platform}
                onClick={() => setActivePlatform(platform)}
              />
            ))}
          </motion.div>

          {/* Detail Panel */}
          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            animate="show"
            className="lg:col-span-8"
          >
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
              <PanelHeader platform={activePlatform} />

              {/* Panel Content with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <DetailPanel
                    platform={activePlatform}
                    data={stats[activePlatform]}
                    loading={loading[activePlatform]}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <FooterCTA />
      </div>
    </div>
  );
};

export default CodingJourneyPage;
