import React from "react";
import Icon from "./Icon";

const BackgroundDecoration = () => {
  return (
    <>
      <div className="">
        <Icon name="blob-t" className="absolute -right-[200px] -top-[250px]" />
        <Icon
          name="blob-b"
          className="absolute -left-[200px] -bottom-[160px]"
        />
      </div>
    </>
  );
};

export default BackgroundDecoration;
