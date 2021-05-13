import React from "react";
import Input from "./formControllers/Input";

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;

    default:
      return null;
  }
}

export default FormControl;
