// ...existing code...
"use client";
//Importing React and other important libraries
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  HiBolt,
  HiRocketLaunch,
  HiWrenchScrewdriver,
  HiSparkles,
  HiMiniBriefcase,
  HiSignal,
} from "react-icons/hi2";

//Importing Components
import ParticlesContainer from "../../components/ParticlesContainer";
import ResumeButtons from "../../components/ResumeButtons";
import Avatar from "../../components/Avatar";
import Bulb from "../../components/Bulb";
import ScrollControls from "../../components/ScrollControlls";
//Importing Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import AboutMe from "../../components/AboutMe";

// Lazy load below-the-fold components
const Journey = dynamic(() => import("../../components/Journey"), {
  loading: () => <div className="h-screen" />,
});
const SkillsHighlight = dynamic(
  () => import("../../components/SkillsHighlight"),
  {
    loading: () => <div className="h-screen" />,
  }
);
const FeaturedProjects = dynamic(
  () => import("../../components/FeaturedProjects"),
  {
    loading: () => <div className="h-screen" />,
  }
);
const TestimonialSlider = dynamic(
  () => import("../../components/TestimonialSlider"),
  {
    loading: () => <div className="h-screen" />,
  }
);

//Home Page
const Home = () => {
  const impactStats = [
    { label: "Projects shipped", value: "18", icon: <HiRocketLaunch /> },
    { label: "Avg perf gain", value: "32%", icon: <HiSignal /> },
    { label: "Automations", value: "26", icon: <HiBolt /> },
  ];

  const servicePillars = [
    {
      title: "Product Engineering",
      copy: "From idea to launch with frontend, backend, and DX focus.",
      icon: <HiMiniBriefcase />,
    },
    {
      title: "Experience Design",
      copy: "UI/UX with motion, accessibility, and responsive polish.",
      icon: <HiSparkles />,
    },
    {
      title: "Systems & Tooling",
      copy: "APIs, pipelines, and dev tooling that scale reliably.",
      icon: <HiWrenchScrewdriver />,
    },
  ];

  const signatureStack = [
    "Next.js",
    "React 19",
    "TypeScript",
    "Node.js",
    "Express",
    "Tailwind",
    "Framer Motion",
    "Three.js",
    "GSAP",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ];

  const recentWins = [
    "Reduced LCP by 38% with image strategy & code-splitting",
    "Built an animated data viz dashboard with React + GSAP",
    "Automated CI checks and preview deployments for faster reviews",
  ];

  return (
    <>
      <div className="bg-primary/60 h-screen relative pt-24 sm:pt-28">
        {/* Particles Background - Top Layer */}
        <div className="absolute inset-0 z-0">
          <ParticlesContainer />
        </div>

        {/* Text */}
        <Bulb />
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            I'm<span className="text-accent"> Vinay</span> <br />
            Problem Solver
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Dedicated to transforming innovative concepts into impactful digital
            solutions, with a strong emphasis on creativity and a continuous
            commitment to personal and professional growth in the ever-evolving
            tech landscape.
          </motion.p>
          {/* Resume Buttons */}
          <div className="flex justify-center xl:hidden relative">
            <ResumeButtons />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ResumeButtons />
          </motion.div>
        </div>

        {/* Image */}
        <div className="hidden lg:block w-full max-w-[480px] md:max-w-[520px] xl:max-w-[600px] h-full absolute right-4 sm:right-10 bottom-0 z-20">
          {/* Avatar Img Wrapper */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full max-w-full h-full"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
      <section id="about-me">
        <AboutMe />
      </section>

      {/* <Journey /> */}
      {/* Accent Stat Strip */}
      <section className="bg-primary px-4 md:px-6 lg:px-10 py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg"
            >
              <div className="text-accent text-2xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Pillars */}
      <section className="bg-primary/40 px-4 md:px-6 lg:px-10 py-14">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h3 className="text-2xl font-semibold text-white">How I help</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicePillars.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:border-accent/60 transition"
              >
                <div className="text-accent text-3xl mb-4">{card.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Stack Carousel */}
      <section className="bg-primary px-4 md:px-6 lg:px-10 py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Signature stack
            </h3>
            <div className="text-white/50 text-sm">
              Tooling I reach for first
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
            <div className="flex gap-3 py-4 px-4 marquee-scroll hover:[animation-play-state:paused]">
              {[...signatureStack, ...signatureStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-sm whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Wins + CTA */}
      <section className="bg-primary/40 px-4 md:px-6 lg:px-10 py-14">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-white mb-4">
              Recent wins
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              {recentWins.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-transparent p-6 shadow-lg flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Ready for your next release?
              </h4>
              <p className="text-white/70 text-sm">
                Let’s pair up on performance, delightful UI, and reliable
                delivery.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <ResumeButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      {/* wrap AboutMe with an anchorable id so ScrollControls can target it */}
      
      <FeaturedProjects />
      <TestimonialSlider />
      <ScrollControls />
    </>
  );
};

export default Home;
// ...existing code...
