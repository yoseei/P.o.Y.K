import React from "react";
import scss from "./clickButton.module.scss";

interface Props {
  label: string;
  style: any;
}

const ClickButton: React.FC<Props> = (props) => {
  return (
    <>
      <div className={scss.clickButton} style={props.style}>
        {props.label}
      </div>
    </>
  );
};

export default ClickButton;
