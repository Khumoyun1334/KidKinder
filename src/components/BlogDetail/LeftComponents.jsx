import React from "react";
import "./style.css";
import { FaUserAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import DetailCarousel from "./DetailCarousel";

const LeftComponents = () => {
  const commentData = [
    {
      img: "/assets/img/user.jpg",
      name: "John Doe ",
      date: "01 Jan 2045 at 12:00pm",
      text: "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.",
    },
    {
      img: "/assets/img/user.jpg",
      name: "John Doe ",
      date: "01 Jan 2045 at 12:00pm",
      text: "Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.",
      style: {
        // marginLeft: "3.6em",
      },
    },
    {
      img: "/assets/img/user.jpg",
      name: "John Doe ",
      date: "01 Jan 2045 at 12:00pm",
      text: " Diam amet duo labore stet elitr ea clita ipsum, tempor  labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur, at tempor amet ipsum diam tempor at sit.",
      style: {
        marginLeft: "3.6em",
      },
    },
  ];
  return (
    <div className="">
      {/* Page Name */}
      <div className="md:ml-[0%] ">
        <div className="flex items-center md:gap-[0.8em] justify-between md:justify-center ">
          <p className="text-[1em] md:w-[200px] tracking-wide text-[#17A2BF] leading-[1.2]">
            BLOG DETAIL PAGE
          </p>
          <p className="xl:w-[100%] lg:w-[74%] h-[2px] md:w-[76%] max-md:w-[60%] bg-[#17A2BF]"></p>
        </div>
        {/* Title */}
        <div className="md:ml-[1%]">
          <p className="handlee leading-[2] text-[#00394F] text-[2.5em] max-md:text-[1.8em] lg:text-[2.4em]">
            Diam dolor est ipsum clita lorem
          </p>
          {/* Icon */}
          <div className="flex gap-[0.8em]">
            <div className="flex items-center justify-center gap-[7px]">
              <p className="text-[1em] text-[#17A2B8]">
                <FaUserAlt />{" "}
              </p>
              <p className="text-[#666666]">Admin</p>
            </div>
            <div className="flex items-center justify-center gap-[7px]">
              <p className="text-[1em] text-[#17A2B8]">
                <FaFolder />
              </p>
              <p className="text-[#666666]">Web Design</p>
            </div>
            <div className="flex items-center justify-center gap-[7px]">
              <p className="text-[1.2em] text-[#17A2B8]">
                <FaComments />
              </p>
              <p className="text-[#666666]">15</p>
            </div>
          </div>
        </div>
      </div>
      {/* GridImg and Text */}
      <div className="flex flex-col mt-[1.9em] justify-center items-center">
        <img className="rounded-[6px]" src="assets/img/detail.jpg" alt="" />
        <p className="text-[#62626C] mt-[1.3em] leading-[1.5] ">
          Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum
          sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et
          lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd
          accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren
          dolores et, consetetur justo invidunt at et aliquyam ut et vero clita.
          Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam
          kasd vero.
        </p>
        <p className="text-[#62626C] mt-[1.3em] pr-[1em] max-[1200px]:pr-0 leading-[1.5]">
          Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
          aliquyam dolores vero stet consetetur elitr takimata rebum sanctus.
          Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd
          duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et.
          Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero
          amet amet est dolor elitr, stet et no diam sit. Dolor erat justo
          dolore sit invidunt.
        </p>
      </div>
      {/* FlexImg and Text 1 */}
      <div>
        <p className="handlee text-[#00394F] text-[1.9em] mt-[0.47em]">
          Est dolor lorem et ea
        </p>
        <div className="mt-[1em]">
          <img
            className="w-[50%] float-left mr-[1.7em] mb-[1em]  rounded-md"
            src="assets/img/blog-1.jpg"
            alt=""
          />
          <span className="nunito text-[#62626C] leading-[1.3] ">
            Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
            voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
            kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
            Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
            labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
            kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren
            at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam
            dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
            eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit
            ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod
            kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd
            clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
            ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna
            dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
            amet et est accusam labore eirmod vero et voluptua. Amet labore
            clita duo et no. Rebum voluptua magna eos magna, justo gubergren
            labore sit voluptua eos.
          </span>
        </div>
      </div>
      {/* FlexImg and Text 2 */}
      <div>
        <p className="handlee text-[#00394F] text-[1.8em]  mt-[0.47em]">
          Est dolor lorem et ea
        </p>
        <div className="mt-[1em]">
          <img
            className="w-[50%] float-right ml-[1.7em]"
            src="assets/img/blog-2.jpg"
            alt=""
          />
          <p className="nunito leading-[1.6] text-[#62626C]">
            Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
            voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
            kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
            Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
            labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
            kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren
            at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam
            dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
            eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit
            ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod
            kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd
            clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
            ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna
            dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam,
            amet et est accusam labore eirmod vero et voluptua. Amet labore
            clita duo et no.
          </p>
        </div>
      </div>
      {/* Carousel */}
      <DetailCarousel />
      {/* Comment */}
      <div className="mt-[55px]">
        {/* Comment Name */}
        <p className="handlee text-[1.9em] text-[#00394F]">3 Comments</p>
        {/* First Comment */}
        <div>
          {commentData.map((item, index) => {
            return (
              <div
                style={item?.style}
                className="flex mt-[20px] gap-[1em] items-start justify-center"
                key={index}
              >
                <img
                  className="w-[45px] mt-[10px] rounded-[50%]"
                  src={item.img}
                  alt=""
                />
                <div>
                  <p className="handlee text-[#00394F] leading-[1.7]">
                    {item.name}{" "}
                    <span className="font-extralight text-[#00394F] italic text-[0.7em]">
                      {" "}
                      {item.date}
                    </span>
                  </p>
                  <p className="nunito mt-[1%] text-[#62626C]">{item.text} </p>
                  <p className="mt-[15px] text-[0.85em]">Reply</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Leave Comment */}
      <div className="bg-[#F8F9FA] h-[100%] lg:y-[5%] py-[4.7%] mt-[65px]">
        <p className="handlee text-[1.8em] md:ml-[5%] max-md:ml-[7%] lg:ml-[8%]">Leave a comment</p>
        <div className="flex flex-col gap-y-[0.67em] mt-[20px] justify-center items-center text-start">
          <p className="w-[90%] lg:w-[83%]  text-[#747674] ">Name *</p>
          <input
            placeholder=""
            type="text"
            name=""
            id=""
            className="w-[90%] border border-[#CED4DA] rounded-md lg:w-[83%] py-[7px]"
          />
          <p className="w-[90%] lg:w-[83%] text-[#747674]">Name *</p>
          <input
            placeholder=""
            type="text"
            name=""
            id=""
            className="w-[90%] border border-[#CED4DA] rounded-md lg:w-[83%] py-[7px]"
          />
          <p className="w-[90%] lg:w-[83%] text-[#747674]">Name *</p>
          <input
            placeholder=""
            type="text"
            name=""
            id=""
            className="w-[90%] border border-[#CED4DA] rounded-md lg:w-[83%] py-[7px]"
          />
          <p className="w-[90%] lg:w-[83%] text-[#747674]">Name *</p>
          <textarea
            name=""
            className="w-[90%] border border-[#CED4DA] rounded-md lg:w-[83%] h-[130px]"
            id=""
            cols="30"
       rows="10"
          ></textarea>
          <div className="w-[90%] lg:w-[83%] ">
            <p className="flex items-center justify-center text-[0.9em] rounded-[30px] lg:w-[25%] md:w-[130px] max-md:w-[130px] w-[23%] text-white bg-[#17A2B8]  py-[8px]">
              Leave Comment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponents;
