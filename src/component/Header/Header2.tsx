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
    title: {
      flexGrow: 1,
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
    drawerHeader: {
      display: "flex",
      flexDirection: "column",
    },
    MuiSvgIcon: {
      color: "#eee",
      fontSize: "1.5rem",
      margin: "15px 20px",
    },
    rightMenuUl: {
      display: "block",
      padding: "0",
      margin: "5px 20px",
    },
    rightMenuList: {
      listStyle: "none",
      marginBottom: "10px",
    },
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
          <Typography variant="h6" noWrap className={classes.title}>
            P.o.Y.K
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
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
        <div className={classes.drawerHeader}>
          <CloseIcon className={classes.MuiSvgIcon} onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </CloseIcon>
          <div>
            <ul className={classes.rightMenuUl}>
              <li className={classes.rightMenuList}>
                <a className={classes.rightMenuLink}>HOME</a>
              </li>
              <li className={classes.rightMenuList}>
                <a className={classes.rightMenuLink}>ABOUT</a>
              </li>
              <li className={classes.rightMenuList}>
                <a className={classes.rightMenuLink}>WORKS</a>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
