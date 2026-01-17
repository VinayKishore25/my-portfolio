// Companies/Experience Data
export const companiesData = [
  {
    id: "technical-hub",
    name: "Technical Hub",
    role: "Full Stack Developer Intern",
    duration: "12 months",
    startDate: "June 2024",
    endDate: "June 2025",
    description:
      "Worked as a full stack developer intern building multiple web applications including AI comparison tools, event management systems, notification systems, resume builders, and infrastructure tracking solutions.",
    location: "On-site",
    type: "internship",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Together AI",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    projects: [
      {
        title: "Matrix AI",
        description:
          "An AI comparison platform that compares responses from different AI models and displays them side by side for easy comparison and evaluation",
        technologies: ["React", "Express", "Together AI", "PostgreSQL"],
        highlights: [
          "Multi-model AI response comparison",
          "Integration with Together AI API",
          "User-friendly comparison interface",
          "Database-backed response storage",
        ],
      },
      {
        title: "Veda Website",
        description:
          "A comprehensive college event website for managing registrations across various branches with a full-featured admin portal",
        technologies: ["React", "Express", "MongoDB"],
        highlights: [
          "Multi-branch event registration",
          "Admin portal for event management",
          "User authentication system",
          "Real-time registration tracking",
        ],
      },
      {
        title: "Late Comers",
        description:
          "An automated notification system to send emails to students and their parents when students arrive late to college",
        technologies: ["React", "Express", "MongoDB"],
        highlights: [
          "Automated email notifications",
          "Parent-student linked notifications",
          "Late arrival tracking system",
          "Admin dashboard for monitoring",
        ],
      },
      {
        title: "Resume Builder",
        description:
          "A resume creation tool that allows users to build professional resumes using predefined templates with simple input forms",
        technologies: ["HTML", "CSS", "JavaScript"],
        highlights: [
          "Multiple predefined templates",
          "Easy-to-use input forms",
          "Real-time preview",
          "PDF export functionality",
        ],
      },
      {
        title: "Infrastructure Tracker",
        description:
          "A comprehensive system to track and manage the total infrastructure across all buildings in the college campus",
        technologies: ["Next.js", "Express", "MongoDB"],
        highlights: [
          "Building-wise infrastructure tracking",
          "Inventory management system",
          "Real-time status updates",
          "Reporting and analytics dashboard",
        ],
      },
    ],
    achievements: [
      "Delivered 5 major projects successfully",
      "Worked with diverse tech stacks (React, Next.js, Express)",
      "Integrated AI APIs for model comparison",
      "Built scalable full-stack applications",
    ],
    image: "/companies/technical-hub.jpg",
    featured: true,
  },
  {
    id: "airbus",
    name: "Airbus",
    role: "Software Engineer Intern",
    duration: "6 months",
    startDate: "October 2025",
    endDate: "March 2026 (Ongoing)",
    description:
      "Working as a software engineer intern developing a standalone JavaScript library for Gantt charts to be used across Airbus teams, featuring advanced event linking and drag-and-drop functionality.",
    location: "On-site",
    type: "internship",
    skills: [
      "HTML",
      "CSS",
      "Advanced JavaScript",
      "SVG",
      "Palantir",
      "Event Handling",
      "Modules",
      "Callbacks",
    ],
    projects: [
      {
        title: "Gantt Chart Library",
        description:
          "A standalone JavaScript library for creating interactive Gantt charts with advanced features for event management and visualization, designed for enterprise-wide usage across Airbus",
        technologies: ["HTML", "CSS", "Advanced JavaScript", "SVG", "Palantir"],
        highlights: [
          "Standalone reusable library architecture",
          "Event linking between tasks",
          "Drag and drop functionality",
          "Advanced SVG rendering",
          "Modular JavaScript design with callbacks",
          "Event bubbling implementation",
          "Enterprise-grade scalability",
        ],
      },
    ],
    achievements: [
      "Developing enterprise-level JavaScript library",
      "Implementing advanced JavaScript patterns (modules, callbacks, event bubbling)",
      "Creating custom SVG components",
      "Building reusable drag-and-drop system",
    ],
    image: "/companies/airbus.jpg",
    featured: true,
  },
];

export const experienceStats = {
  totalCompanies: companiesData.length,
  totalProjects: companiesData.reduce(
    (acc, company) => acc + company.projects.length,
    0
  ),
  totalSkills: [...new Set(companiesData.flatMap((c) => c.skills))].length,
  totalMonths: companiesData.reduce((acc, company) => {
    const duration = company.duration.split(" ");
    return acc + parseInt(duration[0]);
  }, 0),
};
