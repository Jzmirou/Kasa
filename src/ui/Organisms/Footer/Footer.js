import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../../assets/images/LOGO.svg";

/**
 * Il s'agit d'un composant React qui affiche un pied de page avec un logo et un texte de copyright.
 * @returns Un composant fonctionnel React nommé "Footer" est renvoyé. Il rend un élément `footer` avec
 * un `className` de `styles.footer`. À l'intérieur de l'élément `footer`, il y a un élément `div` avec
 * un `className` de `styles.logo` qui affiche un composant `Logo` avec un accessoire `fill` de
 * `#ffffff`. Sous l'élément `div`, il y a
 */
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Logo fill="#ffffff" />
            </div>
            <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};
