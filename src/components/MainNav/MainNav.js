import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../_common/Icon/Icon'

import styles from './MainNav.module.css'

const MainNav = () => {
    return (
        <div className={styles.mainNavWrapper}>
            <div className={styles.mainNav}>
                <div className={styles.commands}>
                    <div className={styles.pageControl}>
                        <button className={styles.arrowBox}>
                            <Icon icon="arrowLeft" />
                        </button>
                        <button className={styles.arrowBox}>
                            <Icon icon="arrowRight" />
                        </button>
                    </div>
                    <div className={styles.items}>
                        <ul>
                            <li>
                                <NavLink to="/biblioteca/playlists" activeClassName={styles.active}>Playlists</NavLink>
                            </li>
                            <li>
                                <NavLink to="/biblioteca/podcasts" activeClassName={styles.active}>Podcasts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/biblioteca/artistas" activeClassName={styles.active}>Artistas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/biblioteca/albuns" activeClassName={styles.active}>Álbuns</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.profileBoxWrapper}>
                    <div className={styles.profileBox}>
                        <div className={styles.profilePicture}>
                            <img src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t31.18172-8/13317004_1029499327139400_7166677271785583382_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TJasyiBbk08AX_VmA_L&_nc_ht=scontent.fpoa4-1.fna&oh=c2e93cc55a46cdcd4133e02034291ffd&oe=60EAF707" alt="" />
                        </div>
                        <span>Marquins</span>
                        <button className={styles.dropDown}>
                            <Icon icon="dropDownArrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav
