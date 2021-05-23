import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textInput: {
    borderBottom: "1px solid  #000",
    display: "block",
    height: "50px",
    width: "80%",
    margin: "0 auto",
    border: "none",
    backgroundColor: "#00ADB5",
    outline: "none",
  },
});

const TextInput = () => {
  const classes = useStyles();

  return <textarea rows={8} className={classes.textInput}></textarea>;
};

export default TextInput;
