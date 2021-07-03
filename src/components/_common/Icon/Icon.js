import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 
    { 
        faHome,
        faSearch,
        faStream,
        faPlus,
        faHeart,
        faRandom,
        faArrowLeft,
        faArrowRight,
        faPlayCircle,
        faPauseCircle,
        faSync,
        faMicrophone,
        faBars,
        faDesktop,
        faVolumeUp,
        faExpandAlt,
        faUserPlus,
        faChevronLeft,
        faChevronRight,
        faSortDown,
        faPlay,
        faEllipsisH
    } from '@fortawesome/free-solid-svg-icons'
import 
    { 
        faDotCircle,
        faHeart as faHeartOutline,
        faListAlt,
    } from '@fortawesome/free-regular-svg-icons'

import styles from './Icon.module.css'

const Icon = ({icon}) => {

    const icons = {
        home: faHome,
        search: faSearch,
        library: faStream,
        addPlaylist: faPlus,
        heartFill: faHeart,
        heartOutline: faHeartOutline,
        episodes: faListAlt,
        random: faRandom,
        backward: faArrowLeft,
        forward: faArrowRight,
        play: faPlayCircle,
        playArrow: faPlay,
        pause: faPauseCircle,
        loop: faSync,
        microphone: faMicrophone,
        queue: faBars,
        computer: faDesktop,
        volume: faVolumeUp,
        fullscreen: faExpandAlt,
        addFriend: faUserPlus,
        disc: faDotCircle,
        arrowLeft: faChevronLeft,
        arrowRight: faChevronRight,
        dropDownArrow: faSortDown,
        menuDots: faEllipsisH,
    };

    return (
        <div className={styles.icon}>
            <FontAwesomeIcon icon={icons[icon]} />
        </div>
    )
}

export default Icon
