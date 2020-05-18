import React from "react"
import PropTypes from "prop-types"

import styles from "./heading.module.scss"

const Heading = ({ text }) => (
    <section className={styles.heading}>
        <div className={styles.heading__inner}>
            <h2>{text}</h2>
        </div>
    </section>
)

Heading.propTypes = {
    text: PropTypes.string,
}

Heading.defaultProps = {
    text: ``,
}

export default Heading