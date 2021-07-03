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
            <div className={styles.topCard} >
                <div className={styles.popularTracks}>
                    <span className={styles.boxTitle}>Populares</span>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.likedTracks}>
                        <span className={styles.boxTitle}>Músicas Curtidas</span>
                        <div className={styles.artistBox}>
                            <div className={styles.picture}>
                                <img src="https://i.scdn.co/image/6dc0be659ea462b84b9b6485bc20db8dffaa48e2" alt="Iron Maiden"/>
                            </div>
                            <div className={styles.countDetails}>
                                <span className={styles.likeCount}>Você curtiu 50 músicas</span>
                                <span className={styles.artistName}>De Iron Maiden</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.artistChoice}>
                        <span className={styles.boxTitle}>Escolhas do artista</span>
                        <div className={styles.artistBox}>
                            <div className={styles.picture}>
                                <img src="https://i.scdn.co/image/6dc0be659ea462b84b9b6485bc20db8dffaa48e2" alt="Iron Maiden"/>
                            </div>
                            <div className={styles.countDetails}>
                                <span className={styles.likeCount}>Você curtiu 50 músicas</span>
                                <span className={styles.artistName}>De Iron Maiden</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Artist
