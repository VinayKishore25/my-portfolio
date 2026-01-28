"use client";

/**
 * DifficultyBar Component
 * Displays progress bars for LeetCode difficulty levels
 */

import { LEETCODE_DIFFICULTY_CONFIG } from "../../_constants";

/**
 * @param {Object} props
 * @param {number} props.easy - Number of easy problems solved
 * @param {number} props.medium - Number of medium problems solved
 * @param {number} props.hard - Number of hard problems solved
 * @param {Object} props.totals - Total counts per difficulty
 * @param {number} props.totals.easy - Total easy problems
 * @param {number} props.totals.medium - Total medium problems
 * @param {number} props.totals.hard - Total hard problems
 */
export const DifficultyBar = ({ easy, medium, hard, totals }) => {
  const difficulties = [
    {
      key: "Easy",
      count: easy,
      total: totals?.easy || 0,
      ...LEETCODE_DIFFICULTY_CONFIG.Easy,
    },
    {
      key: "Medium",
      count: medium,
      total: totals?.medium || 0,
      ...LEETCODE_DIFFICULTY_CONFIG.Medium,
    },
    {
      key: "Hard",
      count: hard,
      total: totals?.hard || 0,
      ...LEETCODE_DIFFICULTY_CONFIG.Hard,
    },
  ];

  return (
    <div className="space-y-3">
      {difficulties.map(
        ({ key, count, total, color, bgColor, borderColor, textColor }) => (
          <div key={key}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className={textColor}>{key}</span>
              <span className="text-white/60">
                {count}/{total}
              </span>
            </div>
            <div className={`h-2 rounded-full ${bgColor} overflow-hidden`}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${total > 0 ? (count / total) * 100 : 0}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default DifficultyBar;
