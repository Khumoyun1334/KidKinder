import React from "react";

function CartStyle({ img, title, desc }) {
  return (
    <div className="w-[100%] border rounded-lg">
      <div className="">
        <div>
          <img className="rounded-t-lg w-full" src={img} alt="" />
        </div>
        <div className="p-6 bg-[#F8F9FA] rounded-b-lg mt-3">
          <div className="">
            <p className="text-[24px] data">{title}</p>
          </div>
          <div className="mt-3">
            <p className="text-center text-[16px] text-[#666666] salom">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
