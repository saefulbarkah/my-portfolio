import React from "react";

const PageTitle = (props) => {
  return (
    <>
      <div className={`font-bold ${props.className}`}>{props.name}</div>
    </>
  );
};

export default PageTitle;
