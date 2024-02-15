// import { MdOutlineToys } from "react-icons/md";
import React from "react";

const GridCards = () => {
  return (
    <div className="mt-20 xl:mt-32 grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 xl:px-44 md:px-10 gap-6 xl:gap-4 md:gap-10 lg:gap-10">
      <div className="flex justify-center xl:justify-end">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Play Ground
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-center">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {" "}
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Music and Dance
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-start">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {" "}
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Arts and Crafts
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-end xl:mt-4">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {" "}
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Safe Transportation
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-center xl:mt-4">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {" "}
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Healthy food
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center xl:justify-start xl:mt-4">
        <div className="bg-[#f8f9fa] w-[80%] border-t-[1px] border-t-[#dee2e6] xl:w-[90%] md:w-[100%] md:h-[24vh] lg:h-[30vh] xl:h-[22vh] shadoww p-8 flex gap-4 rounded-[1px]">
          <div>
            {" "}
            {/* <MdOutlineToys fontSize={"40px"} color="#17a2b8 " /> */}
          </div>
          <div>
            <p className="font-[handlee] text-[#00394f] font-bold text-[21px]">
              Educational Tour
            </p>
            <p className="text-[#666666]">
              Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
              lorem amet elitr vero...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
