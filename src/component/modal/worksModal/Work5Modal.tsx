import React from "react";
import ClickButton from "../../button/ClickButton";
import scss from "./work1Modal.module.scss";

const Work5Modal = (props: any) => {
  const closeModal = () => {
    props.setShowWork5Modal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <div className={scss.modalContent}>
            <div className={scss.imgContainer}>App5</div>
            <h2 className={scss.appName}>app5</h2>
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

export default Work5Modal;
