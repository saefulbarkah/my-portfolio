import React from "react";
import NavLink from "./NavItem";

const Navbar = () => {
  return (
    <>
      <div
        className="bg-navbar/5 border-2 border-white/10 sm:w-[420px] w-full flex items-center justify-center fixed sm:bottom-5 bottom-0 rounded-xl
			m-auto left-0 right-0 drop-shadow-lg backdrop-blur-xl z-50"
      >
        <ul className="flex gap-5 items-center sm:py-2 py-5">
          <NavLink name="about" url="/" />
          <NavLink name="skills" url="/skills" />
          <NavLink name="projects" url="/projects" />
          <NavLink name="contact" url="/contact" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
