import React, { useState } from "react";
import QAsos from "../ImageAssets/portfolio-1.jpg";
import QAsos2 from "../ImageAssets/portfolio-2.jpg";
import QAsos3 from "../ImageAssets/portfolio-3.jpg";

import CartStyle from "./CartStyle";

const data = [
  {
    img: "all",
    status: "All",
  },
  {
    img: QAsos,
    status: "Html",
  },
  {
    img: QAsos2,
    status: "Photo",
  },
  {
    img: QAsos3,
    status: "Word",
  },
];

function GallaryFilter() {
  const [fillter, setFillter] = useState("All");
  return (
    <div className="w-full items-center text-[#1e1e1e] bg-[#fafafa] py-20">
      <div className="grid w-[100%] px-4 gap-10 xl:gap-28 xl:w-full" id="Prt">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-4 text-center md:flex lg:flex xl:flex text-[16px] font-medium">
            <button
              style={{
                height: "40px",
                borderRadius: "360px",
                padding: "4px 16px",
              }}
              className={`${
                fillter === "All"
                  ? "bg-[#17A1B7] text-white p-1 px-4"
                  : "bg-[#F8F8F8] text-[#17A1B7] border-[1px] border-[#17A1B7] p-1 px-4"
              } ''`}
              onClick={() => {
                setFillter("All");
              }}
            >
              All
            </button>
            <button
              style={{
                height: "40px",
                borderRadius: "360px",
                padding: "4px 16px",
              }}
              className={`${
                fillter === "Html"
                  ? "bg-[#17A1B7] text-white p-2 px-4"
                  : "bg-[#F8F8F8] text-[#17A1B7] border-[1px] border-[#17A1B7] "
              } ""`}
              onClick={() => {
                setFillter("Html");
              }}
            >
              Play
            </button>
            <button
              style={{
                height: "40px",
                borderRadius: "360px",
                padding: "4px 16px",
              }}
              className={`${
                fillter === "Photo"
                  ? "bg-[#17A1B7] text-white p-2 px-4"
                  : "bg-[#F8F8F8] text-[#17A1B7] border-[1px] border-[#17A1B7]"
              } ""`}
              onClick={() => {
                setFillter("Photo");
              }}
            >
              Drawing
            </button>
            <button
              style={{
                height: "40px",
                borderRadius: "360px",
                padding: "4px 16px",
              }}
              className={`${
                fillter === "Word"
                  ? "bg-[#17A1B7] text-white p-2 px-4"
                  : "bg-[#F8F8F8] text-[#17A1B7] border-[1px] border-[#17A1B7]"
              } ""`}
              onClick={() => {
                setFillter("Word");
              }}
            >
              Reading
            </button>
          </div>
        </div>
        <div className="grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:flex" id="Prt">
          {data
            .filter((elem) => {
              if (fillter === "All") {
                return elem;
              } else {
                return elem.status === fillter;
              }
            })
            .map((item) => (
              <CartStyle key={item.id} img={item.img} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default GallaryFilter;
