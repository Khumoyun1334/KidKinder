import React from "react";
import { Link } from "react-router-dom";
import LeftComponents from "./LeftComponents";
import RightComponents from "./RightComponents";
import "./mobile.css";

function BlogDetailC() {
  return (
    <div>
      <div className="bg-[#17A2B8] flex flex-col items-center justify-center text-center w-[100%] h-[400px]">
        <p className="handlee text-[37px] md:text-[3.7em] lg:text-[4em] leading-[1.7] text-white">
          Blog Detail
        </p>
        <p className="nunito flex items-center justify-center gap-[0.5em] text-white">
          <Link to="/">Home </Link>/<Link to="/teachers"> Blog Detail</Link>
        </p>
      </div>
      <div className="detail__container xl:flex xl:gap-[1%] lg:gap-[1.5%]  mt-[145px] justify-center ">
        <div className="left__container xl:w-[49%] md:mx-[15%]  xl:ml-[13%] max-md:mx-[3%] lg:w-[60%]">
          <LeftComponents />
        </div>
        <div className="right__container xl:w-[24.5%]  md:mx-[13.5%] xl:ml-[-15%]  max-lg:mt-[50px] lg:w-[30.5%]">
          <RightComponents />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailC;
