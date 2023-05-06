import React from "react";
import { CarouselLoading } from "../../Organisms/Carousel/CarouselLoading";
import { CollapseLoading } from "../../Molecules/Collapse/CollapseLoading";
import { RatingLoading } from "../../Molecules/Rating/RatingLoading";
import { UserInfoLoading } from "../../Molecules/UserInfo/UserInfoLoading";
import { LogementTagsLoading } from "../../Molecules/LogementTags/LogementTagsLoading";
import { LogementTitleLoading } from "../../Molecules/LogementTitle/LogementTitleLoading";
import styles from "./Logement.module.scss";

export const LogementLoading = () => {
    return (
        <div className={styles.logement}>
            <CarouselLoading />
            <div className={styles.logementBody}>
                <div className={styles.logementInfo}>
                    <LogementTitleLoading />
                    <LogementTagsLoading/>
                </div>
                <div className={styles.rateAndUser}>
                    <RatingLoading/>
                    <UserInfoLoading />
                </div>
                <div className={styles.logementCollapse}>
                    <CollapseLoading/>
                    <CollapseLoading/>
                </div>
            </div>
        </div>
    );
};

