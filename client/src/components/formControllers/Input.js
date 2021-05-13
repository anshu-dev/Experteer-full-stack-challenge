import React from "react";

function Input(props) {
  const { label, type, name, ...rest } = props;
  return (
    <div>
      <input type={type} id={name} name={name} {...rest} />
    </div>
  );
}

export default Input;
