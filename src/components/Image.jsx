import React from "react";

const Image = (props) => {
  return (
    <>
      <img src={props.src} alt="" className={props.className} loading="lazy" />
    </>
  );
};

export default Image;
