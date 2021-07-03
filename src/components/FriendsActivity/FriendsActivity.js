import React from 'react'
import Icon from '../_common/Icon/Icon'

import styles from './FriendsActivity.module.css'

const FriendsActivity = () => {
    return (
        <div className={styles.friendListWrapper}>
            <div className={styles.friendList}>
                <div className={styles.header}>
                    <span>Atividade de amigos</span>
                    <Icon icon="addFriend" />
                </div>
                <div className={styles.activity}>
                    <div className={styles.friend}>
                        <div className={styles.photo}>
                            <img src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t31.18172-8/13317004_1029499327139400_7166677271785583382_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TJasyiBbk08AX_VmA_L&_nc_ht=scontent.fpoa4-1.fna&oh=c2e93cc55a46cdcd4133e02034291ffd&oe=60EAF707" alt="" />
                        </div>
                        <div className={styles.details}>
                            <a className={styles.bg}>Marquins</a>
                            <a className={styles.sm}>Blood Brothers - Iron Maiden</a>
                            <a className={styles.sm}><Icon icon="disc" /> Brave New World</a>
                        </div>
                    </div>
                    <div className={styles.friend}>
                        <div className={styles.photo}>
                            <img src="https://scontent.fpoa4-1.fna.fbcdn.net/v/t31.18172-8/13317004_1029499327139400_7166677271785583382_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TJasyiBbk08AX_VmA_L&_nc_ht=scontent.fpoa4-1.fna&oh=c2e93cc55a46cdcd4133e02034291ffd&oe=60EAF707" alt="" />
                        </div>
                        <div className={styles.details}>
                            <a className={styles.bg}>Marquins</a>
                            <a className={styles.sm}>Blood Brothers - Iron Maiden</a>
                            <a className={styles.sm}><Icon icon="disc" /> Brave New World</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsActivity
