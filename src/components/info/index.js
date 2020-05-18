import React from "react"
import PropTypes from "prop-types"

import styles from "./info.module.scss"

const Info = ({ image, title, text }) => (
    <section className={styles.info}>
        {image &&
            <div className={styles.info__left}>
                <img src={image} />
            </div>
        }
        <div className={styles.info__right}>
            <h3 className={styles.info__title}>{title}</h3>
            <p className={styles.info__text}>{text}</p>
        </div>
    </section>
)

Info.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

Info.defaultProps = {
    image: ``,
    title: ``,
    text: ``,
}

export default Info
