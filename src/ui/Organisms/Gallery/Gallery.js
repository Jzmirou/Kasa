import React, { Suspense } from "react";
import styles from "./Gallery.module.scss";
import { Card} from "../../Molecules/Card/Card";
import { cacheLogement } from "../../../helper/cacheLogement";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getAllLogement } from "../../../helper/api";
import {GalleryLoading} from './GalleryLoading'

/**
 * Le composant Gallery affiche une collection de composants Card basés sur les données extraites de
 * useLoaderData().
 * @returns Le composant `Gallery` est renvoyé, ce qui rend un élément `div` avec un `className` de
 * `styles.gallery` et mappe sur le tableau `logementData` en utilisant la méthode `map` pour rendre un
 * composant `Card` pour chaque élément du tableau. Le composant `Card` reçoit une prop `key` avec la
 * valeur de `i`, une prop `href`
 */
export const Gallery = () => {
    const { updateCache } = cacheLogement();
    const logementData = useLoaderData();
    return (
        <Suspense fallback={<GalleryLoading />}>
            <Await resolve={logementData.data} errorElement={<p>Error</p>}>
                {(logementData) => {
                    updateCache(logementData);
                    return (
                        <div className={styles.gallery}>
                            {logementData.map((logement, i) => {
                                return <Card key={i} href={`logement/${logement.id}`} imageUrl={logement.cover} text={logement.title} />;
                            })}
                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
};


/**
 * Cette fonction charge les données à partir d'un cache ou d'un point de terminaison d'API et les
 * renvoie.
 * @returns La fonction `loader` renvoie un tableau de données de logement. S'il y a des données dans
 * le cache, il renvoie les données mises en cache, sinon il récupère les données à l'aide de la
 * fonction `getAllLogement` et met à jour le cache avant de renvoyer les données récupérées.
 */
export const loader = ({ request }) => {
    const { cache } = cacheLogement();
    if (cache.size > 1) {
        const data = [];
        cache.forEach((value) => {
            data.push(value);
        });
        console.log("data used cache");
        return { data: data };
    }
    const data = getAllLogement({
        signal: request.signal,
    });
    console.log("data used non cache");
    return defer({ data: data });
};
