import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <>
      <NavLink
        to={props.url}
        end
        className={({ isActive }) =>
          isActive
            ? "bg-red-1 rounded-lg font-bold capitalize sm:px-3 sm:py-2 py-3 px-2  transition-all duration-150"
            : "font-bold capitalize sm:px-3 sm:py-2 py-3 px-2 transition-all duration-150"
        }
      >
        {props.name}
      </NavLink>
    </>
  );
};

export default NavItem;
