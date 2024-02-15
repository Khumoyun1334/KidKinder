import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const TeacherComponentsCard = () => {
  const CardsData = [
    {
      img: "assets/img/team-1.jpg",
      name: "Julia Smith",
      job: "Music Teacher",
    },
    {
      img: "assets/img/team-2.jpg",
      name: "Jhon Doe",
      job: "Language Teacher",
    },
    {
      img: "assets/img/team-3.jpg",
      name: "Mollie Ross",
      job: "Dance Teacher",
    },
    {
      img: "assets/img/team-4.jpg",
      name: "Donald John",
      job: "Art Teacher",
    },
    {
      img: "assets/img/team-4.jpg",
      name: "Julia Smith",
      job: "Music Teacher",
    },
    {
      img: "assets/img/team-3.jpg",
      name: "Jhon Doe",
      job: "Language Teacher",
    },
    {
      img: "assets/img/team-2.jpg",
      name: "Mollie Ross",
      job: "Dance Teacher",
    },
    {
      img: "assets/img/team-1.jpg",
      name: "Donald John",
      job: "Art Teacher",
    },
  ];
  return (
    <div className="mt-[95px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-[0.7em] items-center justify-center">
          <p className="w-[50px] h-[2px] bg-[#17A2B8]"></p>
          <p className="nunito text-[1em] tracking-wider text-[#17A2B8]">
            OUR TEACHERS
          </p>
          <p className="w-[50px] h-[2px] bg-[#17A2B8]"></p>
        </div>
        <p className="handlee text-[27px] text-[#00394f] md:text-[2.4em] pt-[10px]">
          Meet Our Teachers
        </p>
      </div>
      <div className="card__media md:grid md:grid-cols-2">
        {CardsData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center mt-[-10px]">
              <div className="div1 relative w-[87%] flex items-center justify-center text-center h-[85%] mt-[49px] rounded-[50%] bg-[#17A2BB]">
                <img
                  className="rounded-[50%]  w-[100%] h-[100%]"
                  src={item.img}
                  alt=""
                />
                <div className="div2 gap-[0.5em] absolute">
                  <p className="p-[16%] rounded-[50%] hover:bg-[white] hover:text-[black] border text-white ">
                    <FaTwitter />
                  </p>
                  <p className="p-[16%] rounded-[50%] hover:bg-[white] hover:text-[black] border text-white ">
                    <FaFacebookF />
                  </p>
                  <p className="p-[16%] rounded-[50%] hover:bg-[white] hover:text-[black] border text-white ">
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
              <p className="handlee text-[1.35em] mt-[20px]">{item.name}</p>
              <p className="nunito italic mt-[7px]">{item.job}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherComponentsCard;
