import React from 'react'

import BigCard from '../_common/BigCard/BigCard'
import Card from '../_common/Card/Card'

const Podcasts = () => {
    return (
        <section className="cards-list">
            <div className="header">
                <h1>Podcasts</h1>
            </div> 
            <div className="cards-wrapper">
                <BigCard />
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

export default Podcasts
