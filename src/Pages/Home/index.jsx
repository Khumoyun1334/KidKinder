import React from "react";
import Header from "../../components/Header";
import ThreeCards from "../../components/ThreeCards";
import Form from "../../components/Form";

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br />
      <div>
        <ThreeCards />
      </div>
      <br />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Home;
