import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ContactMe from "../atoms/ContactMe";
import SentMessage from "../../../component/modal/sentMessage/SentMessage";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

import scss from "./contact.module.scss";

const Contact = () => {
  const [showSentMessage, setShowSentMessage] = useState(false);
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [message, setMessage] = useState("");

  const handleShowSentMessage = () => {
    setShowSentMessage(true);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const userName = name;
    const userEmail = email;
    const userMessage = message;

    const payload = {
      text:
        "お問い合わせがありました\n" +
        "Name：" +
        userName +
        "\n" +
        "Email：" +
        userEmail +
        "\n" +
        "Message： \n" +
        userMessage,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。追ってご連絡致します！");
    });
    return handleShowSentMessage();
  };

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
            onChange={handleNameChange}
          />
          <p className={scss.validateMsg}>
            {errors.Email?.type === "pattern" &&
              "*Please enter a valid email address."}
            {errors.Email?.type === "required" && "*Email is required."}
          </p>
          <input
            className={scss.input}
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            onChange={handleEmailChange}
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
            onChange={handleMessageChange}
          />

          <input className={scss.submitBtn} type="submit" value="Submit" />
        </form>
      </div>
      <div className={scss.iconContainer}>
        <ContactMe value={"CONTACT ME"} className={scss.contactMe} />
        <a
          href="https://www.instagram.com/?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a
          href="https://twitter.com/yk_engineer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            style={{
              marginRight: "20px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a
          href="https://www.facebook.com/yoseei.drums"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            style={{
              marginRight: "20px",
              fontSize: "2rem",
            }}
          />
        </a>
        <a
          href="https://github.com/yoseei"
          target="_blank"
          rel="noopener noreferrer"
        >
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
