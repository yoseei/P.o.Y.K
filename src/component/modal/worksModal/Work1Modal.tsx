import React from "react";
import ClickButton from "../../button/ClickButton";
import scss from "./work1Modal.module.scss";
import portFolioPhoto from "./portfolio.jpg";
const Work1Modal = (props: any) => {
  const closeModal = () => {
    props.setShowWork1Modal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <div className={scss.modalContent}>
            <div className={scss.imgContainer}>
              <a href="">
                <img src={portFolioPhoto} alt="portFolioPhoto" />
              </a>
            </div>
            <h2 className={scss.appName}>P.o.Y.K</h2>
            <p className={scss.aboutApp}>ポートフォリオサイトです。</p>
            <p>作成したアプリなどを、このサイトにまとめていきます。</p>
            <ClickButton
              style={{
                width: "50%",
                color: "#000",
                margin: "25px auto",
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

export default Work1Modal;
