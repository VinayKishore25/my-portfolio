/**
 * GitHubPanel Component
 * Displays detailed GitHub statistics
 */

import Link from "next/link";
import {
  HiOutlineCodeBracket,
  HiOutlineStar,
  HiOutlineCalendar,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";
import { BsGraphUpArrow } from "react-icons/bs";
import { Skeleton, ErrorPanel } from "../ui";
import { platformConfig, PLATFORMS } from "../../_constants";

/**
 * Loading skeleton for GitHub panel
 */
const GitHubPanelSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-4 gap-3">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-24 rounded-xl" />
      ))}
    </div>
    <Skeleton className="w-full h-20" />
  </div>
);

/**
 * Rate limited fallback component
 */
const RateLimitedPanel = () => (
  <div className="text-center py-8">
    <p className="text-white/60 mb-4">GitHub API rate limit reached</p>
    <Link
      href={platformConfig[PLATFORMS.GITHUB].profileUrl}
      target="_blank"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-white/60 hover:text-accent text-sm font-medium transition-all"
    >
      View Profile on GitHub
      <HiArrowTopRightOnSquare className="w-4 h-4" />
    </Link>
  </div>
);

/**
 * Stat card component
 */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
    <Icon className="w-5 h-5 mx-auto mb-2" style={{ color: color || "#fff" }} />
    <p className="text-xl font-bold text-white">{value}</p>
    <p className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
      {label}
    </p>
  </div>
);

/**
 * @param {Object} props
 * @param {Object} props.data - GitHub stats data
 * @param {boolean} props.loading - Loading state
 */
export const GitHubPanel = ({ data, loading }) => {
  if (loading) return <GitHubPanelSkeleton />;
  if (!data) return <ErrorPanel message="Failed to load GitHub data" />;
  if (data.rateLimited) return <RateLimitedPanel />;

  const stats = [
    {
      icon: HiOutlineCodeBracket,
      value: data.publicRepos,
      label: "Repos",
    },
    {
      icon: HiOutlineStar,
      value: data.totalStars,
      label: "Stars",
      color: "#FFD700",
    },
    {
      icon: BsGraphUpArrow,
      value: data.followers,
      label: "Followers",
    },
    {
      icon: HiOutlineCalendar,
      value: data.contributions || "—",
      label: "Recent",
      color: "#3FB950",
    },
  ];

  return (
    <div className="space-y-6">
      {/* User Info */}
      {data.name && (
        <div className="flex items-center gap-4">
          {data.avatar && (
            <img
              src={data.avatar}
              alt=""
              className="w-14 h-14 rounded-xl border border-white/10"
            />
          )}
          <div>
            <p className="text-xl font-semibold text-white">{data.name}</p>
            {data.bio && (
              <p className="text-sm text-white/50 line-clamp-1">{data.bio}</p>
            )}
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Top Languages */}
      {data.topLanguages?.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
            Top Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {data.topLanguages.map((lang, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-sm bg-white/[0.05] text-white/70 border border-white/[0.08]"
              >
                {lang.name} ({lang.count})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Top Repositories */}
      {data.topRepos?.length > 0 && (
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/40 font-medium mb-3">
            Top Repositories
          </p>
          <div className="space-y-2">
            {data.topRepos.slice(0, 3).map((repo, idx) => (
              <Link
                key={idx}
                href={repo.url}
                target="_blank"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium group-hover:text-accent transition-colors">
                    {repo.name}
                  </p>
                  <p className="text-xs text-white/40 truncate">
                    {repo.description || "No description"}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/40">
                  {repo.language && (
                    <span className="px-2 py-0.5 rounded bg-white/5">
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <HiOutlineStar className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubPanel;
