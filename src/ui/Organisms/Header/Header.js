import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../Molecules/Nav/Nav";
import { ReactComponent as Logo } from "../../../assets/images/LOGO.svg";
import styles from './Header.module.scss'
import colorsVar from "../../../sass/abstracts/_colors.module.scss";

/**
 * La fonction Header renvoie un élément d'en-tête avec un logo et un menu de navigation.
 * @returns Le composant `Header` est renvoyé, qui contient un élément d'en-tête avec un logo et un
 * menu de navigation. Le logo est un lien vers la page d'accueil et est rempli avec la couleur
 * primaire définie dans la variable `colorsVar`. Le menu de navigation est rendu à l'aide du composant
 * `Nav`.
 */
export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="./" className={styles.logo}>
                <Logo fill={colorsVar.color_primary} />
            </Link>
            <Nav />
        </header>
    );
};
