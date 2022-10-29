import React from "react";

const Paragraph = (props) => {
  return (
    <>
      <p className={`leading-relaxed ${props.className}`}>{props.text}</p>
    </>
  );
};

export default Paragraph;
