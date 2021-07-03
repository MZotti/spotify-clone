import React from 'react'
import Icon from '../../components/_common/Icon/Icon'

import styles from './Artist.module.css'

const Artist = () => {

    return (
        <>
        <section className={styles.banner}>
            <div className={styles.details}>
                <span className={styles.verified}>Artista Verificado</span>
                <h1 className={styles.title}>Iron Maiden</h1>
                <span className={styles.monthlyUsers}>1.000.000 ouvintes mensais</span>
            </div>
        </section>
        <section className={styles.container}>
            <div className={styles.topCommands}>
                <div className={styles.playButton}>
                    <Icon icon="playArrow" />
                </div>
                <span className={styles.followButton}>
                    Seguir
                </span>
                <div className={styles.menuButton}>
                    <Icon icon="menuDots" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Artist
