import React from "react";
import Image from "./Image";

const Icon = (props) => {
  return (
    <>
      <Image
        src={`/assets/icons/${props.name + ".svg"}`}
        className={props.className}
      ></Image>
    </>
  );
};

export default Icon;
