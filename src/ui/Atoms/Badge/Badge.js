import React from 'react'
import styles from "./Badge.module.scss"
import PropTypes from "prop-types"

/**
 * Il s'agit d'une fonction JavaScript qui renvoie un élément div avec un nom de classe "badge" et
 * affiche le texte passé en accessoire.
 * @returns Un composant fonctionnel React appelé "Badge" est renvoyé. Il prend un seul prop appelé
 * `text` et renvoie un élément `div` avec le nom de classe `badge` et le contenu textuel du prop
 * `text`.
 */
export const Badge = ({text}) => {
  return (
    <div className={styles.badge}>{text}</div>
    )
  }
  Badge.propTypes = {
    text: PropTypes.string.isRequired
  }
  
  export const BadgeLoading = () => {
    return (
    <div className={styles.badgeLoading}></div>
  )
}