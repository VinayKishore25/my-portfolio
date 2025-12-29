"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { 
  FaReact, 
  FaJava, 
  FaPython, 
  FaJs, 
  FaNodeJs, 
  FaDatabase,
  FaGitAlt,
  FaLinux
} from 'react-icons/fa';
import { SiNextdotjs, SiSpringboot, SiMongodb, SiMysql } from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
      { name: 'JavaScript', icon: <FaJs />, level: 88 },
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 92 },
      { name: 'Spring Boot', icon: <SiSpringboot />, level: 85 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    ]
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 88 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 82 },
      { name: 'Git', icon: <FaGitAlt />, level: 90 },
    ]
  }
];

const SkillsHighlight = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center mb-16"
        >
          <h2 className="h2 mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={fadeIn("up", 0.3 + categoryIndex * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-white font-semibold text-xl mb-6 text-center">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-accent text-xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-accent to-accent/70 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsHighlight;

