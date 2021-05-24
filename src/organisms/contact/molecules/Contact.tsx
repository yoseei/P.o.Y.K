import React from "react";
import Input from "../atoms/Input";
import { makeStyles } from "@material-ui/core";
import TextInput from "../atoms/TextInput";
import ClickButton from "../../../component/button/ClickButton";
import ContactMe from "../atoms/ContactMe";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import scss from "./contact.module.scss";

const useStyles = makeStyles({
  root: {
    padding: "40px 40px",
    width: "100%",
    height: "500px",
    backgroundColor: "#00ADB5",
  },
  contactMe: {
    color: "#393E46",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Input placeholder={"your Name"} />
        <Input placeholder={"email"} />
        <TextInput />
        <ClickButton
          label={"SEND"}
          style={{
            border: "1px solid #393E46",
            width: "150px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        />
      </div>
      <div>
        <ContactMe value={"CONTACT ME"} className={classes.contactMe} />
        <a href="https://www.instagram.com/?hl=ja">
          <InstagramIcon style={{ marginRight: "20px", marginLeft: "10px" }} />
        </a>
        <a href="https://twitter.com/yk_engineer">
          <TwitterIcon style={{ marginRight: "20px" }} />
        </a>
        <a href="https://www.facebook.com/yoseei.drums">
          <FacebookIcon style={{ marginRight: "20px" }} />
        </a>
        <a href="https://github.com/yoseei">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
