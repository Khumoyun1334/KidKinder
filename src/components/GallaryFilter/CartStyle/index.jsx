import React from "react";

function CartStyle({ img}) {
  return (
    <div>
        <img src={img} className="w-[90%] m-auto" alt="" />
    </div>
  );
}

export default CartStyle;
