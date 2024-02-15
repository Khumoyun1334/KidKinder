import React from "react";
import ThreeCards from "../../components/ThreeCards";
import Form from "../../components/Form";
import Bannerteal from "../../components/Banner";

function Clasess() {
  return (
    <div>
      <div className="py-20">
        <div>
          <Bannerteal title="Classes" />
          <ThreeCards />
          <br />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Clasess;
