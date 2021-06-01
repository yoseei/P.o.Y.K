import React, { useState } from "react";
import AboutModal from "../../component/modal/AboutModal";
import ClickButton from "../../component/button/ClickButton";
import scss from "./about.module.scss";
import WorkImg from "../../component/workImg/WorkImg";
import Work1Modal from "../../component/modal/worksModal/Work1Modal";
import Work2Modal from "../../component/modal/worksModal/Work2Modal";
import Work3Modal from "../../component/modal/worksModal/Work3Modal";
import Work4Modal from "../../component/modal/worksModal/Work4Modal";
import Work5Modal from "../../component/modal/worksModal/Work5Modal";
import Work6Modal from "../../component/modal/worksModal/Work6Modal";

const About = () => {
  const [showAboutModal, setShowAboutModal] = useState(false),
    [showWork1Modal, setShowWork1Modal] = useState(false),
    [showWork2Modal, setShowWork2Modal] = useState(false),
    [showWork3Modal, setShowWork3Modal] = useState(false),
    [showWork4Modal, setShowWork4Modal] = useState(false),
    [showWork5Modal, setShowWork5Modal] = useState(false),
    [showWork6Modal, setShowWork6Modal] = useState(false);

  const ShowAboutModal = () => {
    setShowAboutModal(true);
  };

  const ShowWork1Modal = () => {
    setShowWork1Modal(true);
  };
  const ShowWork2Modal = () => {
    setShowWork2Modal(true);
  };
  const ShowWork3Modal = () => {
    setShowWork3Modal(true);
  };
  const ShowWork4Modal = () => {
    setShowWork4Modal(true);
  };
  const ShowWork5Modal = () => {
    setShowWork5Modal(true);
  };
  const ShowWork6Modal = () => {
    setShowWork6Modal(true);
  };

  return (
    <div className={scss.container}>
      <AboutModal
        showFlag={showAboutModal}
        setShowAboutModal={setShowAboutModal}
      />
      <Work1Modal
        showFlag={showWork1Modal}
        setShowWork1Modal={setShowWork1Modal}
      />
      <Work2Modal
        showFlag={showWork2Modal}
        setShowWork2Modal={setShowWork2Modal}
      />
      <Work3Modal
        showFlag={showWork3Modal}
        setShowWork3Modal={setShowWork3Modal}
      />
      <Work4Modal
        showFlag={showWork4Modal}
        setShowWork4Modal={setShowWork4Modal}
      />
      <Work5Modal
        showFlag={showWork5Modal}
        setShowWork5Modal={setShowWork5Modal}
      />
      <Work6Modal
        showFlag={showWork6Modal}
        setShowWork6Modal={setShowWork6Modal}
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
          onClick={() => ShowAboutModal()}
        />
      </div>
      <div className={scss.workImgContainer}>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork1Modal()} />
        </div>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork2Modal()} />
        </div>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork3Modal()} />
        </div>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork4Modal()} />
        </div>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork5Modal()} />
        </div>
        <div className={scss.workImg}>
          <WorkImg value={"Coming Soon..."} onClick={() => ShowWork6Modal()} />
        </div>
      </div>
    </div>
  );
};

export default About;
