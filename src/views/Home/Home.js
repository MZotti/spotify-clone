import React from 'react'
import RecentPlaysWelcome from '../../components/RecentPlaysWelcome/RecentPlaysWelcome'
import MostListenPodcasts from '../../components/MostListenPodcasts/MostListenPodcasts'
import RecentPlays from '../../components/RecentPlays/RecentPlays'

import styles from './Home.module.css'

const Home = () => {
    return (
        <div className="view">
            <RecentPlaysWelcome />
            <MostListenPodcasts />
            <RecentPlays />
            <MostListenPodcasts />
        </div>
    )
}

export default Home
