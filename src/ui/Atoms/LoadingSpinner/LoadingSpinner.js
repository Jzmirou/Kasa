
import React from 'react'
import styles from "./LoadingSpinner.module.scss"


/**
 * Il s'agit d'un composant React qui rend un spinner de chargement.
 * @returns Le composant `LoadingSpinner` est renvoyé, qui est un conteneur div avec un div enfant qui
 * affiche un spinner de chargement.
 */
export const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}></div>
    </div>
  )
}
