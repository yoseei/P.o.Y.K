import React from "react";
import scss from "./header2.module.scss";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = "30%";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      zIndex: 1,
    },
    MuiToolBar: {
      background: "#393E46",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth})`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "rgb(24,23,22)",
    },

    // rightMenuUl: {
    //   display: "block",
    //   padding: "0",
    //   margin: "5px 20px",
    //   fontSize: "2rem",
    //   textAlign: "center",
    // },
    // rightMenuList: {
    //   listStyle: "none",
    //   marginBottom: "10px",
    // },
    rightMenuLink: {
      color: "#eee",
    },
  })
);

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.MuiToolBar} id={scss.MuiToolBar}>
          <Typography variant="h6" noWrap className={scss.title}>
            P.o.Y.K
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon className={scss.MenuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={scss.drawerHeader}>
          <CloseIcon className={scss.MuiSvgIcon} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </CloseIcon>
          <div>
            <ul className={scss.rightMenuUl}>
              <li className={scss.rightMenuList}>
                <p className={classes.rightMenuLink}>HOME</p>
              </li>
              <li className={scss.rightMenuList}>
                <p className={classes.rightMenuLink}>ABOUT</p>
              </li>
              <li className={scss.rightMenuList}>
                <p className={classes.rightMenuLink}>WORKS</p>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
