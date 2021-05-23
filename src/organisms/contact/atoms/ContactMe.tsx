import React from "react";

interface Props {
  value: string;
  className: string;
}
const ContactMe: React.FC<Props> = (props) => {
  return <h2 className={props.className}>{props.value}</h2>;
};

export default ContactMe;
