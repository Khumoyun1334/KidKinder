import React, { useState } from "react";
import QAsos from "../ImageAssets/portfolio-1.jpg";
import QAsos2 from "../ImageAssets/portfolio-2.jpg";
import QAsos3 from "../ImageAssets/portfolio-3.jpg";
import QAsos4 from "../ImageAssets/portfolio-1.jpg";
import QAsos5 from "../ImageAssets/portfolio-2.jpg";
import QAsos6 from "../ImageAssets/portfolio-3.jpg";
import CartStyle from "./CartStyle";

const data = [
  {
    img: QAsos,
    status: "Html",
  },
  {
    img: QAsos3,
    status: "Html",
  },
  {
    img: QAsos4,
    status: "Photo",
  },
  {
    img: QAsos2,
    status: "Photo",
  },
  {
    img: QAsos6,
    status: "Word",
  },
  {
    img: QAsos5,
    status: "Word",
  },
];

function Filtr() {
  const [fillter, setFillter] = useState("All");
  return (
    <section id="port">
      <div className="pb-20 pt-20 xl:mx-48" id="Prt">
        <div className="grid justify-center text-center text-[30px] text-[#00394f] pb-4">
          <div c assName="grid justify-center text-center text-[30px] text-[#00394f] pt-[100px]">
            <p className="text-[#17a2b8] text-[16px]"> OUR GALLERY</p>
            <p className="font-[handlee] font-semibold text-[38px]">Our Kids School Gallery</p>
          </div>
        </div>
        <div className="grid grid-cols-3 md:flex lg:flex xl:flex xl:gap-4 md:gap-4 lg:gap-4 justify-center">
          <button
            style={{ borderRadius: "30px", padding: "2px 20px" }}
            className={`${
              fillter === "All"
                ? "bg-[#17a2b8] text-white"
                : "border-[1px] border-[#17a2b8] text-[#17a2b8]"
            } ''`}
            onClick={() => {
              setFillter("All");
            }}
          >
            All
          </button>
          <button
            style={{ borderRadius: "30px", padding: "2px 20px" }}
            className={`${
              fillter === "Html"
                ? "bg-[#17a2b8] text-white p-2 px-4"
                : "border-[1px] border-[#17a2b8] text-[#17a2b8]"
            } ""`}
            onClick={() => {
              setFillter("Html");
            }}
          >
            Playing
          </button>
          <button
            style={{ borderRadius: "30px", padding: "10px 10px" }}
            className={`${
              fillter === "Photo"
                ? "bg-[#17a2b8] text-white p-2 px-4"
                : "border-[1px] border-[#17a2b8] text-[#17a2b8]"
            } ""`}
            onClick={() => {
              setFillter("Photo");
            }}
          >
            Drawing
          </button>
          <button
            style={{ borderRadius: "30px", padding: "10px 10px" }}
            className={`${
              fillter === "Word"
                ? "bg-[#17a2b8] text-white p-2 px-4"
                : "border-[1px] border-[#17a2b8] text-[#17a2b8]"
            } ''`}
            onClick={() => {
              setFillter("Word");
            }}
          >
            Reading
          </button>
        </div>
        <div
          className="md:grid md:grid-cols-2 md:gap-10 md:px-10 mt-8 grid grid-cols-1 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3"
          id="Prt"
        >
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
    </section>
  );
}

export default Filtr;
