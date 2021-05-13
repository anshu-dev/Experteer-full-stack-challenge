import React from "react";
const Theme = (props) => {
  return (
    <>
      <div className="bg">{props.children}</div>
    </>
  );
};

export default Theme;
