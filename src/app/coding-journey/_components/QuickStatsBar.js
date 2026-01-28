/**
 * QuickStatsBar Component
 * Displays a horizontal scrollable bar with quick stats from all platforms
 */

"use client";

import { motion } from "framer-motion";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
  SiGithub,
  SiGeeksforgeeks,
} from "react-icons/si";
import { PLATFORMS } from "../_constants";

/**
 * Configuration for quick stats items
 */
const getQuickStatsConfig = (stats, loading) => [
  {
    platform: PLATFORMS.LEETCODE,
    label: "LeetCode",
    value: loading.leetcode ? "..." : stats.leetcode?.totalSolved || "—",
    icon: SiLeetcode,
    color: "#FFA116",
  },
  {
    platform: PLATFORMS.CODEFORCES,
    label: "CF Rating",
    value: loading.codeforces ? "..." : stats.codeforces?.rating || "—",
    icon: SiCodeforces,
    color: "#1F8ACB",
  },
  {
    platform: PLATFORMS.CODECHEF,
    label: "CodeChef",
    value: loading.codechef ? "..." : stats.codechef?.stars || "—",
    icon: SiCodechef,
    color: "#5B4638",
  },
  {
    platform: PLATFORMS.GEEKSFORGEEKS,
    label: "GFG Score",
    value: loading.geeksforgeeks
      ? "..."
      : stats.geeksforgeeks?.codingScore || "—",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
  },
  {
    platform: PLATFORMS.GITHUB,
    label: "GitHub Repos",
    value: loading.github ? "..." : stats.github?.publicRepos || "—",
    icon: SiGithub,
    color: "#fff",
  },
  {
    platform: PLATFORMS.HACKERRANK,
    label: "HR Badges",
    value: loading.hackerrank ? "..." : stats.hackerrank?.badgeCount || "—",
    icon: SiHackerrank,
    color: "#00EA64",
  },
];

/**
 * @param {Object} props
 * @param {Object} props.stats - Stats object keyed by platform
 * @param {Object} props.loading - Loading state object keyed by platform
 */
export const QuickStatsBar = ({ stats, loading }) => {
  const items = getQuickStatsConfig(stats, loading);

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {items.map((item, idx) => (
        <motion.div
          key={item.platform}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] whitespace-nowrap min-w-[130px]"
        >
          <item.icon
            className="w-5 h-5 flex-shrink-0"
            style={{ color: item.color }}
          />
          <div>
            <p className="text-white font-bold">{item.value}</p>
            <p className="text-white/40 text-[10px] uppercase tracking-wider">
              {item.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickStatsBar;
