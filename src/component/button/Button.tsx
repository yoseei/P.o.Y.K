import React from "react";
import scss from "./button.module.scss";

const Button = (props) => {
  return (
    <div>
      <div className={scss.button}>{props.label}</div>
    </div>
  );
};

export default Button;
