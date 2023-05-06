import React, { useState, useRef } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrowDown.svg";
import styles from "./Collapse.module.scss";
import PropTypes from "prop-types";

/**
 * Il s'agit d'un composant React qui crée une section réductible avec un titre et un bouton pour
 * basculer la visibilité.
 * @returns Le composant "Réduire" est renvoyé.
 */
export const Collapse = ({ children, title }) => {
    const [visible, setVisible] = useState(false);
    const body = useRef(null);
    const toggleOpen = () => {
        visible ? (body.current.style.maxHeight = 0) : (body.current.style.maxHeight = body.current.scrollHeight + "px");
        setVisible(!visible);
    };
    return (
        <div className={styles.collapse}>
            <label className={styles.collapseHeader}>
                <h2 className={styles.title}>{title}</h2>
                <button onClick={toggleOpen} className={`${styles.button} ${!visible ? styles.buttonActive : ""}`}>
                    <Arrow />
                </button>
            </label>
            <div ref={body} className={`${styles.collapseBody}`} style={{ maxHeight: 0 }}>
                <p>{children}</p>
            </div>
        </div>
    );
};
Collapse.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
};

export const CollapseLoading = () => {
    return <div className={styles.collapseLoading}></div>;
};
