import React from "react";
import ClickButton from "../../component/button/ClickButton";
import scss from "./about.module.scss";
import WorkImg from "../../component/workImg/WorkImg";

const About = () => {
  return (
    <div className={scss.container}>
      <h1>about</h1>
      <h2>name Y.K</h2>
      <p>
        My current occupation is drummer. Currently studying to become a
        front-end engineer. I want to create a service that can improve people's
        problems.
      </p>
      <ClickButton label={"ABOUT MORE"} style={{}} />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <ClickButton label={"WORKS"} style={{ margin: "0 auto" }} />
    </div>
  );
};

export default About;
