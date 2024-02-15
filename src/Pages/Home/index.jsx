import React from "react";
import Header from "../../components/Header";

import Form from "../../components/Form";
import GridCards from "../../components/GridCards";
import CardFlex from "../../components/CardFlex";
import HomeTeachers from "../../components/HomeTeachers";
import TeachearCarousel from "../../components/TeachersCarusel";
import Form from "../../components/Form (4)/Form";
import ThreeCards from "../../components/ThreeCards";
import HomeCard from "../../components/HomeCard";
// import TeachearCarousel from "../../components/TeachersCarusel";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <GridCards />
        <CardFlex />
        <ThreeCards />
        <div className="py-8">
          <Form />
        </div>
        <HomeTeachers />
        <TeachearCarousel />
        <div className="mt-[-100px]">
          <HomeCard />
        </div>
      </div>
      <br />
      <div></div>
      <br />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Home;
