import React from "react";
// import Rasm from "../../../public/assets/img/logo2.png";
function Card({ title }) {
  return (
    <div>
      <div className="xl:w-[365.6px] w-[100%] lg:w-[300px] bg-[#F8F9FA] rounded shadow-md pb-10">
        <div className="w-full">
          <img className="img w-full" src="assets/img/class-1.jpg" alt="" />
        </div>
        <div>
          <p className="font-[handlee] text-[24px] font-extrabold text-[#0394F] mt-4">
            {title}
          </p>
        </div>
        <div className="border-b border-gray-400 pb-5 mb-5">
          <p className="text-center xl:w-[340px] text salom ml-2">
            Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum
            duo et no et, ipsum ipsum erat duo amet clita duo
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 xl:gap-x-0 -ml-10 justify-items-center md:px-2 xl:px-20 lg:px-0 text-center">
          <div className="w-full text-end font-bold text-[#666666] border-b-[1px] xl:ml-0 ml-16 pl-10 xl:pl-0 pr-4">
            Age of kids
          </div>
          <div className="w-full text-start font-normal text-[#666666] border-l-[1px] xl:pl-1 xl:ml-5 border-b-[1px]">
            3 - 6 Years
          </div>
          <div className="w-full text-end font-bold text-[#666666] border-b-[1px] ml-16 pl-10 xl:pl-0 xl:ml-0 pr-4">
            Total Seats
          </div>
          <div className="w-full  text-start font-normal text-[#666666] border-l-[1px] pl-6 xl:pl-1 xl:ml-5 border-b-[1px]">
            40 Seats
          </div>
          <div className="w-full text-end font-bold text-[#666666] border-b-[1px] ml-16 pl-10 xl:pl-0 xl:ml-0 pr-4">
            Class Time
          </div>
          <div className="w-full  text-start font-normal text-[#666666] border-l-[1px] pl-6 xl:pl-1 xl:ml-5 border-b-[1px]">
            08:00 - 10:00
          </div>
          <div className="w-full text-end font-bold text-[#666666] border-b-[1px] ml-16 pl-10 xl:pl-0 xl:ml-0 pr-4">
            Tution Fee
          </div>
          <div className="w-full  text-start font-normal text-[#666666] border-l-[1px] pl-6 xl:pl-1 xl:ml-5 border-b-[1px]">
            $290 / Month
          </div>
        </div>

        <br />
        <div className="flex justify-center">
          <button className="w-[114.7px] h-[37.6px] text-[16px] font-normal rounded-full bg-[#17A2B8] text-white">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
