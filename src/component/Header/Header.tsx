import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import scss from "./header.module.scss";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     backgroundColor: "#393E46",
//     padding: "10px 20px",
//   },
//   logo: {
//     color: "#eee",
//   },
//   humMenu: {
//     width: "32px",
//     height: "32px",
//     color: "#eee",
//     marginTop: "5px",
//     transition: ".3s",
//     "&:hover": {
//       color: "#00adb5",
//     },
//   },
// });

const Header = () => {
  // const classes = useStyles();

  return (
    <div className={scss.root}>
      <h1 className={scss.logo}>P.o.Y.K</h1>
      <MenuOutlinedIcon className={scss.humMenu} />
    </div>
  );
};

export default Header;
