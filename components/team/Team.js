import React from 'react'
import styles from './Team.module.css'

export default function Team() {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamDiv}>
                <div className={styles.titleDiv}>
                    <div className={styles.title}>Our team</div>
                    <div className={styles.subTitle}>
                        {' '}
                        Learn more about how you can save our planet's nature.{' '}
                    </div>
                </div>
                <div className={styles.imageDiv}>
                    <div className={styles.img1}>
                        <img src="/img1.png" alt="djknv" />
                    </div>
                    <div className={styles.img2}>
                        <img src="/img2.png" alt="djknv" />
                    </div>
                    <div className={styles.img3}>
                        <img src="/img3.png" alt="djknv" />
                    </div>
                </div>
            </div>
        </div>
    )
}
