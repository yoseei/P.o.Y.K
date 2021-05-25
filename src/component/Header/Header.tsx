import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import scss from "./header.module.scss";
import MenuRight from "./menuRight/MenuRight";
import BlackBackground from "./blackBackground/BlackBackground";

const blackBackground = document.getElementById("blackBackground");

const handleClick = () => {
  blackBackground.style.display = "block";
};

const Header = () => {
  return (
    <>
      <BlackBackground id="blackBackground" />
      <div className={scss.root}>
        <h1 className={scss.logo}>P.o.Y.K</h1>
        <MenuOutlinedIcon className={scss.humMenu} onClick={handleClick} />
        <MenuRight />
      </div>
    </>
  );
};

export default Header;
