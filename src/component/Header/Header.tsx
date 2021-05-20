import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#393E46",
    padding: "10px 20px",
  },
  logo: {
    color: "#eee",
  },
  humMenu: {
    width: "32px",
    height: "32px",
    color: "#eee",
    "&:hover": {
      color: "#00adb5",
      transition: ".3s",
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.logo}>P.o.Y.K</h1>
      <MenuOutlinedIcon className={classes.humMenu} />
    </div>
  );
};

export default Header;
