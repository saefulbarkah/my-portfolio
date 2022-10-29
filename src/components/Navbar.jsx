import React from "react";
import NavLink from "./NavItem";

const Navbar = () => {
  return (
    <>
      <div
        className="bg-navbar/5 border-2 border-white/10 w-[420px] flex items-center justify-center fixed bottom-5 rounded-xl
			m-auto left-0 right-0 drop-shadow-lg backdrop-blur-xl"
      >
        <ul className="flex gap-5 items-center py-2">
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
