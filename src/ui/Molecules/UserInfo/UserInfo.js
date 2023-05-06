import React from "react";
import { Avatar, AvatarLoading } from "../../Atoms/Avatar/Avatar";
import styles from "./UserInfo.module.scss";
import PropTypes from "prop-types";

/**
 * La fonction prend un nom et une userImage comme accessoires, divise le nom en prénom et nom et
 * renvoie un composant avec le prénom et le nom affichés et un composant Avatar affichant la
 * userImage.
 * @returns Le composant `UserInfo` est renvoyé, ce qui rend un `div` contenant un élément `p` avec le
 * prénom et le nom de l'utilisateur, et un composant `Avatar` affichant l'image de l'utilisateur.
 */
export const UserInfo = ({ name, userImage }) => {
    const nameSplitted = name.split(" ");
    const firstName = nameSplitted.at(0);
    const lastName = nameSplitted.at(-1);
    return (
        <div className={styles.userInfo}>
            <div className={styles.name}>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <Avatar image={userImage} />
        </div>
    );
};
UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    userImage: PropTypes.string,
};
UserInfo.defaultProps = {
    name: "josé garcia",
};

export const UserInfoLoading = () => {
  return(
    <div className={`${styles.userInfo} ${styles.userInfoLoading}`}>
        <div className={styles.name}>
          <p></p>
          <p></p>
        </div>
        <AvatarLoading />
    </div>
  )
};
