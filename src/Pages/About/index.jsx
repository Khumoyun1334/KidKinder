import React from "react";
import Bannerteal from "../../components/Banner";
import GridCards from "../../components/GridCards";
import CardFlex from "../../components/CardFlex";


function About() {
  return (
    <div>
      <Bannerteal title="About Us" />
      <div className="xl:mt-24">
      <CardFlex/>
      </div>
      <GridCards />
    </div>
  );
}

export default About;
