/**
 * CodeforcesPanel Component
 * Displays detailed Codeforces statistics
 */

import { HiMiniArrowTrendingUp, HiOutlineTrophy } from "react-icons/hi2";
import { Skeleton, ErrorPanel } from "../ui";
import { getCodeforcesRankColor } from "../../_constants";

/**
 * Loading skeleton for Codeforces panel
 */
const CodeforcesPanelSkeleton = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-32 h-5" />
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
 * @param {Object} props
 * @param {Object} props.data - Codeforces stats data
 * @param {boolean} props.loading - Loading state
 */
export const CodeforcesPanel = ({ data, loading }) => {
  if (loading) return <CodeforcesPanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load Codeforces data" />;

  const rankColor = getCodeforcesRankColor(data.rank);

  const stats = [
    { label: "Problems Solved", value: data.problemsSolved || "—" },
    { label: "Contests", value: data.contestsCount || "—" },
    { label: "Max Rating", value: data.maxRating || "—" },
    { label: "Contribution", value: data.contribution || 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Rating Display */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-5xl font-bold" style={{ color: rankColor }}>
            {data.rating || "Unrated"}
          </p>
          <p className="text-white/40 text-sm capitalize mt-1">
            {data.rank || "Unranked"}
          </p>
        </div>
        <div
          className="px-4 py-3 rounded-xl"
          style={{ backgroundColor: `${rankColor}15` }}
        >
          <HiMiniArrowTrendingUp
            className="w-8 h-8"
            style={{ color: rankColor }}
          />
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
                <div className="flex items-center gap-3">
                  <HiOutlineTrophy className="w-4 h-4 text-amber-400/60" />
                  <div>
                    <p className="text-sm text-white/80">
                      {contest.contestName}
                    </p>
                    <p className="text-xs text-white/40">
                      Rank #{contest.rank}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className="text-lg font-bold"
                    style={{
                      color:
                        contest.ratingChange > 0
                          ? "#22c55e"
                          : contest.ratingChange < 0
                            ? "#ef4444"
                            : "#fff",
                    }}
                  >
                    {contest.ratingChange > 0 ? "+" : ""}
                    {contest.ratingChange}
                  </p>
                  <p className="text-xs text-white/40">{contest.newRating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeforcesPanel;
