import React from "react";
import styles from "./Card.module.scss";

export const CardLoading = () => {
    return <div className={`${styles.card} ${styles.cardLoading}`}></div>;
};
