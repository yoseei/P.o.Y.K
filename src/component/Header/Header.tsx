import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import scss from "./header.module.scss";

const Header = () => {
  return (
    <div className={scss.root}>
      <h1 className={scss.logo}>P.o.Y.K</h1>
      <MenuOutlinedIcon className={scss.humMenu} />
    </div>
  );
};

export default Header;
