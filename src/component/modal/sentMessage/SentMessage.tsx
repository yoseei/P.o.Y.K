import React from "react";
import scss from "./sentMessage.module.scss";

const SentMessage = (props: any) => {
  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <p>Your message was successfully sent!</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SentMessage;
