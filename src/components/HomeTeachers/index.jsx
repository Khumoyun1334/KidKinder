import React from "react";

const HomeTeachers = () => {
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
  ];
  return (
    <div className="mt-[95px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-[0.7em] items-center justify-center">
          <p className="w-[50px] h-[2px] bg-[red]"></p>
          <p className="nunito text-[1em] tracking-wider">OUR TEACHERS</p>
          <p className="w-[50px] h-[2px] bg-[red]"></p>
        </div>
        <p className="handlee text-[27px] md:text-[2.4em] pt-[10px]">
          Meet Our Teachers
        </p>
      </div>
      <div className="card__media md:grid md:grid-cols-2">
        {CardsData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center mt-[-10px]">
              <div className="div1 relative w-[85%] h-[85%] mt-[49px] rounded-[50%] bg-fuchsia-800">
                <img
                  className="rounded-[50%] left-0 b-0 w-[100%] h-[100%]"
                  src={item.img}
                  alt=""
                />
                <div className="div2 absolute">
                  <p className="text-[white] ">sal</p>
                  <p className="text-[white] ">sal</p>
                  <p className="text-[white] ">sal</p>
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

export default HomeTeachers;
