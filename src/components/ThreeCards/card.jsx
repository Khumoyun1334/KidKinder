import React from "react";
// import Rasm from "../../../public/assets/logo.png";
function Card({ title }) {
  return (
    <div>
      <div className="w-[379.99px] bg-[#F8F9FA] h-[642.92px] rounded shadow-md">
        <div className="w-full h-[233.33px] ">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div>
          <p className="text-[24px] text-[#0394F] mt-4">{title}</p>
        </div>
        <div className="border-b border-gray-400 pb-5 mb-5">
          <p className="text-center ">
            Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum
            duo et no et, ipsum ipsum erat duo amet clita duo
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-center px-20 text-start">
          <div>Age of kids</div>
          <div>3 - 6 Years</div>
          <div>Total Seats</div>
          <div>40 Seats</div>
          <div>Class Time</div>
          <div>08:00 - 10:00</div>
          <div>Tution Fee</div>
          <div>$290 / Month</div>
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
