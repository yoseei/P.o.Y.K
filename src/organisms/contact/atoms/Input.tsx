import React from "react";
import { makeStyles } from "@material-ui/core";
import "./input.module.scss";

const useStyles = makeStyles({
  input: {
    border: "none",
    borderBottom: "1px solid #000",
    backgroundColor: "#00ADB5",
    display: "block",
    fontSize: "1.25rem",
    height: "32px",
    width: "100%",
    margin: "0 auto",
    outline: "none",
    fontWeight: "lighter",
  },
});

interface Props {
  placeholder: any;
}

const Input: React.FC<Props> = (props) => {
  const classes = useStyles();

  return <input className={classes.input} placeholder={props.placeholder} />;
};

export default Input;
