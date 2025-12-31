"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { codingProfiles } from "@/data/coding-profiles";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiHackerrank,
  SiGithub,
} from "react-icons/si";
import {
  HiOutlineFire,
  HiOutlineTrophy,
  HiOutlineChartBar,
  HiOutlineCodeBracket,
  HiOutlineStar,
  HiArrowTopRightOnSquare,
  HiOutlineCalendarDays,
  HiChevronUp,
  HiChevronDown,
  HiMiniCheckBadge,
} from "react-icons/hi2";
import { BsGraphUpArrow, BsLightningCharge, BsActivity } from "react-icons/bs";
import Link from "next/link";

// Platform Icons Map
const platformIcons = {
  leetcode: SiLeetcode,
  codechef: SiCodechef,
  codeforces: SiCodeforces,
  hackerrank: SiHackerrank,
  github: SiGithub,
};

// Compact Heatmap Component - supports multiple data formats
const MiniHeatmap = ({ data, weeks = 20, color = null }) => {
  const heatmapData = useMemo(() => {
    if (!data) return [];

    // Handle CodeChef/direct array format: [{ date: "2024-1-3", value: 2 }]
    if (Array.isArray(data)) {
      return data.map((item) => ({
        date: new Date(item.date),
        count: item.value || 0,
      }));
    }

    // Handle LeetCode submissionCalendar format (JSON string with timestamps)
    if (data.submissionCalendar) {
      try {
        const calendar = JSON.parse(data.submissionCalendar);
        return Object.entries(calendar).map(([timestamp, count]) => ({
          date: new Date(parseInt(timestamp) * 1000),
          count,
        }));
      } catch {
        return [];
      }
    }

    return [];
  }, [data]);

  const weeksData = useMemo(() => {
    const result = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - (weeks * 7 - 1));

    const dateCountMap = {};
    heatmapData.forEach((item) => {
      const dateKey = item.date.toISOString().split("T")[0];
      dateCountMap[dateKey] = (dateCountMap[dateKey] || 0) + item.count;
    });

    for (let week = 0; week < weeks; week++) {
      const weekDays = [];
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + week * 7 + day);
        const dateKey = currentDate.toISOString().split("T")[0];
        weekDays.push({
          date: currentDate,
          count: dateCountMap[dateKey] || 0,
        });
      }
      result.push(weekDays);
    }
    return result;
  }, [heatmapData, weeks]);

  const getIntensity = (count) => {
    if (color) {
      // Custom color support
      if (count === 0) return "bg-white/[0.03]";
      if (count <= 2) return `opacity-40`;
      if (count <= 5) return `opacity-60`;
      if (count <= 10) return `opacity-80`;
      return `opacity-100`;
    }
    if (count === 0) return "bg-white/[0.03]";
    if (count <= 2) return "bg-accent/25";
    if (count <= 5) return "bg-accent/50";
    if (count <= 10) return "bg-accent/75";
    return "bg-accent";
  };

  if (heatmapData.length === 0) return null;

  return (
    <div className="flex gap-[2px] mt-2">
      {weeksData.map((week, weekIdx) => (
        <div key={weekIdx} className="flex flex-col gap-[2px]">
          {week.map((day, dayIdx) => (
            <div
              key={dayIdx}
              className={`w-[8px] h-[8px] rounded-[2px] ${
                color ? "" : getIntensity(day.count)
              } transition-all hover:scale-150 hover:ring-1 hover:ring-white/30`}
              style={
                color && day.count > 0
                  ? {
                      backgroundColor: color,
                      opacity: Math.min(0.3 + (day.count / 10) * 0.7, 1),
                    }
                  : color
                  ? {}
                  : {}
              }
              title={`${day.date.toLocaleDateString()}: ${
                day.count
              } submissions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

// Animated Counter
const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (typeof value !== "number") return;
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>{typeof value === "number" ? display.toLocaleString() : value}</span>
  );
};

// Progress Ring Component
const ProgressRing = ({
  progress,
  size = 44,
  strokeWidth = 3,
  color = "#f13024",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
};

// Difficulty Bar Component
const DifficultyBar = ({ easy, medium, hard, total }) => {
  const easyPct = (easy / total) * 100;
  const mediumPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex h-2 rounded-full overflow-hidden bg-white/5">
        <div
          className="bg-emerald-500 transition-all duration-1000"
          style={{ width: `${easyPct}%` }}
        />
        <div
          className="bg-amber-500 transition-all duration-1000"
          style={{ width: `${mediumPct}%` }}
        />
        <div
          className="bg-rose-500 transition-all duration-1000"
          style={{ width: `${hardPct}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] font-medium">
        <span className="text-emerald-400">{easy} Easy</span>
        <span className="text-amber-400">{medium} Med</span>
        <span className="text-rose-400">{hard} Hard</span>
      </div>
    </div>
  );
};

// Compact Stat Pill
const StatPill = ({ icon: Icon, value, label, color = "#f13024" }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
    <Icon className="w-3.5 h-3.5" style={{ color }} />
    <span className="text-white font-semibold text-sm">{value}</span>
    <span className="text-white/40 text-xs hidden sm:inline">{label}</span>
  </div>
);

// Platform Mini Card
const PlatformMiniCard = ({ platform, profile, isActive, onClick }) => {
  const Icon = platformIcons[platform];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 w-full ${
        isActive
          ? "bg-white/[0.08] border-accent/50 shadow-lg shadow-accent/10"
          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10"
      }`}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
        style={{
          backgroundColor: isActive
            ? `${profile.color}20`
            : "rgba(255,255,255,0.05)",
        }}
      >
        <Icon
          className="w-5 h-5 transition-colors"
          style={{ color: isActive ? profile.color : "rgba(255,255,255,0.5)" }}
        />
      </div>
      <div className="text-left">
        <p
          className={`text-sm font-medium transition-colors ${
            isActive ? "text-white" : "text-white/70"
          }`}
        >
          {profile.name}
        </p>
        <p className="text-[10px] text-white/40">@{profile.username}</p>
      </div>
      {isActive && (
        <motion.div
          layoutId="activePill"
          className="absolute right-3 w-1.5 h-1.5 rounded-full bg-accent"
        />
      )}
    </motion.button>
  );
};

// LeetCode Detail Panel
const LeetCodePanel = ({ data, profile }) => {
  if (!data) return <LoadingPanel />;

  const totalProblems = 3400; // Approximate total on LeetCode
  const solvedPercent = Math.round((data.totalSolved / totalProblems) * 100);

  return (
    <div className="space-y-5">
      {/* Header Stats */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">
              <AnimatedNumber value={data.totalSolved} />
            </span>
            <span className="text-white/40 text-sm">problems solved</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <StatPill
              icon={HiOutlineTrophy}
              value={`#${data.ranking?.toLocaleString()}`}
              label="rank"
              color="#FFD700"
            />
            <StatPill
              icon={HiOutlineFire}
              value={data.streak}
              label="streak"
              color="#FF6B6B"
            />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <ProgressRing progress={solvedPercent} size={56} />
          <span className="absolute text-xs font-semibold text-white">
            {solvedPercent}%
          </span>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <DifficultyBar
        easy={data.easySolved}
        medium={data.mediumSolved}
        hard={data.hardSolved}
        total={data.totalSolved}
      />

      {/* Activity Heatmap */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Activity · Last 20 weeks
          </span>
          <span className="text-[10px] text-white/30">
            {data.totalActiveDays} active days
          </span>
        </div>
        <MiniHeatmap data={data} weeks={20} />
      </div>

      {/* Badges */}
      {data.badges && data.badges.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Badges · {data.badges.length} earned
          </span>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.badges.slice(0, 6).map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]"
                title={badge.displayName}
              >
                {badge.icon ? (
                  <img src={badge.icon} alt="" className="w-4 h-4" />
                ) : (
                  <HiMiniCheckBadge className="w-4 h-4 text-accent" />
                )}
                <span className="text-[10px] text-white/60 max-w-[80px] truncate">
                  {badge.displayName}
                </span>
              </div>
            ))}
            {data.badges.length > 6 && (
              <span className="text-[10px] text-white/40 self-center">
                +{data.badges.length - 6} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Codeforces Detail Panel
const CodeforcesPanel = ({ data, profile }) => {
  if (!data) return <LoadingPanel />;

  const getRankColor = (rank) => {
    const colors = {
      newbie: "#808080",
      pupil: "#008000",
      specialist: "#03A89E",
      expert: "#0000FF",
      "candidate master": "#AA00AA",
      master: "#FF8C00",
      "international master": "#FF8C00",
      grandmaster: "#FF0000",
    };
    return colors[rank?.toLowerCase()] || "#808080";
  };

  const ratingChange =
    data.ratingHistory?.length > 0
      ? data.ratingHistory[data.ratingHistory.length - 1].newRating -
        data.ratingHistory[data.ratingHistory.length - 1].oldRating
      : 0;

  return (
    <div className="space-y-5">
      {/* Rating Display */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span
              className="text-4xl font-bold"
              style={{ color: getRankColor(data.rank) }}
            >
              <AnimatedNumber value={data.rating || 0} />
            </span>
            <span className="text-white/40 text-sm">rating</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="px-2 py-0.5 rounded text-xs font-medium capitalize"
              style={{
                backgroundColor: `${getRankColor(data.rank)}15`,
                color: getRankColor(data.rank),
              }}
            >
              {data.rank || "Unrated"}
            </span>
            {ratingChange !== 0 && (
              <span
                className={`flex items-center text-xs ${
                  ratingChange > 0 ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {ratingChange > 0 ? <HiChevronUp /> : <HiChevronDown />}
                {Math.abs(ratingChange)}
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[10px] uppercase tracking-wider">
            Max Rating
          </p>
          <p className="text-xl font-semibold text-white">
            {data.maxRating || "—"}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p className="text-lg font-semibold text-white">
            {data.contestsParticipated}
          </p>
          <p className="text-[10px] text-white/40">Contests</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p
            className={`text-lg font-semibold ${
              data.contribution >= 0 ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {data.contribution > 0 ? "+" : ""}
            {data.contribution}
          </p>
          <p className="text-[10px] text-white/40">Contribution</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p className="text-lg font-semibold text-white">
            {data.friendOfCount}
          </p>
          <p className="text-[10px] text-white/40">Friends</p>
        </div>
      </div>

      {/* Recent Contests */}
      {data.ratingHistory && data.ratingHistory.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Recent Contests
          </span>
          <div className="mt-2 space-y-1.5">
            {data.ratingHistory
              .slice(-3)
              .reverse()
              .map((contest, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="text-[11px] text-white/60 truncate max-w-[180px]">
                    {contest.contestName}
                  </span>
                  <span
                    className={`text-[11px] font-medium ${
                      contest.newRating > contest.oldRating
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {contest.newRating > contest.oldRating ? "+" : ""}
                    {contest.newRating - contest.oldRating}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

// GitHub Detail Panel
const GitHubPanel = ({ data, profile }) => {
  if (!data) return <LoadingPanel />;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start gap-3">
        {data.avatar && (
          <img
            src={data.avatar}
            alt=""
            className="w-12 h-12 rounded-xl border border-white/10"
          />
        )}
        <div className="flex-1">
          <p className="text-white font-semibold">
            {data.name || data.username}
          </p>
          <p className="text-white/40 text-xs line-clamp-2">
            {data.bio || "No bio"}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        {[
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
          { icon: BsGraphUpArrow, value: data.followers, label: "Followers" },
          { icon: BsActivity, value: data.totalForks, label: "Forks" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <stat.icon
              className="w-4 h-4 mx-auto mb-1"
              style={{ color: stat.color || "#fff" }}
            />
            <p className="text-sm font-semibold text-white">{stat.value}</p>
            <p className="text-[9px] text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Languages */}
      {data.topLanguages && data.topLanguages.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Top Languages
          </span>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {data.topLanguages.slice(0, 5).map((lang, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-white/70 border border-white/[0.06]"
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Top Repos */}
      {data.topRepos && data.topRepos.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Featured Repos
          </span>
          <div className="mt-2 space-y-1.5">
            {data.topRepos.slice(0, 3).map((repo, idx) => (
              <Link
                key={idx}
                href={repo.url}
                target="_blank"
                className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white/80 font-medium truncate group-hover:text-accent transition-colors">
                    {repo.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-0.5">
                    <HiOutlineStar className="w-3 h-3" />
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

// CodeChef Detail Panel
const CodeChefPanel = ({ data, profile }) => {
  if (!data) return <LoadingPanel />;

  // Check if we have real data or just fallback
  const hasRealData = data.rating || data.problemsSolved;

  if (!hasRealData) {
    return <GenericPanel platform="codechef" profile={profile} />;
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white">
              <AnimatedNumber value={data.rating || 0} />
            </span>
            <span className="text-white/40 text-sm">rating</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-amber-500/15 text-amber-400">
              {data.stars || "Unrated"}
            </span>
            {data.fullName && (
              <span className="text-white/50 text-xs">{data.fullName}</span>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[10px] uppercase tracking-wider">
            Max Rating
          </p>
          <p className="text-xl font-semibold text-white">
            {data.highestRating || "—"}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p className="text-lg font-semibold text-white">
            {data.problemsSolved || 0}
          </p>
          <p className="text-[10px] text-white/40">Problems</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p className="text-lg font-semibold text-white">
            {data.contestsParticipated || 0}
          </p>
          <p className="text-[10px] text-white/40">Contests</p>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
          <p className="text-lg font-semibold text-white">
            {data.countryRank || data.globalRank || "—"}
          </p>
          <p className="text-[10px] text-white/40">
            {data.countryRank ? "Country" : "Global"} Rank
          </p>
        </div>
      </div>

      {/* Heatmap */}
      {data.heatMap && data.heatMap.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Problem Solving Activity
          </span>
          <MiniHeatmap data={data.heatMap} color="#FFA116" />
        </div>
      )}

      {/* Recent Contests */}
      {data.ratingHistory && data.ratingHistory.length > 0 && (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Recent Contests
          </span>
          <div className="mt-2 space-y-1.5 max-h-[120px] overflow-y-auto scrollbar-thin">
            {data.ratingHistory
              .slice(-5)
              .reverse()
              .map((contest, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-md bg-white/[0.02] border border-white/[0.04]"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/60 truncate">
                      {contest.contestName}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="text-white/40">#{contest.rank}</span>
                    <span className="text-amber-400 font-medium">
                      {contest.rating}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {data.country && (
        <div className="flex items-center gap-2 text-white/50 text-sm">
          🇮🇳 <span>{data.country}</span>
        </div>
      )}

      <Link
        href={profile.profileUrl}
        target="_blank"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 text-white/80 hover:text-accent text-sm font-medium transition-all"
      >
        View Full Profile
        <HiArrowTopRightOnSquare className="w-4 h-4" />
      </Link>
    </div>
  );
};

// HackerRank Detail Panel
const HackerRankPanel = ({ data, profile }) => {
  if (!data) return <LoadingPanel />;

  const hasRealData = data.badges && data.badges.length > 0;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start gap-3">
        {data.avatar && (
          <img
            src={data.avatar}
            alt=""
            className="w-12 h-12 rounded-xl border border-white/10"
          />
        )}
        <div className="flex-1">
          <p className="text-white font-semibold">
            {data.fullName || data.username}
          </p>
          {data.country && (
            <p className="text-white/40 text-xs">{data.country}</p>
          )}
          {data.school && (
            <p className="text-white/40 text-xs">{data.school}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-white/40 text-[10px] uppercase tracking-wider">
            Badges
          </p>
          <p className="text-xl font-semibold text-accent">
            {data.badgeCount || data.badges?.length || 0}
          </p>
        </div>
      </div>

      {/* Badges */}
      {hasRealData ? (
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
            Skill Badges
          </span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {data.badges.slice(0, 6).map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
              >
                {badge.badge_icon_url ? (
                  <img src={badge.badge_icon_url} alt="" className="w-8 h-8" />
                ) : (
                  <HiMiniCheckBadge className="w-6 h-6 text-green-400" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-white/80 font-medium truncate">
                    {badge.badge_name || badge.name}
                  </p>
                  {badge.stars && (
                    <p className="text-[10px] text-yellow-400">
                      {"★".repeat(badge.stars)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {data.badges.length > 6 && (
            <p className="text-[10px] text-white/40 mt-2 text-center">
              +{data.badges.length - 6} more badges
            </p>
          )}
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
          <p className="text-white/60 text-sm mb-3">
            View my HackerRank profile for skill badges and verified
            certifications.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Problem Solving", "Python", "Java", "SQL", "JavaScript"].map(
              (skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-md text-[10px] bg-white/[0.05] text-white/50 border border-white/[0.06]"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      )}

      <Link
        href={profile.profileUrl}
        target="_blank"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 text-white/80 hover:text-accent text-sm font-medium transition-all"
      >
        View Profile & Certifications
        <HiArrowTopRightOnSquare className="w-4 h-4" />
      </Link>
    </div>
  );
};

// Generic Platform Panel (Fallback)
const GenericPanel = ({ platform, profile }) => {
  const features = {
    codechef: ["Contest Ratings", "Problem Archive", "Competitions"],
    hackerrank: ["Skill Certifications", "Badges", "Interview Prep"],
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${profile.color}15` }}
        >
          {platformIcons[platform] && (
            <span style={{ color: profile.color }}>
              {(() => {
                const Icon = platformIcons[platform];
                return <Icon className="w-6 h-6" />;
              })()}
            </span>
          )}
        </div>
        <div>
          <p className="text-white font-semibold">{profile.name}</p>
          <p className="text-white/40 text-xs">@{profile.username}</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06]">
        <p className="text-white/60 text-sm mb-3">
          View my complete profile for detailed statistics, achievements, and
          progress.
        </p>
        <div className="flex flex-wrap gap-2">
          {features[platform]?.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded-md text-[10px] bg-white/[0.05] text-white/50 border border-white/[0.06]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={profile.profileUrl}
        target="_blank"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-accent/30 text-white/80 hover:text-accent text-sm font-medium transition-all"
      >
        View Full Profile
        <HiArrowTopRightOnSquare className="w-4 h-4" />
      </Link>
    </div>
  );
};

// Loading Panel
const LoadingPanel = () => (
  <div className="flex items-center justify-center h-48">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      <span className="text-white/40 text-xs">Loading stats...</span>
    </div>
  </div>
);

// Quick Stats Overview Cards
const QuickStatsBar = ({ stats }) => {
  // Calculate total solved from all platforms
  const totalSolved =
    (stats.leetcode?.totalSolved || 0) + (stats.codechef?.problemsSolved || 0);

  const items = [
    {
      label: "Total Solved",
      value: totalSolved || "1300+",
      icon: HiOutlineCodeBracket,
      color: "#f13024",
    },
    {
      label: "LeetCode Rank",
      value: stats.leetcode?.ranking
        ? `#${(stats.leetcode.ranking / 1000).toFixed(0)}k`
        : "—",
      icon: HiOutlineTrophy,
      color: "#FFD700",
    },
    {
      label: "CF Rating",
      value: stats.codeforces?.rating || "—",
      icon: HiOutlineChartBar,
      color: "#1F8ACB",
    },
    {
      label: "CodeChef",
      value: stats.codechef?.rating || "—",
      icon: SiCodechef,
      color: "#5B4638",
    },
    {
      label: "GitHub Repos",
      value: stats.github?.publicRepos || "—",
      icon: SiGithub,
      color: "#fff",
    },
    {
      label: "Streak",
      value: stats.leetcode?.streak ? `${stats.leetcode.streak}d` : "—",
      icon: HiOutlineFire,
      color: "#FF6B6B",
    },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] whitespace-nowrap"
        >
          <item.icon className="w-4 h-4" style={{ color: item.color }} />
          <div>
            <p className="text-white font-semibold text-sm">{item.value}</p>
            <p className="text-white/40 text-[9px]">{item.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Main Page Component
const CodingJourneyPage = () => {
  const [stats, setStats] = useState({});
  const [activePlatform, setActivePlatform] = useState("leetcode");
  const [loading, setLoading] = useState(true);

  const platformList = [
    "leetcode",
    "codeforces",
    "github",
    "codechef",
    "hackerrank",
  ];

  useEffect(() => {
    const fetchAllStats = async () => {
      setLoading(true);
      // Fetch from ALL platforms
      const platforms = [
        "leetcode",
        "codeforces",
        "github",
        "codechef",
        "hackerrank",
      ];
      const results = {};

      await Promise.all(
        platforms.map(async (platform) => {
          try {
            const res = await fetch(
              `/api/coding-stats?platform=${platform}&username=${codingProfiles[platform].username}`
            );
            const data = await res.json();
            if (data.success) {
              results[platform] = data.data;
            }
          } catch (error) {
            console.error(`Error fetching ${platform}:`, error);
          }
        })
      );

      setStats(results);
      setLoading(false);
    };

    fetchAllStats();
  }, []);

  const renderPanel = () => {
    switch (activePlatform) {
      case "leetcode":
        return (
          <LeetCodePanel
            data={stats.leetcode}
            profile={codingProfiles.leetcode}
          />
        );
      case "codeforces":
        return (
          <CodeforcesPanel
            data={stats.codeforces}
            profile={codingProfiles.codeforces}
          />
        );
      case "github":
        return (
          <GitHubPanel data={stats.github} profile={codingProfiles.github} />
        );
      case "codechef":
        return (
          <CodeChefPanel
            data={stats.codechef}
            profile={codingProfiles.codechef}
          />
        );
      case "hackerrank":
        return (
          <HackerRankPanel
            data={stats.hackerrank}
            profile={codingProfiles.hackerrank}
          />
        );
      default:
        return (
          <GenericPanel
            platform={activePlatform}
            profile={codingProfiles[activePlatform]}
          />
        );
    }
  };

  return (
    <div className="relative bg-primary/30 min-h-screen pt-24 sm:pt-28 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 relative max-w-5xl">
        {/* Compact Header */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <BsLightningCharge className="w-3 h-3 text-accent" />
            <span className="text-[10px] uppercase tracking-wider text-accent font-medium">
              Live Stats
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Coding <span className="text-accent">Journey</span>
          </h1>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Track my competitive programming progress across 6 platforms
          </p>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <QuickStatsBar stats={stats} />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Platform Selector */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 space-y-2"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-3 px-1">
              Select Platform
            </p>
            {platformList.map((platform) => (
              <PlatformMiniCard
                key={platform}
                platform={platform}
                profile={codingProfiles[platform]}
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
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = platformIcons[activePlatform];
                    return (
                      <Icon
                        className="w-5 h-5"
                        style={{ color: codingProfiles[activePlatform].color }}
                      />
                    );
                  })()}
                  <span className="text-white font-medium">
                    {codingProfiles[activePlatform].name}
                  </span>
                </div>
                <Link
                  href={codingProfiles[activePlatform].profileUrl}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-accent transition-colors"
                >
                  View profile
                  <HiArrowTopRightOnSquare className="w-3 h-3" />
                </Link>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderPanel()}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* GitHub Stats Embed Section */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="mt-10"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-[10px] uppercase tracking-wider text-white/30 font-medium">
              Visual Statistics
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GitHub Contribution Graph */}
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 overflow-hidden">
              <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-3">
                GitHub Contributions
              </p>
              <div className="rounded-lg overflow-hidden bg-[#0d1117]">
                <img
                  src={`https://ghchart.rshah.org/f13024/VinayKishore25`}
                  alt="GitHub Contributions"
                  className="w-full"
                />
              </div>
            </div>

            {/* LeetCode Card */}
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 overflow-hidden">
              <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-3">
                LeetCode Stats
              </p>
              <div className="flex justify-center">
                <img
                  src={`https://leetcard.jacoblin.cool/VinayKishore25?theme=dark&font=Nunito&ext=heatmap`}
                  alt="LeetCode Stats"
                  className="max-w-full h-auto"
                  style={{ maxHeight: "180px" }}
                />
              </div>
            </div>
          </div>

          {/* GitHub Streak */}
          <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 overflow-hidden">
            <p className="text-[10px] uppercase tracking-wider text-white/30 font-medium mb-3">
              GitHub Streak
            </p>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=VinayKishore25&theme=transparent&hide_border=true&ring=f13024&fire=f13024&currStreakLabel=f13024`}
                alt="GitHub Streak"
                className="max-w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          animate="show"
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-xs">
            Want to connect? Let&apos;s solve problems together.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            {platformList.slice(0, 4).map((platform) => {
              const Icon = platformIcons[platform];
              return (
                <Link
                  key={platform}
                  href={codingProfiles[platform].profileUrl}
                  target="_blank"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.08] hover:border-accent/30 transition-all group"
                >
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingJourneyPage;
