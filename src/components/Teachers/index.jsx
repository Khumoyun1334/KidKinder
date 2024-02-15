import React from "react";
import { Link } from "react-router-dom";
import TeacherComponentsCard from "../TeacherCard";

function Teachers() {
  return (
    <div>
      <div className="bg-[#17A2B8] flex flex-col items-center justify-center text-center w-[100%] h-[400px]">
        <p className="handlee text-[37px] md:text-[3.7em] lg:text-[4em] leading-[1.7] text-white">
          Our Teachers
        </p>
        <p className="nunito flex items-center justify-center gap-[0.5em] text-white">
          <Link to="/">Home </Link>/<Link to="/teachers"> Our Teachers</Link>
        </p>
      </div>
      <TeacherComponentsCard />
    </div>
  );
}

export default Teachers;
