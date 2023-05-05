import React from 'react'
import {NavLink} from "react-router-dom"
import styles from './Nav.module.scss'
import PropTypes from "prop-types"

const navItems = [
    {
        id: 1,
        name: "accueil",
        link : "/"
    },
    {
        id:2,
        name: "à propos",
        link : "/about"
    },
]

/**
 * Il s'agit d'un composant fonctionnel qui affiche une barre de navigation avec des liens basés sur un
 * tableau d'éléments passés en tant qu'accessoires.
 * @returns Le composant `Nav` est renvoyé, ce qui affiche une liste d'éléments de navigation à l'aide
 * de la propriété `items` qui lui est transmise. Chaque élément est rendu sous la forme d'un composant
 * `NavLink` avec une propriété `key` et `to` unique, et la fonction `navLinkStyles` est utilisée pour
 * styliser le lien selon qu'il est actuellement actif ou non.
 */
export const Nav = ({items}) => {
    const navLinkStyles = ({isActive}) => {
        return {
            textDecoration: isActive ? "underline" : "none",
            textUnderlineOffset: "0.325rem"
        }
    }
  return (
    <ul className={styles.nav}>
        {items.map(item => (
            <li key={item.id} className={styles.navItem}><NavLink style={navLinkStyles} to={item.link}>{item.name}</NavLink></li>
        ))}
    </ul>
  )
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

Nav.defaultProps = {
    items: navItems
}