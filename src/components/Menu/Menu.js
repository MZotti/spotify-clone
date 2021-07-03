import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../_common/Icon/Icon'

import styles from './Menu.module.css'

const Menu = () => {
    return (
        <nav>
            <div className={styles.sideMenu}>
                <div className={styles.logoBox}>
                    <a href="" className={styles.logo}>
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" title=""/>
                    </a>
                </div>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <NavLink exact to="/" activeClassName={styles.active}><Icon icon="home" className={styles.itemIcon}/> Início</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/buscar" activeClassName={styles.active}><Icon icon="search" className={styles.itemIcon}/> Buscar</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/biblioteca" activeClassName={styles.active}><Icon icon="library" className={styles.itemIcon}/> Sua Biblioteca</NavLink>
                    </li>
                </ul>
                <div className={styles.playlists}>
                    <ul className={styles.items}>
                        <li className={styles.item}>
                            <a href=""><Icon icon="addPlaylist" className={styles.itemIcon}/> Criar Playslist</a>
                        </li>
                        <li className={styles.item}>
                            <a href=""><Icon icon="heartFill" className={styles.itemIcon}/> Música curtidas</a>
                        </li>
                        <li className={styles.item}>
                            <a href=""><Icon icon="episodes" className={styles.itemIcon}/>Seus episódios</a>
                        </li>
                    </ul>
                    <div className={styles.split}></div>
                    <ul className={styles.items + ' ' + styles.userPlaylists}>
                        <li className={styles.item}>
                            <a href="">Playlist 1</a>
                        </li>
                        <li className={styles.item}>
                            <a href="">Playlist 2</a>
                        </li>
                        <li className={styles.item}>
                            <a href="">Playlist 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
