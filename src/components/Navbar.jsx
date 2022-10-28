import React from "react";
import NavLink from "./NavItem";

const Navbar = () => {
  return (
    <>
      <div
        className="bg-navbar/30 w-[400px]  flex items-center justify-center fixed bottom-5 rounded-xl
			m-auto left-0 right-0"
      >
        <ul className="flex gap-5 items-center py-2">
          <NavLink name="about" url="/" />
          <NavLink name="skiils" url="/skiils" />
          <NavLink name="projects" url="/projects" />
          <NavLink name="contact" url="/contact" />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
