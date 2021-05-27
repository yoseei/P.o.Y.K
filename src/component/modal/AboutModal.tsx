import React from "react";
import { Property } from "csstype";
import scss from "./aboutModal.module.scss";

const AboutModal = (props: any) => {
  const closeModal = () => {
    props.setShowAboutModal(false);
  };

  const position: NonNullable<Property.Position> = "fixed";

  const overlay = {
    position,
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.9)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  };

  return (
    <>
      {props.showFlag ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" className={scss.modalContent}>
            <div className={scss.imgContainer}></div>
            <h2 className={scss.myName}>Yoshitaka Kai</h2>
            <p className={scss.myProfile}>
              「ドラムで飯を食う」という目標をかかげ 15歳からドラムを始める。
              その10年後「スペースワールド」の ドラマーオーディションに合格し、
              ドラマーとしてのキャリアをスタート。 スペースワールド閉園後、
              「別府ヒットパレードクラブ」にて 専属ドラマーとなる。
              現在は、フロントエンドエンジニアへの転職を 目指して日々奮闘中。
              趣味は読書、英語、カメラ、ロードバイクなど。
            </p>
            <button className={scss.button} onClick={() => closeModal()}>
              BACK
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutModal;
