import React from "react";
import { Badge } from "../../Atoms/Badge/Badge";
import styles from "./LogementTags.module.scss";
import PropTypes from "prop-types";

/**
 * Il s'agit d'un composant React qui affiche une liste de balises sous forme de badges.
 * @returns Le composant `LogementTags` est renvoyé, ce qui rend un élément `div` avec la classe
 * `styles.tags` et une liste de composants `Badge`, chacun avec une propriété `key` et `text` basée
 * sur le tableau `tags` passé comme accessoire au composant.
 */
export const LogementTags = ({ tags }) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => {
                return <Badge key={index} text={tag} />;
            })}
        </div>
    );
};
LogementTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};


