import React from 'react'
import Icon from '../_common/Icon/Icon'
import styles from './Player.module.css'

const Player = () => {
    return (
        <div className={styles.playerBox}>
            <div className={styles.musicDetails}>
                <div className={styles.disc}>
                    <img src="https://upload.wikimedia.org/wikipedia/pt/e/e3/Brave_New_World_-_Iron_Maiden.jpg" alt="" />
                </div>
                <div className={styles.track}>
                    <a className={styles.title}>Blood Brothers</a>
                    <a className={styles.artist}>Iron Maiden</a>
                </div>
                <div>
                    <button className={styles.like + ' ' + styles.active}>
                        <Icon icon="heartFill" />
                    </button>
                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles.commands}>
                <div className={styles.buttons}>
                    <button className={styles.button + ' ' + styles.sm}>
                        <Icon icon="random" />
                    </button>
                    <button className={styles.button + ' ' + styles.sm}>
                        <Icon icon="backward" />
                    </button>
                    <button className={styles.button + ' ' + styles.bg}>
                        <Icon icon="play" />
                        {/* <Icon icon="pause" /> */}
                    </button>
                    <button className={styles.button + ' ' + styles.sm}>
                        <Icon icon="forward" />
                    </button>
                    <button className={styles.button + ' ' + styles.sm}>
                        <Icon icon="loop" />
                    </button>
                </div>
                <div className={styles.progress}>
                    <span className={styles.timeStamp}>0:00</span>
                    <div className={styles.progressBarWrapper}>
                        <div className={styles.progressBar}>

                        </div>
                    </div>
                    <span className={styles.timeStamp}>7:14</span>
                </div>
            </div>
            <div className={styles.options}>
                    <button className={styles.button}>
                        <Icon icon="microphone" />
                    </button>
                    <button className={styles.button}>
                        <Icon icon="queue" />
                    </button>
                    <button className={styles.button}>
                        <Icon icon="computer" />
                    </button>
                    <div className={styles.volume}>
                        <button className={styles.button}>
                            <Icon icon="volume" />
                        </button>
                        <div className={styles.volumeBarWrapper}>
                            <div className={styles.volumeBar}>

                            </div>
                        </div>
                    </div>
                    <button className={styles.button}>
                        <Icon icon="fullscreen" />
                    </button>
            </div>
        </div>
    )
}

export default Player
