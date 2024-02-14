import React from "react";
import Text from "./text";
import Card from "./card";

function ThreeCards() {
  return (
    <div className="text-center overflow-x-hidden xl:mx-40">
      <Text />
      <br />
      <div className="grid gap-6 md:justify-items-start justify-items-center grid-cols-1 pl-10 md:grid-cols-1 lg:grid-cols-3">
        <Card img="" title="Drawing classes" />
        <Card img="" title="Language Learning" />
        <Card img="" title="Basic Science" />
      </div>
      <br />
    </div>
  );
}

export default ThreeCards;
