/**
 * HackerRank Stats Fetcher
 *
 * Fetches statistics from HackerRank using their REST API
 */

const HACKERRANK_API_BASE = "https://www.hackerrank.com/rest/hackers";

/**
 * Fetch HackerRank statistics for a user
 * @param {string} username - HackerRank username
 * @returns {Promise<Object>} HackerRank stats object
 */
export const fetchHackerRankStats = async (username) => {
  try {
    // Fetch user profile
    const profileResponse = await fetch(`${HACKERRANK_API_BASE}/${username}`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    });

    if (!profileResponse.ok) {
      throw new Error(`HackerRank API error: ${profileResponse.status}`);
    }

    const profileData = await profileResponse.json();
    const model = profileData.model;

    if (!model) {
      throw new Error("User not found");
    }

    // Fetch badges
    let badges = [];
    try {
      const badgesResponse = await fetch(
        `${HACKERRANK_API_BASE}/${username}/badges`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0",
          },
        },
      );

      if (badgesResponse.ok) {
        const badgesData = await badgesResponse.json();
        badges = (badgesData.models || []).map((badge) => ({
          name: badge.badge_name,
          stars: badge.stars || 1,
          level: badge.solved || "Bronze",
          icon: badge.badge_icon_url,
        }));
      }
    } catch (error) {
      console.log("Failed to fetch HackerRank badges:", error);
    }

    // Fetch scores (skills)
    let scores = [];
    try {
      const scoresResponse = await fetch(
        `${HACKERRANK_API_BASE}/${username}/scores_elo`,
        {
          headers: {
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0",
          },
        },
      );

      if (scoresResponse.ok) {
        const scoresData = await scoresResponse.json();
        scores = (scoresData.models || [])
          .filter((score) => score.score > 0)
          .map((score) => ({
            name: score.name || score.slug,
            score: score.score,
          }));
      }
    } catch (error) {
      console.log("Failed to fetch HackerRank scores:", error);
    }

    return {
      username: model.username,
      fullName: model.name,
      country: model.country,
      school: model.school,
      badgeCount: badges.length,
      badges,
      scores,
      level: model.level,
      followers: model.followers_count,
    };
  } catch (error) {
    console.error("HackerRank fetch error:", error);
    throw error;
  }
};

export default fetchHackerRankStats;
