import React from 'react'
import WideCard from '../_common/WideCard/WideCard'

import styles from './RecentPlaysWelcome.module.css'

const RecentPlaysWelcome = () => {
    return (
        <section>
            <h1 className={styles.title}>Boa noite</h1>
            <div className={styles.cardsWrapper}>
                <WideCard />
                <WideCard />
                <WideCard />
                <WideCard />   
                <WideCard />
            </div>
        </section>
    )
}

export default RecentPlaysWelcome
