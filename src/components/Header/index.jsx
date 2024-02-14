import React from "react";

function Header() {
  return (
    <div className="bg-[#17A2B8]  xl:pb-0">
      <div className="w-[93%] pt-10 lg:flex block justify-between items-center m-auto">
        <div className="md:mx-8 mx-3 lg:pb-6 md:text-center text-center xl:text-start lg:text-start">
          <div>
            <p
              style={{ fontFamily: "Handlee, cursive" }}
              className=" text-[24px] font-bold text-white"
            >
              Kids Learning Center
            </p>
            <p
              className="lg:text-[72px] md:text-[65px] font-bold text-[30px] text-white mt-3 lg:leading-[90px]"
              style={{ fontFamily: "Handlee, cursive" }}
            >
              New Approach to Kids Education
            </p>
            <p className="text-white">
              Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet
              sed sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore
              sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est
              justo dolore.
            </p>
          </div>
          <button className="p-4 rounded-[50px] px-[50px] mt-8 border Lear">
            Learn More
          </button>
        </div>
        <div className="xl:w-[99%] lg:w-[160%] md:w-[90%] md:m-auto md:mt-7">
          <img src="assets/img/header.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
