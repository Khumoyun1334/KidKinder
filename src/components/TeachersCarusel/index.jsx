import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function TeachearCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 40,
          },
          999: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          // el: ".swiper-pagination",
        }}
        className="mySwiper h-[330px] "
      >
        <div>
          <div className="flex flex-col items-center mt-[110px] justify-center ">
            <div className="flex gap-[0.7em] items-center justify-center">
              <p className="w-[50px] h-[2px] bg-[red]"></p>
              <p className="nunito text-[1em] tracking-wider">TESTIMONIAL</p>
              <p className="w-[50px] h-[2px] bg-[red]"></p>
            </div>
            <p className="handlee text-[27px] md:text-[2.4em] pt-[10px]">
              What Parents Say!
            </p>
          </div>
        </div>
        <SwiperSlide className="SwiperSlide  mt-[40px] md:ml-[-27%]">
          <div className=" flex flex-col justify-center items-center">
            <div className="rounded-[10px]  w-[100%] px-[8.1%] lg:px-[3.9%]  border py-[1.5em]">
              <span className="inline-flex md:text-[1.5em] lg:text-[1.8em] text-[1.3em]">
                <FaQuoteLeft />
              </span>
              <span className="nunito text-[1em] pl-[1em] leading-[1.1] tracking-[0.010em]">
                {" "}
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum clita
              </span>
            </div>
            <div className="flex items-center gap-[1.5em] justify-center ml-[-19%] lg:ml-[-29%] mt-[4%]">
              <img
                className="rounded-[50%] w-[70px] h-[70px]"
                src="assets/img/testimonial-1.jpg"
                alt=""
              />
              <div className="grid justify-center items-center">
                <p className="handlee text-[1.2em] tracking-wide">
                  Parent Name
                </p>
                <p className="italic leading-[1.8]">Profession</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide  mt-[40px]">
          <div className=" flex flex-col justify-center items-center">
            <div className="rounded-[10px]  w-[100%] px-[8.1%] lg:px-[3.9%]  border py-[1.5em]">
              <span className="inline-flex md:text-[1.5em] lg:text-[1.8em]  text-[1.3em]">
                <FaQuoteLeft />
              </span>
              <span className="nunito text-[1em] pl-[1em] leading-[1.1] tracking-[0.010em]">
                {" "}
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum clita
              </span>
            </div>
            <div className="flex items-center gap-[1.5em] justify-center ml-[-19%] lg:ml-[-29%] mt-[4%]">
              <img
                className="rounded-[50%] w-[70px] h-[70px]"
                src="assets/img/testimonial-2.jpg"
                alt=""
              />
              <div className="grid justify-center items-center">
                <p className="handlee text-[1.2em] tracking-wide">
                  Parent Name
                </p>
                <p className="italic leading-[1.8]">Profession</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide mt-[40px]">
          <div className=" flex flex-col justify-center items-center">
            <div className="rounded-[10px]  w-[100%] px-[8.1%] lg:px-[3.9%]  border py-[1.5em]">
              <span className="inline-flex md:text-[1.5em] lg:text-[1.8em]  text-[1.3em]">
                <FaQuoteLeft />
              </span>

              <span className="nunito text-[1em] pl-[1em] leading-[1.1] tracking-[0.010em]">
                {" "}
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum clita
              </span>
            </div>
            <div className="flex items-center gap-[1.5em] justify-center ml-[-19%] lg:ml-[-29%] mt-[4%]">
              <img
                className="rounded-[50%] w-[70px] h-[70px]"
                src="assets/img/testimonial-1.jpg"
                alt=""
              />
              <div className="grid justify-center items-center">
                <p className="handlee text-[1.2em] tracking-wide">
                  Parent Name
                </p>
                <p className="italic leading-[1.8]">Profession</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide mt-[40px]">
          <div className=" flex flex-col justify-center items-center">
            <div className="rounded-[10px]  w-[100%] px-[8.1%] lg:px-[3.9%]  border py-[1.5em]">
              <span className="inline-flex md:text-[1.5em] lg:text-[1.8em]  text-[1.3em]">
                <FaQuoteLeft />
              </span>
              <span className="nunito text-[1em] pl-[1em] leading-[1.1] tracking-[0.010em]">
                {" "}
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum clita
              </span>
            </div>
            <div className="flex items-center gap-[1.5em] justify-center ml-[-19%] lg:ml-[-29%] mt-[4%]">
              <img
                className="rounded-[50%] w-[70px] h-[70px]"
                src="assets/img/testimonial-2.jpg"
                alt=""
              />
              <div className="grid justify-center items-center">
                <p className="handlee text-[1.2em] tracking-wide">
                  Parent Name
                </p>
                <p className="italic leading-[1.8]">Profession</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide mt-[40px]">
          <div className=" flex flex-col justify-center items-center">
            <div className="rounded-[10px]  w-[100%] px-[8.1%] lg:px-[3.9%]  border py-[1.5em]">
              <span className="inline-flex md:text-[1.5em] lg:text-[1.8em]  text-[1.3em]">
                <FaQuoteLeft />
              </span>
              <span className="nunito text-[1em] pl-[1em] leading-[1.1] tracking-[0.010em]">
                {" "}
                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr
                eirmod clita lorem. Dolor tempor ipsum clita
              </span>
            </div>
            <div className="flex items-center gap-[1.5em] justify-center ml-[-19%] lg:ml-[-29%] mt-[4%]">
              <img
                className="rounded-[50%] w-[70px] h-[70px]"
                src="assets/img/testimonial-4.jpg"
                alt=""
              />
              <div className="grid justify-center items-center">
                <p className="handlee text-[1.2em] tracking-wide">
                  Parent Name
                </p>
                <p className="italic leading-[1.8]">Profession</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <p className="h-[90px]"></p>
    </>
  );
}
