"use client";

/**
 * GeeksforGeeksPanel Component
 * Displays detailed GeeksforGeeks statistics
 */

import Link from "next/link";
import {
  HiOutlineTrophy,
  HiOutlineAcademicCap,
  HiOutlineFire,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { BsLightningCharge } from "react-icons/bs";
import { Skeleton, ErrorPanel } from "../ui";
import { platformConfig, PLATFORMS } from "../../_constants";

/**
 * Loading skeleton for GFG panel
 */
const GFGPanelSkeleton = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <Skeleton className="w-32 h-12" />
        <Skeleton className="w-24 h-5" />
      </div>
      <Skeleton className="w-20 h-20 rounded-xl" />
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
      GeeksforGeeks data is temporarily unavailable
    </p>
    <Link
      href={platformConfig[PLATFORMS.GEEKSFORGEEKS].profileUrl}
      target="_blank"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-white/60 hover:text-accent text-sm font-medium transition-all"
    >
      View Profile on GeeksforGeeks
      <HiArrowTopRightOnSquare className="w-4 h-4" />
    </Link>
  </div>
);

/**
 * Stat card component
 */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
    <Icon className="w-5 h-5 mb-2" style={{ color }} />
    <p className="text-2xl font-bold text-white">{value ?? "—"}</p>
    <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
      {label}
    </p>
  </div>
);

/**
 * @param {Object} props
 * @param {Object} props.data - GFG stats data
 * @param {boolean} props.loading - Loading state
 */
export const GeeksforGeeksPanel = ({ data, loading }) => {
  if (loading) return <GFGPanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load GeeksforGeeks data" />;
  if (data.apiUnavailable) return <ApiUnavailablePanel />;

  const stats = [
    {
      icon: HiOutlineTrophy,
      value: data.problemsSolved?.toLocaleString(),
      label: "Problems Solved",
      color: "#2F8D46",
    },
    {
      icon: HiOutlineAcademicCap,
      value: data.instituteRank ? `#${data.instituteRank}` : "—",
      label: "Institute Rank",
      color: "#FFD700",
    },
    {
      icon: HiOutlineFire,
      value: data.currentStreak,
      label: "Current Streak",
      color: "#FF6B6B",
    },
    {
      icon: BsLightningCharge,
      value: data.longestStreak,
      label: "Longest Streak",
      color: "#4ECDC4",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Coding Score Display */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-5xl font-bold text-[#2F8D46]">
            {data.codingScore?.toLocaleString() || "—"}
          </p>
          <p className="text-white/40 text-sm mt-1">Coding Score</p>
          {data.monthlyScore && (
            <p className="text-xs text-white/30 mt-1">
              Monthly: +{data.monthlyScore}
            </p>
          )}
        </div>
        <div className="px-4 py-3 rounded-xl bg-[#2F8D46]/15">
          <BsLightningCharge className="w-8 h-8 text-[#2F8D46]" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Institute Info */}
      {data.institute && (
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-2">
            Institute
          </p>
          <p className="text-sm text-white/70 capitalize">
            {data.institute.toLowerCase()}
          </p>
        </div>
      )}

      {/* Problem of the Day Stats */}
      {data.podSubmissions > 0 && (
        <div className="p-4 rounded-xl bg-[#2F8D46]/10 border border-[#2F8D46]/20">
          <p className="text-[10px] uppercase tracking-wider text-[#2F8D46] font-medium mb-2">
            Problem of the Day
          </p>
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm">Correct Submissions</span>
            <span className="text-lg font-bold text-[#2F8D46]">
              {data.podSubmissions}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeeksforGeeksPanel;
