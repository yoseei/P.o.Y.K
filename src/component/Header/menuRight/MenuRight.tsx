import React from "react";
import scss from "./menuRight.module.scss";
import CloseIcon from "@material-ui/icons/Close";

const MenuRight = () => {
  return (
    <nav className={scss.navContainer}>
      <CloseIcon className={scss.closeIcon} />
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">WORKS</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuRight;
