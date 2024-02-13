import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-around">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/clasess"}>Classes</NavLink>
        <NavLink to={"/teachers"}>Teachers</NavLink>
        <NavLink to={"/gallery"}>Gallary</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
