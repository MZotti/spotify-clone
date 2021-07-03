import React from 'react'

import styles from './BigCard.module.css'

const BigCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.songs}>
                <span className={styles.step}>•</span>
                <span className={styles.artist}>Iron Maiden</span>
                <span className={styles.song}>Blood Brothers</span>
                <span className={styles.step}>•</span>
                <span className={styles.artist}>Iron Maiden</span>
                <span className={styles.song}>Blood Brothers</span>
                <span className={styles.step}>•</span>
                <span className={styles.artist}>Iron Maiden</span>
                <span className={styles.song}>Blood Brothers</span>
                <span className={styles.step}>•</span>
                <span className={styles.artist}>Iron Maiden</span>
                <span className={styles.song}>Blood Brothers</span>
                <span className={styles.step}>•</span>
                <span className={styles.artist}>Iron Maiden</span>
                <span className={styles.song}>Blood Brothers</span>
            </div>
            <div className={styles.details}>
                <span className={styles.title}>Músicas Curtidas</span>
                <span className={styles.likes}>999 músicas curtidas</span>
            </div>
        </div>
    )
}

export default BigCard
