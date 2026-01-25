/**
 * LeetCodePanel Component
 * Displays detailed LeetCode statistics
 */

import {
  HiMiniCheckBadge,
  HiOutlineTrophy,
  HiOutlineCalendar,
  HiOutlineBolt,
} from "react-icons/hi2";
import { Skeleton, ProgressRing, DifficultyBar, ErrorPanel } from "../ui";

/**
 * Loading skeleton for LeetCode panel
 */
const LeetCodePanelSkeleton = () => (
  <div className="space-y-6">
    <div className="flex gap-6">
      <Skeleton className="w-24 h-24 rounded-full" />
      <div className="flex-1 space-y-3">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-24 rounded-xl" />
      ))}
    </div>
  </div>
);

/**
 * Stat card component
 */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
    <Icon className="w-5 h-5 mb-2" style={{ color }} />
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
      {label}
    </p>
  </div>
);

/**
 * Badge display component
 */
const BadgeDisplay = ({ badges }) => {
  if (!badges?.length) return null;

  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
        Recent Badges
      </p>
      <div className="flex flex-wrap gap-2">
        {badges.slice(0, 4).map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20"
          >
            {badge.icon ? (
              <img src={badge.icon} alt="" className="w-5 h-5" />
            ) : (
              <HiMiniCheckBadge className="w-5 h-5 text-amber-400" />
            )}
            <span className="text-sm text-amber-300">{badge.displayName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * @param {Object} props
 * @param {Object} props.data - LeetCode stats data
 * @param {boolean} props.loading - Loading state
 */
export const LeetCodePanel = ({ data, loading }) => {
  if (loading) return <LeetCodePanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load LeetCode data" />;

  const totalProblems =
    (data.totals?.easy || 0) +
    (data.totals?.medium || 0) +
    (data.totals?.hard || 0);

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="flex items-center gap-6">
        <ProgressRing
          value={data.totalSolved || 0}
          max={totalProblems || 3447}
          size={100}
          color="#FFA116"
        />
        <div>
          <h3 className="text-3xl font-bold text-white">
            {data.totalSolved || 0}
            <span className="text-lg text-white/30 font-normal">
              /{totalProblems || "3447"}
            </span>
          </h3>
          <p className="text-white/50 text-sm">Problems Solved</p>
          {data.ranking && (
            <p className="text-sm text-white/40 mt-1">
              Global Rank: #{data.ranking.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <DifficultyBar
        easy={data.easy || 0}
        medium={data.medium || 0}
        hard={data.hard || 0}
        totals={data.totals}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={HiOutlineTrophy}
          value={data.contestRating || "—"}
          label="Contest Rating"
          color="#FFD700"
        />
        <StatCard
          icon={HiOutlineCalendar}
          value={data.streak || 0}
          label="Day Streak"
          color="#22c55e"
        />
        <StatCard
          icon={HiOutlineBolt}
          value={data.submissions || "—"}
          label="Submissions"
          color="#60a5fa"
        />
      </div>

      {/* Recent Badges */}
      <BadgeDisplay badges={data.badges} />
    </div>
  );
};

export default LeetCodePanel;
