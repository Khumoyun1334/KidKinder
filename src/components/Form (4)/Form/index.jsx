import React from "react";

import Inputs from "./input";

function Form() {
  return (
    <div className="grid overflow-hidden lg:justify-items-center ml-0 md:ml-0 justify-items-center pl-10 grid-cols-1 lg:grid-cols-2 xl:mx-44">
      <div>
        <div className="-ml-4 md:ml-0 lg:ml-0">
          <h4 className="flex items-center text-[#17a2b8]">
            BOOK A SEAT
            <div className="w-[45px] ml-1 h-[2.5px] bg-[#17a2b8]"></div>
          </h4>
          <h4 className="lg:text-[2.5rem] md:text-[2rem] text-[26px]">
            Book A Seat For Your Kid
          </h4>
          <br />
          <p className="">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <br />
          <p class="py-2">
            <i
              style={{ fontWeight: "bolder" }}
              class="fa fa-check text-success mr-3 font-bold text-[#28a745]"
            ></i>
            Labore eos amet dolor amet diam
          </p>
          <p class="py-2">
            <i
              style={{ fontWeight: "bolder" }}
              class="fa fa-check text-success mr-3 font-bold text-[#28a745]"
            ></i>
            Etsea et sit dolor amet ipsum
          </p>
          <p class="py-2">
            <i
              style={{ fontWeight: "bolder" }}
              class="fa fa-check text-success mr-3 font-bold text-[#28a745]"
            ></i>
            Diam dolor diam elitripsum vero.
          </p>
          <br />
          <button className="w-[124.43px] h-[41.6px] text-[16px] font-normal rounded-full bg-[#17A2B8] text-white">
            Join Now
          </button>
        </div>
        <br />
        <br />
      </div>
      <div className="width">
        <Inputs />
      </div>
      <br />
    </div>
  );
}

export default Form;
