import React from 'react'

import styles from './WideCard.module.css'

const WideCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.picture}>
                <img src="https://upload.wikimedia.org/wikipedia/pt/e/e3/Brave_New_World_-_Iron_Maiden.jpg" alt="" />
            </div>
            <div className={styles.title}>
                Brave New World
            </div>
        </div>
    )
}

export default WideCard
