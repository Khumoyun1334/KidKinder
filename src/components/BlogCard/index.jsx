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
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
    },
    {
      title: "Diam amet eos at no eos",
      desc: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...",
      img: "assets/img/blog-1.jpg",
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
    </div>
  );
}

export default BlogCard;
