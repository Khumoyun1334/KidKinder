import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

// import Logo from "../../../public/assets/img/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate(false);
  const navigate2 = useNavigate(false);

  const handleNext = () => {
    navigate("/bloggrid");
  };

  const handleNext2 = () => {
    navigate2("/blogdetail");
  };

  return (
    <div className="bg-[#F8F9FA] nav">
      <div className="lg:flex hidden justify-between items-center xl:w-[90%] py-2 lg:w-[95%] m-auto">
        <div className="flex items-center md:gap-4 gap-2">
          <div>
            <img className="lg:h-[55px] " src="assets/img/logo.png" alt="" />
          </div>
          <div>
            <p className="text-[#17a2b8] text-[50px] Kind">KidKinder</p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/clasess"}
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/teachers"}
          >
            Teachers
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/gallery"}
          >
            Gallary
          </NavLink>
          <div class="dropdown  ">
            <button class="dropbtn ">Pages</button>
            <div class="dropdown-content ml-[-15px]">
              <a onClick={() => handleNext()} href="#">
                Blog Grid
              </a>
              <a onClick={() => handleNext2()} href="#">
                Blog Detail
              </a>
            </div>
          </div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
        <div>
          <button className="but px-7 p-2">Join Class</button>
        </div>
      </div>
      <div className=" lg:hidden items-center px-4 py-3 flex Menu justify-between">
        <div className="flex gap-3 items-center">
          <div>
            <img className="h-[55px]" src="assets/img/logo.png" alt="" />
          </div>
          <div className=" ">
            <p className="text-[#17a2b8] text-[50px] Kind">KidKinder</p>
          </div>
        </div>
        <button
          className="h-[45px] px-4 rounded-[70px] text-[#7C7C7D] border "
          onClick={() => {
            setOpen(!open);
            setMenu(!menu);
          }}
        >
          {menu ? (
            <AiOutlineMenu color="#7C7C7D" fontSize={"30px"} />
          ) : (
            <AiOutlineMenu color="#7C7C7D" fontSize={"30px"} />
          )}
        </button>
      </div>
      <div
        className={`w-full ${
          open ? "h-[390px]" : "h-0"
        }  overflow-hidden mt-[0px] bg-[#F8F9FA] absolute px-6 duration-300 transition-all flex flex-col  gap-6 `}
      >
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/clasess"}
        >
          Classes
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/teachers"}
        >
          Teachers
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/gallery"}
        >
          Gallery
        </NavLink>
        <div class="dropdown">
          <button class="dropbtn  ">Pages</button>
          <div class="dropdown-content mt-8 ml-[-15px]">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
          </div>
        </div>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        <div className="hello world">
          <button className="but px-7 p-2">Join Class</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
