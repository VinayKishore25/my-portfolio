/**
 * Coding Stats API Route
 *
 * Provides a unified API endpoint for fetching coding platform statistics.
 * Supports LeetCode, Codeforces, CodeChef, HackerRank, and GitHub.
 *
 * Usage: GET /api/coding-stats?platform=leetcode&username=VinayKishore25
 *
 * @module api/coding-stats
 */

import { NextResponse } from "next/server";
import {
  fetchLeetCodeStats,
  fetchCodeforcesStats,
  fetchCodeChefStats,
  fetchHackerRankStats,
  fetchGitHubStats,
  fetchGeeksforGeeksStats,
} from "./_fetchers";

/**
 * Supported platforms enum
 */
const PLATFORMS = {
  LEETCODE: "leetcode",
  CODEFORCES: "codeforces",
  CODECHEF: "codechef",
  HACKERRANK: "hackerrank",
  GITHUB: "github",
  GEEKSFORGEEKS: "geeksforgeeks",
};

/**
 * Map of platform to fetcher function
 */
const PLATFORM_FETCHERS = {
  [PLATFORMS.LEETCODE]: fetchLeetCodeStats,
  [PLATFORMS.CODEFORCES]: fetchCodeforcesStats,
  [PLATFORMS.CODECHEF]: fetchCodeChefStats,
  [PLATFORMS.HACKERRANK]: fetchHackerRankStats,
  [PLATFORMS.GITHUB]: fetchGitHubStats,
  [PLATFORMS.GEEKSFORGEEKS]: fetchGeeksforGeeksStats,
};

/**
 * Cache duration in seconds (5 minutes)
 */
const CACHE_DURATION = 300;

/**
 * Create a success response with caching headers
 * @param {Object} data - Response data
 * @returns {NextResponse} Next.js response
 */
const createSuccessResponse = (data) => {
  return NextResponse.json(
    { success: true, data },
    {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=600`,
      },
    },
  );
};

/**
 * Create an error response
 * @param {string} message - Error message
 * @param {number} status - HTTP status code
 * @returns {NextResponse} Next.js response
 */
const createErrorResponse = (message, status = 400) => {
  return NextResponse.json({ success: false, error: message }, { status });
};

/**
 * GET handler for coding stats
 *
 * @param {Request} request - Incoming request
 * @returns {Promise<NextResponse>} JSON response with platform stats
 *
 * @example
 * // Fetch LeetCode stats
 * GET /api/coding-stats?platform=leetcode&username=VinayKishore25
 *
 * @example
 * // Response format
 * {
 *   "success": true,
 *   "data": {
 *     "username": "VinayKishore25",
 *     "totalSolved": 150,
 *     "easy": 50,
 *     "medium": 80,
 *     "hard": 20,
 *     ...
 *   }
 * }
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get("platform")?.toLowerCase();
    const username = searchParams.get("username");

    // Validate required parameters
    if (!platform) {
      return createErrorResponse("Platform parameter is required");
    }

    if (!username) {
      return createErrorResponse("Username parameter is required");
    }

    // Validate platform
    const fetcher = PLATFORM_FETCHERS[platform];
    if (!fetcher) {
      const supportedPlatforms = Object.values(PLATFORMS).join(", ");
      return createErrorResponse(
        `Unsupported platform: ${platform}. Supported: ${supportedPlatforms}`,
      );
    }

    // Fetch stats using the appropriate fetcher
    const data = await fetcher(username);

    return createSuccessResponse(data);
  } catch (error) {
    console.error("Coding stats API error:", error);
    return createErrorResponse(error.message || "Failed to fetch data", 500);
  }
}
