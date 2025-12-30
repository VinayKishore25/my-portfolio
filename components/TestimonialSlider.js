// components/TestimonialSlider.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// --- DATA ---
const testimonialData = [
  {
    image: "/dsp.png",
    name: "Durga Sai Prasad",
    position: "Coding Mentor",
    message:
      "As a coding mentor, he demonstrates strong problem-solving skills and a passion for continuous learning. He effectively simplifies complex coding challenges, helping others grasp key concepts. With contributions to projects like the Resume Builder and Veda Website.",
  },
  {
    image: "/hanumanthu.png",
    name: "Hanumanthu Buddha",
    position: "Development Mentor",
    message:
      "As a mentor, he excels in problem-solving and continuous learning. With a knack for simplifying complex concepts, he has made valuable contributions to projects like the Resume Builder. He fosters growth in others, guiding teams toward technical excellence.",
  },
  {
    image: "/Kiran Kumar.png",
    name: "Kiran Kumar",
    position: "Communication Mentor",
    message:
      "As a communication mentor, he excels in conveying ideas clearly and effectively. He helps others improve their communication skills, fostering a collaborative environment where team members feel empowered to share their thoughts.",
  },
  {
    image: "/dsp.png",
    name: "Arjun Reddy",
    position: "Full Stack Mentor",
    message:
      "His dedication to mastering both frontend and backend technologies is impressive. He consistently demonstrates ability to build end-to-end solutions with modern frameworks. His problem-solving approach makes him an excellent developer.",
  },
  {
    image: "/hanumanthu.png",
    name: "Vikram Sharma",
    position: "React.js Specialist",
    message:
      "Working with him on React projects has been exceptional. His understanding of component lifecycle, state management, and modern React patterns is outstanding. He brings creative solutions to complex UI challenges.",
  },
  {
    image: "/Kiran Kumar.png",
    name: "Rajesh Patel",
    position: "UI/UX Design Mentor",
    message:
      "His eye for design and user experience is remarkable. He understands the importance of creating intuitive interfaces that users love. His ability to translate complex requirements into simple, elegant designs is truly impressive.",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-primary to-primary/95 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16 px-4 relative z-10"
      >
        <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
          <HiSparkles />
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          What People <span className="text-accent">Say</span>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto">
          Feedback from mentors and colleagues regarding technical skills and
          collaboration.
        </p>
      </motion.div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        watchSlidesProgress={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="testimonial-swiper w-full max-w-6xl mx-auto pb-16 px-4"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 },
        }}
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index} className="h-auto">
              {/* Card Container */}
              <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 shadow-xl overflow-hidden card-shine">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 text-8xl text-accent/10 group-hover:text-accent/20 transition-all duration-500 rotate-12 group-hover:rotate-0">
                  <FaQuoteLeft />
                </div>

                {/* Star Rating at Top */}
                <div className="flex gap-1 text-accent mb-6 text-sm z-10">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Message */}
                <div className="relative z-10 mb-6 flex-grow">
                  <p className="text-white/80 leading-relaxed text-base">
                    &ldquo;{person.message}&rdquo;
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 group-hover:via-accent/40 transition-all duration-500"></div>

                {/* Footer: Image & Name */}
                <div className="flex items-center gap-x-4 z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/30 group-hover:ring-accent transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={person.image}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={person.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide group-hover:text-accent transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-xs text-accent/80 font-medium uppercase tracking-widest">
                      {person.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
