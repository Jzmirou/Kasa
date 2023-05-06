import React from "react";
import { BannerImage } from "../../Molecules/BannerImage/BannerImage";
import { Collapse } from "../../Molecules/Collapse/Collapse";
import ImageBanner from "../../../assets/images/banner2.webp";
import styles from "./About.module.scss";

const aboutItems = [
    {
        id: 1,
        title: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        id: 2,
        title: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        id: 3,
        title: "Service",
        text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        id: 4,
        title: "Sécurité",
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
];
/**
 * La fonction About renvoie un div contenant une image de bannière et des sections réductibles pour
 * chaque élément du tableau aboutItems.
 * @returns Le composant "À propos" est renvoyé, qui contient une image de bannière et une liste
 * d'éléments réductibles.
 */
export const About = () => {
    return (
        <div className={styles.about}>
            <BannerImage text={null} imageUrl={ImageBanner} />
            {aboutItems.map((item) => {
                return (
                    <Collapse title={item.title} key={item.id}>
                        {item.text}
                    </Collapse>
                );
            })}
        </div>
    );
};

