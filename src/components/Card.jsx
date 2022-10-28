import React from "react";

const Card = ({ className, children }) => {
  return (
    <>
      <div className={`py-3 px-4 rounded-lg ${className}`}>{children}</div>
    </>
  );
};

export default Card;
