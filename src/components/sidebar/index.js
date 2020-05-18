import { Link } from "gatsby"
import React from "react"

import styles from "./sidebar.module.scss"
import banner from "../../images/200x100.png"

const Sidebar = () => (
    <>
        <div className={styles.sidebar}>
            <div className={styles.sidebar__head}>
                <p>Pages</p>
            </div>
            <div className={styles.sidebar__body}>
                <ul className={styles.sidebar__list}>
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
            </div>
        </div>

        <div className={styles.sidebar}>
            <div className={styles.sidebar__head}>
                <p>Banner</p>
            </div>
            <div className={styles.sidebar__body}>
                <ul className={styles.sidebar__banner}>
                    <li>
                        <a href="https://www.google.com/" target="_blank">
                            <img src={banner} alt="200x100" width="200" height="100" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/" target="_blank">
                            <img src={banner} alt="200x100" width="200" height="100" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
)

export default Sidebar
