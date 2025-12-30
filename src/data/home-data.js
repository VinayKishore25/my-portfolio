/**
 * Home Page Data
 * All data for the home page sections
 */

import {
  HiBolt,
  HiRocketLaunch,
  HiWrenchScrewdriver,
  HiSparkles,
  HiMiniBriefcase,
  HiSignal,
  HiCodeBracket,
  HiCpuChip,
  HiGlobeAlt,
  HiLightBulb,
  HiClock,
  HiCheckBadge,
  HiArrowTrendingUp,
  HiCommandLine,
} from "react-icons/hi2";

export const impactStats = [
  {
    label: "Projects Delivered",
    value: 18,
    suffix: "+",
    icon: HiRocketLaunch,
  },
  {
    label: "Performance Boost",
    value: 32,
    suffix: "%",
    icon: HiArrowTrendingUp,
  },
  { label: "Automations Built", value: 26, suffix: "+", icon: HiBolt },
  { label: "Happy Clients", value: 15, suffix: "+", icon: HiCheckBadge },
];

export const servicePillars = [
  {
    title: "Product Engineering",
    copy: "From idea to launch with frontend, backend, and DX focus. Building scalable solutions that users love.",
    icon: HiMiniBriefcase,
    gradient: "from-rose-500/20 to-orange-500/10",
  },
  {
    title: "Experience Design",
    copy: "UI/UX with motion, accessibility, and responsive polish. Creating delightful digital experiences.",
    icon: HiSparkles,
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "Systems & Tooling",
    copy: "APIs, pipelines, and dev tooling that scale reliably. Infrastructure that just works.",
    icon: HiWrenchScrewdriver,
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
];

export const signatureStack = [
  { name: "Next.js", category: "frontend" },
  { name: "React 19", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Tailwind", category: "styling" },
  { name: "Framer Motion", category: "animation" },
  { name: "Three.js", category: "3d" },
  { name: "GSAP", category: "animation" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Docker", category: "devops" },
];

export const currentlyBuilding = [
  {
    title: "AI-Powered Portfolio Generator",
    description:
      "A tool that creates stunning portfolios using AI to analyze your work and generate personalized designs.",
    progress: 75,
    tags: ["Next.js", "OpenAI", "Tailwind"],
  },
  {
    title: "Real-time Collaboration Suite",
    description:
      "Building a Figma-like collaborative workspace for developers with live cursors and instant sync.",
    progress: 45,
    tags: ["WebSockets", "React", "PostgreSQL"],
  },
];

export const recentWins = [
  {
    text: "Reduced LCP by 38% with image strategy & code-splitting",
    icon: HiSignal,
  },
  {
    text: "Built an animated data viz dashboard with React + GSAP",
    icon: HiCodeBracket,
  },
  {
    text: "Automated CI checks and preview deployments for faster reviews",
    icon: HiCommandLine,
  },
  {
    text: "Implemented real-time notifications with WebSocket integration",
    icon: HiGlobeAlt,
  },
];

export const funFacts = [
  { icon: HiClock, text: "500+ cups of coffee consumed while coding" },
  {
    icon: HiLightBulb,
    text: "Night owl coder - best ideas come at 2 AM",
  },
  { icon: HiCpuChip, text: "Built my first website at age 14" },
];
