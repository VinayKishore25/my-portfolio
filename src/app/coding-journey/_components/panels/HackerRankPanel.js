"use client";

/**
 * HackerRankPanel Component
 * Displays detailed HackerRank statistics
 */

import { HiMiniCheckBadge } from "react-icons/hi2";
import { Skeleton, ErrorPanel } from "../ui";
import { getHackerRankLevelColor } from "../../_constants";

/**
 * Loading skeleton for HackerRank panel
 */
const HackerRankPanelSkeleton = () => (
  <div className="space-y-6">
    <div className="flex justify-between">
      <Skeleton className="w-32 h-12" />
      <Skeleton className="w-24 h-12" />
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-20 rounded-xl" />
      ))}
    </div>
  </div>
);

/**
 * Badge card component
 */
const BadgeCard = ({ badge }) => {
  const levelColor = getHackerRankLevelColor(badge.level);

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${levelColor}15` }}
      >
        {badge.icon ? (
          <img src={badge.icon} alt="" className="w-6 h-6" />
        ) : (
          <HiMiniCheckBadge className="w-5 h-5" style={{ color: levelColor }} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium truncate">{badge.name}</p>
        <p className="text-xs" style={{ color: levelColor }}>
          {"★".repeat(badge.stars || 1)} {badge.level}
        </p>
      </div>
    </div>
  );
};

/**
 * @param {Object} props
 * @param {Object} props.data - HackerRank stats data
 * @param {boolean} props.loading - Loading state
 */
export const HackerRankPanel = ({ data, loading }) => {
  if (loading) return <HackerRankPanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load HackerRank data" />;

  const badgeCount = data.badgeCount || data.badges?.length || 0;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-white">{badgeCount}</p>
          <p className="text-white/40 text-sm">Skill Badges Earned</p>
        </div>
        {data.fullName && (
          <div className="text-right">
            <p className="text-white/70 font-medium">{data.fullName}</p>
            {data.country && (
              <p className="text-white/40 text-sm">{data.country}</p>
            )}
          </div>
        )}
      </div>

      {/* Skill Badges */}
      {data.badges?.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
            Skill Badges
          </p>
          <div className="grid grid-cols-2 gap-3">
            {data.badges.slice(0, 6).map((badge, idx) => (
              <BadgeCard key={idx} badge={badge} />
            ))}
          </div>
          {data.badges.length > 6 && (
            <p className="text-xs text-white/40 mt-3 text-center">
              +{data.badges.length - 6} more badges
            </p>
          )}
        </div>
      )}

      {/* Skill Scores */}
      {data.scores?.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
            Skill Scores
          </p>
          <div className="flex flex-wrap gap-2">
            {data.scores.slice(0, 5).map((score, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="text-sm text-emerald-300">{score.name}</span>
                <span className="text-sm font-bold text-emerald-400">
                  {score.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HackerRankPanel;
