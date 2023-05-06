
import React from "react";
import { BannerImageLoading } from "../../Molecules/BannerImage/BannerImageLoading";
import { CollapseLoading } from "../../Molecules/Collapse/CollapseLoading";

import styles from "./About.module.scss";
export const AboutLoading = () => {
    return (
        <div className={styles.about}>
            <BannerImageLoading /> 
               <CollapseLoading />
               <CollapseLoading />
               <CollapseLoading />
               <CollapseLoading />
        </div>
    );
};
