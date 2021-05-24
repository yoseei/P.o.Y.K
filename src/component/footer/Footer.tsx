import React from "react";
import scss from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={scss.root}>
      <a href="#" style={{ color: "rgb(19,19,19)", textDecoration: "none" }}>
        ©2021 Y.K
      </a>
    </div>
  );
};

export default Footer;
