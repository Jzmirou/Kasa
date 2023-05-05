import React from "react";
import styles from "./Gallery.module.scss";
import { Card } from "../../Molecules/Card/Card";
import { cacheLogement } from "../../../helper/cacheLogement";
import { useLoaderData } from "react-router-dom";
import { getAllLogement } from "../../../helper/api";

/**
 * Le composant Gallery affiche une collection de composants Card basés sur les données extraites de
 * useLoaderData().
 * @returns Le composant `Gallery` est renvoyé, ce qui rend un élément `div` avec un `className` de
 * `styles.gallery` et mappe sur le tableau `logementData` en utilisant la méthode `map` pour rendre un
 * composant `Card` pour chaque élément du tableau. Le composant `Card` reçoit une prop `key` avec la
 * valeur de `i`, une prop `href`
 */
export const Gallery = () => {
    const logementData = useLoaderData();
    return (
        <div className={styles.gallery}>
            {logementData.map((logement, i) => {
                return <Card key={i} href={`logement/${logement.id}`} imageUrl={logement.cover} text={logement.title} />;
            })}
        </div>
    );
};

/**
 * Cette fonction charge les données à partir d'un cache ou d'un point de terminaison d'API et les
 * renvoie.
 * @returns La fonction `loader` renvoie un tableau de données de logement. S'il y a des données dans
 * le cache, il renvoie les données mises en cache, sinon il récupère les données à l'aide de la
 * fonction `getAllLogement` et met à jour le cache avant de renvoyer les données récupérées.
 */
export const loader = async ({ request, params }) => {
    const { cache, updateCache } = cacheLogement();
    if (cache.size > 0) {
        const data = [];
        cache.forEach((value) => {
            data.push(value)
        });
        console.log('data Cached')
        return data
    }
    const data = await getAllLogement({
        signal: request.signal
    });
    updateCache(data);
    console.log('non cache')
    return data;
};
