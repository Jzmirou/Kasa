import React from "react";
import styles from "./Carousel.module.scss";

export const CarouselLoading = () => {
    return (
        <div className={`${styles.carousel} ${styles.carouselLoading}`}>
        </div>
    )
}

