import React from "react";
import Header from "../../components/Header";
import GridCards from "../../components/GridCards";
import CardFlex from "../../components/CardFlex";
import ThreeCards from "../../components/ThreeCards";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <GridCards />
        <CardFlex />
        <ThreeCards />
      </div>
    </div>
  );
}

export default Home;
