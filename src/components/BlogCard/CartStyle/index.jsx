import { IoIosChatbubbles } from "react-icons/io";
import { AiFillFolder } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import React from "react";

function CartStyle({ img, title, desc }) {
  return (
    <div className="w-[100%] border rounded-lg">
      <div className="">
        <div>
          <img className="rounded-t-lg w-full" src={img} alt="" />
        </div>
        <div className="p-6 bg-[#F8F9FA] rounded-b-lg mt-3">
          <div className="">
            <p className="text-[24px] data">{title}</p>
            <div className="flex justify-center gap-4 text-[12.8px] py-1">
              <p className="flex items-center gap-0 ">
                <BsFillPersonFill color="#17a2b8" size={18} />
                Admin
              </p>
              <p className="flex items-center gap-1">
                <AiFillFolder color="#17a2b8" size={18} />
                Web Design
              </p>
              <p className="flex items-center gap-1">
                <IoIosChatbubbles color="#17a2b8" size={18} />
                15
              </p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="text-center text-[16px] text-[#666666] salom">
              {desc}
            </p>
            <br />
            <button className="w-[127.3px] h-[37.6px] rounded-full text-white bg-[#17a2b8]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
