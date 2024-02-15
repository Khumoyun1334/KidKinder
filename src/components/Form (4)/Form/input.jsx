import React from "react";
import "./index.css";
export default function Inputs() {
  return (
    <div className="width">
      <div className="grid xl:w-[475px] w-[320px] ml-2 lg:w-[420px] md:w-[680px] lg:ml-0 md:-ml-10  h-auto bg-[rgb(23,162,184)] rounded">
        <div className="w-[320px] xl:w-full h-[96.8px] bg-[#00394f] rounded text-center flex items-center justify-center">
          <h4 className="text-[#fff] text-[40px]">Book A All</h4>
        </div>
        <div className="grid justify-items-center py-10 gap-3">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your name"
              className="xl:w-[349px] md:w-[570px] h-[48px] w-[164px] rounded pl-6"
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="xl:w-[349px] md:w-[260px] h-[48px] w-[164px] rounded pl-6"
              placeholder="Your email"
            />
          </div>
          <div>
            <select
              class="custom-select border-0 px-4 xl:w-[349px] md:w-[570px] h-[48px] w-[164px] rounded"
              style={{ height: "47px" }}
            >
              <option selected="" className="text-gray-300]">
                Select A Class
              </option>
              <option value="1">Class 1</option>
              <option value="2">Class 1</option>
              <option value="3">Class 1</option>
            </select>
          </div>
          <div>
            <button className="xl:w-[349px] lg::w-[330px] md:w-[250px] w-[164px] lg:ml-0 md:ml-0 xl-ml-16 h-[56px] rounded-full bg-[#001d29] text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
