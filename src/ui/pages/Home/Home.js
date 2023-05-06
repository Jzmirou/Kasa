import React from "react";
import styles from "./Home.module.scss";
import { BannerImage, BannerImageLoading } from "../../Molecules/BannerImage/BannerImage";
import { Outlet } from "react-router-dom";
import { GalleryLoading } from "../../Organisms/Gallery/Gallery";

/**
 * La fonction Home renvoie un élément principal avec un composant BannerImage et un composant Outlet.
 * @returns Le composant `Home` est renvoyé, qui contient un élément `main` avec une classe de
 * `styles.home`, un composant `BannerImage` et un composant `Outlet`.
 */
export const Home = () => {
    return (
        <main className={styles.home}>
            <BannerImage />
            <Outlet />
        </main>
    );
};

export const HomeLoading = () => {
    return (
        <main className={styles.home}>
            <BannerImageLoading />
            <GalleryLoading />
        </main>
    );
};
