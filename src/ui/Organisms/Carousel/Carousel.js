import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";
import PropTypes from "prop-types";


/**
 * Le composant Carrousel affiche un diaporama d'images avec des boutons de navigation et une
 * fonctionnalité de lecture automatique en option.
 * @returns Le composant `Carousel` est renvoyé, ce qui rend un carrousel d'images avec des boutons
 * précédent et suivant. Les images sont transmises en tant que prop et la prop `autoPlay` est
 * facultative et par défaut à `false`. Le composant utilise des crochets d'état et d'effet pour gérer
 * l'index d'image actif et pour mettre à jour automatiquement l'index si `autoPlay` est `true`. Le
 * composant renvoie un div avec les éléments du carrousel
 */

export const Carousel = ({ images, autoPlay = false }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselLength = images?.length;
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = carouselLength - 1;
        } else if (newIndex >= carouselLength) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 1000);
        return () => {
            if (interval) clearInterval(interval);
        };
    });
    return (
        <div className={styles.carousel}>
            {images?.map((image, index) => {
                return (
                    <div key={index} style={{ transform: `translateX(-${activeIndex * 100}%)` }} className={styles.carouselItem}>
                        <img src={image} alt="description visuelle du logement" />
                    </div>
                );
            })}
            <div className={styles.btnCarousel}>
                <button
                    className={styles.prev}
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <Arrow />
                </button>
                <button
                    className={styles.next}
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <Arrow />
                </button>
            </div>
        </div>
    );
};

Carousel.propTypes = {
   images: PropTypes.arrayOf(PropTypes.string.isRequired),
   autoPlay: PropTypes.bool
};

