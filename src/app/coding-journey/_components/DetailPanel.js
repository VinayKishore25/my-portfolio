/**
 * DetailPanel Component
 * Wrapper component that renders the appropriate panel based on active platform
 */

"use client";

import { PLATFORMS } from "../_constants";
import {
  LeetCodePanel,
  CodeforcesPanel,
  CodeChefPanel,
  HackerRankPanel,
  GitHubPanel,
} from "./panels";

/**
 * Map of platform to panel component
 */
const PANEL_MAP = {
  [PLATFORMS.LEETCODE]: LeetCodePanel,
  [PLATFORMS.CODEFORCES]: CodeforcesPanel,
  [PLATFORMS.CODECHEF]: CodeChefPanel,
  [PLATFORMS.HACKERRANK]: HackerRankPanel,
  [PLATFORMS.GITHUB]: GitHubPanel,
};

/**
 * @param {Object} props
 * @param {string} props.platform - Active platform identifier
 * @param {Object} props.data - Platform stats data
 * @param {boolean} props.loading - Loading state
 */
export const DetailPanel = ({ platform, data, loading }) => {
  const PanelComponent = PANEL_MAP[platform] || LeetCodePanel;

  return <PanelComponent data={data} loading={loading} />;
};

export default DetailPanel;
