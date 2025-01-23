// testimonial data
const testimonialData = [
  {
    image: "/dsp.png",
    name: "Durga Sai Prasad",
    position: "Coding Mentor",
    message:
    "As a coding mentor, he demonstrates strong problem-solving skills and a passion for continuous learning. He effectively simplifies complex coding challenges, helping others grasp key concepts. With contributions to projects like the Resume Builder and Veda Website, he guides others toward improving their technical skills and consistently delivering high-quality solutions."
  },
  {
    image: "/hanumanthu.png",
    name: "Hanumanthu Buddha",
    position: "Development Mentor",
    message:
      "As a mentor, he excels in problem-solving and continuous learning. With a knack for simplifying complex concepts, he has made valuable contributions to projects like the Resume Builder and Veda Website. He fosters growth in others, guiding teams toward technical excellence and consistently delivering high-quality results.",
  },
  {
    image: "/Kiran Kumar.png",
    name: "Kiran Kumar",
    position: "Communication Mentor",
    message:
      "As a communication mentor, he excels in conveying ideas clearly and effectively. He helps others improve their communication skills, fostering a collaborative environment where team members feel empowered to share their thoughts. With a focus on clarity and understanding, he guides others to enhance both verbal and written communication",
  },
];

// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Required modules
import { Navigation, Pagination } from "swiper";

// Icons
import { FaQuoteLeft } from "react-icons/fa";

// Next Image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div
                    className="mb-2 mx-auto rounded-circle overflow-hidden"
                    style={{ width: "100px", height: "100px", borderRadius:"50px" }}
                  >
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>

                  {/* Name */}
                  <div className="text-lg">{person.name}</div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* Quote & Message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
