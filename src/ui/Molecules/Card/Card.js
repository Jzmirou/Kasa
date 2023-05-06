import React from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * La fonction Card renvoie un composant qui affiche une image et du texte, avec un lien facultatif.
 * @returns Le composant `Card` est renvoyé. Il prend trois props : `imageUrl`, `text` et `href`. Si
 * `href` est vrai, il renvoie un composant `Link` avec le composant `CardContent` comme enfant. Si
 * `href` est faux, il renvoie un `div` avec le composant `CardContent` comme enfant.
 */
export const Card = ({ imageUrl, text, href, loading = false}) => {
    const isLink = href
    return isLink ? (
        <Link to={href} className={`${styles.card} ${loading ? styles.cardLoading : ''}`}>
          <CardContent imageUrl={imageUrl} text={text} />
        </Link>
    ) : (
      <div className={`${styles.card} ${loading ? styles.cardLoading : ''}`}>
          <CardContent imageUrl={imageUrl} text={text} />
        </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    loading: PropTypes.bool
};

export const CardLoading = () => {
    return (
        <div className={`${styles.card} ${styles.cardLoading}`}>

        </div>
    )
}
/**
 * La fonction CardContent renvoie une image, un arrière-plan sombre et un paragraphe de texte.
 * @returns Le composant `CardContent` renvoie un fragment JSX qui contient un élément `img` avec un
 * attribut `src` défini sur la prop `imageUrl`, un élément `div` avec une classe de `bgDark` et un
 * élément `p` avec une classe de `text` et le prop `text` comme contenu.
 */
const CardContent = ({ imageUrl, text }) => {
    return (
        <>
            <img className={styles.image} src={imageUrl} alt="" />
            <div className={styles.bgDark}></div>
            <p className={styles.text}>{text}</p>
        </>
    )
};
CardContent.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string
}

