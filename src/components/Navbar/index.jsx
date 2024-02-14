import React from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../../../public/assets/img/logo.png";

function Navbar() {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="flex justify-between items-center w-[85%] m-auto">
        <div>
          <div>{/* <img src={Logo} alt="" /> */}</div>
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
    </div>
  );
}

export default Navbar;
