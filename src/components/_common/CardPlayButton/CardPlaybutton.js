import React from 'react'
import Icon from '../Icon/Icon'

import styles from './CardPlayButton.module.css'

const CardPlaybutton = ({mouseIn}) => {
    return (
        <div className={ `${styles.playButton} ${(mouseIn) && styles.active}` }>
            <Icon icon="playArrow" />
        </div>
    )
}

export default CardPlaybutton
