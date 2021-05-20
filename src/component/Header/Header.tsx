import React from "react";
import menu from "./hum-menu.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "red",
    padding: "10px 20px",
  },
  humMenu: {
    width: "32px",
    height: "32px",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Logo</h1>
      <img className={classes.humMenu} src={menu} alt="ハンバーガーメニュー" />
    </div>
  );
};

export default Header;
