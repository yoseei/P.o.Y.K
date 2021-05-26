import React, { useState } from "react";
import Modal from "../../component/modal/Modal";
import ClickButton from "../../component/button/ClickButton";
import scss from "./about.module.scss";
import WorkImg from "../../component/workImg/WorkImg";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className={scss.container}>
      <Modal
        showFlag={showModal}
        setShowModal={setShowModal}
        content="親から渡されたコンポーネントです。"
      />
      <div className={scss.textContainer}>
        <h1>about</h1>
        <h2>name Y.K</h2>
        <p>
          My current occupation is drummer. Currently studying to become a
          front-end engineer. I want to create a service that can improve
          people's problems.
        </p>
        <ClickButton
          label={"ABOUT MORE"}
          style={{
            width: "150px",
            margin: "30px 0 60px",
          }}
          onClick={ShowModal}
        />
      </div>
      <div className={scss.workImgContainer}>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
        <div className={scss.workImg}>
          <WorkImg />
        </div>
      </div>
      <ClickButton
        label={"WORKS"}
        style={{
          margin: "40px auto",
          width: "150px",
        }}
        onClick={""}
      />
    </div>
  );
};

export default About;
