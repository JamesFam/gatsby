import React from "react"
import PropTypes from "prop-types"

import styles from "./title.module.scss"

const Title = ({ text }) => (
    <h3 className={styles.title}>{text}</h3>
)

Title.propTypes = {
    text: PropTypes.string,
}

Title.defaultProps = {
    text: `default`,
}

export default Title