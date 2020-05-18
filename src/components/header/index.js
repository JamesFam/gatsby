import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import logo from "../../images/150x50.png"

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <div className={styles.header__fixed}>
            <div className={styles.header__inner}>
                <h1 className={styles.header__logo}>
                    <Link to="/">
                        <img src={logo} alt={siteTitle} width="150" height="50" />
                    </Link>
                </h1>
                <nav className={styles.header__navi}>
                    <ul>
                        <li>
                            <Link to="/" activeClassName={styles.active}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about/" activeClassName={styles.active}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact/" activeClassName={styles.active}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
