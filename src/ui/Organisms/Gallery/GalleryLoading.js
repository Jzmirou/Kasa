import React from "react";
import styles from "./Gallery.module.scss";
import { CardLoading } from "../../Molecules/Card/CardLoading";

export const GalleryLoading = () => {
    return (
        <div className={styles.gallery}>     
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
        </div>
    );
};
