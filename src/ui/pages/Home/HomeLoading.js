import React from "react";
import styles from "./Home.module.scss";
import { BannerImageLoading } from "../../Molecules/BannerImage/BannerImageLoading";

import { GalleryLoading } from "../../Organisms/Gallery/GalleryLoading";

export const HomeLoading = () => {
    return (
        <main className={styles.home}>
            <BannerImageLoading />
            <GalleryLoading />
        </main>
    );
};
