"use client";

/**
 * CodeChefPanel Component
 * Displays detailed CodeChef statistics
 */

import Link from "next/link";
import {
  HiMiniStar,
  HiOutlineCalendar,
  HiOutlineTrophy,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { Skeleton, ErrorPanel } from "../ui";
import { platformConfig, PLATFORMS } from "../../_constants";

/**
 * Loading skeleton for CodeChef panel
 */
const CodeChefPanelSkeleton = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <Skeleton className="w-32 h-10" />
        <Skeleton className="w-24 h-5" />
      </div>
      <Skeleton className="w-20 h-8 rounded-full" />
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-20 rounded-xl" />
      ))}
    </div>
  </div>
);

/**
 * API Unavailable fallback component
 */
const ApiUnavailablePanel = () => (
  <div className="text-center py-8">
    <p className="text-white/60 mb-4">
      CodeChef API is temporarily unavailable
    </p>
    <Link
      href={platformConfig[PLATFORMS.CODECHEF].profileUrl}
      target="_blank"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-white/60 hover:text-accent text-sm font-medium transition-all"
    >
      View Profile on CodeChef
      <HiArrowTopRightOnSquare className="w-4 h-4" />
    </Link>
  </div>
);

/**
 * @param {Object} props
 * @param {Object} props.data - CodeChef stats data
 * @param {boolean} props.loading - Loading state
 */
export const CodeChefPanel = ({ data, loading }) => {
  if (loading) return <CodeChefPanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load CodeChef data" />;
  if (data.apiUnavailable) return <ApiUnavailablePanel />;

  // Parse star count from string like "2★" or number
  const starCount =
    typeof data.stars === "string"
      ? parseInt(data.stars.replace(/[^\d]/g, "")) || 0
      : parseInt(data.stars) || 0;

  // Format numbers with commas
  const formatNumber = (num) => {
    if (num === null || num === undefined) return "—";
    return num.toLocaleString();
  };

  const stats = [
    { label: "Global Rank", value: formatNumber(data.globalRank) },
    { label: "Country Rank", value: formatNumber(data.countryRank) },
    { label: "Problems Solved", value: formatNumber(data.problemsSolved) },
    { label: "Contests", value: formatNumber(data.contests) },
  ];

  return (
    <div className="space-y-6">
      {/* Rating Display */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-5xl font-bold text-white">
            {data.rating || "Unrated"}
          </p>
          <p className="text-white/40 text-sm mt-1">Current Rating</p>
          {data.highestRating && (
            <p className="text-xs text-white/30 mt-1">
              Max: {data.highestRating}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
          {Array.from({ length: starCount }).map((_, i) => (
            <HiMiniStar key={i} className="w-5 h-5 text-amber-400" />
          ))}
          {starCount === 0 && (
            <span className="text-white/40 text-sm">No stars</span>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
          >
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Contests */}
      {data.recentContests?.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
            Recent Contests
          </p>
          <div className="space-y-2">
            {data.recentContests.slice(0, 3).map((contest, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/70 truncate">
                    {contest.name}
                  </p>
                  <p className="text-xs text-white/30">Rank #{contest.rank}</p>
                </div>
                <span className="text-sm font-medium text-amber-400">
                  {contest.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeChefPanel;
