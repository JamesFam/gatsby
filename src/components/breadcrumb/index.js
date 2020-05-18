import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./breadcrumb.module.scss"

const Breadcrumb = ({ breadcrumb }) => {
    return (
        <nav className={styles.breadcrumb}>
            <ul>
                {
                    breadcrumb.map((val) => {
                        return (
                            <li key={val.name}>
                                {val.path && <Link to={val.path}>{val.name}</Link>}
                                {!val.path && <span>{val.name}</span>}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

Breadcrumb.propTypes = {
    breadcrumb: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            path: PropTypes.string,
        }
    )),
}

Breadcrumb.defaultProps = {
    breadcrumb: [],
}

export default Breadcrumb