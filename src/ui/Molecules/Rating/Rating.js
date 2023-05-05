import React from "react";
import styles from "./Rating.module.scss";
import { ReactComponent as Star } from "../../../assets/icons/star.svg";
import colorsVar from "../../../sass/abstracts/_colors.module.scss";
import PropTypes from "prop-types"

/**
 * Il s'agit d'un composant React qui rend un système de notation avec des étoiles, où le nombre
 * d'étoiles remplies correspond au taux donné et le nombre maximum d'étoiles est personnalisable.
 * @returns Le composant `Rating` est renvoyé. Il prend deux props, `rate` et `maxRate`, et rend un div
 * avec une classe de `rating`. Il mappe ensuite sur un tableau de longueur `maxRate` et rend un
 * composant `Star` pour chaque index jusqu'à la prop `rate`, avec une couleur remplie si l'index est
 * inférieur à `rate`, et un vide
 */
export const Rating = ({ rate, maxRate = 5 }) => {

    console.log(typeof rate)
    return (
        <div className={styles.rating}>
            {[...new Array(maxRate)].map((arr, i) => {
                return i < rate ? (
                    <div key={i} className={styles.star}>
                        <Star fill={colorsVar.color_primary} />
                    </div>
                ) : (
                    <div key={i} className={styles.star}>
                        <Star />
                    </div>
                );
            })}
        </div>
    );
};

Rating.propTypes = {
    rate: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    maxRate: PropTypes.number
}