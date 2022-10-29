import React from "react";
import Navbar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <>
      <div className="sm:w-[850px] sm:mx-auto w-full px-5 h-screen overflow-hidden relative sm:static">
        {children}
      </div>
      <Navbar />
    </>
  );
};

export default Layouts;
