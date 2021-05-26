import React from "react";
import Input from "../atoms/Input";
import TextInput from "../atoms/TextInput";
import ClickButton from "../../../component/button/ClickButton";
import ContactMe from "../atoms/ContactMe";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import scss from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={scss.root}>
      <div className={scss.inputContainer}>
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
          onClick={""}
        />
      </div>
      <div className={scss.iconContainer}>
        <ContactMe value={"CONTACT ME"} className={scss.contactMe} />
        <a href="https://www.instagram.com/?hl=ja">
          <InstagramIcon
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a href="https://twitter.com/yk_engineer">
          <TwitterIcon
            style={{
              marginRight: "20px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a href="https://www.facebook.com/yoseei.drums">
          <FacebookIcon
            style={{
              marginRight: "20px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a href="https://github.com/yoseei">
          <GitHubIcon
            style={{
              fontSize: "2rem",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
