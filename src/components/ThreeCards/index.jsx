import React from "react";
import Text from "./text";
import Card from "./card";
import "./index.css";
function ThreeCards() {
  return (
    <div className="text-center mx-8 overflow-x-hidden xl:mx-40 mt-20">
      <Text />
      <br />
      <div className="grid lg:-ml-5 card gap-6 md:justify-items-start justify-items-center grid-cols-1 pl-10 md:ml md:grid-cols-1 lg:grid-cols-3">
        <Card img="" title="Drawing Class" />
        <Card img="" title="Language Learning" />
        <Card img="" title="Basic Science" />
      </div>
      <br />
    </div>
  );
}

export default ThreeCards;
