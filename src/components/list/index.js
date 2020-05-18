import React from "react"
import PropTypes from "prop-types"

import styles from "./list.module.scss"

const List = ({ listData }) => {
    return (
        <ul className={styles.list}>
            {
                listData.map((val) => {
                    return (
                        <li className={styles.list__item}>
                            {val.image &&
                                <div className={styles.list__image}>
                                    <img src={val.image} />
                                </div>
                            }
                            <div className={styles.list__info}>
                                <h3>{val.title}</h3>
                                <p>{val.text}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

List.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.shape(
        {
            image: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
        }
    )),
}

List.defaultProps = {
    listData: [],
}

export default List