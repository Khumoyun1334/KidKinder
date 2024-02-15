import React from "react";
function Text() {
  return (
    <div className="flex justify-center">
      <div
        style={{ textAlign: "center", display: "grid" }}
        className="gird justify-items-center text-center"
      >
        <p className="flex items-center ">
          <div className="w-[45px] mr-1 h-[2.5px] bg-[#17a2b8]"></div>
          <p className="uppercase text-[1rem] text-[#17a2b8]">
            Popular Classes
          </p>
          <div className="w-[45px] ml-1 h-[2.5px] bg-[#17a2b8]"></div>
        </p>
        <p
          style={{ fontWeight: "900" }}
          className="text-[38px] text-[#00394F] font-[Handlee]"
        >
          Classes for Your Kids
        </p>
      </div>
    </div>
  );
}
export default Text;
