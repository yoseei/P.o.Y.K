import React from "react";
import scss from "./profilePhoto.module.scss";
import drPhoto from "./drums.jpg";

const ProfilePhoto = () => {
  return (
    <div className={scss.container}>
      <img className={scss.drPhoto} src={drPhoto} alt="プロフィール画像" />
      <p className={scss.txt}>portfolio</p>
    </div>
  );
};

export default ProfilePhoto;
