import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./button.module.scss"

const Button = ({ text, url }) => (
    <Link
        className={styles.button}
        to={url}
    >
        {text}
    </Link>
)

Button.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
}

Button.defaultProps = {
    text: ``,
    url: ``,
}


export default Button
