import React from "react";
import TeacherComponentsCard from "../../components/TeacherCard";
import TeachearCarousel from "../../components/TeachersCarusel";
import Bannerteal from "../../components/Banner";

function Teachers() {
  return (
    <div>
      <Bannerteal title="Our Teachers" />
      <TeacherComponentsCard />
      <TeachearCarousel />
    </div>
  );
}

export default Teachers;
