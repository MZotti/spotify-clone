import React from 'react'
import Card from '../_common/Card/Card'

import styles from './RecentPlays.module.css'

const RecentPlays = () => {
    return (
        <section className="cards-list">
            <div className="header">
                <a className="title">Tocado recentemente</a>
                <a className="anchor">Ver tudo</a>
            </div>
            <div className="cards-wrapper">
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
                <Card 
                    id={1}
                    type={3}
                    slug={"nerdcast"}
                    title={"NerdCast"}
                    detail={"Jovem Nerd"}
                    picture={"https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg"}
                />
            </div>
        </section>
    )
}

export default RecentPlays
