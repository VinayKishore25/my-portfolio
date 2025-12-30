"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { RiInstagramLine, RiFacebookLine, RiYoutubeLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { socialLinks } from "@/data/social-links";

const FooterControls = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed bottom-0 left-0 right-0 z-40 bg-primary/80 backdrop-blur-sm p-4 xl:hidden"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Contact Button */}
        <Link
          href="/feed"
          className="flex items-center gap-2 bg-accent text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-accent-hover transition-colors duration-300 shadow-lg"
        >
          <FaEnvelope className="text-lg" />
          Contact Me
        </Link>

        {/* Social Media Links */}
        <div className="flex items-center gap-x-4 text-xl text-white/70">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-all duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FooterControls;
