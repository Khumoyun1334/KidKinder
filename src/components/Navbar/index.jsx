import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <div>
            <p className="text-[#17a2b8] text-[50px] Kind">KidKinder</p>
          </div>
          <div></div>
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
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
