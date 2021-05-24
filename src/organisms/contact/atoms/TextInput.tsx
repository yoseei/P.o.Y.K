import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textArea: {
    borderBottom: "1px solid  #000",
    display: "block",
    height: "100px",
    width: "100%",
    margin: "0 auto",
    border: "none",
    backgroundColor: "#00ADB5",
    outline: "none",
  },
});

const TextInput = () => {
  const classes = useStyles();

  return <textarea rows={5} className={classes.textArea}></textarea>;
};

export default TextInput;
