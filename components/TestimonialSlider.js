// components/TestimonialSlider.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper"; // Added Autoplay & Effect
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Optional: adds a 3D effect

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
  // ... add the rest of your data here
];

const TestimonialSlider = () => {
  return (
    <div className="w-full py-12 text-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
          What People Say
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Feedback from mentors and colleagues regarding technical skills and collaboration.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="testimonial-swiper w-full max-w-6xl mx-auto pb-12 px-4"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 40 }, // Set to 3 if you want smaller cards
        }}
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index} className="h-auto">
              {/* Card Container */}
              {/* Card Container - Enhanced Glassmorphism */}
              <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/20 shadow-lg overflow-hidden">
                
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Quote Icon with Glow */}
                <div className="absolute -top-4 -right-4 text-8xl text-sky-400/10 group-hover:text-sky-400/20 transition-all duration-500 rotate-12 group-hover:rotate-0">
                  <FaQuoteLeft />
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-transparent rounded-br-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full blur-2xl"></div>

                {/* Star Rating at Top */}
                <div className="flex gap-1 text-yellow-400 mb-6 text-sm z-10 drop-shadow-lg">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                    ))}
                </div>

                {/* Message with Enhanced Typography */}
                <div className="relative z-10 mb-6 flex-grow">
                  <p className="text-gray-100 leading-relaxed text-base md:text-lg font-light">
                    "{person.message}"
                  </p>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6 group-hover:via-sky-400/50 transition-all duration-500"></div>

                {/* Footer: Image & Name */}
                <div className="flex items-center gap-x-4 z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-sky-400/50 group-hover:ring-sky-400 transition-all duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-purple-400/20 animate-pulse"></div>
                    <div className="rounded-full w-full h-full overflow-hidden relative">
                       <Image
                        src={person.image}
                        fill
                        style={{ objectFit: "cover" }}
                        alt={person.name}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors duration-300">
                      {person.name}
                    </h3>
                    <p className="text-xs text-sky-300/80 font-medium uppercase tracking-widest">
                      {person.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;