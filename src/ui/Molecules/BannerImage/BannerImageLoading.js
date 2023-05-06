import React from "react";
import styles from "./BannerImage.module.scss";

export const BannerImageLoading = () => {
    return <div className={`${styles.bannerImage} ${styles.bannerImageLoading}`}></div>;
};

