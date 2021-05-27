import React from "react";
import scss from "./textInput.module.scss";

const TextInput = () => {
  return <textarea rows={5} className={scss.textArea}></textarea>;
};

export default TextInput;
