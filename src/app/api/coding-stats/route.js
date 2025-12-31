import { NextResponse } from "next/server";

// LeetCode Stats - Using multiple queries for complete data
async function fetchLeetCodeStats(username) {
  try {
    // Query for user profile and stats
    const profileQuery = `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
            reputation
            starRating
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    // Query for badges
    const badgesQuery = `
      query userBadges($username: String!) {
        matchedUser(username: $username) {
          badges {
            id
            displayName
            icon
            creationDate
          }
          upcomingBadges {
            name
            icon
          }
        }
      }
    `;

    // Query for calendar/streak
    const calendarQuery = `
      query userProfileCalendar($username: String!) {
        matchedUser(username: $username) {
          userCalendar {
            streak
            totalActiveDays
            submissionCalendar
          }
        }
      }
    `;

    const headers = {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
      Origin: "https://leetcode.com",
    };

    // Fetch all data in parallel
    const [profileRes, badgesRes, calendarRes] = await Promise.all([
      fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: profileQuery, variables: { username } }),
      }),
      fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: badgesQuery, variables: { username } }),
      }),
      fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query: calendarQuery, variables: { username } }),
      }),
    ]);

    const [profileData, badgesData, calendarData] = await Promise.all([
      profileRes.json(),
      badgesRes.json(),
      calendarRes.json(),
    ]);

    const user = profileData.data?.matchedUser;
    const badges = badgesData.data?.matchedUser?.badges || [];
    const calendar = calendarData.data?.matchedUser?.userCalendar;

    if (user) {
      const stats = user.submitStatsGlobal?.acSubmissionNum || [];

      return {
        success: true,
        platform: "leetcode",
        data: {
          username: user.username,
          ranking: user.profile?.ranking,
          reputation: user.profile?.reputation,
          totalSolved: stats.find((s) => s.difficulty === "All")?.count || 0,
          easySolved: stats.find((s) => s.difficulty === "Easy")?.count || 0,
          mediumSolved:
            stats.find((s) => s.difficulty === "Medium")?.count || 0,
          hardSolved: stats.find((s) => s.difficulty === "Hard")?.count || 0,
          badges: badges.map((b) => ({
            id: b.id,
            displayName: b.displayName,
            icon: b.icon?.startsWith("http")
              ? b.icon
              : `https://leetcode.com${b.icon}`,
            creationDate: b.creationDate,
          })),
          streak: calendar?.streak || 0,
          totalActiveDays: calendar?.totalActiveDays || 0,
          submissionCalendar: calendar?.submissionCalendar || "{}",
        },
      };
    }

    // Fallback to third-party API
    const fallbackRes = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    const fallbackData = await fallbackRes.json();

    if (fallbackData.status === "success") {
      return {
        success: true,
        platform: "leetcode",
        data: {
          username,
          ranking: fallbackData.ranking,
          totalSolved: fallbackData.totalSolved,
          easySolved: fallbackData.easySolved,
          mediumSolved: fallbackData.mediumSolved,
          hardSolved: fallbackData.hardSolved,
          badges: [],
          streak: 0,
          totalActiveDays: 0,
          submissionCalendar: "{}",
        },
      };
    }

    return { success: false, platform: "leetcode", error: "User not found" };
  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return { success: false, platform: "leetcode", error: error.message };
  }
}

// Codeforces Stats
async function fetchCodeforcesStats(username) {
  try {
    const [userInfo, userRating] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${username}`),
      fetch(`https://codeforces.com/api/user.rating?handle=${username}`),
    ]);

    const userData = await userInfo.json();
    const ratingData = await userRating.json();

    if (userData.status === "OK") {
      const user = userData.result[0];
      const contests = ratingData.status === "OK" ? ratingData.result : [];

      return {
        success: true,
        platform: "codeforces",
        data: {
          username: user.handle,
          rating: user.rating || 0,
          maxRating: user.maxRating || 0,
          rank: user.rank || "unrated",
          maxRank: user.maxRank || "unrated",
          contribution: user.contribution || 0,
          friendOfCount: user.friendOfCount || 0,
          avatar: user.avatar,
          titlePhoto: user.titlePhoto,
          contestsParticipated: contests.length,
          ratingHistory: contests.slice(-20).map((c) => ({
            contestName: c.contestName,
            rank: c.rank,
            oldRating: c.oldRating,
            newRating: c.newRating,
            date: new Date(
              c.ratingUpdateTimeSeconds * 1000
            ).toLocaleDateString(),
          })),
        },
      };
    }

    return { success: false, platform: "codeforces", error: "User not found" };
  } catch (error) {
    console.error("Codeforces fetch error:", error);
    return { success: false, platform: "codeforces", error: error.message };
  }
}

// GitHub Stats
async function fetchGitHubStats(username) {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      ),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    if (user.login) {
      const totalStars = repos.reduce(
        (acc, repo) => acc + repo.stargazers_count,
        0
      );
      const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

      // Get language stats
      const languageCount = {};
      repos.forEach((repo) => {
        if (repo.language) {
          languageCount[repo.language] =
            (languageCount[repo.language] || 0) + 1;
        }
      });

      const topLanguages = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([name, count]) => ({ name, count }));

      return {
        success: true,
        platform: "github",
        data: {
          username: user.login,
          name: user.name,
          bio: user.bio,
          avatar: user.avatar_url,
          followers: user.followers,
          following: user.following,
          publicRepos: user.public_repos,
          totalStars,
          totalForks,
          topLanguages,
          profileUrl: user.html_url,
          createdAt: user.created_at,
          topRepos: repos.slice(0, 6).map((repo) => ({
            name: repo.name,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            url: repo.html_url,
          })),
        },
      };
    }

    return { success: false, platform: "github", error: "User not found" };
  } catch (error) {
    console.error("GitHub fetch error:", error);
    return { success: false, platform: "github", error: error.message };
  }
}

// CodeChef Stats - Direct scraping with working API
async function fetchCodeChefStats(username) {
  try {
    // Use the working CodeChef API
    const response = await fetch(
      `https://codechef-api-six.vercel.app/${username}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (data && data.currentRating) {
        // Extract problems solved from heatmap
        let totalProblemsSolved = 0;
        if (data.heatMap && Array.isArray(data.heatMap)) {
          totalProblemsSolved = data.heatMap.reduce(
            (sum, day) => sum + (day.value || 0),
            0
          );
        }

        // Get latest rating info
        const latestRating =
          data.ratingData && data.ratingData.length > 0
            ? data.ratingData[data.ratingData.length - 1]
            : null;

        // Calculate highest rating
        let highestRating = 0;
        if (data.ratingData) {
          highestRating = Math.max(
            ...data.ratingData.map((r) => parseInt(r.rating) || 0)
          );
        }

        // Determine stars based on rating
        const rating = parseInt(data.currentRating) || 0;
        let stars = "1★";
        if (rating >= 1800) stars = "5★";
        else if (rating >= 1600) stars = "4★";
        else if (rating >= 1400) stars = "3★";
        else if (rating >= 1200) stars = "2★";

        return {
          success: true,
          platform: "codechef",
          data: {
            username: data.name || username,
            fullName: data.name || username,
            rating: rating,
            highestRating: highestRating,
            stars: stars,
            globalRank: data.globalRank || 0,
            countryRank: data.countryRank || 0,
            country: data.countryName || "India",
            problemsSolved: totalProblemsSolved,
            contestsParticipated: data.ratingData?.length || 0,
            profileUrl: `https://www.codechef.com/users/${username}`,
            ratingHistory:
              data.ratingData?.slice(-10).map((r) => ({
                contestName: r.name,
                rating: parseInt(r.rating),
                rank: parseInt(r.rank),
                date: `${r.getyear}-${r.getmonth}-${r.getday}`,
              })) || [],
            heatMap: data.heatMap || [],
          },
        };
      }
    }

    // Fallback - return basic info
    return {
      success: true,
      platform: "codechef",
      data: {
        username,
        profileUrl: `https://www.codechef.com/users/${username}`,
        note: "Unable to fetch live stats. Visit profile for details.",
      },
    };
  } catch (error) {
    console.error("CodeChef fetch error:", error);
    return {
      success: true,
      platform: "codechef",
      data: {
        username,
        profileUrl: `https://www.codechef.com/users/${username}`,
        note: "Visit profile for detailed stats",
      },
    };
  }
}

// GeeksforGeeks Stats - Using GFG Practice API
async function fetchGFGStats(username) {
  try {
    // Try multiple GFG API endpoints
    const apis = [
      `https://geeks-for-geeks-stats-api.vercel.app/?userName=${username}`,
      `https://gfgstatsapi.vercel.app/${username}`,
    ];

    for (const apiUrl of apis) {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Check if we got valid data (no error field)
          if (data && !data.error) {
            return {
              success: true,
              platform: "geeksforgeeks",
              data: {
                username: data.userName || username,
                fullName: data.fullName || data.name || username,
                profilePicture: data.profilePicture || "",
                instituteRank: data.instituteRank || 0,
                currentStreak: data.currentStreak || "0",
                maxStreak: data.maxStreak || "0",
                codingScore: data.codingScore || data.overAllCodingScore || 0,
                totalProblemsSolved: data.totalProblemsSolved || 0,
                monthlyCodingScore: data.monthlyCodingScore || 0,
                school: data.School || data.school || 0,
                basic: data.Basic || data.basic || 0,
                easy: data.Easy || data.easy || 0,
                medium: data.Medium || data.medium || 0,
                hard: data.Hard || data.hard || 0,
                profileUrl: `https://www.geeksforgeeks.org/user/${username}/`,
                languagesUsed: data.languagesUsed || [],
              },
            };
          }
        }
      } catch (apiError) {
        console.error(`GFG API ${apiUrl} error:`, apiError.message);
      }
    }

    // Return data we know from the profile page
    return {
      success: true,
      platform: "geeksforgeeks",
      data: {
        username: username,
        fullName: "MUNJULURI V V D SURYA KISHORE VINAY",
        profilePicture:
          "https://media.geeksforgeeks.org/auth/profile/7teyicf1ks0lbawcvipt",
        institute: "Aditya University",
        instituteRank: 0, // Campus ranking - will show from API when available
        contestRating: 0, // Contest rating - will show from API when available
        totalProblemsSolved: 0, // Problem count - will show from API when available
        profileUrl: `https://www.geeksforgeeks.org/user/${username}/`,
        note: "Visit profile for detailed coding stats",
      },
    };
  } catch (error) {
    console.error("GFG fetch error:", error);
    return {
      success: true,
      platform: "geeksforgeeks",
      data: {
        username,
        profileUrl: `https://www.geeksforgeeks.org/user/${username}/`,
        note: "Visit profile for detailed stats",
      },
    };
  }
}

// HackerRank Stats - Using unofficial API
async function fetchHackerRankStats(username) {
  try {
    // Try HackerRank API for badges
    const response = await fetch(
      `https://www.hackerrank.com/rest/hackers/${username}/badges`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      // Try to get additional profile info
      let profileData = {};
      try {
        const profileRes = await fetch(
          `https://www.hackerrank.com/rest/hackers/${username}`,
          {
            headers: { Accept: "application/json" },
          }
        );
        if (profileRes.ok) {
          profileData = await profileRes.json();
        }
      } catch (e) {
        console.error("HackerRank profile fetch error:", e);
      }

      return {
        success: true,
        platform: "hackerrank",
        data: {
          username: profileData.username || username,
          fullName: profileData.name || username,
          avatar: profileData.avatar || "",
          country: profileData.country || "",
          school: profileData.school || "",
          badges: data.models || [],
          badgeCount: data.models?.length || 0,
          profileUrl: `https://www.hackerrank.com/profile/${username}`,
          // Certificates would require authenticated API
          certificates: [],
        },
      };
    }

    // Fallback
    return {
      success: true,
      platform: "hackerrank",
      data: {
        username,
        badges: [],
        certificates: [],
        profileUrl: `https://www.hackerrank.com/profile/${username}`,
        note: "Visit profile for badges and certifications",
      },
    };
  } catch (error) {
    console.error("HackerRank fetch error:", error);
    return {
      success: true,
      platform: "hackerrank",
      data: {
        username,
        badges: [],
        certificates: [],
        profileUrl: `https://www.hackerrank.com/profile/${username}`,
        note: "Visit profile for badges and certifications",
      },
    };
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get("platform");
  const username = searchParams.get("username");

  if (!platform || !username) {
    return NextResponse.json(
      { error: "Platform and username are required" },
      { status: 400 }
    );
  }

  let result;

  switch (platform) {
    case "leetcode":
      result = await fetchLeetCodeStats(username);
      break;
    case "codeforces":
      result = await fetchCodeforcesStats(username);
      break;
    case "github":
      result = await fetchGitHubStats(username);
      break;
    case "codechef":
      result = await fetchCodeChefStats(username);
      break;
    case "geeksforgeeks":
      result = await fetchGFGStats(username);
      break;
    case "hackerrank":
      result = await fetchHackerRankStats(username);
      break;
    default:
      result = { success: false, error: "Unknown platform" };
  }

  return NextResponse.json(result);
}
