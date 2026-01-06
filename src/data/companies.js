// Companies/Experience Data
export const companiesData = [
  {
    id: "technical-hub",
    name: "Technical Hub",
    role: "Full Stack Developer",
    duration: "6 months",
    startDate: "2023",
    endDate: "2024",
    description:
      "Worked as a full stack developer building web applications and managing databases.",
    location: "Remote",
    type: "experience",
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    projects: [
      {
        title: "Event Management System",
        description:
          "Built a complete event management platform with registration and payment gateway",
        technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
        highlights: [
          "Handled 1000+ registrations",
          "Integrated payment processing",
          "Real-time event tracking",
          "Admin dashboard",
        ],
      },
      {
        title: "Dashboard Analytics",
        description:
          "Created an interactive analytics dashboard for event metrics",
        technologies: ["React", "Chart.js", "API Integration"],
        highlights: [
          "Real-time data visualization",
          "Custom chart components",
          "Export functionality",
        ],
      },
      {
        title: "Email Notification System",
        description:
          "Implemented automated email notifications for event updates",
        technologies: ["Node.js", "Nodemailer", "Cron Jobs"],
        highlights: [
          "Scheduled email campaigns",
          "Template-based notifications",
          "Error handling and logging",
        ],
      },
    ],
    achievements: [
      "Delivered 3+ major projects on time",
      "Improved system performance by 40%",
      "Mentored 2 junior developers",
      "Implemented best practices for code quality",
    ],
    image: "/companies/technical-hub.jpg",
    featured: true,
  },
  {
    id: "airbus",
    name: "Airbus",
    role: "Software Engineer Intern",
    duration: "3 months",
    startDate: "2024",
    endDate: "2024",
    description:
      "Interned as a software engineer working on aviation software systems and tools.",
    location: "On-site",
    type: "experience",
    skills: [
      "Java",
      "Python",
      "System Design",
      "Aviation Software",
      "Database Design",
    ],
    projects: [
      {
        title: "Flight Management System",
        description: "Contributed to the flight management and tracking system",
        technologies: ["Java", "Spring Boot", "PostgreSQL"],
        highlights: [
          "Developed core modules",
          "Optimized database queries",
          "Implemented real-time tracking",
        ],
      },
      {
        title: "Data Analysis Tool",
        description: "Created tools for analyzing aircraft performance data",
        technologies: ["Python", "Pandas", "Matplotlib"],
        highlights: [
          "Processed large datasets",
          "Generated insights and reports",
          "Automated data pipeline",
        ],
      },
      {
        title: "Testing Framework",
        description: "Built automated testing framework for system validation",
        technologies: ["Java", "JUnit", "Selenium"],
        highlights: [
          "Created 100+ test cases",
          "Automated testing pipeline",
          "CI/CD integration",
        ],
      },
    ],
    achievements: [
      "Completed internship project ahead of schedule",
      "Received appreciation from team lead",
      "Identified and fixed critical bugs",
      "Presented findings to senior management",
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
