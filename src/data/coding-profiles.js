// Coding Profiles Data
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiHackerrank,
  SiGithub,
} from "react-icons/si";

export const codingProfiles = {
  leetcode: {
    username: "VinayKishore25",
    profileUrl: "https://leetcode.com/u/VinayKishore25/",
    apiUrl: "https://leetcode-stats-api.herokuapp.com/VinayKishore25",
    icon: SiLeetcode,
    color: "#FFA116",
    name: "LeetCode",
  },
  codechef: {
    username: "vinaykishore25",
    profileUrl: "https://www.codechef.com/users/vinaykishore25",
    icon: SiCodechef,
    color: "#5B4638",
    name: "CodeChef",
  },
  codeforces: {
    username: "vinaykishore2512",
    profileUrl: "https://codeforces.com/profile/vinaykishore2512",
    apiUrl: "https://codeforces.com/api/user.info?handles=vinaykishore2512",
    icon: SiCodeforces,
    color: "#1F8ACB",
    name: "Codeforces",
  },
  hackerrank: {
    username: "vinaykishore2512",
    profileUrl: "https://www.hackerrank.com/profile/vinaykishore2512",
    icon: SiHackerrank,
    color: "#00EA64",
    name: "HackerRank",
  },
  github: {
    username: "VinayKishore25",
    profileUrl: "https://github.com/VinayKishore25",
    apiUrl: "https://api.github.com/users/VinayKishore25",
    icon: SiGithub,
    color: "#ffffff",
    name: "GitHub",
  },
};

export const platformOrder = [
  "leetcode",
  "codeforces",
  "codechef",
  "geeksforgeeks",
  "hackerrank",
  "github",
];
