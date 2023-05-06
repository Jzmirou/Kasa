import React from "react";
import { AvatarLoading } from "../../Atoms/Avatar/AvatarLoading";
import styles from "./UserInfo.module.scss";

export const UserInfoLoading = () => {
  return(
    <div className={`${styles.userInfo} ${styles.userInfoLoading}`}>
        <div className={styles.name}>
          <p></p>
          <p></p>
        </div>
        <AvatarLoading />
    </div>
  )
};
