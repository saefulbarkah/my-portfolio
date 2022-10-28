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
            ? "bg-blue-nav rounded-lg font-bold capitalize px-3 py-2 transition-all duration-300"
            : "font-bold capitalize px-3 py-2 transition-all duration-300"
        }
      >
        {props.name}
      </NavLink>
    </>
  );
};

export default NavItem;
