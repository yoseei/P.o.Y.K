import React from "react";
import scss from "./workImg.module.scss";

interface Props {
  onClick: any;
  value: string;
}
const WorkImg: React.FC<Props> = (props) => {
  return (
    <div className={scss.root} onClick={props.onClick}>
      <div className={scss.container} onClick={props.onClick}>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default WorkImg;
