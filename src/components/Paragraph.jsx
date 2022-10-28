import React from "react";

const Paragraph = (props) => {
  return (
    <>
      <p className={`leading-6 ${props.className}`}>{props.text}</p>
    </>
  );
};

export default Paragraph;
