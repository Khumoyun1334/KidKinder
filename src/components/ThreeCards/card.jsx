import React from "react";
// import Rasm from "../../../public/assets/img/logo2.png";
function Card({ title }) {
  return (
    <div>
      <div className="Cards xl:w-[365.6px] lg:w-[300px] bg-[#F8F9FA] h-[642.92px] rounded shadow-md overflow-hidden">
        <div className="w-full h-auto ">
          <img className="img w-full" src="assets/img/class-1.jpg" alt="" />
        </div>
        <div>
          <p
            style={{ fontFamily: "Handle,cursive" }}
            className="text-[24px] text-[#0394F] mt-4"
          >
            {title}
          </p>
        </div>
        <div className="border-b border-gray-400 pb-5 mb-5">
          <p className="text-center xl:w-[340px] text salom ml-2">
            Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum
            duo et no et, ipsum ipsum erat duo amet clita duo
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-center md:px-2 xl:px-20 lg:px-0 px-56 text-start">
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
