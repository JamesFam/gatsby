import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../sidebar"
import styles from "./main.module.scss"

const Main = ({ page, children }) => (
    <>
        {page === "default" &&
            <div className={styles.content}>
                <main className={styles.main}>{children}</main>
                <aside className={styles.sidebar}>
                    <Sidebar />
                </aside>
            </div>
        }
        {page === "contact" && <main className={styles.main2}>{children}</main>}
    </>
)

Main.propTypes = {
    page: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Main.defaultProps = {
    page: `default`,
}

export default Main
