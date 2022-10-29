import React from "react";
import Icon from "./Icon";

const BackgroundDecoration = () => {
  return (
    <>
      <div className="">
        <Icon
          name="blob-t"
          className="absolute sm:-right-[200px] sm:-top-[160px] -top-[300px] -right-[280px] -z-[99999]"
        />
        <Icon
          name="blob-b"
          className="absolute sm:-left-[200px] sm:-bottom-[160px] -bottom-[50px] -left-[320px] -z-[99999]"
        />
      </div>
    </>
  );
};

export default BackgroundDecoration;
