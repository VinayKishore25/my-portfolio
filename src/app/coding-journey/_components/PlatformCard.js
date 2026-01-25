/**
 * PlatformCard Component
 * Displays a selectable platform card with loading/active states
 */

"use client";

import { motion } from "framer-motion";
import { platformConfig, PLATFORMS } from "../_constants";
import { Skeleton } from "./ui";

/**
 * Get quick stat value for each platform
 * @param {string} platform - Platform identifier
 * @param {Object} data - Platform stats data
 * @returns {string} Quick stat value
 */
const getQuickStat = (platform, data) => {
  if (!data) return "—";

  switch (platform) {
    case PLATFORMS.LEETCODE:
      return `${data.totalSolved || 0} solved`;
    case PLATFORMS.CODEFORCES:
      return data.rank || "Unrated";
    case PLATFORMS.CODECHEF:
      return data.stars || "No stars";
    case PLATFORMS.HACKERRANK:
      return `${data.badgeCount || 0} badges`;
    case PLATFORMS.GITHUB:
      return `${data.publicRepos || 0} repos`;
    default:
      return "—";
  }
};

/**
 * Loading skeleton for platform card
 */
const PlatformCardSkeleton = ({ config }) => (
  <div className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4">
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${config.color}10` }}
    >
      <config.icon className="w-6 h-6" style={{ color: config.color }} />
    </div>
    <div className="flex-1">
      <p className="font-semibold text-white/80">{config.name}</p>
      <Skeleton className="w-20 h-4 mt-1" />
    </div>
  </div>
);

/**
 * @param {Object} props
 * @param {string} props.platform - Platform identifier
 * @param {Object} props.data - Platform stats data
 * @param {boolean} props.loading - Loading state
 * @param {boolean} props.isActive - Whether this card is currently selected
 * @param {Function} props.onClick - Click handler
 */
export const PlatformCard = ({
  platform,
  data,
  loading,
  isActive,
  onClick,
}) => {
  const config = platformConfig[platform];

  if (!config) return null;

  if (loading) {
    return <PlatformCardSkeleton config={config} />;
  }

  const Icon = config.icon;
  const quickStat = getQuickStat(platform, data);

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center gap-4 ${
        isActive
          ? "bg-white/[0.06] border-2"
          : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]"
      }`}
      style={{
        borderColor: isActive ? `${config.color}40` : undefined,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: isActive ? `${config.color}20` : `${config.color}10`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: config.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold transition-colors ${isActive ? "text-white" : "text-white/80"}`}
        >
          {config.name}
        </p>
        <p className="text-sm text-white/40 truncate">{quickStat}</p>
      </div>
      {isActive && (
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: config.color }}
        />
      )}
    </motion.button>
  );
};

export default PlatformCard;
