import React from "react";

function Form() {
  return (
    <div className="xl:w-[76%] lg:w-[90%] md:w-[100%] md:m-auto  m-auto">
      <div className="lg:flex block items-center gap-10">
        <div className="lg:w-[75%] w-[86%] m-auto md:m-auto">
          <div className=" md:ml-0 lg:ml-0">
            <h4 className="flex items-center text-[#17a2b8]">
              BOOK A SEAT
              <div className="w-[45px] ml-1 h-[2.5px] bg-[#17a2b8]"></div>
            </h4>
            <h4 className="lg:text-[2.5rem] md:text-[2rem] font-bold text-[#00394F] gguu text-[26px]">
              Book A Seat For Your Kid
            </h4>
            <br />
            <p className="">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
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
        <div className="lg:w-[50%] w-[87%] m-auto">
          <div>
            <div className="p-4 but10 bg-[#00394F] rounded-t-md  text-center text-[40px] text-white border">
              <p>Book A Seat</p>
            </div>
            <div className="bg-[#17A2B8] rounded-b-md -m p-12">
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 w-full px-5 rounded-md  placeholder:text-[#00394F] font-[Nunito]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="p-4 w-full px-5 rounded-md  placeholder:text-[#00394F] font-[Nunito]"
                />
                <select
                  className="p-4 rounded-md px-4 font-[Nunito]"
                  name=""
                  id=""
                >
                  <option value="">Select A Class</option>
                  <option value="">class1</option>
                  <option value="">class1</option>

                  <option value="">class1</option>
                </select>
                <button className="p-4 rounded-[50px] px-[50px]  border Lear">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Form;
