import React from "react";
import ClickButton from "../../button/ClickButton";
import scss from "./work1Modal.module.scss";
import weatherAppPhoto from "./weather-app.jpg";

const Works2Modal = (props: any) => {
  const closeModal = () => {
    props.setShowWork2Modal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div className={scss.container}>
          <div className={scss.modalContent}>
            <div className={scss.imgContainer}>
              <a href="https://main.d3k7tmlzmk2rlu.amplifyapp.com/">
                <img src={weatherAppPhoto} alt="weatherAppPhoto" />
              </a>
            </div>
            <h2 className={scss.appName}>Weather App</h2>
            <p className={scss.aboutApp}>天気予報アプリです。</p>
            <p>地名を検索することでその地域の天気情報が取得できます。</p>
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

export default Works2Modal;
