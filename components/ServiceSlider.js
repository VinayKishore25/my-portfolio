// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaRobot } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";

import { FreeMode, Pagination } from "swiper";

// Data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Creating responsive websites using ReactJS, NextJS.',
  },
  {
    icon: <RxRocket />,
    title: 'Problem-Solving',
    description: 'Tackling complex challenges on coding platforms.',
  },
  {
    icon: <FaJava />,
    title: 'Java Development',
    description: 'Building scalable and efficient Java applications.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design ',
    description: 'Ensuring a seamless user experience in web applications',
  },
  {
    icon: <FaRobot />,
    title: 'Machine Learning',
    description: 'Developing predictive models and data analysis tools.',
  },
  {
    icon: <LiaChalkboardTeacherSolid />,
    title: 'Teaching',
    description: 'Sharing knowledge and skills with aspiring developers.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,125,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl text-accent mb-4">
                  {item.icon}
                </div>
                {/* Title & Desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">
                    {item.title}
                  </div>
                  <p className="max-w-[350px] leading-normal">
                    {item.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
