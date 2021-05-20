import React from "react";
import Button from "../../component/button/Button";
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
      <Button label={"ABOUT MORE"} />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <WorkImg />
      <Button label={"WORKS"} className={scss.workButton} />
    </div>
  );
};

export default About;
