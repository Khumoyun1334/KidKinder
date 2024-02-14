import React from "react";

const CardFlex = () => {
  return (
    <div className="xl:px-52 xl:mt-20 mt-20 grid md:grid lg:flex xl:flex gap-6 md:gap-10 xl:gap-6 xl:pb-10">
      <div className="w-[90%] md:w-[70%] lg:w-[56%] xl:w-[45%]">
        <img
          src="assets/img/about-1.jpg"
          alt=""
          className="w-[90%] md:w-[86%] lg:w-[86%] m-auto xl:w-[440px] rounded-sm"
        />
      </div>
      <div className="xl:mt-14 lg:mt-6 w-[80%] md:w-[90%] m-auto lg:w-[70%] xl:ml-0 lg:-ml-10">
        <p className="text-[#17a2b8] font-[nunito] text-[16px]">
          LEARN ABOUT US
        </p>
        <p className="text-[#00394f] font-[handlee] text-[26px] py-4 md:text-[30px] lg:text-[36px] xl:text-[38px] font-bold">
          Best School For Your Kids
        </p>
        <p className="text-[#666666] w-full md:w-[98%] lg:w-[90%]">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
          sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
        </p>
        <div className="flex xl:mt-4 mt-6 gap-8">
           <img src="assets/img/about-2.jpg" className="rounded h-24 md:h-32 lg:h-24 xl:h-32" alt="" />
           <div className="w-[65%]">
           <p className="border-t-[1px] w-full lg:py-2 xl:py-2 xl:px-6 text-[#666666]"> Labore eos amet dolor amet diam</p>
           <p className="border-t-[1px] w-full lg:py-2 xl:py-2 xl:px-6 text-[#666666]"> Etsea et sit dolor amet ipsum</p>
           <p className="border-t-[1px] border-b-[1px] w-full lg:py-2 xl:py-2 xl:px-6 text-[#666666]"> Diam dolor diam elitripsum vero.</p>
           </div>
        </div>
        <button className="px-[1.5rem] bg-[#17a2b8] text-white py-[0.5rem] rounded-[30px] lg:mt-6 mt-4 xl:mt-6 xl:text-[15px]"> Learn More</button>
      </div>
    </div>
  );
};

export default CardFlex;
