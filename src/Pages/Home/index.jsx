import React from "react";
import Header from "../../components/Header";

import Form from "../../components/Form";
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
