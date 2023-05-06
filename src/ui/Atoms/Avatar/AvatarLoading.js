import React from "react";
import styles from "./Avatar.module.scss";

export const AvatarLoading = () => {
    return <div className={`${styles.avatar} ${styles.avatarLoading}`}></div>;
};
