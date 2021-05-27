import React from "react";
import ClickButton from "../button/ClickButton";
import scss from "./worksModal.module.scss";

const WorksModal = (props: any) => {
  const closeModal = () => {
    props.setShowWorksModal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <div className={scss.modalContent}>
            <div className={scss.imgContainer}>写真</div>
            <h2 className={scss.appName}>app</h2>
            <p className={scss.aboutApp}>test</p>
            <ClickButton
              style={{
                width: "50%",
                height: "45px",
                background: "#00adb5",
                margin: "0 auto",
                display: "block",
                transition: "0.3s",
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

export default WorksModal;
