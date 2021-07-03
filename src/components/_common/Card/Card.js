import React from 'react'
import { useHistory } from "react-router-dom";
import CardPlaybutton from '../CardPlayButton/CardPlaybutton'

import styles from './Card.module.css'

const Card = ({id, type, slug, title, detail, picture}) => {
    const history = useHistory();
    const [mouseIn, setMouseIn] = React.useState(false);

    function classType(type) {
        switch(type){
            case 1:
                return styles.artist;
            case 2:
                return styles.disc;
            case 3:
                return styles.podcast;
            default:
                return styles.artist;
        }
    }

    function navigateTo(slug) {
        let route = "";
        switch(type){
            case 1:
                route = "../artista/";
                break;
            case 2:
                route = "../album/";
                break;
            case 3:
                route = "../podcast/";
                break;
            default:
                route = "../artista/";
                break;
        }
        history.push(route + slug);
    }

    return (
        <div className={styles.card} onClick={() => navigateTo(slug) } onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>
            <div className={styles.picture + ' ' + classType(type)}>
                <CardPlaybutton mouseIn={mouseIn}/>
                <img src={picture} alt={title} />
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.author}>
                {detail}
            </div>
        </div>
    )
}

export default Card
