import React from "react";
import styles from "./Avatar.module.scss";
import PropTypes from "prop-types";

/**
 * Il s'agit d'un composant React appelé Avatar qui affiche une image s'il est fourni comme accessoire.
 * @returns Le composant `Avatar` est renvoyé, qui est un élément `div` avec une classe de `avatar`. Si
 * la prop `image` est fournie, un élément `img` avec l'attribut `src` défini sur la valeur de la prop
 * `image` et un attribut `alt` de "avatar du propriétaire" est également rendu à l'intérieur de la
 * `div` . Si l'"image"
 */
export const Avatar = ({ image }) => {
    return <div className={styles.avatar}>{image ? <img src={image} alt="avatar du propriétaire" /> : null}</div>;
};
Avatar.propTypes = {
    image: PropTypes.string.isRequired,
};

