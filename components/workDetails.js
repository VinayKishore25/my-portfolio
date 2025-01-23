// Components
"use client";
import React, { useState } from "react";
import "./styles.css";

// Sample Data
const projectData = [
  {
    category: "All",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg", 
        description:
          "A platform to create professional resumes with customizable templates.",
        techStack: ["React", "Node.js", "MongoDB"],
      },    
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg", 
        description:
          "An educational website for events and learning opportunities.",
        techStack: ["Next.js", "Bootstrap", "Express"],
      },
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg", 
        description:
          "A machine learning platform for training custom AI models.",
        techStack: ["Python", "TensorFlow", "Flask"],
      },
    ],
  },
  {
    category: "Java",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg", 
        description:
          "Developed a snake game using JFrames",
        techStack: ["Java"],
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
    category: "Web",
    projects: [
      {
        name: "Coming Soon",
        image: "/comingsoon.jpeg", 
        description:
          "A platform to create professional resumes with customizable templates.",
        techStack: ["React", "Node.js", "MongoDB"],
      },
    ],
  },
  {
    category: "ServiceNow",
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
        name:"Coming Soon",
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

  return (
    <div className="bg-primary/30 text-center xl:text-left project_content">
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
            <div
              key={index}
              className="bg-black shadow-lg rounded overflow-hidden w-full"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.name}
                </h3>
                {project.name != "Coming Soon" &&<p className="text-gray-400 mb-4">{project.description}</p>}
                {project.name != "Coming Soon" &&<div className="mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </div>}
                <div className="flex gap-4">
                  {project.name != "Coming Soon" && <button
                    className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark"
                    onClick={() =>
                      alert(`Viewing project: ${project.name}`)
                    }
                  >
                    View Project
                  </button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;

