"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaGraduationCap, FaCode, FaTrophy, FaRocket } from "react-icons/fa";

// 1. Faster Parent Variant
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Faster overall duration
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1, // Very fast cascade (100ms between items)
    },
  },
};

// 2. Faster Child Variant
const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Quick snap into place
      ease: "easeOut",
    },
  },
};

const journeyData = [
  {
    year: "2022",
    title: "Started Engineering",
    description:
      "Began my journey at Aditya Engineering College, diving into Computer Science fundamentals.",
    icon: <FaGraduationCap />,
    current: false,
  },
  {
    year: "2023",
    title: "First Coding Experience",
    description:
      "Completed Java training at Technical Hub and started building my first projects.",
    icon: <FaCode />,
    current: false,
  },
  {
    year: "2024",
    title: "Professional Growth",
    description:
      "Became Junior Web Developer, earned multiple certifications, and won coding competitions.",
    icon: <FaTrophy />,
    current: false,
  },
  {
    year: "2025",
    title: "Innovation & Leadership",
    description:
      "Currently interning and working on cutting-edge projects while mentoring others.",
    icon: <FaRocket />,
    current: true,
  },
];

const Journey = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  // Horizontal scroller refs (desktop)
  const hWrapperRef = useRef(null);
  const hTrackRef = useRef(null);
  const hProgressRef = useRef(null);
  const hBaselineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineRef = useRef(null);
  const dotRef = useRef(null);
  const progressBarRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Timeline line grows with smooth scrub (vertical layout)
      if (lineRef.current) {
        gsap.set(lineRef.current, { height: 0 });
        gsap.to(lineRef.current, {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }

      // Accent dot moves along the line (vertical layout)
      if (dotRef.current) {
        gsap.set(dotRef.current, { top: "0%" });
        gsap.to(dotRef.current, {
          top: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }

      // Header progress bar width (vertical layout)
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, { width: "0%" });
        gsap.to(progressBarRef.current, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.25,
          },
        });
      }

      // Each card reveal with smoothness
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, filter: "blur(2px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "bottom 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Horizontal pinned scroller (desktop only)
      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop && hWrapperRef.current && hTrackRef.current) {
        const container = hWrapperRef.current;
        const track = hTrackRef.current;
        const containerWidth = container.offsetWidth;
        const trackWidth = track.scrollWidth;
        // Calculate scroll distance with extra padding to ensure full pin
        const scrollDist = Math.max(trackWidth - containerWidth + 100, 0);

        // Pin the container and scrub the horizontal translation
        gsap.set(track, { x: 0 });
        ScrollTrigger.create({
          trigger: container,
          start: "center center",
          end: () => `+=${scrollDist}`,
          pin: true,
          scrub: 0.35,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            if (hProgressRef.current) {
              hProgressRef.current.style.width = `${progress * 100}%`;
            }
          },
        });

        gsap.to(track, {
          x: -scrollDist,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "center center",
            end: () => `+=${scrollDist}`,
            scrub: 0.35,
          },
        });

        // Reveal baseline line with scroll progress
        if (hBaselineRef.current) {
          gsap.set(hBaselineRef.current, {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left center",
          });
          gsap.to(hBaselineRef.current, {
            scaleX: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "center center",
              end: () => `+=${scrollDist}`,
              scrub: 0.35,
            },
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = itemRefs.current.findIndex((el) => el === visible.target);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: null, threshold: [0.3, 0.6], rootMargin: "-10% 0px -10% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 min-h-screen relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background Watermark */}
      <div className="absolute top-40 -left-20 text-[180px] font-bold text-white/[0.02] leading-none select-none pointer-events-none hidden xl:block rotate-90 origin-left">
        HISTORY
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Changed to false so it re-animates on scroll up
          transition={{ duration: 0.4 }}
          className="mb-16 md:pl-8"
        >
          <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] uppercase mb-2">
            // The Timeline
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-white/50">Journey.</span>
          </h2>
          <p className="text-white/60 max-w-xl text-lg font-light leading-relaxed">
            Every step involved a lesson. Here is the log of my academic and
            professional evolution.
          </p>
        </motion.div>

        {/* Desktop: Horizontal pinned timeline */}
        <div className="hidden md:block relative">
          {/* Sticky header with horizontal progress */}
          <div className="sticky top-24 mb-8 md:pl-8">
            <div className="flex items-center gap-4">
              <div className="text-white/70 text-sm font-mono">
                Step <span className="text-white">{activeIndex + 1}</span> of{" "}
                {journeyData.length}
              </div>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div ref={hProgressRef} className="h-full bg-red-500 w-0" />
            </div>
          </div>

          <div ref={hWrapperRef} className="relative overflow-hidden">
            {/* Horizontal baseline timeline (reveals on scroll) */}
            <div
              ref={hBaselineRef}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/10 z-0"
            />
            <div ref={hTrackRef} className="relative z-10 flex gap-8 pr-8">
              {journeyData.map((item, index) => (
                <div
                  key={`h-${index}`}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`group shrink-0 w-[360px] lg:w-[460px] rounded-2xl border border-white/10 bg-[#0f0f12] p-6 transition-transform duration-300 ${
                    activeIndex === index ? "scale-[1.02] border-red-500" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`${
                        item.current
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-[#1a1a1a] border-white/10 text-white/60"
                      } w-12 h-12 rounded-full border flex items-center justify-center text-2xl`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`font-mono text-xs px-2 py-1 rounded border w-fit ${
                          item.current
                            ? "bg-red-500/20 border-red-500 text-red-500"
                            : "bg-white/5 border-white/10 text-white/50"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h3
                        className={`text-lg lg:text-xl font-bold ${
                          activeIndex === index ? "text-red-500" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`${
                      activeIndex === index ? "text-white/80" : "text-white/60"
                    } font-light leading-relaxed`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative max-w-4xl">
          {/* Sticky header with progress */}
          <div className="sticky top-24 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-white/70 text-sm font-mono">
                Step <span className="text-white">{activeIndex + 1}</span> of{" "}
                {journeyData.length}
              </div>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div ref={progressBarRef} className="h-full bg-red-500" />
            </div>
          </div>

          <div className="absolute left-[28px] top-0 bottom-0 w-[1px] bg-white/10"></div>

          <div
            ref={lineRef}
            className="absolute left-[28px] top-0 w-[1px] bg-red-500 origin-top z-0"
          />

          {/* Moving accent dot */}
          <div
            ref={dotRef}
            className="absolute left-[22px] -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
          />

          <div className="flex flex-col gap-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group relative flex gap-6 items-start transition-transform duration-300 ${
                  activeIndex === index ? "scale-[1.02]" : "scale-[1.0]"
                }`}
              >
                <div className="relative z-10 shrink-0">
                  <div
                    className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-xl border transition-all duration-500
                    ${
                      item.current
                        ? "bg-red-500 text-white border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                        : "bg-[#1a1a1a] border-white/10 text-white/40 group-hover:text-white group-hover:border-red-500 group-hover:bg-red-500/10"
                    }
                  `}
                  >
                    <motion.span
                      animate={{ scale: activeIndex === index ? 1.08 : 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 16,
                      }}
                      className="inline-block"
                    >
                      {item.icon}
                    </motion.span>
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <motion.div
                      variants={textVariants}
                      className={`
                        inline-block font-mono text-sm px-3 py-1 rounded border transition-colors duration-300 w-fit
                        ${
                          item.current
                            ? "bg-red-500/20 border-red-500 text-red-500"
                            : "bg-white/5 border-white/10 text-white/50 group-hover:border-white/30"
                        }
                      `}
                    >
                      {item.year}
                    </motion.div>

                    <motion.h3
                      variants={textVariants}
                      className={`text-xl font-bold transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-red-500"
                          : "text-white group-hover:text-red-500"
                      }`}
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    variants={textVariants}
                    className={`font-light leading-relaxed max-w-2xl transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-white/80"
                        : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    variants={textVariants}
                    className="w-full h-[1px] bg-white/5 mt-8 group-hover:bg-white/10 transition-colors"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
