"use client";
import React, { useState } from "react";
import "./styles.css";
import Tilt from "react-parallax-tilt";

// Sample Data
const projectData = [
  {
    category: "All",
    projects: [
      // {
      //   name: "Coming Soon",
      //   image: "/comingsoon.jpeg",
      //   description:
      //     "A platform to create professional resumes with customizable templates.",
      //   techStack: ["React", "Node.js", "MongoDB"],
      // },
      // {
      //   name: "Coming Soon",
      //   image: "/comingsoon.jpeg",
      //   description:
      //     "An educational website for events and learning opportunities.",
      //   techStack: ["Next.js", "Bootstrap", "Express"],
      // },
      // {
      //   name: "Coming Soon",
      //   image: "/comingsoon.jpeg",
      //   description:
      //     "A machine learning platform for training custom AI models.",
      //   techStack: ["Python", "TensorFlow", "Flask"],
      // },
    ],
  },
  {
    category: "Java",
    projects: [
      {
        name: "Snake Game",
        image: "/snake-game.png",
        description: "Developed a snake game using JFrames",
        techStack: ["Java", "Swing", "AWT"],
        link: "https://github.com/VinayKishore25/Snake-Game",
      },
      {
        name: "Pac Man Game",
        image: "/pac-man.png",
        description: "Developed a pac man game using JFrames",
        techStack: ["Java", "Swing", "AWT"],
        link: "https://github.com/VinayKishore25/Pac-Man",
      },
    ],
  },

  {
    category: "Python",
    projects: [
      {
        name: "Coming Soon",
        image: "comingsoon.jpeg",
        description:
          "A machine learning platform for training custom AI models.",
        techStack: ["Python"],
      },
    ],
  },
  {
    category: "FullStack",
    projects: [
      {
        name: "Veda Website",
        image: "/veda-website.png",
        description:
          "A platform to create professional resumes with customizable templates.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "https://adityauniversity.in/veda2024",
      },
      {
        name: "InfraStructer Tracker",
        image: "/comingsoon.jpeg",
        description:
          "A platform to create professional resumes with customizable templates.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "/_notfound",
      },
      {
        name: "Resume Builder",
        image: "/comingsoon.jpeg",
        description:
          "A platform to create professional resumes with customizable templates.",
        techStack: ["HTML", "CSS", "JS"],
        link: "/_notfound",
      },
    ],
  },
  // {
  //   category: "ServiceNow",
  //   projects: [
  //     {
  //       name: "Coming Soon",
  //       image: "/comingsoon.jpeg",
  //       description:
  //         "An educational website for events and learning opportunities.",
  //       techStack: ["Next.js", "Bootstrap", "Express"],
  //     },
  //   ],
  // },
  {
    category: "ML",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg",
        description:
          "An educational website for events and learning opportunities.",
        techStack: ["Next.js", "Bootstrap", "Express"],
      },
    ],
  },
  {
    category: "DS",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg",
        description:
          "An educational website for events and learning opportunities.",
        techStack: ["Next.js", "Bootstrap", "Express"],
      },
    ],
  },
  {
    category: "App",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg",
        description:
          "An educational website for events and learning opportunities.",
        techStack: ["Next.js", "Bootstrap", "Express"],
      },
    ],
  },
];

// Components
const WorkDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData.flatMap((data) => data.projects)
      : projectData.find((data) => data.category === selectedCategory)
          ?.projects || [];
  const openProjectLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="bg-primary/0 text-center xl:text-left project_content">
      <div className="container mx-auto h-full flex flex-col items-center">
        {/* Categories */}
        <div className="flex gap-4 mb-8 domain_buttons">
          {projectData.map((data, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg font-medium rounded ${
                selectedCategory === data.category
                  ? "bg-accent text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedCategory(data.category)}
            >
              {data.category}
            </button>
          ))}
        </div>
        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 project-section">
          {filteredProjects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              perspective={1000}
              // scale={1.05}
              // transitionSpeed={1500}
              // className="min-h-[500px]"
            >
              <div
                key={index}
                className="bg-black shadow-lg rounded overflow-hidden m-7 px-5 py-4 w-80 cardColor"
              >
                <div
                  className="w-full h-48"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </div>
                  <div className="flex gap-4">
                  <button
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
                    onClick={() => openProjectLink(project.link)}
                  > 
                    View Project
                  </button>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
          <div className="extraSpaceInWork"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
