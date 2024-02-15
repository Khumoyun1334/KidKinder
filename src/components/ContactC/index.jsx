import React from "react";
// import { BiChevronRight } from "react-icons/bi";
// import { MdLocationPin } from "react-icons/md";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
function ContactC() {
  return (
    <div>
      <div className="flex justify-center mt-[100px]">
        <p className="flex items-center text-red-700">
          <div className="w-[45px] mr-1 h-[2.5px] bg-[#17a2b8]"></div>
          <p className="uppercase text-[1rem] text-[#17a2b8]">
            Popular Classes
          </p>
          <div className="w-[45px] ml-1 h-[2.5px] bg-[#17a2b8]"></div>
        </p>
      </div>
      <div>
        <div>
          <p className="text-[40px] text-center mt-3 con">
            Contact Us For Any Query
          </p>
        </div>
      </div>

      <div className="lg:flex block xl:w-[70%] lg:w-[87%] md:w-[90%] w-[86%] my-7 m-auto gap-7">
        <div className="lg:w-[60%] w-full">
          <div className="w-[100%] flex flex-col gap-4 ">
            <input
              className="h-[38px] border w-full px-4 rounded-md inp"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
            <input
              className="h-[38px] border w-full px-4 rounded-md inp"
              type="text"
              name=""
              id=""
              placeholder="Your Email"
            />
            <input
              className="h-[38px] border w-full px-4 rounded-md inp"
              type="text"
              name=""
              id=""
              placeholder="Subject"
            />
            <textarea
              className="h-[130px] border w-full px-4 rounded-md inp"
              name="postContent"
              placeholder="Messenge"
            />
          </div>
          <button className="border h-[42px] px-7 rounded-[30px] mt-4 bg-[#17A2B8] text-white butt">
            Send Messenge
          </button>
        </div>
        <div className="lg:w-[40%] w-full md:mt-10  lg:mt-0 xl:mt-0 mt-6">
          <div>
            <p className="text-[16px] context">
              Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et
              kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna
              elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est
              eirmod eirmod amet.
            </p>
          </div>
          <div>
            <div className="flex gap-3 mt-4">
              <div className="w-[45px] bg-[#17A2B8] flex justify-center items-center h-[45px] rounded-[360px] border">
                {/* <MdLocationPin color="#00394F" fontSize={"25px"} /> */}
              </div>
              <div>
                <p className="cons text-[#00394F]">Address</p>
                <p className="text-[16px] cond mt-1">
                  123 Street, New York, USA
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="w-[45px] bg-[#17A2B8] flex justify-center items-center h-[45px] rounded-[360px] border">
                {/* <MdEmail color="#00394F" fontSize={"23px"} /> */}
              </div>
              <div>
                <p className="cons text-[#00394F]">Email</p>
                <p className="text-[16px] cond  mt-1">info@example.com</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="w-[45px] bg-[#17A2B8] flex justify-center items-center h-[45px] rounded-[360px] border">
                {/* <FaPhone color="#00394F" fontSize={"20px"} /> */}
              </div>
              <div>
                <p className="cons text-[#00394F]">Phone</p>
                <p className="text-[16px] cond  mt-1">+012 345 67890</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="w-[45px] bg-[#17A2B8] flex justify-center items-center h-[45px] rounded-[360px] border">
                {/* <FaPhone color="#00394F" fontSize={"20px"} /> */}
              </div>
              <div>
                <p className="cons text-[#00394F]">Opening Hours</p>
                <p className="text-[16px] text-[#666666]    ">
                  Sunday - Friday:
                </p>
                <p className="text-[16px] cond  mt-1">08:00 AM - 05:00 PM </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>
    </div>
  );
}

export default ContactC;
