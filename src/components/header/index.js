import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import logo from "../../images/150x50.png"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            isActive: false
        }
    }

    menuOpen = () => (
        this.setState({ isActive: !this.state.isActive })
    )
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.header__fixed}>
                    <div className={styles.header__inner}>
                        <h1 className={styles.header__logo}>
                            <Link to="/">
                                <img src={logo} alt={this.props.siteTitle} width="150" height="50" />
                            </Link>
                        </h1>
                        <nav className={`${styles.header__navi}${this.state.isActive ? ` ${styles.isActive}` : ''}`}>
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
                        <div className={`${styles.header__icon}${this.state.isActive ? ` ${styles.isActive}` : ''}`} onClick={this.menuOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
