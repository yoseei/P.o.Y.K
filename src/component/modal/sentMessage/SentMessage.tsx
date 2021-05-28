import React from "react";
import scss from "./sentMessage.module.scss";

const SentMessage = (props: any) => {
  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <p>送信が完了しました。</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SentMessage;
