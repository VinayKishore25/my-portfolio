/**
 * Site Configuration
 * Central place for all site-wide settings and metadata
 */

export const siteConfig = {
  name: "Vinay - Portfolio",
  title: "Vinay | Software Engineer",
  description:
    "Software Engineer Intern at Airbus India with expertise in full-stack development. Competitive programmer with 1300+ problems solved.",
  url: "https://vinay.dev", // Update with actual domain
  author: {
    name: "Vinay",
    email: "your-email@example.com",
    role: "Software Engineer Intern",
    company: "Airbus India",
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
  },
  resume: {
    pdf: "/Vinay_SDE.pdf",
  },
};

export const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "skills", path: "/skills" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "testimonials", path: "/testimonials" },
];

export default siteConfig;
