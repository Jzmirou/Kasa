import React from "react";
import styles from "./LogementTitle.module.scss";


export const LogementTitleLoading = () => {
    return (
        <div className={`${styles.titleContainer} ${styles.titleContainerLoading}`}>
            <h1 className={styles.title}></h1>
            <sub className={styles.subtitle}></sub>
        </div>
    )
}