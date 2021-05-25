import React from "react";
import scss from "./blackBackground.module.scss";

const blackBackground = (props: any) => {
  return <div className={scss.black} id={props.id}></div>;
};

export default blackBackground;
