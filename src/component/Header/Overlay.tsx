import React from "react";
import scss from "./overlay.module.scss";

const Overlay = (props: any) => {
  return (
    <>{props.overlayFlag ? <div className={scss.container}></div> : <></>}</>
  );
};

export default Overlay;
