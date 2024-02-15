import { BiChevronRight } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import React from "react";

function Futter() {
  return (
    <div className="bg-[#00394F] py-11 mt-32">
      <div className="lg:grid lg:grid-cols-4 lg:w-[93%]  md:w-[93%] w-[88%] m-auto md:m-auto gap-8  lg:m-auto md:grid md:grid-cols-2 grid grid-cols-1">
        <div>
          <div className="flex items-center xl:gap-4 gap-4 lg:gap-2">
            <div>
              <img className="h-[55px]" src="assets/img/logo2.png" alt="" />
            </div>
            <div>
              <p className="text-[#ffffff] xl:text-[50px] lg:text-[37px] text-[50px] Kind">
                KidKinder
              </p>
            </div>
          </div>
          <div>
            <p className="Fut text-[16px] text-white mt-3">
              Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
              dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet
              elitr stet diam duo eos rebum ipsum diam ipsum elitr.
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <button
              style={{ transition: "all .3s" }}
              className="w-[40px] flex hover:text-white hover:bg-[#17A2B8] justify-center text-[20px]  items-center h-[40px] text-[#17A2B8] border border-[#17A2B8] rounded-[360px]"
            >
              <AiOutlineTwitter />
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[40px] flex hover:text-white hover:bg-[#17A2B8] justify-center text-[20px]  items-center h-[40px] text-[#17A2B8] border border-[#17A2B8] rounded-[360px]"
            >
              <AiOutlineTwitter />
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[40px] flex hover:text-white hover:bg-[#17A2B8] justify-center text-[20px]  items-center h-[40px] text-[#17A2B8] border border-[#17A2B8] rounded-[360px]"
            >
              <AiOutlineTwitter />
            </button>
            <button
              style={{ transition: "all .3s" }}
              className="w-[40px] flex hover:text-white hover:bg-[#17A2B8] justify-center text-[20px]  items-center h-[40px] text-[#17A2B8] border border-[#17A2B8] rounded-[360px]"
            >
              <AiOutlineTwitter />
            </button>
          </div>
        </div>
        <div className="">
          <div>
            <p className="futt">Get In Touch</p>
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <MdLocationPin color="#17A2B8" fontSize={"30px"} />
            </div>
            <div>
              <p className="futtetx">Address</p>
              <p className="text-[16px] futter mt-1">
                123 Street, New York, USA
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <MdEmail color="#17A2B8" fontSize={"30px"} />
            </div>
            <div>
              <p className="futtetx">Email</p>
              <p className="text-[16px] futter mt-1">info@example.com</p>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <div>
              <FaPhone color="#17A2B8" fontSize={"30px"} />
            </div>
            <div>
              <p className="futtetx">Phone</p>
              <p className="text-[16px] futter mt-1">+012 345 67890</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-8 xl:ml-0 md:ml-0 ml-0">
          <div>
            <p className="futt">Quick Links</p>
          </div>
          <div className="flex flex-col gap-2.5 mt-4">
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">Home</p>
            </div>
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">About Us</p>
            </div>
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">Our Clasess</p>
            </div>
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">Our Teachers</p>
            </div>
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">Our Blog</p>
            </div>
            <div className="flex text-white text-[16px]">
              <BiChevronRight fontSize={"25px"} />
              <p className="Nun">Contact Us</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="futt">Newsletter</p>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <input
              className="h-[50px] px-4 rounded-md text-[18px] w-full"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="h-[50px] px-4 rounded-md text-[18px] w-full"
              type="text"
              placeholder="Your Name"
            />
            <button
              style={{ transition: "all .3s" }}
              className=" w-full h-[57px] text-white rounded-[30px] bg-[#17A2B8] hover:bg-[#138496]"
            >
              Submit Now{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[94%] mt-10 m-auto border border-gray-600 h-[0.5px] "></div>
      <div className="mt-10">
        <p
          style={{ fontFamily: "Nunito, sans-serif" }}
          className="text-center text-white text-[16px] "
        >
          © <span className="text-[#17A2B8]">Your Site Name. </span> All Rights
          Reserved. Designed by{" "}
          <span className="text-[#17A2B8]"> HTML Codex</span>
        </p>
        <p
          style={{ fontFamily: "Nunito, sans-serif" }}
          className="text-center text-white text-[16px]"
        >
          Distributed By: <span className="text-[#17A2B8]"> ThemeWagon</span>
        </p>
      </div>
    </div>
  );
}

export default Futter;
