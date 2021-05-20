import React from "react";
import scss from "./Quotation.module.scss";
import ProfilePhoto from "../../component/profilePhoto/ProfilePhoto";

const Quotation = () => {
  return (
    <div className="root">
      <div className={scss.container}>
        <p className={scss.quote}>
          "It always seems impossible <br></br> until it's done."
        </p>
        <p className={scss.name}>- Nelson Mandela -</p>
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default Quotation;
