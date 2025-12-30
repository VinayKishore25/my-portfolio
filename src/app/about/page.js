/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import "./page.css";
import Bulb from "@/components/ui/Bulb";
// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiCodio } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { SiSpyderide } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { IoNavigateOutline } from "react-icons/io5";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// Data
const aboutData = [
  {
    title: "achievements",
    info: [
      {
        title: "LeetCode - 660+ Problems Solved",
        stage: "Peak Contest Rating: 1813",
      },
      {
        title: "GeeksforGeeks - 650+ Problems",
        stage: "Score: 1850 | Contest Rating: 1716",
      },
      {
        title: "HackerRank - 5 Star Badges",
        stage: "C, Python & Java",
      },
      {
        title: "CodeChef - 3 Star Rating",
        stage: "Highest Rating: 1643",
      },
      {
        title: "Monthly Coding Contest - 3rd Place",
        stage: "Technical Hub",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer Intern - Airbus India Pvt Ltd",
        stage: "September 2025 - Present",
      },
      {
        title: "Junior Developer - Technical Hub Pvt Ltd",
        stage: "June 2024 - June 2025",
      },
      {
        title: "Java Trainee - Technical Hub Pvt Ltd",
        stage: "August 2023 - December 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "C Programming - NPTEL",
        stage: "Jan-Mar 2023",
        link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs02/Course/NPTEL23CS02S4483019403132840.jpg",
      },
      {
        title: "Java Programming - NPTEL",
        stage: "Jan-Apr 2024",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S105850040030794576.pdf",
      },
      {
        title: "Database Management System - NPTEL",
        stage: "Jan-Mar 2024",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs21/Course/NPTEL24CS21S64110029730198379.pdf",
      },
      {
        title: "Java Programmer - HackerRank",
        stage: "27 Jan 2024",
        link: "https://www.hackerrank.com/certificates/69fe13c9faa7",
      },
      {
        title: "Python Programmer - HackerRank",
        stage: "20 Apr 2024",
        link: "https://www.hackerrank.com/certificates/1e716a2943c6",
      },
      {
        title: "Red Hat Certified System Administrator",
        stage: "20 June 2024",
        link: "https://www.credly.com/badges/5455d9cf-2ce2-493b-a4d0-6927dc98ec17/public_url",
      },
      {
        title: "JavaScript Basic - HackerRank",
        stage: "23 Sep 2024",
        link: "https://www.hackerrank.com/certificates/9625a1e985cd",
      },
      {
        title: "JavaScript Intermediate - HackerRank",
        stage: "2024",
        link: "#",
      },
      {
        title: "IT Specialist - JavaScript - Pearson",
        stage: "2024",
        link: "#",
      },
      {
        title: "Oracle Database - Foundations",
        stage: "2024",
        link: "#",
      },
      {
        title: "ServiceNow Certified System Admin",
        stage: "2024",
        link: "#",
      },
      {
        title: "ServiceNow Certified App Developer",
        stage: "2024",
        link: "#",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Sama Public School",
        stage: "2008-2020",
        marks: "9.5",
      },
      {
        title: "Narayana Junior College (MPC)",
        stage: "2020-2022",
        marks: "9.68",
      },
      {
        title: "Aditya Engineering College (AI & ML)",
        stage: "October 2022 - Present",
        marks: "8.82",
      },
    ],
  },
];

// Components
import Avatar from "@/components/ui/Avatar";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

// Counter
import CountUp from "react-countup";

const About = () => {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute top-12 -left-[380px] "
      ></motion.div>
      <Bulb />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Compelling <span className="text-accent">ideas</span> inspire
            exceptional creations.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Software Engineer Intern at Airbus India with expertise in
            full-stack development. Built production-ready applications at
            Technical Hub achieving 95% Lighthouse scores. Competitive
            programmer with 660+ LeetCode problems solved (rating 1813) and
            5-star HackerRank badges in C, Python, and Java.
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 z-55"
          >
            <div className="flex flex-1 xl:gap-x-6 z-60">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1300} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Problems Solved
                </div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certifications
                </div>
              </div>
              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10000} duration={2} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Users Impacted
                </div>
              </div>
              {/* Awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1813} duration={2} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  LeetCode Rating
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="mobile-overflow">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mobile-view">
              {aboutData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      itemIndex === index &&
                      "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setItemIndex(index)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            <div className="qualification__content qualification__content-active">
              {aboutData[itemIndex]?.info.map((item, index) => (
                <div
                  key={index}
                  className={`qualification__data ${
                    index % 2 === 0 ? "even-row" : "odd-row"
                  }`}
                >
                  {/* Content for Even Row */}
                  {index % 2 === 0 && (
                    <>
                      <div className="qualification__alternate">
                        <h3 className="qualification__title">{item.title}</h3>
                        {item.subtitle && (
                          <span className="qualification__subtitle">
                            {item.subtitle}
                          </span>
                        )}
                        {item.stage && (
                          <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            {item.stage}
                          </div>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="qualification__link text-accent"
                          >
                            Verify Certification
                          </a>
                        )}
                        {item.marks && (
                          <div className="qualification__marks">
                            <strong>CGPA:</strong> {item.marks}
                          </div>
                        )}
                        {Array.isArray(item.icons) && (
                          <div className="qualification__icons">
                            {item.icons.map((icon, iconIndex) => (
                              <span
                                key={iconIndex}
                                className="qualification__icon-item"
                              >
                                {icon}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div className="qualification__freespace"></div>
                    </>
                  )}

                  {/* Content for Odd Row */}
                  {index % 2 !== 0 && (
                    <>
                      <div className="qualification__freespace"></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div className="qualification__alternate">
                        <h3 className="qualification__title">{item.title}</h3>
                        {item.subtitle && (
                          <span className="qualification__subtitle">
                            {item.subtitle}
                          </span>
                        )}
                        {item.stage && (
                          <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i>{" "}
                            {item.stage}
                          </div>
                        )}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="qualification__link text-accent"
                          >
                            Verify Certification
                          </a>
                        )}
                        {item.marks && (
                          <div className="qualification__marks">
                            <strong>CGPA:</strong> {item.marks}
                          </div>
                        )}
                        {Array.isArray(item.icons) && (
                          <div className="qualification__icons">
                            {item.icons.map((icon, iconIndex) => (
                              <span
                                key={iconIndex}
                                className="qualification__icon-item"
                              >
                                {icon}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="extraSpacing"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
