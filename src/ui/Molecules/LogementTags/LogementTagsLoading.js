import React from "react";
import { BadgeLoading } from "../../Atoms/Badge/BadgeLoading";
import styles from "./LogementTags.module.scss";

export const LogementTagsLoading = () => {
    return <div className={styles.tags}>
        <BadgeLoading/>
        <BadgeLoading/>
    </div>;
};
