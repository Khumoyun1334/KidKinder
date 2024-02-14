import React from "react";
import Header from "../../components/Header";
import CardFlex from "../../components/CardFlex";
import GridCards from "../../components/GridCards";

function Home() {
  return (
    <div>
      <div>
        <Header />
        <GridCards/>
        <CardFlex/>
      </div>
    </div>
  );
}

export default Home;
