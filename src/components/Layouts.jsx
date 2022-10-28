import React from "react";
import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <div className="container__content relative">
        {children}
        <Navbar />
      </div>
    </>
  );
};

export default Layouts;
