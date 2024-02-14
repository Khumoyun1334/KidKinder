import React from "react";
import ThreeCards from "../../components/ThreeCards";
import Form from "../../components/Form";
import Header from "../../components/Header";

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
