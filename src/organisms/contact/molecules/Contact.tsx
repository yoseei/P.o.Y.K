import React from "react";
import Input from "../atoms/Input";
import { makeStyles } from "@material-ui/core";
import TextInput from "../atoms/TextInput";
import ClickButton from "../../../component/button/ClickButton";
import ContactMe from "../atoms/ContactMe";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "300px",
    backgroundColor: "#00ADB5",
  },
  color: {
    color: "red",
  },
});
const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input placeholder={"your Name"} />
      <Input placeholder={"email"} />
      <TextInput />
      <ClickButton
        label={"SEND"}
        style={{
          border: "1px solid #393E46",
          margin: "0 auto",
        }}
      />
      <ContactMe value={"CONTACT ME"} className={classes.color} />
    </div>
  );
};

export default Contact;
