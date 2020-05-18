import { Link } from "gatsby"
import React from "react"
import styles from "./footer.module.scss"

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__inner}>
            <nav className={styles.footer__navi}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className={styles.footer__copy}>
            <p>&copy; copyright xxxxxxxx {new Date().getFullYear()}</p>
        </div>
    </footer>
)

export default Footer
