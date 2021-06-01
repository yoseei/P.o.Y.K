import React from "react";
import ClickButton from "../../button/ClickButton";
import scss from "./work1Modal.module.scss";

const Work6Modal = (props: any) => {
  const closeModal = () => {
    props.setShowWork6Modal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <div className={scss.modalContent}>
            <div className={scss.imgContainer}>App6</div>
            <h2 className={scss.appName}>app6</h2>
            <p className={scss.aboutApp}>アプリの説明が入ります。</p>
            <ClickButton
              style={{
                width: "50%",
                color: "#000",
                margin: "0 auto",
              }}
              onClick={() => closeModal()}
              label={"BACK"}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Work6Modal;
