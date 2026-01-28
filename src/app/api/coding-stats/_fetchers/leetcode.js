/**
 * LeetCode Stats Fetcher
 *
 * Fetches comprehensive statistics from LeetCode using their GraphQL API
 */

const LEETCODE_GRAPHQL_ENDPOINT = "https://leetcode.com/graphql";

/**
 * GraphQL Queries for LeetCode API
 */
const QUERIES = {
  userProfile: `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
          reputation
          starRating
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
      allQuestionsCount {
        difficulty
        count
      }
    }
  `,
  userBadges: `
    query userBadges($username: String!) {
      matchedUser(username: $username) {
        badges {
          id
          displayName
          icon
          creationDate
        }
      }
    }
  `,
  userCalendar: `
    query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          streak
          totalActiveDays
          submissionCalendar
        }
      }
    }
  `,
  contestRanking: `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        rating
        globalRanking
        attendedContestsCount
        topPercentage
      }
    }
  `,
};

/**
 * Execute GraphQL query against LeetCode API
 * @param {string} query - GraphQL query string
 * @param {Object} variables - Query variables
 * @returns {Promise<Object>} Query response data
 */
const executeQuery = async (query, variables) => {
  const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "https://leetcode.com",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`LeetCode API error: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};

/**
 * Fetch LeetCode statistics for a user
 * @param {string} username - LeetCode username
 * @returns {Promise<Object>} LeetCode stats object
 */
export const fetchLeetCodeStats = async (username) => {
  try {
    // Execute all queries in parallel for better performance
    const [profileData, badgesData, calendarData, contestData] =
      await Promise.all([
        executeQuery(QUERIES.userProfile, { username }),
        executeQuery(QUERIES.userBadges, { username }),
        executeQuery(QUERIES.userCalendar, {
          username,
          year: new Date().getFullYear(),
        }),
        executeQuery(QUERIES.contestRanking, { username }).catch(() => null),
      ]);

    // Parse user profile data
    const user = profileData?.matchedUser;
    if (!user) {
      throw new Error("User not found");
    }

    // Parse submission stats
    const submitStats = user.submitStats?.acSubmissionNum || [];
    const statsMap = submitStats.reduce((acc, stat) => {
      acc[stat.difficulty] = {
        count: stat.count,
        submissions: stat.submissions,
      };
      return acc;
    }, {});

    // Parse total questions available
    const totalsMap = (profileData?.allQuestionsCount || []).reduce(
      (acc, item) => {
        acc[item.difficulty.toLowerCase()] = item.count;
        return acc;
      },
      {},
    );

    // Parse calendar data
    const calendar = calendarData?.matchedUser?.userCalendar;

    // Parse badges
    const badges = badgesData?.matchedUser?.badges || [];

    // Parse contest ranking
    const contestRanking = contestData?.userContestRanking;

    return {
      username: user.username,
      ranking: user.profile?.ranking,
      reputation: user.profile?.reputation,
      totalSolved: statsMap.All?.count || 0,
      easy: statsMap.Easy?.count || 0,
      medium: statsMap.Medium?.count || 0,
      hard: statsMap.Hard?.count || 0,
      submissions: statsMap.All?.submissions || 0,
      totals: {
        easy: totalsMap.easy || 0,
        medium: totalsMap.medium || 0,
        hard: totalsMap.hard || 0,
      },
      streak: calendar?.streak || 0,
      totalActiveDays: calendar?.totalActiveDays || 0,
      badges: badges.slice(0, 10).map((badge) => ({
        id: badge.id,
        displayName: badge.displayName,
        icon: badge.icon?.startsWith("http")
          ? badge.icon
          : `https://leetcode.com${badge.icon}`,
      })),
      contestRating: contestRanking?.rating
        ? Math.round(contestRanking.rating)
        : null,
      contestGlobalRanking: contestRanking?.globalRanking,
      contestsAttended: contestRanking?.attendedContestsCount,
    };
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    throw error;
  }
};

export default fetchLeetCodeStats;
