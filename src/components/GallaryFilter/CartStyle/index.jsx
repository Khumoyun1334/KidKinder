import React from "react";

function CartStyle({ img }) {
  return (
    <div>
      <div className="w-[70%] md:w-full xl:w-[100%]">
        <img
          src={img}
          className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default CartStyle;
