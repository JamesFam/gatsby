import React from "react"

import styles from "./mainvisual.module.scss"
import mv from "../../images/1500x500.png"

const MainVisual = () => (
    <section className={styles.mainvisual}>
        <img src={mv} alt="1500x500" width="1500" height="500" />
    </section>
)

export default MainVisual
