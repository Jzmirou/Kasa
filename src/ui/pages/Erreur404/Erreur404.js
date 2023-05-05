import React from "react";
import { Link } from "react-router-dom";
import styles from "./Erreur404.module.scss"

/**
 * La fonction renvoie un composant React pour une page d'erreur 404 avec un message et un lien vers la
 * page d'accueil.
 * @returns Le composant `Erreur404` est renvoyé, qui est un composant fonctionnel React qui rend un
 * div contenant un texte avec un titre "404" et un sous-texte "Oups ! La page que vous demandez
 * n'existe pas." ainsi qu'un lien vers la page d'accueil. Le composant est stylisé à l'aide de modules
 * CSS.
 */
export const Erreur404 = () => {
    return (
        <div className={styles.erreur}>
            <div className={styles.text}>
                <h1>404</h1>
                <sub>Oups! La page que vous demandez n'existe pas.</sub>
            </div>
            <Link className={styles.link} to={"/"}>Retourner sur la page d’accueil</Link>
        </div>
    );
};
