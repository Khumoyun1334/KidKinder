import React from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaComments } from "react-icons/fa";

const RightComponents = () => {
  const CategoryData = [
    {
      text: "Web Design",
      num: "150",
    },
    {
      text: "Web Development",
      num: "131",
    },
    {
      text: "Online Marketing",
      num: "78",
    },
    {
      text: "Keyword Research",
      num: "56",
    },
    {
      text: "Email Marketing",
      num: "98",
      style: {
        border: "0px",
      },
    },
  ];
  return (
    <div className="flex flex-col  justify-start items-start mx-[14px]">
      <div className="w-[100%] flex flex-col items-center justify-center rounded-lg pt-[50px] pb-[50px] bg-[#17A2B8]">
        <img className="rounded-[50%]" src="assets/img/user.jpg" alt="" />
        <p className="handlee text-[1.6em]  text-[#00394F] mt-[13px]">John Doe</p>
        <p className="px-[1em] mt-[13px] text-white text-center">
          Conset elitr erat vero dolor ipsum et diam, eos dolor lorem ipsum,
          ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet est elitr ea
          sit.
        </p>
      </div>
      <div className="flex items-center rounded-md mt-[45px] justify-between w-[100%] border">
        <input
          className="w-[245px] rounded-s-sm placeholder:text-[#6C757D] placeholder:text-[1.3em] outline-none px-[16px]"
          type="text"
          placeholder="Keyword"
          name=""
          id=""
        />
        <p className="w-[40px] text-[#53B2D1] px-[10px] py-[14px] border-l text-[1.1em]">
          <IoSearch />
        </p>
      </div>
      <div className="flex flex-col mt-[40px] items-start text-start justify-start">
        <p className="handlee text-[1.95em] text-start text-[#003650]">Categories</p>
        <div className="mt-[26px]">
          {CategoryData.map((item, index) => {
            return (
              <div
                style={item.style}
                className="flex justify-between md:w-[699px] w-[300px] xl:w-[360px] max-md:w-[350px] min-[435px]:w-[370px] items-center border-b"
                key={index}
              >
                <p className="leading-[3] text-[#1597AB] hover:underline">{item.text}</p>
                <p className="w-[40px] bg-[#17A2B8] text-[white] font-bold flex rounded-[20px] items-center justify-center text-[0.8em] h-[20px]">
                  {item.num}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[50px] ">
        <img className="rounded-[5px]" src="assets/img/blog-1.jpg" alt="" />
      </div>
      <div className="mt-[45px]">
        <p className="handlee text-[1.9em] text-[#003650]">Recent Post</p>
        <div className="mt-[20px]">
          {/* data qil */}
          <div className="flex gap-[1em] md:w-[699px] mt-[20px] bg-[#F8F9FA] shadow-md rounded-md  xl:w-[360px]  items-center md:justify-start justify-center">
            <img  className="rounded-s-md"   src="assets/img/post-1.jpg" alt="" />
            <div>
              <p className="handlee text-[1.3em] leading-[1.1] text-[#003650] pr-[0.99em]">
                Diam amet eos at no eos
              </p>
              <div className="flex  gap-[0.8em] mt-[0.3em] items-center justify-start">
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.75em]">
                    <FaUserAlt />{" "}
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">Admin</p>
                </div>
                <div className="flex  gap-[0.4em] items-center justify-center">
                  <span className="text-[0.75em]">
                    <FaFolder />
                  </span>
                  <p className="text-[#6C757D] text-[0.75em]">Web Design</p>
                </div>
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.9em] text-[#17A2B8]">
                    <FaComments />
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[1em] md:w-[699px] mt-[20px] bg-[#F8F9FA] shadow-md rounded-md  xl:w-[360px]  items-center md:justify-start justify-center">
              <img className="rounded-s-md"   src="assets/img/post-2.jpg" alt="" />
            <div>
              <p className="handlee text-[1.3em] leading-[1.1] text-[#003650] pr-[0.99em]">
                Diam amet eos at no eos
              </p>
              <div className="flex  gap-[0.8em] mt-[0.3em] items-center justify-start">
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.75em]">
                    <FaUserAlt />{" "}
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">Admin</p>
                </div>
                <div className="flex  gap-[0.4em] items-center justify-center">
                  <span className="text-[0.75em]">
                    <FaFolder />
                  </span>
                  <p className="text-[#6C757D] text-[0.75em]">Web Design</p>
                </div>
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.9em] text-[#17A2B8]">
                    <FaComments />
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[1em] md:w-[699px] mt-[20px] bg-[#F8F9FA] shadow-md rounded-md  xl:w-[360px]  items-center md:justify-start justify-center">
               <img className="rounded-s-md"  src="assets/img/post-3.jpg" alt="" />
            <div>
              <p className="handlee text-[1.3em] leading-[1.1] text-[#003650] pr-[0.99em]">
                Diam amet eos at no eos
              </p>
              <div className="flex  gap-[0.8em] mt-[0.3em] items-center justify-start">
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.75em]">
                    <FaUserAlt />{" "}
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">Admin</p>
                </div>
                <div className="flex  gap-[0.4em] items-center justify-center">
                  <span className="text-[0.75em]">
                    <FaFolder />
                  </span>
                  <p className="text-[#6C757D] text-[0.75em]">Web Design</p>
                </div>
                <div className="flex flex-wrap gap-[0.4em] items-center justify-start">
                  <p className="text-[0.9em] text-[#17A2B8]">
                    <FaComments />
                  </p>
                  <p className="text-[#6C757D] text-[0.75em]">15</p>
                </div>
              </div>
            </div>
          </div>
          <img  
            className="mt-[50px] rounded-md"
            src="assets/img/blog-2.jpg"
            alt=""
          />
          <p className="handlee text-[1.9em] mt-[50px] text-[#003650]">Tag Cloud</p>
          <div className=" flex items-center mt-[20px] flex-wrap gap-[0.5em] justify-start ">
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white] border">
              Design
            </button>
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white]  border">
              Development
            </button>
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white] border">
              Marketing
            </button>
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white] border">
              SEO
            </button>
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white] border">
              Writing
            </button>
            <button className="py-[5px] rounded-[30px] px-[16px] border-[#17A2B8] text-[#17a2bb] hover:bg-[#17a2bb] hover:text-[white] border">
              Consulting
            </button>
          </div>
        </div>
        <div>
          <img
            className="mt-[50px] rounded-md"
            src="assets/img/blog-3.jpg"
            alt=""
          />
          <p className="handlee text-[1.9em] mt-[50px] text-[#003650]">Plain Text</p>
          <p className="mt-[20px] text-[#6C757D]">
            Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea
            est aliquyam dolor et. Et no consetetur eos labore ea erat voluptua
            et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum
            dolor, tempor takimata clita sit et elitr ut eirmod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightComponents;
