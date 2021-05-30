import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// import Input from "../atoms/Input";
// import TextInput from "../atoms/TextInput";
// import ClickButton from "../../../component/button/ClickButton";
import ContactMe from "../atoms/ContactMe";
import SentMessage from "../../../component/modal/sentMessage/SentMessage";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import scss from "./contact.module.scss";

const Contact = () => {
  const [showSentMessage, setShowSentMessage] = useState(false);

  const handleShowSentMessage = () => {
    setShowSentMessage(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    return handleShowSentMessage();
  };
  console.log(errors);

  return (
    <div className={scss.root}>
      <div className={scss.inputContainer}>
        <SentMessage showFlag={showSentMessage} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={scss.validateMsg}>
            {errors.YourName?.type === "required" && "*Your Name is required"}
          </p>

          <input
            className={scss.input}
            type="text"
            placeholder="Your Name"
            {...register("YourName", {
              required: true,
              maxLength: 80,
            })}
          />
          <p className={scss.validateMsg}>
            {errors.Email?.type === "required" && "*Email is required."}
          </p>
          <input
            className={scss.input}
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <p className={scss.validateMsg}>
            {errors.Message?.type === "required" && "*Message is required"}
          </p>
          <textarea
            className={scss.textarea}
            placeholder="Message"
            {...register("Message", {
              required: true,
            })}
          />

          <input className={scss.submitBtn} type="submit" value="Submit" />
        </form>
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
