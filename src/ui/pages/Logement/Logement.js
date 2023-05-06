import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getLogementById } from "../../../helper/api";
import { cacheLogement } from "../../../helper/cacheLogement";
import { Carousel, CarouselLoading } from "../../Organisms/Carousel/Carousel";
import { Collapse, CollapseLoading } from "../../Molecules/Collapse/Collapse";
import { Rating, RatingLoading } from "../../Molecules/Rating/Rating";
import { UserInfo, UserInfoLoading } from "../../Molecules/UserInfo/UserInfo";
import { LogementTags, LogementTagsLoading } from "../../Molecules/LogementTags/LogementTags";
import styles from "./Logement.module.scss";
import { Erreur404 } from "../Erreur404/Erreur404";
import { LogementTitle, LogementTitleLoading } from "../../Molecules/LogementTitle/LogementTitle";

/**
 * La fonction Logement renvoie un composant qui affiche des informations sur un logement, notamment
 * des images, un titre, un emplacement, des tags, une note, des informations sur l'hôte, une
 * description et une liste d'équipements.
 * @returns Le composant `Logement` est renvoyé, qui affiche un carrousel d'images, des informations
 * sur l'hébergement (titre, emplacement, tags), la note et les informations utilisateur de l'hôte, et
 * des sections réductibles pour la description et la liste des équipements de l'hébergement. Les
 * données de ce composant sont obtenues via le hook `useLoaderData`.
 */
export const Logement = () => {
    const { updateCache } = cacheLogement();
    const logementData = useLoaderData();
    return (
        <Suspense fallback={<LogementLoading/>}>
            <Await resolve={logementData.data} errorElement={<Erreur404 />}>
                {(logementData) => {
                    updateCache(logementData, logementData.id);
                    return (
                        <div className={styles.logement}>
                            <Carousel images={logementData.pictures} />
                            <div className={styles.logementBody}>
                                <div className={styles.logementInfo}>
                                    <LogementTitle title={logementData.title} location={logementData.location} />
                                    <LogementTags tags={logementData.tags} />
                                </div>
                                <div className={styles.rateAndUser}>
                                    <Rating rate={logementData.rating} />
                                    <UserInfo name={logementData.host.name} userImage={logementData.host.picture} />
                                </div>
                                <div className={styles.logementCollapse}>
                                    <Collapse title={"Description"}>{logementData.description}</Collapse>
                                    <Collapse title={"Équipements"}>
                                        {logementData?.equipments?.map((element, index) => (
                                            <li key={index}>{element}</li>
                                        ))}
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
};

/**
 * Cette fonction vérifie si les données sont déjà en cache et les renvoie, sinon elle récupère les
 * données et les met en cache avant de les renvoyer.
 * @returns La fonction `loader` renvoie soit les données mises en cache pour un `id` donné s'il
 * existe, soit elle récupère les données pour cet `id` en utilisant la fonction `getLogementById` et
 * les renvoie. Les données renvoyées sont liées à un logement (qui peut être une maison, un
 * appartement ou un autre type de logement) en fonction du paramètre "id" passé au
 */
export const loader = async ({ params, request }) => {
    const { cache } = cacheLogement();
    if (cache.has(params.id)) {
        console.log("data used cache");
        const data = cache.get(params.id);
        return { data: data };
    }
    const data = getLogementById(params.id, {
        signal: request.signal,
    });
    console.log("data used non cache");
    return defer({ data: data });
};

export const LogementLoading = () => {
    return (
        <div className={styles.logement}>
            <CarouselLoading />
            <div className={styles.logementBody}>
                <div className={styles.logementInfo}>
                    <LogementTitleLoading />
                    <LogementTagsLoading/>
                </div>
                <div className={styles.rateAndUser}>
                    <RatingLoading/>
                    <UserInfoLoading />
                </div>
                <div className={styles.logementCollapse}>
                    <CollapseLoading/>
                    <CollapseLoading/>
                </div>
            </div>
        </div>
    );
};
