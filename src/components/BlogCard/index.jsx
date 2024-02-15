import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";
import CartStyle from "./CartStyle";
function BlogCard() {
  const data = [
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-2.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-3.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-2.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-3.jpg",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 w-[88%] xl:w-[75%] lg:w-[88%] md:w-[90%] m-auto py-24 gap-7">
        {data.map((elem, ind) => (
          <CartStyle
            key={ind + 1}
            title={elem.title}
            img={elem.img}
            desc={elem.desc}
            price={elem.price}
            mt={elem.mt}
          />
        ))}
      </div>
      <div className="flex justify-center ">
        <div className="flex items-center -mt-14">
          <div
            style={{ borderTopLeftRadius: "5px", borderTopLeftRadius: "5px" }}
            className="w-[32.66px] h-[37.6px] border flex justify-center items-center hover:bg-[#E9ECEF] hover:cursor-pointer"
          >
            <MdKeyboardDoubleArrowLeft />
          </div>
          <div className="w-[35.2px] h-[37.6px] flex justify-center items-center border text-white bg-[#17A2B8] hover:bg-[#E9ECEF] hover:cursor-pointer">
            1
          </div>
          <div className="w-[35.2px] h-[37.6px] flex justify-center items-center border hover:bg-[#E9ECEF] hover:cursor-pointer">
            2
          </div>
          <div className="w-[35.2px] h-[37.6px] flex justify-center items-center border hover:bg-[#E9ECEF] hover:cursor-pointer">
            3
          </div>
          <div
            style={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            className="w-[32.66px] h-[37.6px] border flex justify-center items-center hover:bg-[#E9ECEF] hover:cursor-pointer"
          >
            <MdKeyboardDoubleArrowRight />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default BlogCard;
