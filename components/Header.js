"use client";
// Next Image
import Image from "next/image";

// Components
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navData } from "./Nav";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import ContactMeModal from "./ContactMeModal";

const Header = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <header className="fixed top-0 z-30 w-full bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-y-4 py-4">
          {/* Logo */}
          <p
            className="font-bold text-white cursor-pointer text-2xl sm:text-3xl"
            onClick={() => window.scrollTo(0, 0)}
          >
            Vinay{" "}
            <span className="font-medium" style={{ color: theme.accent }}>
              Kishore
            </span>
          </p>

          {/* Top Navigation (centered) */}
          <div className="w-full lg:flex-1 flex justify-center">
            <nav className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
              {navData.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname ? "text-accent" : "text-white"
                  } flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm sm:text-base`}
                >
                  <span className="text-lg sm:text-xl">{link.icon}</span>
                  <span className="hidden xs:inline sm:inline">
                    {link.name}
                  </span>
                </Link>
              ))}
              {/* Contact Me button, styled like nav items */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-white flex items-center gap-2 hover:text-accent transition-all duration-300 capitalize font-medium text-sm sm:text-base"
                aria-haspopup="dialog"
                aria-expanded={isContactOpen}
              >
                <span className="text-lg sm:text-xl">
                  <HiEnvelope />
                </span>
                <span className="hidden xs:inline sm:inline">contact me</span>
              </button>
            </nav>
          </div>
          {/* Modal mounted at header level */}
          <ContactMeModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
