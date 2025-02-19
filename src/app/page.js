'use client';
//Importing React and other important libraries
import Image from "next/image";

//Importing Components
import ParticlesContainer from "../../components/ParticlesContainer";
import ResumeButtons from "../../components/ResumeButtons";
import Avatar from "../../components/Avatar";
import Bulb from "../../components/Bulb";

//Importing Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"

//Home Page
const Home = () => {
  return (

    <div className="bg-primary/60 h-full">
      {/* Text */}
      <Bulb />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
             I'm<span className="text-accent"> Vinay</span> <br />
             Problem Solver 
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Dedicated to transforming innovative concepts into impactful digital solutions, with a strong emphasis on creativity and a continuous commitment to personal and professional growth in the ever-evolving tech landscape.
          </motion.p>
          {/* Resume Buttons */}
          <div className="flex justify-center xl:hidden relative">
            <ResumeButtons />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ResumeButtons />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Bg Image */}
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        {/* Particles */}
        <ParticlesContainer />
        {/* Avatar Img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
