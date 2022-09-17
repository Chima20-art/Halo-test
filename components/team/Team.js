import React from 'react'
import styles from './Team.module.css'

export default function Team() {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamDiv}>
                <div className={styles.titleDiv}>
                    <div className={styles.title}>Our Top Team</div>
                    <div className={styles.subTitle}>
                        Learn more about how you can save our planet's nature.{' '}
                    </div>
                </div>
                <div className={styles.imageDiv}>
                    <div className={styles.line1}>
                        <img
                            className={styles.lineOne}
                            src="/mobileVector1.png"
                            alt="line"
                        />
                    </div>
                    <div className={styles.line2}>
                        <img
                            className={styles.lineTwo}
                            src="/Vector2.png"
                            alt="line"
                        />
                    </div>
                    <div className={styles.imgOneContainer}>
                        <img
                            className={styles.imgOne}
                            src="/img1.png"
                            alt="djknv"
                        />
                    </div>
                    <div className={styles.img2}>
                        <img
                            className={styles.imgTwo}
                            src="/img2.png"
                            alt="djknv"
                        />
                    </div>
                    <div className={styles.img3}>
                        <img
                            className={styles.imgThree}
                            src="/img3.png"
                            alt="djknv"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
