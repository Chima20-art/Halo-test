import React, { useState } from 'react'
import styles from './footer.module.css'

export default function Footer() {
    const [openAnswer, setOpenAnswer] = useState(true)

    return (
        <div className={styles.footerContainer}>
            <div className={styles.containerDiv}>
                <p className={styles.bigTitle}> Contacts</p>
                <p className={styles.description}>2019 Rootz Foundation.</p>
                <p className={styles.description}> All rights reserved</p>
            </div>
            <div className={styles.containerDiv}>
                <p className={styles.smallTitle}> Headerquarters</p>
                <p className={styles.description}>1234 Taliban </p>
                <p className={styles.description}> Los Angeles,La 1234567</p>
                <p className={styles.description}>(123) 456-7890</p>
            </div>
            <div className={styles.containerDiv}>
                <p className={styles.smallTitle}> social media</p>
                <div className={styles.imagesContainer}>
                    <img src="/Facebook.png" className={styles.image} />
                    <img src="/LinkedIn.png" className={styles.image} />
                    <img src="/Twitter.png" className={styles.image} />
                </div>
            </div>
        </div>
    )
}
