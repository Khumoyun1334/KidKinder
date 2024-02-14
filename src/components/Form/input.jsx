import React from "react";

export default function Inputs() {
  return (
    <div>
      <div className="grid w-[475px] h-auto bg-[rgb(23,162,184)] rounded">
        <div className="w-full h-[96.8px] bg-[#00394f] rounded text-center flex items-center justify-center">
          <h4 className="text-[#fff] text-[40px]">Book A Seat</h4>
        </div>
        <div className="grid justify-items-center py-10 gap-3">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your name"
              className="w-[349px] h-[48px] rounded pl-6"
            />
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="w-[349px] h-[48px] rounded pl-6"
              placeholder="Your email"
            />
          </div>
          <div>
            <select
              class="custom-select border-0 px-4 w-[349px] h-[48px] rounded"
              style={{ height: "47px" }}
            >
              <option selected="">Select A Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 1</option>
              <option value="3">Class 1</option>
            </select>
          </div>
          <div>
            <button className="w-[349px] h-[56px] rounded-full bg-[#001d29] text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
