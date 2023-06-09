import React from "react";
import styles from "./LogementTitle.module.scss";

export const LogementTitle = ({title, location}) => {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <sub className={styles.subtitle}>{location}</sub>
        </div>
    );
};

