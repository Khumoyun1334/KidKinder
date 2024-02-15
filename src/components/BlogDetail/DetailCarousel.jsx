import React from "react";
// Import Swiper React components
import { FaUserAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import "./mobile.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function DetailCarousel() {
  return (
    <div>
      <p className="related handlee text-[1.9em] text-[#00394F] mt-[50px]">Related Post</p>
      <div className="">
        <Swiper
          loop
          breakpoints={{
            640: {
              slidesPerView: 1,
              //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              //   spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1224: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          //   spaceBetween={10}
          centeredSlides={true}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="DetailSwiper mt-[25px] w-[100%]  "
        >
          {/* <SwiperSlide className="bg-[#F8F9FA] py-[0.3rem]">
               <div className="flex gap-[1em]  ml-[0.4em] lg:w-[270px] items-center justify-center">
              <img src="assets/img/post-1.jpg" alt="" />
              <div>
                <p className="handlee text-[1.3em] leading-[1.1] pr-[0.99em]">
                  Diam amet eos at no eos
                </p>
                <div className="flex  gap-[0.8em] mt-[0.3em] items-center justify-start">
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.75em]">
                      <FaUserAlt />{" "}
                    </p>
                    <p className="text-[0.75em]">Admin</p>
                  </div>
                  <div className="flex  gap-[0.4em] items-center justify-center">
                    <span className="text-[0.75em]">
                      <FaFolder />
                    </span>
                    <p className="text-[0.75em]">Web Design</p>
                  </div>
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.9em]">
                      <FaComments />
                    </p>
                    <p className="text-[0.75em]">15</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="bg-[#F8F9FA] py-[0.5rem]">
            <div className="flex gap-[0.8em] xl:ml-[-2em]  lg:w-[270px]items-center justify-center">
              <img src="assets/img/post-2.jpg" alt="" />
              <div>
                <p className="handlee text-[1.3em] leading-[1.1] pr-[0.99em] text-[#00394F]">
                  Diam amet eos at no eos
                </p>
                <div className="flex  gap-[1em] mt-[0.3em] items-center justify-start">
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.75em]">
                      <FaUserAlt />{" "}
                    </p>
                    <p className="text-[0.75em]">Admin</p>
                  </div>
                  <div className="flex  gap-[0.4em] items-center justify-center">
                    <span className="text-[0.75em]">
                      <FaFolder />
                    </span>
                    <p className="text-[0.75em]">Web Design</p>
                  </div>
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.9em]">
                      <FaComments />
                    </p>
                    <p className="text-[0.75em]">15</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#F8F9FA] py-[0.5rem]">
            <div className="flex gap-[0.8em] xl:ml-[-2em]  lg:w-[270px]items-center justify-center">
              <img src="assets/img/post-2.jpg" alt="" />
              <div>
                <p className="handlee text-[1.3em] leading-[1.1] pr-[0.99em] text-[#00394F]">
                  Diam amet eos at no eos
                </p>
                <div className="flex  gap-[1em] mt-[0.3em] items-center justify-start">
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.75em]">
                      <FaUserAlt />{" "}
                    </p>
                    <p className="text-[0.75em]">Admin</p>
                  </div>
                  <div className="flex  gap-[0.4em] items-center justify-center">
                    <span className="text-[0.75em]">
                      <FaFolder />
                    </span>
                    <p className="text-[0.75em]">Web Design</p>
                  </div>
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.9em]">
                      <FaComments />
                    </p>
                    <p className="text-[0.75em]">15</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#F8F9FA] py-[0.5rem]">
            <div className="flex gap-[1em] xl:ml-[-2em] lg:w-[270px]items-center justify-center">
              <img src="assets/img/post-3.jpg" alt="" />
              <div>
                <p className="handlee text-[1.3em] leading-[1.1] pr-[0.99em] text-[#00394F]">
                  Diam amet eos at no eos
                </p>
                <div className="flex  gap-[0.8em] mt-[0.3em] items-center justify-start">
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.75em]">
                      <FaUserAlt />{" "}
                    </p>
                    <p className="text-[0.75em]">Admin</p>
                  </div>
                  <div className="flex  gap-[0.4em] items-center justify-center">
                    <span className="text-[0.75em]">
                      <FaFolder />
                    </span>
                    <p className="text-[0.75em]">Web Design</p>
                  </div>
                  <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                    <p className="text-[0.9em]">
                      <FaComments />
                    </p>
                    <p className="text-[0.75em]">15</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
