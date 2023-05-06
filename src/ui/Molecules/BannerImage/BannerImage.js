import React from "react";
import imageBannerWebp from "../../../assets/images/banner1.webp";
import imageBannerJpg from "../../../assets/images/banner1.jpg";
import styles from "./BannerImage.module.scss";
import PropTypes from "prop-types";

const imageBanner = {
    alt: "bannière du site Kasa représentant un paysage sur des côtes rocheuse",
    imagesUrl: [imageBannerWebp, imageBannerJpg],
};

/**
 * La fonction BannerImage prend une URL d'image ou plusieurs URL et les affiche avec le texte et le
 * sous-texte facultatifs dans un format de bannière.
 * @returns Un composant React appelé `BannerImage` est renvoyé.
 */
export const BannerImage = ({ imageUrl, alt, text, subtext }) => {
    const images = [];
    const isMultipleUrl = typeof imageUrl !== "string";
    const urls = isMultipleUrl ? [...imageUrl] : [imageUrl];
    return (
        <div className={styles.bannerImage}>
            <picture className={styles.imageContainer}>
                {urls.map((imageUrl, i) => {
                    const format = imageUrl.split(".").at(-1);
                    images.push({ ext: format, imageUrl: imageUrl });
                    return <source key={i} srcSet={imageUrl} type={`image/${format}`} />;
                })}
                <img src={getBaseImage(images)} className={styles.image} alt={alt} />
            </picture>
            <div className={styles.bgDark}></div>
            {text ? (
                <h1 className={styles.text}>
                    {text}
                    <br className={styles.br} />
                    {subtext}
                </h1>
            ) : null}
        </div>
    );
};

BannerImage.defaultProps = {
    imageUrl: imageBanner.imagesUrl,
    alt: imageBanner.alt,
    text: "Chez vous, ",
    subtext: "partout et ailleurs",
};
BannerImage.propTypes = {
    image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        imagesUrl: PropTypes.arrayOf(PropTypes.string.isRequired),
    }),
    text: PropTypes.string,
    subtext: PropTypes.string,
};

export const BannerImageLoading = () => {
    return <div className={`${styles.bannerImage} ${styles.bannerImageLoading}`}></div>;
};
/**
 * La fonction renvoie l'extensions de l'image de base à partir d'un tableau d'images en fonction de la
 * priorité des extensions de fichier.
 * @param images - Le paramètre `images` est un tableau d'objets qui représentent des images. Chaque
 * objet possède les propriétés suivantes :
 * @returns La fonction `getBaseImage` renvoie une chaîne qui est l'URL de la première image du tableau
 * `images` si aucune des images n'a d'extension "jpg", "jpeg", "png" ou "webp". S'il existe une image
 * avec l'extension "jpg" ou "jpeg", la fonction renvoie l'URL de la première image de ce type. S'il
 * n'y a pas de "jpg" ou "jpeg
 */
const getBaseImage = (images) => {
    let baseImage;
    for (const image of images) {
        if (image.ext === "jpg" || image.ext === "jpeg") {
            baseImage = image.imageUrl;
            return baseImage;
        }
    }
    for (const image of images) {
        if (image.ext === "png") {
            baseImage = image.imageUrl;
            return baseImage;
        }
    }
    for (const image of images) {
        if (image.ext === "webp") {
            baseImage = image.imageUrl;
            return baseImage;
        }
    }
    baseImage = images[0].imageUrl;
    return baseImage;
};
